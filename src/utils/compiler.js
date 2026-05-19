const WANDBOX_URL = 'https://wandbox.org/api/compile.json'

function parseDiagnosticLine(line, sourceLines) {
  const detailed = line.match(/^(.*?):(\d+):(\d+):\s*(fatal error|error|warning|note):\s*(.*)$/i)
  const simple = line.match(/^(.*?):(\d+):\s*(fatal error|error|warning|note):\s*(.*)$/i)

  const match = detailed || simple
  if (!match) return null

  const hasColumn = Boolean(detailed)
  const lineNumber = Number(match[2])
  const columnNumber = hasColumn ? Number(match[3]) : null
  const severity = hasColumn ? match[4] : match[3]
  const message = hasColumn ? match[5] : match[4]

  return {
    raw: line,
    file: match[1],
    line: lineNumber,
    column: columnNumber,
    severity,
    message,
    sourceLine: sourceLines[lineNumber - 1] ?? '',
  }
}

export function parseCompilerDiagnostics(compilerError, source = '') {
  if (!compilerError) return []

  const sourceLines = source ? source.split('\n') : []
  return String(compilerError)
    .split('\n')
    .map((line) => line.trimEnd())
    .filter(Boolean)
    .map((line) => parseDiagnosticLine(line, sourceLines))
    .filter(Boolean)
}

// status values from Wandbox: numeric exit code as string, or "signal N" for crashes.
function parseStatus(rawStatus) {
  if (rawStatus === undefined || rawStatus === null) {
    return { exitCode: -1, signal: null }
  }
  const s = String(rawStatus).trim()
  const sigMatch = s.match(/signal\s+(\d+)/i)
  if (sigMatch) {
    return { exitCode: -1, signal: Number(sigMatch[1]) }
  }
  const n = parseInt(s, 10)
  return { exitCode: Number.isNaN(n) ? -1 : n, signal: null }
}

export async function compileAndRun(code, args = [], options = {}) {
  const {
    stdin = '',
    compilerOptions = '',
    compilerOptionRaw = '',
    compiler = 'gcc-head',
  } = options

  const res = await fetch(WANDBOX_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      code,
      compiler,
      options: compilerOptions,
      stdin,
      'runtime-option-raw': args.map(String).join('\n'),
      'compiler-option-raw': compilerOptionRaw,
      save: false,
    }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Wandbox API error ${res.status}${text ? ': ' + text : ''}`)
  }

  const data = await res.json()

  const compileError =
    data.compiler_error && data.compiler_error.trim()
      ? data.compiler_error
      : null

  const { exitCode, signal } = parseStatus(data.status)

  return {
    compileError,
    compileDiagnostics: parseCompilerDiagnostics(compileError, code),
    compileMessage: data.compiler_message ?? '',
    stdout: data.program_output ?? '',
    stderr: data.program_error ?? '',
    exitCode,
    signal,
  }
}

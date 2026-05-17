const WANDBOX_URL = 'https://wandbox.org/api/compile.json'

export async function compileAndRun(code, args = []) {
  const res = await fetch(WANDBOX_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      code,
      compiler: 'gcc-head',
      options: '',
      stdin: '',
      'runtime-option-raw': args.map(String).join('\n'),
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

  return {
    compileError,
    stdout: data.program_output ?? '',
    stderr: data.program_error ?? '',
    exitCode: data.status !== undefined ? parseInt(data.status, 10) : -1,
  }
}

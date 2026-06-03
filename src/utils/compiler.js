import { simulators } from './simulators/index.js'

const WANDBOX_URL = 'https://wandbox.org/api/compile.json'

export async function compileAndRun(code, args = [], exerciseId = null) {
  // --- CAPA 1: Compilador Local ---
  try {
    const localRes = await fetch('/api/compile-local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, args }),
    })

    if (localRes.ok) {
      const data = await localRes.json()
      if (!data.compilerUnavailable) {
        return {
          compileError: data.compileError,
          stdout: data.stdout ?? '',
          stderr: data.stderr ?? '',
          exitCode: data.exitCode ?? 0,
          mode: 'local',
        }
      }
      console.warn('Compilador gcc local no disponible. Reintentando con Wandbox...')
    }
  } catch (err) {
    console.warn('Error al conectar con compilador local, intentando con Wandbox:', err.message)
  }

  // --- CAPA 2: Compilador Remoto (Wandbox) ---
  try {
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

    if (res.ok) {
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
        mode: 'wandbox',
      }
    }
  } catch (err) {
    console.warn('Error al conectar con Wandbox:', err.message)
  }

  // --- CAPA 3: Simulador Mock en JavaScript (Fallback final offline) ---
  if (exerciseId && simulators[exerciseId]) {
    try {
      const stdout = simulators[exerciseId](args)
      return {
        compileError: null,
        stdout,
        stderr: '',
        exitCode: 0,
        mode: 'mock',
        isMock: true,
      }
    } catch (simErr) {
      return {
        compileError: `Error en simulador offline: ${simErr.message}`,
        stdout: '',
        stderr: '',
        exitCode: -1,
        mode: 'mock',
        isMock: true,
      }
    }
  }

  throw new Error('No se pudo compilar el código. Compilador local no disponible, Wandbox fuera de línea y sin simulador JS para este ejercicio.')
}


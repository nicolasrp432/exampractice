import { useCallback, useState } from 'react'
import { compileAndRun } from '@/utils/compiler'
import { instrument } from '@/utils/tracer/instrumenter'
import { parseTraceStream, stripTraceFromStderr, attachOutputToLastStep } from '@/utils/tracer/traceParser'

// Hook returning a function that takes `(fullSource, args, stdin)` and
// returns `{ steps, stdout, stderr, exitCode, signal, compileError }`.
// It instruments the source, sends it to Wandbox, parses the stderr
// stream into trace steps and exposes them to the caller.
export function useLiveTrace() {
  const [status, setStatus] = useState('idle') // idle | running | done | error
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  const reset = useCallback(() => {
    setStatus('idle')
    setError(null)
    setResult(null)
  }, [])

  const run = useCallback(async (fullSource, args = [], stdin = '') => {
    setStatus('running')
    setError(null)
    setResult(null)

    let instrumentedCode
    let originalSource = fullSource
    try {
      const { instrumented } = instrument(fullSource)
      instrumentedCode = instrumented
    } catch (err) {
      setStatus('error')
      setError('No se pudo instrumentar el código: ' + err.message)
      return null
    }

    let runResult
    try {
      runResult = await compileAndRun(instrumentedCode, args, { stdin })
    } catch (err) {
      setStatus('error')
      setError('Error de red con el compilador: ' + err.message)
      return null
    }

    if (runResult.compileError) {
      setStatus('error')
      setError(
        'El código instrumentado no compila. Suele significar que el parser no ' +
        'entendió alguna construcción (macro, sintaxis poco común). Revisa el ' +
        'panel "Ejecutar" para ver el error exacto.'
      )
      const payload = {
        steps: [],
        stdout: runResult.stdout,
        stderr: stripTraceFromStderr(runResult.stderr),
        exitCode: runResult.exitCode,
        signal: runResult.signal,
        compileError: runResult.compileError,
        instrumentedSource: instrumentedCode,
      }
      setResult(payload)
      return payload
    }

    const { steps } = parseTraceStream(runResult.stderr, originalSource)
    const finalSteps = attachOutputToLastStep(steps, runResult.stdout)
    const cleanStderr = stripTraceFromStderr(runResult.stderr)

    const payload = {
      steps: finalSteps,
      stdout: runResult.stdout,
      stderr: cleanStderr,
      exitCode: runResult.exitCode,
      signal: runResult.signal,
      compileError: null,
      instrumentedSource: instrumentedCode,
    }
    setResult(payload)
    setStatus(finalSteps.length ? 'done' : 'error')
    if (!finalSteps.length) {
      setError(
        'El programa se ejecutó pero no emitió pasos de traza. ' +
        'Puede que tu código no use ninguna función instrumentable, o que el ' +
        'parser haya saltado tu función por una construcción que no reconoce.'
      )
    }
    return payload
  }, [])

  return { run, reset, status, error, result }
}

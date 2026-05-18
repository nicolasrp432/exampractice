import { useCallback, useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Cpu, RotateCcw } from 'lucide-react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { normalizeGdbTrace, formatMemoryAddress } from '@/utils/gdbTrace'

function CodeExcerpt({ code = '', lineNumber = null }) {
  const lines = useMemo(() => {
    return String(code)
      .split('\n')
      .map((line) => {
        const match = line.match(/^\s*(\d+)\t(.*)$/)
        if (match) {
          return { number: Number(match[1]), text: match[2] }
        }
        return { number: null, text: line }
      })
  }, [code])

  if (!code) {
    return <p className="text-sm text-zinc-400">No hay código asociado a este paso.</p>
  }

  return (
    <div className="space-y-0.5 font-mono text-[11px] leading-5">
      {lines.map((line, index) => {
        const active = line.number !== null && line.number === lineNumber
        return (
          <div
            key={`${line.number ?? 'raw'}-${index}`}
            className={clsx(
              'grid grid-cols-[3.5rem_1fr] gap-2 rounded px-2',
              active ? 'bg-purple-50 text-purple-900' : 'text-zinc-500'
            )}
          >
            <span className="text-right select-none">{line.number ?? ''}</span>
            <span className="whitespace-pre-wrap break-words">{line.text || ' '}</span>
          </div>
        )
      })}
    </div>
  )
}

function ValueBadge({ value }) {
  return (
    <span className="inline-flex items-center rounded bg-white px-1.5 py-0.5 font-mono text-[11px] text-zinc-700">
      {value}
    </span>
  )
}

function Section({ title, children }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
      <div className="border-b border-zinc-100 bg-zinc-50 px-3 py-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{title}</p>
      </div>
      <div className="p-3">{children}</div>
    </div>
  )
}

function VariableList({ variables = [] }) {
  if (!variables.length) {
    return <p className="text-sm text-zinc-400">Sin variables locales en este paso.</p>
  }

  return (
    <div className="space-y-2">
      {variables.map((variable) => (
        <div
          key={variable.name}
          className={clsx(
            'rounded-lg border px-3 py-2 text-sm',
            variable.changed ? 'border-green-200 bg-green-50' : 'border-zinc-200 bg-zinc-50'
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-mono font-semibold text-zinc-800">{variable.name}</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wide text-zinc-400">{variable.type}</p>
            </div>
            <ValueBadge value={variable.value || '—'} />
          </div>
          {variable.note && <p className="mt-2 text-xs text-zinc-600">{variable.note}</p>}
          {variable.address && (
            <p className="mt-1 text-[11px] font-mono text-zinc-500">
              dirección: {variable.address}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

function FrameList({ frames = [] }) {
  if (!frames.length) {
    return <p className="text-sm text-zinc-400">Sin stack frames en este paso.</p>
  }

  return (
    <div className="space-y-2">
      {frames.map((frame, index) => (
        <div key={`${frame.functionName}-${index}`} className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
          <p className="text-sm font-semibold text-zinc-800">{frame.functionName}</p>
          {frame.location && <p className="mt-1 text-xs font-mono text-zinc-500">{frame.location}</p>}
        </div>
      ))}
    </div>
  )
}

function MemoryPanel({ memory = [], note = '' }) {
  return (
    <div className="space-y-3">
      {note && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
            <Cpu size={13} />
            Nota de memoria
          </div>
          <p className="mt-1 text-sm leading-relaxed text-blue-900 whitespace-pre-wrap">{note}</p>
        </div>
      )}

      {memory.length > 0 ? (
        <div className="space-y-2">
          {memory.map((entry, index) => (
            <div key={`${entry.address ?? index}-${entry.label}`} className="rounded-lg border border-zinc-200 bg-white px-3 py-2">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-sm font-semibold text-zinc-800">{entry.label}</p>
                <ValueBadge value={formatMemoryAddress(entry.address)} />
              </div>
              <p className="mt-1 text-xs text-zinc-500">
                {entry.kind || 'memoria'} · {entry.value || '—'}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-400">No hay referencias de memoria en este paso.</p>
      )}
    </div>
  )
}

export default function GdbStepper({ steps = [], title = 'Traza de ejecución' }) {
  const trace = useMemo(() => normalizeGdbTrace(steps), [steps])
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  useEffect(() => {
    setCurrentStepIndex((index) => Math.min(index, Math.max(trace.length - 1, 0)))
  }, [trace.length])

  const currentStep = trace[currentStepIndex] ?? null

  const handleNext = useCallback(() => {
    setCurrentStepIndex((index) => Math.min(trace.length - 1, index + 1))
  }, [trace.length])

  const handlePrev = useCallback(() => {
    setCurrentStepIndex((index) => Math.max(0, index - 1))
  }, [])

  const handleReset = useCallback(() => {
    setCurrentStepIndex(0)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') handleNext()
      if (event.key === 'ArrowLeft') handlePrev()
      if (event.key === 'Home') handleReset()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrev, handleReset])

  if (!trace.length) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center text-zinc-500">
        No hay pasos de GDB definidos para este ejercicio.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white min-h-[420px] overflow-hidden">
      <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="rounded-md border border-zinc-200 bg-white p-1.5 text-zinc-600 transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentStepIndex === trace.length - 1}
              className="rounded-md border border-zinc-200 bg-white p-1.5 text-zinc-600 transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-50"
            >
              <RotateCcw size={14} />
              Inicio
            </button>
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-zinc-800">{title}</p>
            <p className="text-xs text-zinc-500">
              Paso {currentStepIndex + 1} de {trace.length}
            </p>
          </div>
        </div>

        <div className="mt-3 flex gap-1 overflow-x-auto pb-1">
          {trace.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setCurrentStepIndex(index)}
              className={clsx(
                'shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors',
                index === currentStepIndex
                  ? 'bg-zinc-900 text-white'
                  : 'bg-white text-zinc-500 hover:bg-zinc-100'
              )}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="grid flex-1 gap-4 p-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <Section title={currentStep?.title || 'Paso actual'}>
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-semibold text-zinc-600">
                {currentStep?.functionName || 'main'}
              </span>
              {currentStep?.file && currentStep?.lineNumber && (
                <span className="font-mono">
                  {currentStep.file}:{currentStep.lineNumber}
                </span>
              )}
            </div>
            <div className="mt-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3">
              <CodeExcerpt code={currentStep?.code} lineNumber={currentStep?.lineNumber} />
            </div>
          </Section>

          {currentStep?.output && (
            <Section title="Salida parcial">
              <pre className="whitespace-pre-wrap rounded-lg border border-zinc-200 bg-zinc-50 p-3 font-mono text-sm text-zinc-700">
                {currentStep.output}
              </pre>
            </Section>
          )}
        </div>

        <div className="space-y-4">
          <Section title="Stack frames">
            <FrameList frames={currentStep?.frames} />
          </Section>
          <Section title="Variables locales">
            <VariableList variables={currentStep?.variables} />
          </Section>
          <Section title="Memoria">
            <MemoryPanel memory={currentStep?.memory} note={currentStep?.note} />
          </Section>
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          key={currentStepIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="border-t border-zinc-100 px-4 py-3 text-xs text-zinc-500"
        >
          {currentStep?.lineNumber ? `Línea activa: ${currentStep.lineNumber}` : 'Sin línea activa detectada.'}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Play, Trash2, ChevronDown, ChevronUp, Eye, Timer, CheckCircle2, XCircle, Circle, Trophy, RotateCcw, Save, X, Microscope, Terminal, Plus, AlertTriangle, Loader2 } from 'lucide-react'
import clsx from 'clsx'
import { getExercise } from '@/data/index'
import { compileAndRun } from '@/utils/compiler'
import { buildFullCode, testHarnesses } from '@/utils/testHarnesses'
import { getDiff } from '@/utils/simulators/index'
import { useProgressStore } from '@/store/progressStore'
import { useSettingsStore } from '@/store/settingsStore'
import { useUserVariants } from '@/hooks/useUserVariants'
import { useLiveTrace } from '@/hooks/useLiveTrace'
import LevelBadge from '@/components/layout/LevelBadge'
import GdbStepper from '@/components/gdb/GdbStepper'
import RunPanel from '@/components/practice/RunPanel'
import PracticeDiagnostics from '@/components/practice/PracticeDiagnostics'

// ─── Default placeholder code ────────────────────────────────────────────────
function getPlaceholder(exercise) {
  if (!exercise) return '// Tu código aquí\n'
  const fns = exercise.funcionesPermitidas?.join(', ') || 'write'
  if (exercise.tipoEntrega === 'programa') {
    return `#include <unistd.h>\n\n/*\n** ${exercise.nombre}\n** Funciones permitidas: ${fns}\n*/\n\nint main(int ac, char **av)\n{\n\t// Tu código aquí\n\t(void)ac;\n\t(void)av;\n\treturn (0);\n}\n`
  }
  return `#include <unistd.h>\n\n/*\n** ${exercise.nombre}\n** Funciones permitidas: ${fns}\n*/\n\n// Escribe tu función aquí\n// (El main de test se añade automáticamente al compilar)\n\n`
}

function countLines(text) {
  if (!text) return 0
  return text.split('\n').length
}

function getDiagnosticScope(exercise, code, lineNumber) {
  if (!exercise || !Number.isInteger(lineNumber)) return 'código generado'
  if (exercise.tipoEntrega !== 'funcion') return 'tu código'

  const harness = testHarnesses[exercise.id]
  if (!harness) return 'tu código'

  const headerLines = countLines(harness.header)
  const userLines = countLines(code)
  const userStart = headerLines + 1
  const userEnd = headerLines + userLines
  const mainStart = userEnd + 1

  if (lineNumber >= userStart && lineNumber <= userEnd) return 'tu código'
  if (lineNumber >= mainStart) return 'el harness de prueba'
  return 'el prefijo del harness'
}

function buildCodeExcerpt(source, lineNumber, radius = 2) {
  if (!source || !Number.isInteger(lineNumber) || lineNumber < 1) return []
  const lines = source.split('\n')
  const start = Math.max(1, lineNumber - radius)
  const end = Math.min(lines.length, lineNumber + radius)

  return Array.from({ length: end - start + 1 }, (_, index) => {
    const currentLine = start + index
    return {
      number: currentLine,
      text: lines[currentLine - 1] ?? '',
      active: currentLine === lineNumber,
    }
  })
}

// ─── Diff renderer ────────────────────────────────────────────────────────────
function DiffView({ got, expected }) {
  if (!got && !expected) return null
  const renderStr = (s) => {
    if (s === undefined || s === null) return <span className="text-zinc-400 italic">EOF</span>
    return s.split('').map((c, i) => {
      if (c === '\n') return <span key={i} className="text-blue-400">↵</span>
      if (c === ' ')  return <span key={i} className="bg-red-100 text-red-400">·</span>
      return <span key={i}>{c}</span>
    })
  }
  return (
    <div className="mt-2 rounded-lg overflow-hidden border border-red-200 text-xs font-mono">
      <div className="bg-red-50 px-3 py-1.5 flex gap-6">
        <div><span className="text-red-500 font-semibold">Esperado: </span>{renderStr(expected)}</div>
      </div>
      <div className="bg-orange-50 px-3 py-1.5 flex gap-6">
        <div><span className="text-orange-500 font-semibold">Obtenido: </span>{renderStr(got)}</div>
      </div>
    </div>
  )
}

// ─── Single test row ──────────────────────────────────────────────────────────
function TestRow({ test, index }) {
  const [open, setOpen] = useState(false)
  const isPending = test.status === 'pending'
  const isPassed  = test.status === 'passed'
  const isFailed  = test.status === 'failed'

  return (
    <motion.div
      layout
      className={clsx(
        'rounded-xl border transition-colors duration-300',
        isPassed ? 'border-green-200 bg-green-50'  :
        isFailed ? 'border-red-200  bg-red-50'    :
                   'border-zinc-200 bg-zinc-50'
      )}
    >
      <button
        onClick={() => !isPending && setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left"
      >
        <motion.span
          key={test.status}
          initial={{ scale: 0.5, opacity: 0, x: 0 }}
          animate={
            isFailed ? { scale: 1, opacity: 1, x: [0, -5, 5, -5, 5, 0] }
            : isPassed ? { scale: [0.5, 1.25, 1], opacity: 1, x: 0 }
            : { scale: 1, opacity: 1, x: 0 }
          }
          transition={
            isFailed  ? { opacity: { duration: 0.1 }, scale: { duration: 0.1 }, x: { duration: 0.4, ease: 'easeInOut' } }
            : isPassed ? { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }
            : { type: 'spring', stiffness: 400, damping: 20 }
          }
        >
          {isPassed ? <CheckCircle2 size={18} className="text-green-500" /> :
           isFailed ? <XCircle     size={18} className="text-red-500"   /> :
                      <Circle      size={18} className="text-zinc-400"  />}
        </motion.span>
        <span className="flex-1 text-sm font-medium text-zinc-700">
          <span className="text-zinc-400 mr-2">#{index + 1}</span>
          {test.descripcion}
        </span>
        {!isPending && isFailed && (
          open ? <ChevronUp size={14} className="text-zinc-400" /> : <ChevronDown size={14} className="text-zinc-400" />
        )}
      </button>

      <AnimatePresence>
        {open && isFailed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-4 pb-3"
          >
            <div className="text-xs text-zinc-500 mb-1">
              Input: <code className="font-mono bg-white px-1 rounded">{test.entrada?.length ? test.entrada.join(' ') : '(sin args)'}</code>
            </div>
            {test.diff && (
              <div className="text-[11px] font-mono text-orange-700 mb-2">
                Primer byte distinto en la posición {test.diff.position}: {test.diff.expected} vs {test.diff.got}
              </div>
            )}
            <DiffView got={test.output} expected={test.salida} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Compile Error Banner ─────────────────────────────────────────────────────
function CompileErrorBanner({ error, diagnostics = [], source = '', userCode = '', exercise, onDismiss }) {
  if (!error) return null
  const primary = diagnostics[0]
  const excerpt = buildCodeExcerpt(source, primary?.line)
  const scope = getDiagnosticScope(exercise, userCode, primary?.line)

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="shrink-0 bg-red-50 border-t border-red-200 overflow-hidden"
    >
      <div className="px-4 py-2 max-h-40 overflow-auto">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs font-bold text-red-600">❌ Error de compilación (gcc)</p>
          <button onClick={onDismiss} className="text-red-400 hover:text-red-600 p-0.5">
            <X size={12} />
          </button>
        </div>
        <pre className="text-xs font-mono text-red-700 whitespace-pre-wrap leading-relaxed">{error}</pre>
        {primary && (
          <div className="mt-2 rounded-lg border border-red-200 bg-white p-2">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-zinc-600 mb-2">
              <span className="font-semibold text-red-600">
                Línea {primary.line}{primary.column ? `, columna ${primary.column}` : ''}
              </span>
              <span>·</span>
              <span>{scope}</span>
            </div>
            <div className="space-y-0.5 font-mono text-[11px] leading-5">
              {excerpt.map((line) => (
                <div
                  key={line.number}
                  className={clsx(
                    'grid grid-cols-[3.5rem_1fr] gap-2 rounded px-2',
                    line.active ? 'bg-red-50 text-red-900' : 'text-zinc-500'
                  )}
                >
                  <span className="text-right select-none">{line.number}</span>
                  <span className="whitespace-pre-wrap break-words">{line.text || ' '}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-red-700 font-mono">
              {primary.message}
            </p>
          </div>
        )}
        {diagnostics.length > 1 && (
          <details className="mt-2 text-[11px] text-zinc-500">
            <summary className="cursor-pointer select-none">Ver más detalles</summary>
            <ul className="mt-2 space-y-1 font-mono">
              {diagnostics.slice(1).map((diag, index) => (
                <li key={`${diag.raw}-${index}`}>{diag.raw}</li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </motion.div>
  )
}

// ─── Save Variant Modal ───────────────────────────────────────────────────────
function SaveVariantModal({ code, onSave, onClose }) {
  const [nombre, setNombre] = useState('')
  const [desc, setDesc]     = useState('')
  const nameRef = useRef(null)

  useEffect(() => { nameRef.current?.focus() }, [])

  const handleSave = () => {
    if (!nombre.trim()) return
    onSave(nombre.trim(), desc.trim(), code)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-2xl border border-zinc-200 w-full max-w-md mx-4 p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-zinc-800">💾 Guardar como variante</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-600 mb-1.5">
              Nombre <span className="text-red-400">*</span>
            </label>
            <input
              ref={nameRef}
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSave()}
              placeholder="Ej: Mi versión con punteros"
              className="w-full px-3 py-2 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-600 mb-1.5">
              Descripción <span className="text-zinc-400">(opcional)</span>
            </label>
            <textarea
              value={desc}
              onChange={e => setDesc(e.target.value)}
              placeholder="Notas sobre esta variante..."
              rows={2}
              className="w-full px-3 py-2 rounded-lg border border-zinc-300 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-5">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg border border-zinc-200 text-sm text-zinc-600 hover:bg-zinc-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={!nombre.trim()}
            className={clsx(
              'flex-1 py-2 rounded-lg text-sm font-semibold transition-colors',
              nombre.trim()
                ? 'bg-zinc-900 text-white hover:bg-zinc-700'
                : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
            )}
          >
            Guardar variante
          </button>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Hint System ─────────────────────────────────────────────────────────────
function HintSystem({ exercise, intentos }) {
  const [openLevel, setOpenLevel] = useState(null)
  const toggle = (n) => setOpenLevel(o => o === n ? null : n)

  const hints = [
    {
      level: 1,
      label: '💡 Pista 1 — La historia del personaje',
      content: exercise?.palacio?.historia || 'No hay historia disponible aún.',
      color: 'purple',
    },
    {
      level: 2,
      label: '🔑 Pista 2 — Las anclas clave',
      content: exercise?.palacio?.anclas || [],
      color: 'blue',
      isAnchors: true,
    },
    {
      level: 3,
      label: '🧩 Pista 3 — Código parcial',
      content: exercise?.versiones?.[0]?.codigo
        ? exercise.versiones[0].codigo.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g, (m) => {
            return Math.random() > 0.5 ? m : '___'
          })
        : '// Código parcial no disponible aún',
      color: 'orange',
      isCode: true,
    },
  ]

  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Pistas</h3>
      {hints.map(hint => (
        <div key={hint.level} className={clsx(
          'rounded-xl border overflow-hidden',
          hint.color === 'purple' ? 'border-purple-200' :
          hint.color === 'blue'   ? 'border-blue-200' :
                                    'border-orange-200'
        )}>
          <button
            onClick={() => toggle(hint.level)}
            className={clsx(
              'w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium',
              hint.color === 'purple' ? 'bg-purple-50 text-purple-700 hover:bg-purple-100' :
              hint.color === 'blue'   ? 'bg-blue-50   text-blue-700   hover:bg-blue-100'   :
                                        'bg-orange-50  text-orange-700  hover:bg-orange-100'
            )}
          >
            {hint.label}
            {openLevel === hint.level ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          <AnimatePresence>
            {openLevel === hint.level && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 py-3 bg-white text-sm text-zinc-700 leading-relaxed">
                  {hint.isAnchors && Array.isArray(hint.content) ? (
                    <div className="flex flex-wrap gap-2">
                      {hint.content.map((a, i) => (
                        <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded-lg font-mono text-xs">{a}</span>
                      ))}
                    </div>
                  ) : hint.isCode ? (
                    <pre className="font-mono text-xs overflow-x-auto bg-zinc-50 rounded-lg p-3 border border-zinc-200">{hint.content}</pre>
                  ) : (
                    <p>{hint.content}</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

// ─── Solution Reveal ──────────────────────────────────────────────────────────
function SolutionReveal({ exercise, onUse }) {
  const [revealed, setRevealed] = useState(false)
  const version = exercise?.versiones?.[0]

  return (
    <div className="rounded-xl border border-zinc-200 overflow-hidden">
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-zinc-50 hover:bg-zinc-100 text-zinc-600 text-sm font-medium transition-colors"
        >
          <Eye size={16} />
          Ver solución completa
        </button>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex items-center justify-between px-4 py-2 bg-amber-50 border-b border-amber-200">
            <span className="text-xs font-semibold text-amber-700">💡 Solución — {version?.nombre || 'Versión clásica'}</span>
            <button
              onClick={() => { onUse(version?.codigo || ''); setRevealed(false) }}
              className="text-xs text-amber-600 hover:text-amber-800 font-medium"
            >
              Copiar al editor →
            </button>
          </div>
          <pre className="text-xs font-mono p-4 bg-white overflow-x-auto text-zinc-700 max-h-64 overflow-y-auto">
            {version?.codigo || '// Solución no disponible aún'}
          </pre>
        </motion.div>
      )}
    </div>
  )
}

// ─── Celebration overlay ──────────────────────────────────────────────────────
function CelebrationOverlay({ show, onClose }) {
  useEffect(() => {
    if (show) {
      const t = setTimeout(onClose, 3500)
      return () => clearTimeout(t)
    }
  }, [show, onClose])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.5, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white rounded-3xl shadow-2xl border border-green-200 px-12 py-10 text-center"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl mb-4"
            >
              🏆
            </motion.div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">¡Ejercicio dominado!</h2>
            <p className="text-zinc-500 text-sm">Todos los tests pasaron. ¡Buen trabajo!</p>
            <div className="mt-4 flex justify-center gap-2 text-2xl">
              {['🎉','✨','🎊','⭐','🌟'].map((e, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                >{e}</motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function GdbTraceModal({ open, onClose, exercise, traceState, args, onRerun }) {
  const { status, error, result } = traceState
  const steps = result?.steps ?? []
  const truncated = steps.some((s) => s.title?.startsWith('⚠'))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onMouseDown={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="w-full max-w-6xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-zinc-200 bg-zinc-50 px-5 py-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Ejecución paso a paso · traza real</p>
                <h2 className="text-base font-semibold text-zinc-800 truncate">
                  {exercise?.nombre || 'Traza de ejecución'}
                  <span className="ml-2 text-xs font-mono font-normal text-zinc-500">
                    argv: [{args.map((a) => JSON.stringify(a)).join(', ')}]
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={onRerun}
                  disabled={status === 'running'}
                  className={clsx(
                    'rounded-lg border px-3 py-1.5 text-sm transition-colors',
                    status === 'running'
                      ? 'border-zinc-200 bg-zinc-50 text-zinc-400 cursor-not-allowed'
                      : 'border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100'
                  )}
                  title="Volver a ejecutar con los args actuales"
                >
                  {status === 'running' ? 'Trazando…' : 'Re-ejecutar'}
                </button>
                <button
                  onClick={onClose}
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-50"
                >
                  Cerrar
                </button>
              </div>
            </div>

            <div className="max-h-[82vh] overflow-y-auto bg-zinc-50 p-4">
              {status === 'running' && (
                <div className="rounded-xl border border-dashed border-purple-200 bg-white p-8 text-center text-purple-600">
                  <Loader2 size={20} className="mx-auto mb-2 animate-spin" />
                  Instrumentando y ejecutando en Wandbox…
                </div>
              )}
              {status === 'error' && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    <AlertTriangle size={14} />
                    No se pudo generar la traza
                  </div>
                  <p>{error}</p>
                  {result?.compileError && (
                    <pre className="mt-3 max-h-40 overflow-auto rounded bg-white p-2 text-[11px] font-mono leading-snug text-zinc-700">
                      {result.compileError}
                    </pre>
                  )}
                </div>
              )}
              {status === 'done' && steps.length > 0 && (
                <>
                  {truncated && (
                    <div className="mb-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                      ⚠ La traza fue truncada a 8000 pasos. El programa siguió ejecutándose pero ya no estamos registrando.
                    </div>
                  )}
                  <GdbStepper steps={steps} title={`Traza real — ${exercise?.nombre || 'programa'}`} />
                </>
              )}
              {status === 'idle' && (
                <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-8 text-center text-zinc-400">
                  Pulsa "Re-ejecutar" para generar la traza.
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── useTimer ─────────────────────────────────────────────────────────────────
function useTimer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const ref = useRef(null)
  const start = useCallback(() => { setRunning(true) }, [])
  useEffect(() => {
    if (running) ref.current = setInterval(() => setSeconds(s => s + 1), 1000)
    else clearInterval(ref.current)
    return () => clearInterval(ref.current)
  }, [running])
  const fmt = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
  return { seconds, fmt, start, running }
}

// ─── PracticeMode ─────────────────────────────────────────────────────────────
export default function PracticeMode() {
  const { id } = useParams()
  const navigate = useNavigate()
  const exercise = getExercise(id)
  const { marcarEstado, registrarIntento, ejercicios } = useProgressStore()
  const progreso = ejercicios[id]
  const strictMoulinette = useSettingsStore(s => s.strictMoulinette)
  const toggleStrictMoulinette = useSettingsStore(s => s.toggleStrictMoulinette)
  const timer = useTimer()
  const { saveVariant } = useUserVariants(id)

  const STORAGE_KEY = `42prep-code-${id}`
  const ARGS_KEY = `42prep-args-${id}`

  // Editor state
  const [code, setCode] = useState(() => localStorage.getItem(STORAGE_KEY) || getPlaceholder(exercise))
  const editorRef = useRef(null)

  // Tests state
  const [tests, setTests] = useState(() =>
    (exercise?.tests || []).map(t => ({ ...t, status: 'pending', output: null, diff: null }))
  )
  const [isRunning, setIsRunning]     = useState(false)
  const [intentos, setIntentos]       = useState(0)
  const [celebrate, setCelebrate]     = useState(false)
  const [compileError, setCompileError] = useState(null)
  const [compileDiagnostics, setCompileDiagnostics] = useState([])
  const [compileSource, setCompileSource] = useState('')
  const [compileUserCode, setCompileUserCode] = useState('')
  const [showSaveModal, setShowSaveModal] = useState(false)
  const [showGdbTrace, setShowGdbTrace] = useState(false)
  const [activeRightTab, setActiveRightTab] = useState('tests') // tests | run

  // Run-with-params state
  const [args, setArgs] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(ARGS_KEY) || 'null')
      if (Array.isArray(stored)) return stored
    } catch {}
    return exercise?.tests?.[0]?.entrada?.map(String) ?? []
  })
  const [stdin, setStdin] = useState('')
  const [runResult, setRunResult] = useState(null)
  const [runStatus, setRunStatus] = useState('idle') // idle | running | done

  useEffect(() => {
    localStorage.setItem(ARGS_KEY, JSON.stringify(args))
  }, [args, ARGS_KEY])

  // Live trace hook (Python-Tutor-style stepper)
  const liveTrace = useLiveTrace()

  // Track whether all passed using a ref to avoid stale closure in async handleCompile
  const allPassedRef = useRef(false)

  const passedCount = tests.filter(t => t.status === 'passed').length
  const allPassed   = tests.length > 0 && passedCount === tests.length

  // Auto-save code to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, code)
  }, [code, STORAGE_KEY])

  // Ctrl+Enter to compile
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault()
        handleCompile()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  const handleCompile = async () => {
    if (isRunning || !exercise) return
    if (!timer.running) timer.start()
    setIsRunning(true)
    setCompileError(null)
    setCompileDiagnostics([])
    setCompileSource('')
    setCompileUserCode('')
    setIntentos(i => i + 1)

    // Reset all tests to pending
    setTests(exercise.tests.map(t => ({ ...t, status: 'pending', output: null, diff: null })))
    allPassedRef.current = false

    // Build code to send (append test harness for funcion-type)
    const fullCode = buildFullCode(exercise.id, exercise.tipoEntrega, code)
    setCompileSource(fullCode)
    setCompileUserCode(code)

    let hadError = false
    let passedAll = true

    // Run tests sequentially — Wandbox can't handle many parallel container launches
    for (let i = 0; i < exercise.tests.length; i++) {
      const test = exercise.tests[i]

      let result
      try {
        result = await compileAndRun(fullCode, test.entrada, {
          compilerOptionRaw: strictMoulinette ? '-Wall\n-Wextra\n-Werror' : '',
        })
      } catch (err) {
        hadError = true
        passedAll = false
        setCompileError(`Error de red: ${err.message}\n\nVerifica tu conexión o intenta de nuevo.`)
        setTests(prev => prev.map(t => ({ ...t, status: t.status === 'pending' ? 'failed' : t.status, diff: t.status === 'pending' ? null : t.diff })))
        break
      }

      if (result.compileError) {
        hadError = true
        passedAll = false
        const isServerBusy = result.compileError.includes('OCI runtime') || result.compileError.includes('Resource temporarily unavailable')
        setCompileError(
          isServerBusy
            ? 'El servidor de compilación está ocupado. Intenta de nuevo en unos segundos.'
            : result.compileError
        )
        setCompileDiagnostics(result.compileDiagnostics || [])
        // Cada test queda marcado como failed con el compileError adjunto,
        // para que PracticeDiagnostics pueda razonar sobre él.
        setTests(prev => prev.map(t => ({
          ...t,
          status: 'failed',
          output: '',
          diff: null,
          compileError: result.compileError,
        })))
        break
      }

      const passed = result.stdout === test.salida
      if (!passed) passedAll = false
      const diff = passed ? null : getDiff(result.stdout, test.salida)

      setTests(prev => {
        const next = [...prev]
        next[i] = {
          ...next[i],
          status: passed ? 'passed' : 'failed',
          output: result.stdout,
          diff,
          // Campos extra para heurísticas de PracticeDiagnostics. Son aditivos
          // y no afectan al resto del flujo.
          stderr: result.stderr ?? '',
          exitCode: result.exitCode ?? null,
          signal: result.signal ?? null,
          compileError: null,
        }
        return next
      })
    }

    setIsRunning(false)
    registrarIntento(id, passedAll)
    if (!hadError) setCompileDiagnostics([])
    if (passedAll && !hadError) {
      marcarEstado(id, 'dominado')
      setCelebrate(true)
    } else {
      marcarEstado(id, 'practicando')
    }
  }

  const handleClear = () => {
    const placeholder = getPlaceholder(exercise)
    setCode(placeholder)
    setCompileError(null)
    setCompileDiagnostics([])
    setCompileSource('')
    setCompileUserCode('')
    setTests((exercise?.tests || []).map(t => ({ ...t, status: 'pending', output: null, diff: null })))
  }

  const handleRunWithArgs = async () => {
    if (!exercise || runStatus === 'running') return
    setRunStatus('running')
    setRunResult(null)
    const fullCode = buildFullCode(exercise.id, exercise.tipoEntrega, code)
    try {
      const result = await compileAndRun(fullCode, args, { stdin })
      setRunResult(result)
    } catch (err) {
      setRunResult({
        compileError: null,
        stdout: '',
        stderr: '',
        exitCode: -1,
        signal: null,
        compileMessage: '',
        networkError: err.message,
      })
    } finally {
      setRunStatus('done')
    }
  }

  const handleTrace = async () => {
    if (!exercise) return
    setActiveRightTab('run')
    setShowGdbTrace(true)
    const fullCode = buildFullCode(exercise.id, exercise.tipoEntrega, code)
    await liveTrace.run(fullCode, args, stdin)
  }

  const handleUseSolution = (solutionCode) => {
    setCode(solutionCode)
    setCompileError(null)
    setCompileDiagnostics([])
    setCompileSource('')
    setCompileUserCode('')
  }

  // Estado badge
  const estadoBadge = {
    no_iniciado: { label: 'Sin empezar',  cls: 'bg-zinc-100 text-zinc-500' },
    estudiando:  { label: 'Estudiando',   cls: 'bg-blue-100 text-blue-600' },
    practicando: { label: 'Practicando',  cls: 'bg-orange-100 text-orange-600' },
    dominado:    { label: '✓ Dominado',   cls: 'bg-green-100 text-green-700' },
  }[progreso?.estado || 'no_iniciado']

  if (!exercise) {
    return (
      <div className="flex items-center justify-center h-screen bg-zinc-50">
        <div className="text-center">
          <p className="text-zinc-400 text-lg">Ejercicio no encontrado</p>
          <button onClick={() => navigate('/')} className="mt-4 text-sm text-blue-600 hover:underline">
            ← Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-zinc-50 overflow-hidden">
      <CelebrationOverlay show={celebrate} onClose={() => setCelebrate(false)} />
      <GdbTraceModal
        open={showGdbTrace}
        onClose={() => setShowGdbTrace(false)}
        exercise={exercise}
        traceState={liveTrace}
        args={args}
        onRerun={handleTrace}
      />

      {showSaveModal && (
        <SaveVariantModal
          code={code}
          onSave={saveVariant}
          onClose={() => setShowSaveModal(false)}
        />
      )}

      {/* ── Top header ── */}
      <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-zinc-200 shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(`/ejercicio/${id}`)}
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al estudio
          </button>
          <div className="w-px h-5 bg-zinc-200" />
          <div className="flex items-center gap-2">
            <span className="text-base">{exercise.palacio?.emoji}</span>
            <span className="font-semibold text-zinc-800 font-mono">{exercise.nombre}</span>
            <LevelBadge nivel={exercise.nivel} tamaño="sm" />
            <span className={clsx('text-xs font-semibold px-2 py-0.5 rounded-full', estadoBadge.cls)}>
              {estadoBadge.label}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span>Intentos: <strong className="text-zinc-700">{intentos}</strong></span>
            <span>Tests: <strong className="text-green-600">{passedCount}</strong>/<strong className="text-zinc-700">{tests.length}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-mono text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full">
            <Timer size={14} />
            {timer.fmt}
          </div>
          <button
            onClick={handleClear}
            className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-700"
            title="Limpiar y reiniciar"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </header>

      {/* ── Main 2-column layout ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── LEFT: Editor ── */}
        <div className="flex flex-col flex-1 min-w-0 border-r border-zinc-200">
          {/* Editor */}
          <div className="flex-1 overflow-hidden">
            <Editor
              height="100%"
              language="c"
              theme="vs"
              value={code}
              onChange={v => setCode(v || '')}
              onMount={editor => { editorRef.current = editor }}
              options={{
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontSize: 13,
                lineHeight: 20,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                tabSize: 4,
                insertSpaces: false,
                wordWrap: 'off',
                padding: { top: 16, bottom: 16 },
                renderLineHighlight: 'line',
                suggestOnTriggerCharacters: true,
                quickSuggestions: true,
                formatOnPaste: true,
              }}
            />
          </div>

          {/* Compile error banner */}
          <AnimatePresence>
            {compileError && (
              <CompileErrorBanner
                error={compileError}
                diagnostics={compileDiagnostics}
                source={compileSource}
                userCode={compileUserCode}
                exercise={exercise}
                onDismiss={() => {
                  setCompileError(null)
                  setCompileDiagnostics([])
                  setCompileSource('')
                  setCompileUserCode('')
                }}
              />
            )}
          </AnimatePresence>

          {/* Bottom action bar */}
          <div className="shrink-0 flex items-center gap-3 px-4 py-3 bg-white border-t border-zinc-200">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleCompile}
              disabled={isRunning}
              className={clsx(
                'flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm transition-all',
                isRunning
                  ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                  : 'bg-zinc-900 text-white hover:bg-zinc-700 shadow-sm'
              )}
            >
              <Play size={15} className={isRunning ? 'animate-pulse' : ''} />
              {isRunning ? 'Compilando…' : 'Compilar ▶'}
            </motion.button>

            <button
              onClick={handleClear}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-zinc-600 bg-zinc-100 hover:bg-zinc-200 transition-colors"
            >
              <Trash2 size={14} />
              Limpiar 🧹
            </button>

            <button
              onClick={() => setShowSaveModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
              title="Guardar el código actual como variante"
            >
              <Save size={14} />
              Guardar variante
            </button>

            <button
              onClick={handleTrace}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
              title="Compilar instrumentado y ver paso a paso con los args actuales"
            >
              <Microscope size={14} />
              Ver ejecución paso a paso
            </button>

            <label className="ml-auto flex items-center gap-1.5 text-xs text-zinc-500 cursor-pointer select-none" title="Compilar con -Wall -Wextra -Werror, como la Moulinette del 42">
              <input
                type="checkbox"
                checked={strictMoulinette}
                onChange={toggleStrictMoulinette}
                className="accent-zinc-900"
              />
              Moulinette estricta
            </label>
            <span className="text-xs text-zinc-400 font-mono">Ctrl+Enter</span>
          </div>
        </div>

        {/* ── RIGHT: Results panel ── */}
        <div className="w-96 xl:w-[420px] shrink-0 flex flex-col bg-white overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-zinc-200 bg-zinc-50 shrink-0">
            <button
              onClick={() => setActiveRightTab('tests')}
              className={clsx(
                'flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold transition-colors',
                activeRightTab === 'tests'
                  ? 'bg-white text-zinc-900 border-b-2 border-zinc-900'
                  : 'text-zinc-500 hover:text-zinc-700'
              )}
            >
              <Trophy size={13} />
              Tests Moulinette
              <span className={clsx(
                'rounded-full px-1.5 py-0.5 text-[10px] font-mono',
                allPassed ? 'bg-green-100 text-green-700' : 'bg-zinc-200 text-zinc-600'
              )}>
                {passedCount}/{tests.length}
              </span>
            </button>
            <button
              onClick={() => setActiveRightTab('run')}
              className={clsx(
                'flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold transition-colors',
                activeRightTab === 'run'
                  ? 'bg-white text-zinc-900 border-b-2 border-zinc-900'
                  : 'text-zinc-500 hover:text-zinc-700'
              )}
            >
              <Terminal size={13} />
              Mis parámetros
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">

          {activeRightTab === 'tests' && (
            <>
            {/* Progress bar */}
            <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
              <motion.div
                className={clsx('h-full rounded-full', allPassed ? 'bg-green-500' : 'bg-blue-500')}
                animate={{ width: tests.length ? `${(passedCount / tests.length) * 100}%` : '0%' }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              />
            </div>

            {/* Compilation mode indicator */}
            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
              Verificación real con gcc (Wandbox)
            </div>

            {/* Test list */}
            {tests.length === 0 ? (
              <p className="text-sm text-zinc-400 text-center py-6">Sin tests definidos aún para este ejercicio.</p>
            ) : (
              <div className="space-y-2">
                {tests.map((test, i) => (
                  <TestRow key={test.id || i} test={test} index={i} />
                ))}
              </div>
            )}

            {/* Diagnóstico: "siguiente cosa que arreglar" — sólo aparece si hay
                tests fallidos y aporta una sugerencia heurística por cada uno. */}
            <PracticeDiagnostics
              tests={tests}
              exercise={exercise}
              onInspect={(test) => {
                setArgs((test.entrada || []).map(String))
                setActiveRightTab('run')
              }}
            />

            {/* Separator */}
            <div className="h-px bg-zinc-100" />

            {/* Hint system */}
            <HintSystem exercise={exercise} intentos={intentos} />

            {/* Solution reveal (after 3 failed attempts) */}
            {intentos >= 3 && !allPassed && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                <SolutionReveal exercise={exercise} onUse={handleUseSolution} />
              </motion.div>
            )}
            </>
          )}

          {activeRightTab === 'run' && (
            <RunPanel
              args={args}
              setArgs={setArgs}
              stdin={stdin}
              setStdin={setStdin}
              onRun={handleRunWithArgs}
              onTrace={handleTrace}
              running={runStatus === 'running'}
              tracing={liveTrace.status === 'running'}
              result={runResult?.networkError ? null : runResult}
              traceError={runResult?.networkError ? `Error de red: ${runResult.networkError}` : null}
              tests={exercise.tests}
            />
          )}

          {activeRightTab === 'tests' && (
            <>
            {/* Session stats */}
            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Estadísticas de la sesión</h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-xl font-bold text-zinc-800">{intentos}</p>
                  <p className="text-xs text-zinc-500">Intentos</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-zinc-800">{timer.fmt}</p>
                  <p className="text-xs text-zinc-500">Tiempo</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-green-600">{passedCount}</p>
                  <p className="text-xs text-zinc-500">Tests ✓</p>
                </div>
              </div>
            </div>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

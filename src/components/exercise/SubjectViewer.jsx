import { useState } from 'react'
import { Copy, Check, FileCode } from 'lucide-react'

export default function SubjectViewer({ subject = '', funcionesPermitidas = [], archivosEsperados = [] }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(subject)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!subject) {
    return (
      <div className="py-10 text-center text-zinc-400">
        <p className="text-3xl mb-2">🚧</p>
        <p className="text-sm">Subject no disponible todavía</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="relative group">
        <div className="terminal-box text-xs leading-relaxed">{subject}</div>
        <button
          onClick={copy}
          className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded
                     bg-white/10 text-zinc-400 hover:text-white text-xs
                     opacity-0 group-hover:opacity-100 transition-all duration-150"
        >
          {copied ? <><Check size={11} /> Copiado</> : <><Copy size={11} /> Copiar</>}
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {archivosEsperados.map(f => (
          <span key={f} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md
                                   bg-blue-50 text-blue-700 text-xs font-mono border border-blue-200">
            <FileCode size={11} /> {f}
          </span>
        ))}
        {funcionesPermitidas.map(fn => (
          <span key={fn} className="anchor-chip">{fn}()</span>
        ))}
      </div>
    </div>
  )
}

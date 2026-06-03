import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Image as ImageIcon, Sparkles, RefreshCw, Save, Edit3, Check, HelpCircle } from 'lucide-react'
import clsx from 'clsx'

export default function ImageGenerator({ exercise, onSaveImage, savedImageUrl = null }) {
  const [imageUrl, setImageUrl] = useState(savedImageUrl || localStorage.getItem(`42prep-img-${exercise.id}`) || null)
  const [prompt, setPrompt] = useState('')
  const [customPrompt, setCustomPrompt] = useState('')
  const [isEditingPrompt, setIsEditingPrompt] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaved, setIsSaved] = useState(!!savedImageUrl)
  const [hasError, setHasError] = useState(false)

  // Generate default prompt based on exercise mnemotecnia
  useEffect(() => {
    if (exercise?.palacio) {
      const { personaje, habitacion, historia } = exercise.palacio
      const roomName = {
        cocina: 'cocina (kitchen)',
        'salón': 'salón (living room)',
        dormitorio: 'dormitorio (bedroom)',
        garaje: 'garaje (garage)'
      }[habitacion] || habitacion

      const basePrompt = `Vibrant 3D cartoon style illustration of ${personaje} in a surreal school ${roomName}, related to the story: "${historia}". Absurd visual association, warm lighting, octane render, high definition, detailed.`
      setPrompt(basePrompt)
      setCustomPrompt(basePrompt)
    }
  }, [exercise])

  // Sync with savedImageUrl from parent
  useEffect(() => {
    if (savedImageUrl) {
      setImageUrl(savedImageUrl)
      setIsSaved(true)
    }
  }, [savedImageUrl])

  const handleGenerate = () => {
    setIsLoading(true)
    setIsSaved(false)
    setHasError(false)
    const seed = Math.floor(Math.random() * 1000000)
    // Generate image from pollinations.ai with random seed to guarantee variation
    const finalPrompt = customPrompt.trim() || prompt
    const encodedPrompt = encodeURIComponent(finalPrompt)
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=800&nologo=true&seed=${seed}`
    
    setImageUrl(url)
    localStorage.setItem(`42prep-img-${exercise.id}`, url)
    localStorage.setItem(`42prep-prompt-${exercise.id}`, finalPrompt)
  }

  const handleSave = () => {
    if (!imageUrl) return
    setIsSaved(true)
    // Persist URL and prompt to database if function is provided
    if (onSaveImage) {
      onSaveImage(imageUrl, customPrompt || prompt)
    } else {
      localStorage.setItem(`42prep-img-${exercise.id}`, imageUrl)
      localStorage.setItem(`42prep-img-saved-${exercise.id}`, 'true')
    }
  }

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageIcon size={18} className="text-purple-500" />
          <h3 className="font-bold text-zinc-900 text-sm">Asociación Visual (IA Generativa)</h3>
        </div>
        {imageUrl && (
          <span className="text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
            <Sparkles size={10} /> Nano Banana Style
          </span>
        )}
      </div>

      {/* Image Preview Container */}
      <div className="relative aspect-square w-full rounded-2xl bg-zinc-50 border border-zinc-100 overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50/80 backdrop-blur-sm z-10 space-y-3"
            >
              <RefreshCw size={28} className="text-purple-500 animate-spin" />
              <p className="text-xs font-semibold text-zinc-500 animate-pulse">Pintando asociación loca...</p>
            </motion.div>
          ) : null}
        </AnimatePresence>

          {hasError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50/95 p-6 text-center z-10 overflow-y-auto">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 mb-2 shrink-0">
                <HelpCircle size={20} />
              </div>
              <p className="text-xs font-bold text-red-800 mb-1">No se pudo cargar la imagen de la IA</p>
              <p className="text-[10px] text-red-700 leading-normal max-w-xs mb-2">
                Esto suele ocurrir si tu **bloqueador de anuncios (AdBlock, Brave Shields)** bloquea el dominio <code>pollinations.ai</code> o si hay saturación temporal en sus servidores.
              </p>
              <div className="text-[9px] text-zinc-500 leading-normal max-w-xs mb-3 text-left border-l-2 border-red-300 pl-2">
                💡 **Recomendaciones:**
                <br />1. Desactiva tu AdBlocker o Brave Shields para este sitio.
                <br />2. Desconecta tu VPN temporalmente.
                <br />3. Intenta de nuevo en unos segundos.
              </div>
              <button
                onClick={handleGenerate}
                className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-[10px] font-bold transition-all shadow"
              >
                Reintentar generación
              </button>
            </div>
          ) : null}

          {imageUrl && !hasError ? (
            <motion.img
              key={imageUrl} // Use imageUrl as key to trigger animations and loader on changes
              src={imageUrl}
              alt={`Mnemotecnia para ${exercise.nombre}`}
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onLoad={() => {
                setIsLoading(false)
                setHasError(false)
              }}
              onError={() => {
                setIsLoading(false)
                setHasError(true)
              }}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : !imageUrl && !hasError ? (
            <div className="text-center p-6 space-y-3 text-zinc-400">
              <div className="h-16 w-16 rounded-full bg-purple-50 flex items-center justify-center mx-auto text-purple-400">
                <ImageIcon size={28} />
              </div>
              <div className="max-w-xs space-y-1">
                <p className="text-xs font-bold text-zinc-700">Sin imagen generada aún</p>
                <p className="text-[11px] text-zinc-500">
                  Crea una imagen absurda del personaje y la historia para grabarlo permanentemente en tu cerebro.
                </p>
              </div>
            </div>
          ) : null}
      </div>

      {/* Control Actions */}
      <div className="space-y-3">
        {/* Prompt editor */}
        <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
              <Edit3 size={10} /> Prompt de la IA
            </span>
            <button
              onClick={() => setIsEditingPrompt(!isEditingPrompt)}
              className="text-[11px] text-purple-600 hover:text-purple-800 font-semibold"
            >
              {isEditingPrompt ? 'Bloquear' : 'Editar Prompt'}
            </button>
          </div>
          {isEditingPrompt ? (
            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              rows={2}
              className="w-full bg-white border border-zinc-200 rounded-lg p-2 text-xs text-zinc-700 focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
          ) : (
            <p className="text-xs text-zinc-600 italic line-clamp-2">
              "{customPrompt || prompt}"
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className={clsx(
              'flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all',
              isLoading
                ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            )}
          >
            <RefreshCw size={14} className={clsx(isLoading && 'animate-spin')} />
            {imageUrl ? 'Regenerar IA ✨' : 'Generar Asociación ✨'}
          </button>

          {imageUrl && (
            <button
              onClick={handleSave}
              className={clsx(
                'px-4 py-2.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all',
                isSaved
                  ? 'bg-green-50 border-green-200 text-green-700'
                  : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50'
              )}
            >
              {isSaved ? <Check size={14} /> : <Save size={14} />}
              {isSaved ? 'Guardada' : 'Guardar'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

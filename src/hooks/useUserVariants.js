import { useState } from 'react'

const storageKey = (exerciseId) => `42prep-variants-${exerciseId}`

function load(exerciseId) {
  try {
    const raw = localStorage.getItem(storageKey(exerciseId))
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function persist(exerciseId, variants) {
  try {
    localStorage.setItem(storageKey(exerciseId), JSON.stringify(variants))
  } catch {
    // storage full or unavailable — silently ignore
  }
}

export function useUserVariants(exerciseId) {
  const [variants, setVariants] = useState(() => load(exerciseId))

  const saveVariant = (nombre, descripcion, codigo) => {
    const newVariant = {
      id: Date.now().toString(),
      nombre: nombre.trim(),
      descripcion: (descripcion || '').trim(),
      codigo,
      fechaGuardado: new Date().toISOString(),
    }
    const updated = [newVariant, ...variants]
    setVariants(updated)
    persist(exerciseId, updated)
  }

  const deleteVariant = (id) => {
    const updated = variants.filter(v => v.id !== id)
    setVariants(updated)
    persist(exerciseId, updated)
  }

  return { variants, saveVariant, deleteVariant }
}

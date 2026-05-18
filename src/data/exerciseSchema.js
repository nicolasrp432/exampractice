const REQUIRED_FIELDS = [
  'id', 'nombre', 'nivel', 'dificultad', 'tipoEntrega',
  'archivosEsperados', 'funcionesPermitidas', 'subject', 'descripcion',
  'palacio', 'herramientas', 'formulaClave', 'versiones',
  'tests', 'gdbSteps', 'trampas', 'bajoCelCapot',
  'estrategia', 'razonEstrategia',
]

const PALACIO_REQUIRED = ['habitacion', 'personaje', 'emoji', 'historia', 'anclas']
const VALID_NIVELES = [1, 2, 3, 4]
const VALID_DIFICULTADES = ['fácil', 'medio', 'difícil']
const VALID_TIPO_ENTREGA = ['programa', 'función', 'funcion']
const VALID_HABITACIONES = ['cocina', 'salón', 'dormitorio', 'garaje']
const VALID_ESTRATEGIAS = ['MEMORIZAR', 'ENTENDER', 'AMBOS']
const VALID_ESTADOS = ['no_iniciado', 'estudiando', 'practicando', 'dominado']

export function validateExercise(data) {
  const errors = []

  // Campos raíz obligatorios
  for (const field of REQUIRED_FIELDS) {
    if (data[field] === undefined || data[field] === null || data[field] === '') {
      errors.push(`Campo requerido faltante: "${field}"`)
    }
  }

  // Enumeraciones
  if (data.nivel !== undefined && !VALID_NIVELES.includes(data.nivel))
    errors.push(`nivel inválido: ${data.nivel}. Debe ser 1, 2, 3 o 4`)

  if (data.dificultad && !VALID_DIFICULTADES.includes(data.dificultad))
    errors.push(`dificultad inválida: "${data.dificultad}"`)

  if (data.tipoEntrega && !VALID_TIPO_ENTREGA.includes(data.tipoEntrega))
    errors.push(`tipoEntrega inválido: "${data.tipoEntrega}"`)

  if (data.estrategia && !VALID_ESTRATEGIAS.includes(data.estrategia))
    errors.push(`estrategia inválida: "${data.estrategia}"`)

  // Palacio
  if (data.palacio && typeof data.palacio === 'object') {
    for (const field of PALACIO_REQUIRED) {
      if (!data.palacio[field])
        errors.push(`palacio.${field} faltante`)
    }
    if (data.palacio.habitacion && !VALID_HABITACIONES.includes(data.palacio.habitacion))
      errors.push(`palacio.habitacion inválida: "${data.palacio.habitacion}"`)
    if (data.palacio.anclas && !Array.isArray(data.palacio.anclas))
      errors.push('palacio.anclas debe ser un array')
    if (Array.isArray(data.palacio.anclas) && data.palacio.anclas.length < 2)
      errors.push('palacio.anclas debe tener al menos 2 anclas')
  }

  // Tests
  if (Array.isArray(data.tests)) {
    if (data.tests.length === 0)
      errors.push('tests está vacío')
    data.tests.forEach((t, i) => {
      if (!t.id)      errors.push(`tests[${i}].id faltante`)
      if (t.salida === undefined) errors.push(`tests[${i}].salida faltante`)
      if (!Array.isArray(t.entrada)) errors.push(`tests[${i}].entrada debe ser array`)
      if (!['normal', 'edge'].includes(t.tipo))
        errors.push(`tests[${i}].tipo inválido: "${t.tipo}"`)
      // Verificar que la salida termine en \n (excepto funciones que retornan valor)
      if (typeof t.salida === 'string' && t.salida.length > 0 && !t.salida.endsWith('\n'))
        errors.push(`tests[${i}] "${t.id}": salida debe terminar en \\n (byte a byte)`)
    })
  }

  // Versiones
  if (Array.isArray(data.versiones)) {
    if (data.versiones.length === 0)
      errors.push('versiones está vacío')
    const hayRecomendada = data.versiones.some(v => v.recomendada)
    if (!hayRecomendada)
      errors.push('ninguna versión está marcada como recomendada')
  }

  // Progreso
  if (data.progreso && typeof data.progreso === 'object') {
    if (!VALID_ESTADOS.includes(data.progreso.estado))
      errors.push(`progreso.estado inválido: "${data.progreso.estado}"`)
  }

  return { valid: errors.length === 0, errors }
}

export function validateAll(exercises) {
  const results = []
  for (const ex of exercises) {
    const { valid, errors } = validateExercise(ex)
    if (!valid) results.push({ id: ex.id || '?', errors })
  }
  return { allValid: results.length === 0, failures: results }
}

export const EXERCISE_SCHEMA_VERSION = '1.0'

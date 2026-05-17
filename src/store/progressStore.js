import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const EXERCISE_IDS = [
  // Nivel 1
  'ft_strlen', 'ft_swap', 'ft_putstr', 'ft_strcpy', 'fizzbuzz',
  'first_word', 'rev_print', 'rotone', 'rot_13', 'repeat_alpha',
  'search_and_replace', 'ulstr',
  // Nivel 2
  'alpha_mirror', 'camel_to_snake', 'do_op', 'ft_atoi', 'ft_strcmp',
  'ft_strcspn', 'ft_strdup', 'ft_strpbrk', 'ft_strrev', 'inter',
  'is_power_of_2', 'last_word', 'print_bits', 'reverse_bits',
  'swap_bits', 'union', 'wdmatch',
  // Nivel 3
  'paramsum', 'tab_mult', 'epur_str', 'expand_str', 'add_prime_sum',
  'ft_range', 'ft_rrange', 'ft_list_size', 'hidenp', 'lcm',
  'pgcd', 'print_hex', 'ft_atoi_base', 'str_capitalizer', 'rstr_capitalizer',
  // Nivel 4
  'fprime', 'ft_split', 'sort_list',
]

function defaultProgreso() {
  return {
    estado: 'no_iniciado',
    testsPasados: 0,
    testsTotal: 0,
    intentos: 0,
    ultimaVez: null,
    proximaRepasion: null,
    intervaloDias: 1,
    notas: '',
  }
}

function buildInitialEjercicios() {
  return Object.fromEntries(EXERCISE_IDS.map(id => [id, defaultProgreso()]))
}

const INTERVALOS = [1, 3, 7, 14, 30]

function calcularProximaRepasion(intentos, exito) {
  const idx = exito ? Math.min(intentos, INTERVALOS.length - 1) : 0
  const dias = INTERVALOS[idx]
  const fecha = new Date()
  fecha.setDate(fecha.getDate() + dias)
  return { proximaRepasion: fecha.toISOString(), intervaloDias: dias }
}

export const useProgressStore = create(
  persist(
    (set, get) => ({
      ejercicios: buildInitialEjercicios(),
      racha: 0,
      totalSesiones: 0,
      ultimaSesion: null,
      examenes: [],

      marcarEstado: (id, estado) =>
        set(s => ({
          ejercicios: {
            ...s.ejercicios,
            [id]: { ...s.ejercicios[id], estado, ultimaVez: new Date().toISOString() },
          },
        })),

      registrarIntento: (id, exito) =>
        set(s => {
          const prev = s.ejercicios[id]
          const intentos = (prev.intentos ?? 0) + 1
          const testsPasados = exito ? prev.testsTotal : prev.testsPasados
          const { proximaRepasion, intervaloDias } = calcularProximaRepasion(intentos, exito)
          const estado = exito
            ? intentos >= 3 ? 'dominado' : 'practicando'
            : 'practicando'
          return {
            ejercicios: {
              ...s.ejercicios,
              [id]: {
                ...prev,
                intentos,
                testsPasados,
                estado,
                ultimaVez: new Date().toISOString(),
                proximaRepasion,
                intervaloDias,
              },
            },
          }
        }),

      actualizarNotas: (id, notas) =>
        set(s => ({
          ejercicios: {
            ...s.ejercicios,
            [id]: { ...s.ejercicios[id], notas },
          },
        })),

      guardarExamen: (resultado) =>
        set(s => ({
          examenes: [resultado, ...s.examenes].slice(0, 10),
          totalSesiones: s.totalSesiones + 1,
          ultimaSesion: new Date().toISOString(),
        })),

      // Selectores derivados (computados fuera del store)
      getEjerciciosParaRepasar: () => {
        const { ejercicios } = get()
        const hoy = new Date()
        return Object.entries(ejercicios)
          .filter(([, p]) => p.proximaRepasion && new Date(p.proximaRepasion) <= hoy)
          .map(([id]) => id)
      },

      getTotalDominados: () => {
        const { ejercicios } = get()
        return Object.values(ejercicios).filter(p => p.estado === 'dominado').length
      },
    }),
    {
      name: '42prep-progress',
      version: 1,
    }
  )
)

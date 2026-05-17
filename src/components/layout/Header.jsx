import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Flame, ChevronRight, Shuffle, Download } from 'lucide-react'
import clsx from 'clsx'
import { useProgressStore } from '@/store/progressStore'

const TOTAL_EXERCISES = 30

const ROUTE_LABELS = {
  '/': 'Inicio',
  '/palacio': 'Palacio de la Memoria',
  '/herramientas': 'Herramientas',
  '/examen': 'Simulador de Examen',
  '/progreso': 'Progreso',
  '/ejercicios/1': 'Cocina — Nivel 1',
  '/ejercicios/2': 'Salón — Nivel 2',
  '/ejercicios/3': 'Dormitorio — Nivel 3',
  '/ejercicios/4': 'Garaje — Nivel 4',
}

function buildBreadcrumbs(pathname) {
  if (ROUTE_LABELS[pathname]) {
    return [{ label: ROUTE_LABELS[pathname], to: pathname }]
  }

  if (pathname.startsWith('/ejercicio/')) {
    const id = pathname.split('/').pop()
    return [
      { label: 'Ejercicios', to: null },
      { label: id, to: pathname },
    ]
  }

  if (pathname.startsWith('/practicar/')) {
    const id = pathname.split('/').pop()
    return [
      { label: 'Práctica', to: null },
      { label: id, to: pathname },
    ]
  }

  return [{ label: 'Inicio', to: '/' }]
}

const ALL_EXERCISE_IDS = [
  'ft_strlen', 'ft_swap', 'ft_putstr', 'ft_strcpy', 'fizzbuzz',
  'first_word', 'rev_print', 'rotone', 'rot_13', 'repeat_alpha',
  'search_and_replace', 'ulstr',
  'alpha_mirror', 'camel_to_snake', 'do_op', 'ft_atoi', 'ft_strcmp',
  'ft_strcspn', 'ft_strdup', 'ft_strpbrk', 'ft_strrev', 'inter',
  'is_power_of_2', 'last_word', 'print_bits', 'reverse_bits',
  'swap_bits', 'union', 'wdmatch',
  'paramsum', 'tab_mult', 'epur_str', 'expand_str', 'add_prime_sum',
  'ft_range', 'ft_rrange', 'ft_list_size', 'hidenp', 'lcm',
  'pgcd', 'print_hex', 'ft_atoi_base', 'str_capitalizer', 'rstr_capitalizer',
  'fprime', 'ft_split', 'sort_list',
]

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const ejercicios = useProgressStore(s => s.ejercicios)
  const racha = useProgressStore(s => s.racha)

  const [installPrompt, setInstallPrompt] = useState(null)

  useEffect(() => {
    const onPrompt    = (e) => { e.preventDefault(); setInstallPrompt(e) }
    const onInstalled = () => setInstallPrompt(null)
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const handleInstall = async () => {
    if (!installPrompt) return
    installPrompt.prompt()
    const { outcome } = await installPrompt.userChoice
    if (outcome === 'accepted') setInstallPrompt(null)
  }

  const dominados = Object.values(ejercicios).filter(p => p.estado === 'dominado').length
  const pct = Math.round((dominados / TOTAL_EXERCISES) * 100)
  const crumbs = buildBreadcrumbs(pathname)

  function examAleatorio() {
    const id = ALL_EXERCISE_IDS[Math.floor(Math.random() * ALL_EXERCISE_IDS.length)]
    navigate(`/practicar/${id}`)
  }

  return (
    <header className="h-14 shrink-0 border-b border-[#E4E4E7] bg-white flex items-center px-6 gap-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm flex-1 min-w-0">
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={14} className="text-zinc-300 shrink-0" />}
            {crumb.to ? (
              <Link
                to={crumb.to}
                className="text-zinc-500 hover:text-zinc-900 transition-colors truncate"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-zinc-400 truncate">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      {/* Progreso global */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-24 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-zinc-800 rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs text-zinc-500 whitespace-nowrap">
            <span className="font-semibold text-zinc-800">{dominados}</span>/{TOTAL_EXERCISES}
          </span>
        </div>

        {/* Racha */}
        {racha > 0 && (
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-50 border border-orange-200">
            <Flame size={13} className="text-orange-500" />
            <span className="text-xs font-semibold text-orange-700">{racha}</span>
          </div>
        )}
      </div>

      {/* Install PWA — solo visible antes de instalar */}
      {installPrompt && (
        <button
          onClick={handleInstall}
          className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                     border border-zinc-200 text-zinc-500 text-xs font-medium
                     hover:bg-zinc-50 hover:text-zinc-700 transition-colors duration-150"
          title="Instalar como aplicación"
        >
          <Download size={13} />
          <span className="hidden sm:inline">Instalar app</span>
        </button>
      )}

      {/* Examen aleatorio */}
      <button
        onClick={examAleatorio}
        className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                   bg-zinc-900 text-white text-xs font-medium
                   hover:bg-zinc-700 transition-colors duration-150"
      >
        <Shuffle size={13} />
        <span className="hidden sm:inline">Examen aleatorio</span>
        <span className="sm:hidden">Aleatorio</span>
      </button>
    </header>
  )
}

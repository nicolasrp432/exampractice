// npm run validate — verifica ejercicios y simuladores
// Ejecutar con: node src/utils/validateData.js

import { allExercises } from '../data/index.js'
import { simulators, getDiff } from './simulators/index.js'

const RED   = '\x1b[31m'
const GREEN = '\x1b[32m'
const YELLOW= '\x1b[33m'
const RESET = '\x1b[0m'
const BOLD  = '\x1b[1m'

let totalErrors = 0
let totalWarnings = 0

function error(msg)   { console.log(`  ${RED}✗${RESET} ${msg}`); totalErrors++ }
function warn(msg)    { console.log(`  ${YELLOW}⚠${RESET} ${msg}`); totalWarnings++ }
function ok(msg)      { console.log(`  ${GREEN}✓${RESET} ${msg}`) }

console.log(`\n${BOLD}42 Exam Prep — Validación de datos${RESET}`)
console.log(`${'─'.repeat(50)}\n`)

// ── 1. Campos requeridos ──────────────────────────────────────────────────────
console.log(`${BOLD}1. Campos requeridos${RESET}`)
for (const ex of allExercises) {
  const issues = []
  if (!ex.subject)                  issues.push('subject vacío')
  if (!ex.palacio?.historia)        issues.push('palacio.historia vacío')
  if (!ex.palacio?.anclas?.length)  issues.push('sin anclas')
  if (!ex.versiones?.length)        issues.push('sin versiones de código')
  if (!ex.tests?.length)            issues.push('sin tests')
  if (!ex.trampas?.length)          issues.push('sin trampas')
  if (!ex.formulaClave?.formula)    issues.push('formulaClave.formula vacía')

  if (issues.length) {
    warn(`${ex.id}: ${issues.join(', ')}`)
  }
}
console.log()

// ── 2. Formato de tests ───────────────────────────────────────────────────────
console.log(`${BOLD}2. Formato de tests (salida debe terminar en \\n)${RESET}`)
for (const ex of allExercises) {
  for (const t of ex.tests ?? []) {
    if (typeof t.salida !== 'string') {
      error(`${ex.id} / ${t.id}: salida no es string`)
    } else if (!t.salida.endsWith('\n') && t.salida !== '') {
      error(`${ex.id} / ${t.id}: salida no termina en \\n → ${JSON.stringify(t.salida)}`)
    }
  }
}
console.log()

// ── 3. Simuladores ────────────────────────────────────────────────────────────
console.log(`${BOLD}3. Simuladores contra tests${RESET}`)
let simulatorOk = 0
let simulatorFail = 0
let simulatorMissing = 0

for (const ex of allExercises) {
  if (!ex.tests?.length) continue

  const fn = simulators[ex.id]
  if (!fn) {
    if (ex.subject) warn(`${ex.id}: sin simulador JS`)
    simulatorMissing++
    continue
  }

  let exFail = 0
  for (const t of ex.tests) {
    let out
    try { out = fn(t.entrada) } catch (e) { out = null }
    const passed = out === t.salida
    if (!passed) {
      exFail++
      const diff = out !== null ? getDiff(out, t.salida) : null
      error(`${ex.id} / ${t.id}: esperado ${JSON.stringify(t.salida)} | obtenido ${JSON.stringify(out)}${diff ? ` | diff pos ${diff.position}` : ''}`)
    }
  }
  if (exFail === 0) {
    ok(`${ex.id}: ${ex.tests.length} tests OK`)
    simulatorOk++
  } else {
    simulatorFail++
  }
}
console.log()

// ── 4. Versiones ──────────────────────────────────────────────────────────────
console.log(`${BOLD}4. Versiones de código${RESET}`)
for (const ex of allExercises) {
  const versiones = ex.versiones ?? []
  if (!versiones.length) continue
  const recomendadas = versiones.filter(v => v.recomendada)
  if (recomendadas.length === 0) warn(`${ex.id}: ninguna versión marcada como recomendada`)
  if (recomendadas.length > 1)  warn(`${ex.id}: ${recomendadas.length} versiones marcadas como recomendada`)
  for (const v of versiones) {
    if (!v.codigo?.trim()) error(`${ex.id} / ${v.id}: versión sin código`)
  }
}
console.log()

// ── Resumen ───────────────────────────────────────────────────────────────────
console.log('─'.repeat(50))
console.log(`\n${BOLD}Resumen${RESET}`)
console.log(`  Ejercicios totales: ${allExercises.length}`)
console.log(`  Ejercicios con datos: ${allExercises.filter(e => e.subject).length}`)
console.log(`  Simuladores OK: ${simulatorOk}`)
console.log(`  Simuladores con fallos: ${simulatorFail}`)
console.log(`  Sin simulador: ${simulatorMissing}`)
console.log(`  ${RED}Errores: ${totalErrors}${RESET}`)
console.log(`  ${YELLOW}Advertencias: ${totalWarnings}${RESET}`)

if (totalErrors === 0) {
  console.log(`\n${GREEN}${BOLD}✓ Todo correcto — listo para PROMPT 15${RESET}\n`)
} else {
  console.log(`\n${RED}${BOLD}✗ ${totalErrors} errores a corregir${RESET}\n`)
  process.exit(1)
}

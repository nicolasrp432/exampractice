import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import ExerciseList from '@/pages/ExerciseList'
import ExerciseDetail from '@/pages/ExerciseDetail'
import PracticeMode from '@/pages/PracticeMode'
import ExamSimulator from '@/pages/ExamSimulator'
import Tools from '@/pages/Tools'
import ProgressPage from '@/pages/ProgressPage'
import MemoryPalace from '@/pages/MemoryPalace'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicios/:nivel" element={<ExerciseList />} />
        <Route path="/ejercicio/:id" element={<ExerciseDetail />} />
        <Route path="/herramientas" element={<Tools />} />
        <Route path="/progreso" element={<ProgressPage />} />
        <Route path="/palacio" element={<MemoryPalace />} />
      </Route>

      {/* Examen y práctica sin sidebar (modo concentración) */}
      <Route path="/practicar/:id" element={<PracticeMode />} />
      <Route path="/examen" element={<ExamSimulator />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

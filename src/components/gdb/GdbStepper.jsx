import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Cpu } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export default function GdbStepper({ steps }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const progressPct = useMemo(() => {
    if (!steps || steps.length <= 1) return 100;
    return Math.round(((currentStepIndex + 1) / steps.length) * 100);
  }, [currentStepIndex, steps]);

  const handleNext = useCallback(() => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(i => i + 1);
    }
  }, [currentStepIndex, steps.length]);

  const handlePrev = useCallback(() => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(i => i - 1);
    }
  }, [currentStepIndex]);

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  if (!steps || steps.length === 0) {
    return (
      <div className="p-8 text-center text-zinc-500 bg-zinc-50 rounded-xl border border-zinc-200">
        No hay pasos de GDB definidos para este ejercicio.
      </div>
    );
  }

  const currentStep = steps[currentStepIndex];

  // Función para parsear el código del terminal y aplicar los colores solicitados
  const renderTerminalLine = (line, i) => {
    if (line.startsWith('(gdb)')) {
      const parts = line.split('(gdb)');
      return (
        <div key={i} className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
          <span className="text-[#A6E3A1]">(gdb)</span>
          <span className="text-white font-bold">{parts.slice(1).join('(gdb)')}</span>
        </div>
      );
    } else if (line.includes('→')) {
      return (
        <div key={i} className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-[#F9E2AF]">
          {line}
        </div>
      );
    } else if (line.includes('✓')) {
      return (
        <div key={i} className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-[#A6E3A1]">
          {line}
        </div>
      );
    } else if (line.includes('✗')) {
      return (
        <div key={i} className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-[#F38BA8]">
          {line}
        </div>
      );
    } else {
      return (
        <div key={i} className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-[#CDD6F4]">
          {line}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden border border-zinc-200 bg-white min-h-[400px]">
      {/* HEADER CONTROLES */}
      <div className="shrink-0 border-b border-zinc-200 px-4 py-3 flex flex-wrap gap-4 items-center justify-between bg-zinc-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-white rounded-lg border border-zinc-200 p-1 shadow-sm">
            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="p-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Paso anterior (Flecha Izquierda)"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="px-3 text-sm font-semibold text-zinc-700 min-w-[100px] text-center tabular-nums">
              Paso {currentStepIndex + 1} de {steps.length}
            </div>
            <button
              onClick={handleNext}
              disabled={currentStepIndex === steps.length - 1}
              className="p-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Siguiente paso (Flecha Derecha)"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 rounded-lg transition-colors"
          >
            <RotateCcw size={16} />
            Inicio
          </button>
        </div>
        
        <div className="text-sm font-semibold text-zinc-800 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-sm truncate">
          {currentStep.titulo}
        </div>
      </div>

      <div className="shrink-0 px-4 pt-3 bg-white border-b border-zinc-200">
        <div className="flex items-center justify-between gap-3 mb-2 text-xs font-semibold text-zinc-500">
          <span>Progreso del GDB</span>
          <span>{progressPct}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-purple-500"
            initial={false}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* ÁREA PRINCIPAL (Terminal + Tabla) */}
      <div className="flex-1 flex flex-col min-h-0">
        
        {/* PANEL SUPERIOR: Terminal GDB (60%) */}
        <div className="flex-[3] bg-[#1E1E2E] overflow-y-auto p-4 relative min-h-[150px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
            >
              {currentStep.codigo.split('\n').map((line, i) => renderTerminalLine(line, i))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PANEL INFERIOR: Tabla de variables (40%) */}
        <div className="flex-[2] bg-white border-t border-zinc-200 overflow-y-auto flex flex-col min-h-[150px]">
          <div className="flex-1">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-2 font-medium">Variable</th>
                  <th className="px-4 py-2 font-medium">Valor</th>
                  <th className="px-4 py-2 font-medium hidden sm:table-cell">Binario</th>
                  <th className="px-4 py-2 font-medium">Nota</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="wait">
                  {currentStep.variables?.map((v, i) => (
                    <motion.tr
                      key={`${currentStepIndex}-${v.nombre}-${i}`}
                      initial={{ opacity: 0, backgroundColor: v.cambio ? '#dcfce7' : '#ffffff' }}
                      animate={{ opacity: 1, backgroundColor: v.cambio ? '#dcfce7' : '#ffffff' }}
                      transition={{ duration: 0.3 }}
                      className={clsx(
                        "border-b border-zinc-100 transition-colors duration-500",
                        v.cambio ? "bg-green-50" : ""
                      )}
                    >
                      <td className="px-4 py-2.5 font-mono text-zinc-800 font-semibold">{v.nombre}</td>
                      <td className="px-4 py-2.5 font-mono text-zinc-700">{v.valor}</td>
                      <td className="px-4 py-2.5 font-mono text-zinc-500 hidden sm:table-cell">{v.binario || '-'}</td>
                      <td className="px-4 py-2.5 text-zinc-600">
                        <div className="flex items-center gap-2">
                          {v.nota}
                          {v.cambio && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-200 text-green-800 tracking-wide uppercase">
                              ← cambió
                            </span>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
            
            {(!currentStep.variables || currentStep.variables.length === 0) && (
              <div className="p-4 text-center text-sm text-zinc-400 italic">
                Sin variables en este paso.
              </div>
            )}
          </div>

          {/* NOTA SOBRE RAM */}
          {currentStep.notaRAM && (
            <div className="shrink-0 bg-blue-50 border-t border-blue-100 p-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                  <Cpu size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Qué pasa en RAM en este momento:</h4>
                  <p className="text-sm text-blue-900 leading-relaxed">
                    {currentStep.notaRAM}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

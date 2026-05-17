export default {
  id: 'is_power_of_2',
  nombre: 'is_power_of_2',
  nivel: 2,
  dificultad: 'medio',
  tipoEntrega: 'funcion',
  archivosEsperados: ['is_power_of_2.c'],
  funcionesPermitidas: [],

  subject: `Assignment name  : is_power_of_2
Expected files   : is_power_of_2.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that determines whether a given number is a power of 2.

This function returns 1 if the given number is a power of 2, otherwise it
returns 0.

int\tis_power_of_2(unsigned int n);

Example:
is_power_of_2(1)   → 1  (2^0 = 1)
is_power_of_2(2)   → 1  (2^1)
is_power_of_2(8)   → 1  (2^3)
is_power_of_2(0)   → 0  (no es potencia de 2)
is_power_of_2(3)   → 0  (no es potencia de 2)`,

  descripcion: 'Función que devuelve 1 si n es potencia de 2, 0 si no. El truco bit a bit: una potencia de 2 tiene exactamente 1 bit activo. n & (n-1) pone ese bit a 0. Si el resultado es 0 (y n>0), es potencia de 2.',

  palacio: {
    habitacion: 'salon',
    mueble: 'lampara',
    personaje: 'El Detective de Potencias',
    emoji: '🔍',
    historia: `En el salón hay una Lámpara especial que solo brilla con potencias de 2.
El Detective sabe el truco secreto: las potencias de 2 tienen UN SOLO BIT encendido.
Y ese truco: n & (n-1) apaga exactamente ese bit. Si el resultado es 0, solo había un bit.
¡OJO! n=0 no es potencia de 2 (ningún bit encendido). Por eso: n > 0 primero.
La fórmula es: return (n > 0 && (n & (n - 1)) == 0).`,
    anclas: [
      "n > 0  ← 0 no es potencia de 2",
      "n & (n-1) == 0  ← si verdad, n tiene exactamente 1 bit",
      "potencias de 2: 1,2,4,8,16,32,64,128,...",
      "return 1 si sí, return 0 si no",
      "tipo: unsigned int (no int) — sin negativos",
    ],
  },

  herramientas: ['bits'],

  formulaClave: {
    descripcion: 'Una potencia de 2 tiene exactamente 1 bit encendido. n & (n-1) lo apaga.',
    formula: 'return (n > 0 && (n & (n - 1)) == 0);',
    ejemplo: {
      entrada: 'n=8 (1000)',
      calculo: 'n-1=7 (0111); 8 & 7 = 1000 & 0111 = 0000 = 0; n>0 && 0==0 → 1',
      resultado: '1',
    },
  },

  versiones: [
    {
      id: 'bitwise',
      nombre: 'Con n & (n-1)',
      descripcion: 'Solución de una línea usando el truco bit a bit. La más elegante.',
      recomendada: true,
      codigo: `int\tis_power_of_2(unsigned int n)
{
\treturn (n > 0 && (n & (n - 1)) == 0);
}`,
    },
    {
      id: 'bucle',
      nombre: 'Con bucle de división',
      descripcion: 'Divide por 2 hasta llegar a 1 o a un impar. Más larga pero más explícita.',
      recomendada: false,
      codigo: `int\tis_power_of_2(unsigned int n)
{
\tif (n == 0)
\t\treturn (0);
\twhile (n > 1)
\t{
\t\tif (n % 2 != 0)
\t\t\treturn (0);
\t\tn /= 2;
\t}
\treturn (1);
}`,
    },
  ],

  tests: [
    { id: 'test_uno', descripcion: '1 (2^0) → 1', entrada: ['1'], salida: '1\n', tipo: 'normal' },
    { id: 'test_dos', descripcion: '2 (2^1) → 1', entrada: ['2'], salida: '1\n', tipo: 'normal' },
    { id: 'test_ocho', descripcion: '8 (2^3) → 1', entrada: ['8'], salida: '1\n', tipo: 'normal' },
    { id: 'test_128', descripcion: '128 (2^7) → 1', entrada: ['128'], salida: '1\n', tipo: 'normal' },
    { id: 'test_cero', descripcion: '0 → 0 (no es potencia de 2)', entrada: ['0'], salida: '0\n', tipo: 'edge' },
    { id: 'test_tres', descripcion: '3 → 0 (no es potencia de 2)', entrada: ['3'], salida: '0\n', tipo: 'normal' },
    { id: 'test_siete', descripcion: '7 → 0 (no es potencia de 2)', entrada: ['7'], salida: '0\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'n=8 (1000 en binario)',
      codigo: `n = 8   → 1000
n - 1 = 7 → 0111
n & (n-1) = 1000 & 0111 = 0000 = 0
n > 0 → TRUE
(n & (n-1)) == 0 → TRUE
→ return 1 (es potencia de 2)`,
      variables: [
        { nombre: 'n', valor: '8 (1000)', cambio: false, nota: '' },
        { nombre: 'n-1', valor: '7 (0111)', cambio: false, nota: '' },
        { nombre: 'n & (n-1)', valor: '0 (0000)', cambio: true, nota: '← bit único apagado' },
        { nombre: 'retorno', valor: '1', cambio: true, nota: '✓ potencia de 2' },
      ],
    },
    {
      paso: 2,
      titulo: 'n=3 (0011 en binario) — NO es potencia de 2',
      codigo: `n = 3   → 0011
n - 1 = 2 → 0010
n & (n-1) = 0011 & 0010 = 0010 = 2 ≠ 0
→ return 0 (no es potencia de 2)`,
      variables: [
        { nombre: 'n', valor: '3 (0011)', cambio: false, nota: '← 2 bits activos' },
        { nombre: 'n & (n-1)', valor: '2 (0010) ≠ 0', cambio: true, nota: '← no es cero' },
        { nombre: 'retorno', valor: '0', cambio: true, nota: '' },
      ],
    },
    {
      paso: 3,
      titulo: 'n=0 — caso especial',
      codigo: `n = 0
n > 0 → FALSE
→ short-circuit: return 0
// 0 no es potencia de 2 — sin bits activos`,
      variables: [
        { nombre: 'n > 0', valor: 'FALSE', cambio: true, nota: '← cortocircuito' },
        { nombre: 'retorno', valor: '0', cambio: true, nota: '' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Olvidar la condición n > 0',
      descripcion: 'n=0 satisface (0 & -1) == 0 en algunos sistemas. La condición n > 0 es necesaria para excluir el 0.',
      codigoMal: `// ❌ n=0 da resultado incorrecto en algunos sistemas
return ((n & (n - 1)) == 0);  // 0 & UINT_MAX puede ser 0`,
      codigoBien: `// ✅
return (n > 0 && (n & (n - 1)) == 0);`,
    },
    {
      severidad: 'warning',
      titulo: 'Usar int en vez de unsigned int',
      descripcion: 'La firma usa unsigned int, que no tiene valores negativos. Con int, n-1 para n=0 sería -1 (underflow). unsigned int lo maneja de forma segura.',
      codigoMal: `// ⚠️ int puede causar underflow con n=0
int is_power_of_2(int n) { ... }`,
      codigoBien: `// ✅
int is_power_of_2(unsigned int n) { ... }`,
    },
    {
      severidad: 'warning',
      titulo: 'Retornar true/false en lugar de 1/0',
      descripcion: 'La función debe retornar exactamente 1 (es potencia) o 0 (no lo es), no -1, 2, etc.',
      codigoMal: `// ⚠️ retorna n & (n-1) que puede ser cualquier valor
return !(n & (n - 1));  // ! convierte a 0/1 — en realidad esto sí está bien`,
      codigoBien: `// ✅ Explícitamente 1 o 0
return (n > 0 && (n & (n - 1)) == 0);  // == 0 da 0 o 1`,
    },
  ],

  bajoCelCapot: `Las potencias de 2 en binario: 1=0001, 2=0010, 4=0100, 8=1000.
Solo tienen UN bit en 1. n-1 pone todos los bits por debajo de ese 1 a 1 y lo apaga.
AND bit a bit: n & (n-1) = 0 solo cuando n tiene exactamente un bit encendido.
Este truco es la base de muchos algoritmos de optimización de bits.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'La solución de una línea (n > 0 && (n & (n-1)) == 0) es contra-intuitiva. Sin haberla visto antes es casi imposible derivarla bajo presión.',
  relacionados: ['reverse_bits', 'swap_bits', 'print_bits'],
}

export default {
  id: 'ft_strcspn',
  nombre: 'ft_strcspn',
  nivel: 2,
  dificultad: 'medio',
  tipoEntrega: 'funcion',
  archivosEsperados: ['ft_strcspn.c'],
  funcionesPermitidas: [],

  subject: `Assignment name  : ft_strcspn
Expected files   : ft_strcspn.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that calculates the length of the initial segment of s1
which consists entirely of bytes not in s2.

int\tft_strcspn(char *s1, char *s2);

Example:
ft_strcspn("hello", "lo")  → 2 (h and e are not in "lo", l is)
ft_strcspn("hello", "xyz") → 5 (no chars from s2 in s1)`,

  descripcion: 'Función que devuelve la longitud del segmento inicial de s1 que NO contiene ningún carácter de s2. Es el índice del primer char de s1 que aparece en s2.',

  palacio: {
    habitacion: 'salon',
    mueble: 'puerta',
    personaje: 'El Guardia de la barricada',
    emoji: '🚧',
    historia: `En la puerta del salón hay un Guardia con una lista negra (s2).
El Guardia avanza por s1 y cuenta cuántos chars pasan sin estar en la lista.
En cuanto encuentra un char que SÍ está en s2, el Guardia para.
El número que cuenta = cuántos chars pasaron antes del primer problemático.
Si ningún char de s1 está en s2, devuelve la longitud total de s1.`,
    anclas: [
      "while s1[i] no está en s2: i++",
      "return i ← el índice del primer char de s2 en s1",
      "s2 vacío → todos pasan → return strlen(s1)",
      "s1 vacío → 0 chars pasan → return 0",
      "strcspn = Span of Characters NOT in s2",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'Cuenta bytes de s1 hasta encontrar uno que esté en s2',
    formula: 'while (s1[i] && !ft_strchr(s2, s1[i])) i++; return i;',
    ejemplo: {
      entrada: 's1="hello", s2="lo"',
      calculo: 'h: not in "lo" → i=1; e: not in "lo" → i=2; l: in "lo" → PARA',
      resultado: '2',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Con función auxiliar ft_isin()',
      descripcion: 'Separa la búsqueda en s2 en una función auxiliar. Más legible.',
      recomendada: true,
      codigo: `static int\tft_isin(char c, char *s2)
{
\tint\tj;

\tj = 0;
\twhile (s2[j])
\t{
\t\tif (s2[j] == c)
\t\t\treturn (1);
\t\tj++;
\t}
\treturn (0);
}

int\tft_strcspn(char *s1, char *s2)
{
\tint\ti;

\ti = 0;
\twhile (s1[i] && !ft_isin(s1[i], s2))
\t\ti++;
\treturn (i);
}`,
    },
    {
      id: 'doble_while',
      nombre: 'Con doble while anidado',
      descripcion: 'Implementa la búsqueda en s2 con un while interno. Sin función auxiliar.',
      recomendada: false,
      codigo: `int\tft_strcspn(char *s1, char *s2)
{
\tint\ti;
\tint\tj;

\ti = 0;
\twhile (s1[i])
\t{
\t\tj = 0;
\t\twhile (s2[j])
\t\t{
\t\t\tif (s1[i] == s2[j])
\t\t\t\treturn (i);
\t\t\tj++;
\t\t}
\t\ti++;
\t}
\treturn (i);
}`,
    },
  ],

  tests: [
    { id: 'test_hello_lo', descripcion: '"hello","lo" → 2 (h,e libres; l en lista)', entrada: ['hello', 'lo'], salida: '2\n', tipo: 'normal' },
    { id: 'test_sin_match', descripcion: '"hello","xyz" → 5 (ningún char de s2 en s1)', entrada: ['hello', 'xyz'], salida: '5\n', tipo: 'normal' },
    { id: 'test_primer_char', descripcion: '"hello","h" → 0 (primer char ya en s2)', entrada: ['hello', 'h'], salida: '0\n', tipo: 'edge' },
    { id: 'test_s1_vacio', descripcion: '"","abc" → 0 (s1 vacío)', entrada: ['', 'abc'], salida: '0\n', tipo: 'edge' },
    { id: 'test_s2_vacio', descripcion: '"hello","" → 5 (s2 vacío = ninguno en lista)', entrada: ['hello', ''], salida: '5\n', tipo: 'edge' },
    { id: 'test_ultimo', descripcion: '"hello","o" → 4 (solo la última "o" está en s2)', entrada: ['hello', 'o'], salida: '4\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 's1="hello", s2="lo", i=0',
      codigo: `s1[0]='h'
¿'h' está en s2="lo"? → busca en s2: l≠h, o≠h, \\0 → NO
i++ → i=1`,
      variables: [
        { nombre: 'i', valor: '1', cambio: true, nota: '' },
        { nombre: 's1[0]', valor: "'h': NO está en s2", cambio: false, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'i=1: "e" no está en s2',
      codigo: `s1[1]='e'
¿'e' en "lo"? l≠e, o≠e, \\0 → NO
i++ → i=2`,
      variables: [
        { nombre: 'i', valor: '2', cambio: true, nota: '' },
      ],
    },
    {
      paso: 3,
      titulo: 'i=2: "l" SÍ está en s2 → PARA',
      codigo: `s1[2]='l'
¿'l' en "lo"? l==l → SÍ ← ft_isin devuelve 1
!1 = 0 → condición FALSE → sale del while`,
      variables: [
        { nombre: 's1[2]', valor: "'l': SÍ está en s2", cambio: false, nota: '← El Guardia para' },
        { nombre: 'i', valor: '2', cambio: false, nota: '' },
      ],
    },
    {
      paso: 4,
      titulo: 'return i = 2',
      codigo: `return (2)
// "hello" tiene 2 chars (h,e) antes del primer char de "lo"`,
      variables: [
        { nombre: 'retorno', valor: '2', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Devolver i+1 o strlen(s1) en vez del índice correcto',
      descripcion: 'strcspn devuelve el índice del primer char de s2 en s1. Para "hello","lo" es 2 (índice de l), no 3.',
      codigoMal: `// ❌ Off-by-one
while (s1[i] && !ft_isin(s1[i], s2))
    i++;
return (i + 1);  // "hello","lo" → 3, debería ser 2`,
      codigoBien: `// ✅ Devolver i directamente
while (s1[i] && !ft_isin(s1[i], s2))
    i++;
return (i);  // índice del primer char de s2 en s1`,
    },
    {
      severidad: 'mortal',
      titulo: 'No verificar \\0 al final de s2 en la búsqueda interna',
      descripcion: 'El while interno sobre s2 debe parar en el \\0. Sin esa condición, lee memoria inválida.',
      codigoMal: `// ❌ Sin \\0 check en s2
while (s2[j] != s1[i])  // si s1[i] no está en s2, loop infinito`,
      codigoBien: `// ✅
while (s2[j] && s2[j] != s1[i])
    j++;
// si s2[j] == '\\0', s1[i] no está en s2`,
    },
    {
      severidad: 'warning',
      titulo: 's2 vacío → devolver strlen(s1) (todos los chars son válidos)',
      descripcion: 'Si s2="", ningún char de s1 está en s2. El while externo recorre s1 completo y devuelve su longitud.',
      codigoMal: `// Preocupación innecesaria — el código correcto ya maneja esto:
while (s1[i] && !ft_isin(s1[i], s2)) i++;
// si s2="" → ft_isin siempre devuelve 0 → i llega al final → return strlen(s1)`,
      codigoBien: `// No hay nada especial que hacer — el código genérico ya es correcto.`,
    },
  ],

  bajoCelCapot: `strcspn = "string complement span" (span de complemento).
Devuelve cuántos chars de s1 NO están en s2.
strspn (la función hermana) devuelve cuántos chars de s1 SÍ están en s2.
strcspn("hello","lo")=2, strspn("hello","hel")=4.
Se usa como building block de strtok y parsers.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El patrón "avanzar mientras char NO esté en un conjunto" es la base de strtok, ft_split y parsers de tokens.',
  relacionados: ['ft_strpbrk', 'ft_split', 'inter'],
}

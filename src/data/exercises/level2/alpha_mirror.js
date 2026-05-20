export default {
  id: 'alpha_mirror',
  nombre: 'alpha_mirror',
  nivel: 2,
  dificultad: 'medio',
  tipoEntrega: 'programa',
  archivosEsperados: ['alpha_mirror.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : alpha_mirror
Expected files   : alpha_mirror.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays it, replacing each
alphabetical character by the character that has the opposite position in the
alphabetical order.

'a' is replaced by 'z', 'b' by 'y', 'c' by 'x', ..., 'z' by 'a'.
Upper and lower case letters are handled separately.

Non-alphabetical characters are not changed.

If the number of arguments is not 1, display a newline.

Examples:
$> ./alpha_mirror "Hello World!"
Svool Dliow!
$> ./alpha_mirror ""

$>`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : alpha_mirror
Expected files   : alpha_mirror.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program called alpha_mirror that takes a string and displays this string
after replacing each alphabetical character by the opposite alphabetical
character, followed by a newline.

'a' becomes 'z', 'Z' becomes 'A'
'd' becomes 'w', 'M' becomes 'N'

and so on.

Case is not changed.

If the number of arguments is not 1, display only a newline.

Examples:

$>./alpha_mirror "abc"
zyx
$>./alpha_mirror "My horse is Amazing." | cat -e
Nb slihv rh Znzarmt.$
$>./alpha_mirror | cat -e
$
$>`,

  descripcion: 'Programa que espeja el alfabeto: a↔z, b↔y, ... z↔a. Mayúsculas y minúsculas por separado. Símbolos sin cambio.',

  palacio: {
    habitacion: 'salon',
    mueble: 'espejo',
    personaje: 'El Espejo del abecedario',
    emoji: '🔁',
    historia: `En el salón hay un Espejo Mágico del abecedario.
Cuando le das una 'a', te devuelve la 'z' (su opuesto).
Cuando le das una 'b', devuelve la 'y'. Cuando das 'z', devuelve 'a'.
Fórmula: la posición desde el final = 25 - (posición desde el inicio).
El espejo maneja mayúsculas y minúsculas por separado (A↔Z, a↔z).`,
    anclas: [
      "'z' - (c - 'a')  ← fórmula minúsculas",
      "'Z' - (c - 'A')  ← fórmula mayúsculas",
      "a↔z, b↔y, m↔n  ← el punto medio",
      "símbolos y espacios: sin cambio",
      "argc != 2 → solo \\n",
    ],
  },

  herramientas: ['strings', 'ascii'],

  formulaClave: {
    descripcion: 'Posición especular: 25 - posición_original',
    formula: "c = 'z' - (c - 'a')  ó equivalente  c = 'a' + 'z' - c",
    ejemplo: {
      entrada: "'H' (pos 7 desde A)",
      calculo: "'Z' - (72 - 65) = 90 - 7 = 83 = 'S'",
      resultado: "'S'",
    },
    tablaASCII: [
      { char: 'a', ascii: 97, calculo: '122-(97-97)=122', resultado: 'z' },
      { char: 'z', ascii: 122, calculo: '122-(122-97)=97', resultado: 'a' },
      { char: 'H', ascii: 72, calculo: '90-(72-65)=83', resultado: 'S' },
      { char: 'm', ascii: 109, calculo: '122-(109-97)=110', resultado: 'n' },
    ],
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica con fórmula de espejo',
      descripcion: 'La fórmula directa "z - (c - a)" es la más elegante y sin casos especiales.',
      recomendada: true,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tint\ti;
\tchar\tc;

\tif (argc != 2)
\t{
\t\twrite(1, "\\n", 1);
\t\treturn (0);
\t}
\ti = 0;
\twhile (argv[1][i])
\t{
\t\tc = argv[1][i];
\t\tif (c >= 'a' && c <= 'z')
\t\t\tc = 'z' - (c - 'a');
\t\telse if (c >= 'A' && c <= 'Z')
\t\t\tc = 'Z' - (c - 'A');
\t\twrite(1, &c, 1);
\t\ti++;
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'suma',
      nombre: 'Con suma directa',
      descripcion: "Equivalente: 'a' + 'z' - c = 97 + 122 - c = 219 - c.",
      recomendada: false,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tint\ti;
\tchar\tc;

\tif (argc != 2)
\t\treturn (write(1, "\\n", 1), 0);
\ti = 0;
\twhile (argv[1][i])
\t{
\t\tc = argv[1][i];
\t\tif (c >= 'a' && c <= 'z')
\t\t\tc = 'a' + 'z' - c;
\t\telse if (c >= 'A' && c <= 'Z')
\t\t\tc = 'A' + 'Z' - c;
\t\twrite(1, &c, 1);
\t\ti++;
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
  ],

  tests: [
    { id: 'test_abc', descripcion: '"abc" → "zyx"', entrada: ['abc'], salida: 'zyx\n', tipo: 'normal' },
    { id: 'test_hello', descripcion: '"Hello" → "Svool"', entrada: ['Hello'], salida: 'Svool\n', tipo: 'normal' },
    { id: 'test_az', descripcion: '"Az" → "Za" (extremos del alfabeto)', entrada: ['Az'], salida: 'Za\n', tipo: 'edge' },
    { id: 'test_mn', descripcion: '"mn" → "nm" (punto medio del alfabeto)', entrada: ['mn'], salida: 'nm\n', tipo: 'normal' },
    { id: 'test_simbolos', descripcion: '"hello world!" → "svool dliow!" (símbolos sin cambio)', entrada: ['hello world!'], salida: 'svool dliow!\n', tipo: 'normal' },
    { id: 'test_sin_args', descripcion: 'Sin argumentos → solo \\n', entrada: [], salida: '\n', tipo: 'edge' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Entrada: "abc"',
      codigo: `argc=2, argv[1]="abc"
i=0, c='a'(97)
c >= 'a' && c <= 'z' → TRUE
c = 'z' - ('a' - 'a') = 122 - 0 = 122 = 'z'
write 'z'`,
      variables: [
        { nombre: 'c', valor: "'a'(97) → 'z'(122)", cambio: true, nota: '97-97=0, 122-0=122' },
        { nombre: 'stdout', valor: '"z"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'i=1: "b"(98) → "y"(121)',
      codigo: `c = 'b' (98)
c = 'z' - ('b' - 'a') = 122 - 1 = 121 = 'y'
write 'y'`,
      variables: [
        { nombre: 'c', valor: "'b'(98) → 'y'(121)", cambio: true, nota: '98-97=1, 122-1=121' },
      ],
    },
    {
      paso: 3,
      titulo: 'i=2: "c"(99) → "x"(120)',
      codigo: `c = 'c' (99)
c = 'z' - ('c' - 'a') = 122 - 2 = 120 = 'x'
write 'x'
stdout: "zyx\\n"`,
      variables: [
        { nombre: 'stdout', valor: '"zyx\\n"', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Mezclar rangos mayúsculas/minúsculas',
      descripcion: "c = 'z' - (c - 'a') para mayúsculas da resultados erróneos. 'A'(65) - 'a'(97) = -32 → 122-(-32) = 154, fuera de ASCII.",
      codigoMal: `// ❌ Usa offset de minúscula para mayúsculas
if (c >= 'A' && c <= 'Z')
    c = 'z' - (c - 'a');  // 'A'(65)-'a'(97)=-32 → 122+32=154 ← fuera de rango`,
      codigoBien: `// ✅ Cada rango con su propia base
if (c >= 'A' && c <= 'Z')
    c = 'Z' - (c - 'A');  // 'A'(65)-'A'(65)=0 → 90-0=90='Z' ✓`,
    },
    {
      severidad: 'warning',
      titulo: 'alpha_mirror vs rot_13: la fórmula no es la misma',
      descripcion: "ROT13 suma 13. alpha_mirror hace 'z'-posicion (espejo). Son cifrados distintos. No confundirlos.",
      codigoMal: `// ❌ ROT13, no alpha_mirror
c = 'a' + (c - 'a' + 13) % 26;`,
      codigoBien: `// ✅ alpha_mirror (espejo del alfabeto)
c = 'z' - (c - 'a');`,
    },
  ],

  bajoCelCapot: `Posición de 'a' = 0, 'b' = 1, ..., 'z' = 25.
Espejo: posición_nueva = 25 - posición_original.
Equivalencias: 'z' - (c - 'a') = 'a' + 'z' - c = 219 - c (para minúsculas).
Es su propio inverso: aplicar dos veces da el original.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'La fórmula de espejo "z-(c-a)" aparece también en cifrados simétricos y manipulaciones de rango alfabético.',
  relacionados: ['rot_13', 'rotone', 'ulstr'],
}

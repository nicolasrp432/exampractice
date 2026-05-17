export default {
  id: 'rotone',
  nombre: 'rotone',
  nivel: 1,
  dificultad: 'fácil',
  tipoEntrega: 'programa',
  archivosEsperados: ['rotone.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : rotone
Expected files   : rotone.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays it, with each of its
alphabetical characters converted to the next one in alphabetical order.

'z' becomes 'a', 'Z' becomes 'A'.

Non-alphabetical characters are not modified.

If the number of arguments is not 1, display only a newline.

Examples:
$> ./rotone "Hello World !"
Ifmmp Xpsme !
$> ./rotone ""

$>`,

  descripcion: 'Programa que rota cada letra +1 en el alfabeto (a→b, y→z, z→a). Mayúsculas y minúsculas se tratan por separado. Símbolos sin cambio.',

  palacio: {
    habitacion: 'cocina',
    mueble: 'especiero',
    personaje: 'El Ratón Teletransportador',
    emoji: '🐀',
    historia: `En el especiero de la cocina vive el Ratón Teletransportador.
Cada letra que toca la desplaza UN PELDAÑO adelante en el alfabeto.
Si la letra está en la última posición (z o Z) ¡salta al inicio! (→ a o A).
Los símbolos y números no los toca: no son su territorio.
Fórmula mental: letra + 1, pero z → a (el abecedario es circular).`,
    anclas: [
      "'z' → 'a'  ← caso especial minúscula",
      "'Z' → 'A'  ← caso especial mayúscula",
      "c + 1  ← todos los demás",
      "símbolos: sin cambio",
      "argc != 2 → solo \\n",
    ],
  },

  herramientas: ['strings', 'ascii', 'argc'],

  formulaClave: {
    descripcion: 'Desplazamiento +1 con wrap en z/Z',
    formula: "if (c == 'z') 'a'; else if (c == 'Z') 'A'; else c + 1;",
    ejemplo: {
      entrada: '"hello"',
      calculo: 'h→i e→f l→m l→m o→p',
      resultado: 'ifmmp',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica con casos especiales explícitos',
      descripcion: 'La más legible: comprueba z y Z primero, luego el rango general.',
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
\t\tif (c == 'z')
\t\t\tc = 'a';
\t\telse if (c == 'Z')
\t\t\tc = 'A';
\t\telse if ((c >= 'a' && c <= 'y') || (c >= 'A' && c <= 'Y'))
\t\t\tc = c + 1;
\t\twrite(1, &c, 1);
\t\ti++;
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'con_rangos',
      nombre: 'Con rangos y wrap aritmético',
      descripcion: 'Usa modulo aritmético para el wrap. Menos intuitiva pero válida.',
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
\t\t\tc = 'a' + (c - 'a' + 1) % 26;
\t\telse if (c >= 'A' && c <= 'Z')
\t\t\tc = 'A' + (c - 'A' + 1) % 26;
\t\twrite(1, &c, 1);
\t\ti++;
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
  ],

  tests: [
    {
      id: 'test_hello',
      descripcion: '"hello" → h+1=i, e+1=f, l+1=m, l+1=m, o+1=p',
      entrada: ['hello'],
      salida: 'ifmmp\n',
      tipo: 'normal',
    },
    {
      id: 'test_wrap_min',
      descripcion: '"xyz" → y+1=z, z→a (wrap)',
      entrada: ['xyz'],
      salida: 'yza\n',
      tipo: 'edge',
    },
    {
      id: 'test_mayus',
      descripcion: '"ABC" → A+1=B, B+1=C, C+1=D',
      entrada: ['ABC'],
      salida: 'BCD\n',
      tipo: 'normal',
    },
    {
      id: 'test_wrap_mayus',
      descripcion: '"XYZ" → Z→A (wrap mayúscula)',
      entrada: ['XYZ'],
      salida: 'YZA\n',
      tipo: 'edge',
    },
    {
      id: 'test_simbolos',
      descripcion: '"hello 42!" → letras rotan, símbolos sin cambio',
      entrada: ['hello 42!'],
      salida: 'ifmmp 42!\n',
      tipo: 'normal',
    },
    {
      id: 'test_sin_args',
      descripcion: 'Sin argumentos → solo \\n',
      entrada: [],
      salida: '\n',
      tipo: 'edge',
    },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Entrada: "xyz"',
      codigo: `argc=2, argv[1]="xyz"
i = 0`,
      variables: [
        { nombre: 'argv[1]', valor: '"xyz"', cambio: true, nota: '' },
        { nombre: 'i', valor: '0', cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'c = "x" → x+1=y (ASCII 120→121)',
      codigo: `c = argv[1][0] = 'x' (120)
if (c=='z') → NO
if (c=='Z') → NO
if (c>='a' && c<='y') → 120>='a' && 120<='y' → TRUE
c = c + 1 = 121 = 'y'
write 'y'`,
      variables: [
        { nombre: 'c', valor: "'x'→'y'", cambio: true, nota: 'ASCII 120→121' },
        { nombre: 'stdout', valor: '"y"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 3,
      titulo: 'c = "y" → y+1=z (no es z todavía)',
      codigo: `c = 'y' (121)
if (c=='z') → NO (121 ≠ 122)
if (c>='a' && c<='y') → TRUE (121=121=y ✓)
c = c + 1 = 122 = 'z'
write 'z'`,
      variables: [
        { nombre: 'c', valor: "'y'→'z'", cambio: true, nota: '121→122' },
        { nombre: 'stdout', valor: '"yz"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 4,
      titulo: 'c = "z" → z→a (¡caso especial wrap!)',
      codigo: `c = 'z' (122)
if (c == 'z') → TRUE ← caso especial
c = 'a'       ← wrap al inicio del abecedario
write 'a'`,
      variables: [
        { nombre: 'c', valor: "'z'→'a'", cambio: true, nota: '← El wrap. Sin esto daría "{" (ASCII 123)' },
        { nombre: 'stdout', valor: '"yza"', cambio: true, nota: '✓ Resultado correcto' },
      ],
    },
    {
      paso: 5,
      titulo: 'argv[1][3] = \\0 → sale, write \\n',
      codigo: `i=3, argv[1][3]='\\0' → while FALSE → sale
write("\\n", 1)`,
      variables: [
        { nombre: 'stdout', valor: '"yza\\n"', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'No manejar z→a: c+1 daría "{" (ASCII 123)',
      descripcion: '"z" tiene ASCII 122. z+1 = 123 = "{". Si no capturas el caso especial z→a, la salida para "xyz" será "yz{" en vez de "yza".',
      codigoMal: `// ❌ Sin caso especial para z
if (c >= 'a' && c <= 'z')
    c = c + 1;  // 'z'+1 = '{', no 'a'`,
      codigoBien: `// ✅ Caso especial primero
if (c == 'z')
    c = 'a';
else if (c >= 'a' && c <= 'y')
    c = c + 1;`,
    },
    {
      severidad: 'mortal',
      titulo: 'No tratar mayúsculas por separado: Z→A, no Z→a',
      descripcion: 'Mayúsculas y minúsculas tienen rangos ASCII distintos (65-90 y 97-122). Z+1=91 es "[". El wrap de Z debe ir a A (65), no a a (97).',
      codigoMal: `// ❌ Mezcla mayúsculas y minúsculas
if (c == 'z' || c == 'Z')
    c = 'a';  // Z→a es incorrecto (debería ser 'A')`,
      codigoBien: `// ✅ Separados
if (c == 'z') c = 'a';
if (c == 'Z') c = 'A';  // mayúscula → mayúscula`,
    },
    {
      severidad: 'warning',
      titulo: 'Imprimir directamente argv[1][i]+1 sin guardar en c',
      descripcion: 'write() necesita una dirección (&c). No puedes hacer write(1, &(argv[1][i]+1), 1) porque argv[1][i]+1 es un valor temporal, no una variable.',
      codigoMal: `// ❌ No compila o UB
write(1, &(argv[1][i] + 1), 1); // valor temporal, no variable`,
      codigoBien: `// ✅ Guarda en variable primero
char c = argv[1][i] + 1;
write(1, &c, 1);`,
    },
  ],

  bajoCelCapot: `ASCII: 'a'=97, 'z'=122, 'A'=65, 'Z'=90.
'z'+1 = 123 = '{' — no es una letra.
Por eso el wrap debe ser explícito: si c=='z' → c='a'.
La versión con módulo: 'a' + (c-'a'+1)%26 evita el caso especial pero es menos legible.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El wrap circular del alfabeto aparece en rot_13, alpha_mirror, y cualquier cifrado de sustitución.',
  relacionados: ['rot_13', 'alpha_mirror'],
}

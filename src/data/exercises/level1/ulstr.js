export default {
  id: 'ulstr',
  nombre: 'ulstr',
  nivel: 1,
  dificultad: 'fácil',
  tipoEntrega: 'programa',
  archivosEsperados: ['ulstr.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : ulstr
Expected files   : ulstr.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and swaps the case of every alphabetical
character, then displays the result followed by a newline.

If the number of arguments is not 1, display a newline.

Examples:
$> ./ulstr "Hello World"
hELLO wORLD
$> ./ulstr "L'heure c'est l'heure"
l'HEURE C'EST L'HEURE
$>`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : ulstr
Expected files   : ulstr.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and reverses the case of all its letters.
Other characters remain unchanged.

You must display the result followed by a '\\n'.

If the number of arguments is not 1, the program displays '\\n'.

Examples :

$>./ulstr "L'eSPrit nE peUt plUs pRogResSer s'Il staGne et sI peRsIsTent VAnIte et auto-justification." | cat -e
l'EspRIT Ne PEuT PLuS PrOGrESsER S'iL STAgNE ET Si PErSiStENT vaNiTE ET AUTO-JUSTIFICATION.$
$>./ulstr "S'enTOuRer dE sECreT eSt uN sIGnE De mAnQuE De coNNaiSSanCe.  " | cat -e
s'ENtoUrER De SecREt EsT Un SigNe dE MaNqUe dE COnnAIssANcE.  $
$>./ulstr "3:21 Ba  tOut  moUn ki Ka di KE m'en Ka fe fot" | cat -e
3:21 bA  ToUT  MOuN KI kA DI ke M'EN kA FE FOT$
$>./ulstr | cat -e
$`,

  descripcion: 'Programa que intercambia el case de cada carácter: mayúsculas pasan a minúsculas y minúsculas a mayúsculas. Los no-alfabéticos no cambian.',

  palacio: {
    habitacion: 'cocina',
    mueble: 'batidora',
    personaje: 'Ultrón igualador',
    emoji: '🔄',
    historia: `En la batidora de la cocina vive Ultrón igualador.
Todo lo que entra sale con el case INVERTIDO.
Las mayúsculas se BAJAN y las minúsculas se SUBEN.
Los símbolos, espacios y números: los deja pasar sin tocarlos.
Fórmula: si mayúscula → toLowerCase(); si minúscula → toUpperCase().`,
    anclas: [
      "c >= 'A' && c <= 'Z' → c + 32  ← mayúscula→minúscula",
      "c >= 'a' && c <= 'z' → c - 32  ← minúscula→mayúscula",
      "símbolos/espacios → sin cambio",
      "argc != 2 → solo \\n",
      "+32 y -32 = diferencia ASCII entre mayúscula y minúscula",
    ],
  },

  herramientas: ['strings', 'ascii'],

  formulaClave: {
    descripcion: 'La diferencia ASCII entre mayúscula y minúscula es siempre 32',
    formula: "mayúscula: c + 32; minúscula: c - 32;",
    ejemplo: {
      entrada: "'H' (72) y 'e' (101)",
      calculo: 'H: 72 + 32 = 104 = h; e: 101 - 32 = 69 = E',
      resultado: 'h, E',
    },
    tablaASCII: [
      { char: 'A', ascii: 65, calculo: '65+32', resultado: 'a (97)' },
      { char: 'Z', ascii: 90, calculo: '90+32', resultado: 'z (122)' },
      { char: 'a', ascii: 97, calculo: '97-32', resultado: 'A (65)' },
      { char: 'z', ascii: 122, calculo: '122-32', resultado: 'Z (90)' },
    ],
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica con +32 / -32',
      descripcion: 'Usa la diferencia ASCII 32 entre mayúsculas y minúsculas. La más directa.',
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
\t\tif (c >= 'A' && c <= 'Z')
\t\t\tc = c + 32;
\t\telse if (c >= 'a' && c <= 'z')
\t\t\tc = c - 32;
\t\twrite(1, &c, 1);
\t\ti++;
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'con_constante',
      nombre: 'Con constante nombrada',
      descripcion: 'Define la diferencia ASCII como constante para mayor claridad.',
      recomendada: false,
      codigo: `#include <unistd.h>

# define CASE_DIFF 32

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
\t\tif (c >= 'A' && c <= 'Z')
\t\t\tc += CASE_DIFF;
\t\telse if (c >= 'a' && c <= 'z')
\t\t\tc -= CASE_DIFF;
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
      descripcion: '"Hello" → "hELLO" (H→h, e→E, l→L, l→L, o→O)',
      entrada: ['Hello'],
      salida: 'hELLO\n',
      tipo: 'normal',
    },
    {
      id: 'test_lower',
      descripcion: '"hello" → "HELLO" (todas minúsculas → todas mayúsculas)',
      entrada: ['hello'],
      salida: 'HELLO\n',
      tipo: 'normal',
    },
    {
      id: 'test_upper',
      descripcion: '"HELLO" → "hello" (todas mayúsculas → todas minúsculas)',
      entrada: ['HELLO'],
      salida: 'hello\n',
      tipo: 'normal',
    },
    {
      id: 'test_con_espacio',
      descripcion: '"Hello World" → "hELLO wORLD"',
      entrada: ['Hello World'],
      salida: 'hELLO wORLD\n',
      tipo: 'normal',
    },
    {
      id: 'test_numeros',
      descripcion: '"42abc" → "42ABC" (dígitos sin cambio)',
      entrada: ['42abc'],
      salida: '42ABC\n',
      tipo: 'normal',
    },
    {
      id: 'test_sin_args',
      descripcion: 'Sin argumentos → solo \\n',
      entrada: [],
      salida: '\n',
      tipo: 'edge',
    },
    {
      id: 'test_vacio',
      descripcion: 'String vacío → solo \\n',
      entrada: [''],
      salida: '\n',
      tipo: 'edge',
    },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Entrada: "Hello"',
      codigo: `argc=2, argv[1]="Hello"
i = 0`,
      variables: [
        { nombre: 'argv[1]', valor: '"Hello"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: '"H" (72) → mayúscula → +32 → "h" (104)',
      codigo: `c = 'H' (72)
c >= 'A' && c <= 'Z' → TRUE
c = 72 + 32 = 104 = 'h'
write 'h'`,
      variables: [
        { nombre: 'c', valor: "'H'(72) → 'h'(104)", cambio: true, nota: '72+32=104' },
        { nombre: 'stdout', valor: '"h"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 3,
      titulo: '"e" (101) → minúscula → -32 → "E" (69)',
      codigo: `c = 'e' (101)
c >= 'a' && c <= 'z' → TRUE
c = 101 - 32 = 69 = 'E'
write 'E'`,
      variables: [
        { nombre: 'c', valor: "'e'(101) → 'E'(69)", cambio: true, nota: '101-32=69' },
        { nombre: 'stdout', valor: '"hE"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 4,
      titulo: '"l" → "L", "l" → "L", "o" → "O"',
      codigo: `[i=2] 'l'(108) -32 → 'L'(76) → stdout: "hEL"
[i=3] 'l'(108) -32 → 'L'(76) → stdout: "hELL"
[i=4] 'o'(111) -32 → 'O'(79) → stdout: "hELLO"`,
      variables: [
        { nombre: 'stdout', valor: '"hELLO"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 5,
      titulo: '\\0 → sale, write \\n',
      codigo: `argv[1][5] = '\\0' → FALSE → sale
write("\\n", 1)
stdout: "hELLO\\n"`,
      variables: [
        { nombre: 'stdout', valor: '"hELLO\\n"', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: '+32 en vez de -32 para minúsculas — van más abajo del rango',
      descripcion: "'a'(97)+32=129, que está fuera del rango ASCII imprimible. Las minúsculas deben RESTAR 32 para ir a mayúsculas.",
      codigoMal: `// ❌ minúscula +32 → carácter no imprimible
if (c >= 'a' && c <= 'z')
    c = c + 32; // 'a'(97)+32=129 ← fuera de ASCII`,
      codigoBien: `// ✅ minúscula -32 → mayúscula
if (c >= 'a' && c <= 'z')
    c = c - 32; // 'a'(97)-32=65='A' ✓`,
    },
    {
      severidad: 'mortal',
      titulo: '-32 para mayúsculas en vez de +32 — dan caracteres de control',
      descripcion: "'A'(65)-32=33='!'. Las mayúsculas deben SUMAR 32 para ir a minúsculas.",
      codigoMal: `// ❌ mayúscula -32 → signo de puntuación
if (c >= 'A' && c <= 'Z')
    c = c - 32; // 'A'(65)-32=33='!' ← MALO`,
      codigoBien: `// ✅ mayúscula +32 → minúscula
if (c >= 'A' && c <= 'Z')
    c = c + 32; // 'A'(65)+32=97='a' ✓`,
    },
    {
      severidad: 'warning',
      titulo: 'Olvidar el else — símbolos procesados por ambas ramas',
      descripcion: 'Si usas if sin else if, un carácter que no sea letra podría entrar por las dos condiciones y cambiar incorrectamente.',
      codigoMal: `// ❌ sin else — doble procesamiento (aunque aquí el rango evita el problema en práctica, es mala forma)
if (c >= 'A' && c <= 'Z') c += 32;
if (c >= 'a' && c <= 'z') c -= 32;  // after +32, 'A' → 'a' might re-enter`,
      codigoBien: `// ✅ con else if — mutuamente exclusivo
if (c >= 'A' && c <= 'Z')
    c += 32;
else if (c >= 'a' && c <= 'z')
    c -= 32;`,
    },
  ],

  bajoCelCapot: `El alfabeto ASCII está organizado de forma que la diferencia entre
una letra mayúscula y su minúscula es siempre 32:
'a'-'A' = 97-65 = 32
'z'-'Z' = 122-90 = 32
El bit 5 (valor 32) es el bit de case: 0=mayúscula, 1=minúscula.
Por eso XOR con 32 también haría el swap: c ^= 32 (si es letra).`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'La constante 32 entre mayúscula/minúscula aparece en casi todos los ejercicios que manipulan letras: str_capitalizer, rstr_capitalizer, is_alpha.',
  relacionados: ['str_capitalizer', 'rotone', 'alpha_mirror'],
}

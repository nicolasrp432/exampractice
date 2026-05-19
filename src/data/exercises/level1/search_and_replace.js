export default {
  id: 'search_and_replace',
  nombre: 'search_and_replace',
  nivel: 1,
  dificultad: 'medio',
  tipoEntrega: 'programa',
  archivosEsperados: ['search_and_replace.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : search_and_replace
Expected files   : search_and_replace.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes 3 arguments:
  - A string in which to make replacements.
  - The character to search for (given as a string, only the first char counts).
  - The replacement character (given as a string, only the first char counts).

The replacement must be done in the order they appear in the string.

If the number of arguments is not 3, or if the second or third argument is
not a single character, print only a newline.

Example:
$> ./search_and_replace "hello" "l" "r"
herro
$> ./search_and_replace "hello" "x" "r"
hello
$>`,

  descripcion: 'Programa que reemplaza todas las ocurrencias de un carácter en un string. Recibe 3 args: string, char a buscar, char de reemplazo.',

  palacio: {
    habitacion: 'cocina',
    mueble: 'tabla de cortar',
    personaje: 'El Ninja Reemplazador',
    emoji: '🥷',
    historia: `En la tabla de cortar trabaja el Ninja Reemplazador.
Le das el string (la lista de ingredientes), el ingrediente a quitar (search) y el nuevo (replace).
Recorre la lista de principio a fin.
Cuando encuentra el ingrediente a quitar, lo sustituye por el nuevo.
Si no lo encuentra, deja el ingrediente sin tocar.
¡Solo acepta EXACTAMENTE 3 argumentos! Con más o menos, huye.`,
    anclas: [
      "argc != 3 → solo \\n y exit",
      "search = argv[2][0] ← solo el primer char",
      "replace = argv[3][0] ← solo el primer char",
      "if (c == search) write replace; else write c;",
      "recorre argv[1] byte a byte",
    ],
  },

  herramientas: ['strings', 'argc'],

  formulaClave: {
    descripcion: 'Por cada carácter: si es el buscado, escribe el reemplazo; si no, escribe el original',
    formula: "if (str[i] == search) write(replace); else write(str[i]);",
    ejemplo: {
      entrada: '"hello", search="l", replace="r"',
      calculo: 'h→h e→e l→r l→r o→o',
      resultado: 'herro',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica',
      descripcion: 'La más directa y legible en el examen.',
      recomendada: true,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tchar\tsearch;
\tchar\treplace;
\tint\ti;

\tif (argc != 4)
\t{
\t\twrite(1, "\\n", 1);
\t\treturn (0);
\t}
\tsearch = argv[2][0];
\treplace = argv[3][0];
\ti = 0;
\twhile (argv[1][i])
\t{
\t\tif (argv[1][i] == search)
\t\t\twrite(1, &replace, 1);
\t\telse
\t\t\twrite(1, &argv[1][i], 1);
\t\ti++;
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'punteros',
      nombre: 'Con puntero y validación explícita',
      descripcion: 'Recorre el string con un puntero y valida que search y replace sean de un solo carácter.',
      recomendada: false,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tchar\t*s;
\tchar\tsearch;
\tchar\treplace;

\tif (argc != 4 || !argv[2][0] || argv[2][1] || !argv[3][0] || argv[3][1])
\t{
\t\twrite(1, "\\n", 1);
\t\treturn (0);
\t}
\ts = argv[1];
\tsearch = argv[2][0];
\treplace = argv[3][0];
\twhile (*s)
\t{
\t\tif (*s == search)
\t\t\twrite(1, &replace, 1);
\t\telse
\t\t\twrite(1, s, 1);
\t\ts++;
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
  ],

  tests: [
    {
      id: 'test_hello_lr',
      descripcion: '"hello" l→r → "herro"',
      entrada: ['hello', 'l', 'r'],
      salida: 'herro\n',
      tipo: 'normal',
    },
    {
      id: 'test_no_match',
      descripcion: '"hello" x→r → sin cambios',
      entrada: ['hello', 'x', 'r'],
      salida: 'hello\n',
      tipo: 'normal',
    },
    {
      id: 'test_reemplaza_todos',
      descripcion: '"hello world" o→a → "hella warld"',
      entrada: ['hello world', 'o', 'a'],
      salida: 'hella warld\n',
      tipo: 'normal',
    },
    {
      id: 'test_bad_args',
      descripcion: 'Sin argumentos → error',
      entrada: [],
      salida: 'search_and_replace: bad arguments\n',
      tipo: 'edge',
    },
    {
      id: 'test_bad_args2',
      descripcion: 'Un solo argumento → error',
      entrada: ['hello'],
      salida: 'search_and_replace: bad arguments\n',
      tipo: 'edge',
    },
    {
      id: 'test_primer_char',
      descripcion: 'search="HH" → solo usa el primer char "H"',
      entrada: ['Hello', 'H', 'h'],
      salida: 'hello\n',
      tipo: 'normal',
    },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Entrada: "hello", "l", "r" → argc=4',
      codigo: `argc=4, argv[1]="hello", argv[2]="l", argv[3]="r"
search = argv[2][0] = 'l'
replace = argv[3][0] = 'r'
i = 0`,
      variables: [
        { nombre: 'argc', valor: '4', cambio: true, nota: '✓ Correcto: programa + 3 args' },
        { nombre: 'search', valor: "'l'", cambio: true, nota: '' },
        { nombre: 'replace', valor: "'r'", cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'i=0: "h" ≠ "l" → escribe "h"',
      codigo: `argv[1][0] = 'h'
'h' == 'l' → FALSE
write(1, &argv[1][0], 1) → stdout: "h"
i = 1`,
      variables: [
        { nombre: 'stdout', valor: '"h"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 3,
      titulo: 'i=1: "e" ≠ "l" → escribe "e". i=2: "l" == "l" → escribe "r"',
      codigo: `[i=1] 'e' ≠ 'l' → write 'e' → stdout: "he"
[i=2] 'l' == 'l' → write REPLACE='r' → stdout: "her"`,
      variables: [
        { nombre: 'stdout', valor: '"her"', cambio: true, nota: 'Primera "l" reemplazada por "r"' },
      ],
    },
    {
      paso: 4,
      titulo: 'i=3: segunda "l" → escribe "r". i=4: "o" → escribe "o"',
      codigo: `[i=3] 'l' == 'l' → write 'r' → stdout: "herr"
[i=4] 'o' ≠ 'l' → write 'o' → stdout: "herro"`,
      variables: [
        { nombre: 'stdout', valor: '"herro"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 5,
      titulo: '\\0 → sale del while, write \\n',
      codigo: `argv[1][5] = '\\0' → FALSE → sale
write("\\n", 1)
stdout: "herro\\n"`,
      variables: [
        { nombre: 'stdout', valor: '"herro\\n"', cambio: true, nota: '✓ Resultado correcto' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'argc != 3 en vez de argc != 4 (el programa mismo cuenta)',
      descripcion: 'argc incluye el nombre del programa (argv[0]). Con 3 argumentos del usuario, argc = 4. Si compruebas argc != 3 o argc != 2, el programa siempre falla.',
      codigoMal: `// ❌ Confunde argc: programa+3args = argc=4
if (argc != 3)  // nunca ejecuta con 3 args reales`,
      codigoBien: `// ✅ argc=4 con 3 argumentos de usuario
if (argc != 4)  // correcto: ./prog str search replace`,
    },
    {
      severidad: 'mortal',
      titulo: 'write(1, &replace, 1) donde replace es un char local',
      descripcion: 'write necesita una dirección. Si escribes write(1, argv[3], 1) está bien (ya es un char*). Pero si intentas write(1, &(argv[3][0]), 1) también funciona. El problema es pasar un literal directamente.',
      codigoMal: `// ❌ No funciona: literal no tiene dirección tomable fácilmente
write(1, "r", 1);  // escribe siempre 'r', no el replace de argv`,
      codigoBien: `// ✅ Variable local con &
char replace = argv[3][0];
write(1, &replace, 1);  // correcto`,
    },
    {
      severidad: 'warning',
      titulo: 'No añadir \\n al final',
      descripcion: 'La salida debe terminar en \\n según las normas de 42. Sin él, la Moulinette compara byte a byte y falla.',
      codigoMal: `// ❌ Sin \\n
while (argv[1][i])
    // ...imprime chars
return (0); // sin write("\\n", 1)`,
      codigoBien: `// ✅ \\n siempre al final
while (argv[1][i]) { /* ... */ i++; }
write(1, "\\n", 1);
return (0);`,
    },
  ],

  bajoCelCapot: `argv[2][0] accede al primer byte del tercer argumento.
Si argv[2] = "lll", solo se usa argv[2][0] = 'l'.
La búsqueda es O(n): recorre el string una sola vez.
Es una versión simplificada de sed s/old/new/g.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'Patrón de transformación carácter a carácter. Base conceptual de ft_strchr, ft_strrchr, inter, union.',
  relacionados: ['inter', 'union', 'ft_strcspn'],
}

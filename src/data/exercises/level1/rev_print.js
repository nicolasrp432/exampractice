export default {
  id: 'rev_print',
  nombre: 'rev_print',
  nivel: 1,
  dificultad: 'fácil',
  tipoEntrega: 'programa',
  archivosEsperados: ['rev_print.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : rev_print
Expected files   : rev_print.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string, and displays the string in reverse,
followed by a newline.

If the number of arguments is not 1, display only a newline.

Examples:
$> ./rev_print "Hello World"
dlroW olleH
$> ./rev_print ""

$>`,

  descripcion: 'Programa que imprime el string al revés (desde el último carácter hasta el primero) seguido de \\n. Con argc != 2, solo \\n.',

  palacio: {
    habitacion: 'cocina',
    mueble: 'espejo',
    personaje: 'El Reverendo Moonwalk',
    emoji: '🕺',
    historia: `En el espejo de la cocina vive el Reverendo Moonwalk.
Cuando le das un string, él camina HACIA ATRÁS imprimiendo cada letra.
Primero busca el FINAL del string con ft_strlen (o un while).
Luego retrocede desde i = len-1 hasta i = 0.
¡El espejo NO miente: invierte hasta el último char, incluidos espacios!`,
    anclas: [
      "i = ft_strlen(str) - 1  ← empieza al final",
      "while (i >= 0) write & i--",
      "string vacío → escribe solo \\n",
      "argc != 2 → solo \\n",
      "¡incluye espacios en el reverso!",
    ],
  },

  herramientas: ['strings', 'argc'],

  formulaClave: {
    descripcion: 'Busca el final, itera hacia atrás',
    formula: 'i = len - 1; while (i >= 0) { write(str[i]); i--; }',
    ejemplo: {
      entrada: '"abc"',
      calculo: 'len=3, i=2→c, i=1→b, i=0→a → "cba"',
      resultado: 'cba',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica con longitud precalculada',
      descripcion: 'Calcula la longitud primero con un while, luego recorre hacia atrás.',
      recomendada: true,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tint\ti;

\tif (argc != 2)
\t{
\t\twrite(1, "\\n", 1);
\t\treturn (0);
\t}
\ti = 0;
\twhile (argv[1][i])
\t\ti++;
\ti--;
\twhile (i >= 0)
\t{
\t\twrite(1, &argv[1][i], 1);
\t\ti--;
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
  ],

  tests: [
    {
      id: 'test_hello',
      descripcion: '"hello" → "olleh"',
      entrada: ['hello'],
      salida: 'olleh\n',
      tipo: 'normal',
    },
    {
      id: 'test_con_espacio',
      descripcion: '"Hello World" → "dlroW olleH"',
      entrada: ['Hello World'],
      salida: 'dlroW olleH\n',
      tipo: 'normal',
    },
    {
      id: 'test_1char',
      descripcion: '"a" → "a"',
      entrada: ['a'],
      salida: 'a\n',
      tipo: 'normal',
    },
    {
      id: 'test_vacio',
      descripcion: 'String vacío → solo \\n',
      entrada: [''],
      salida: '\n',
      tipo: 'edge',
    },
    {
      id: 'test_sin_args',
      descripcion: 'Sin argumentos → solo \\n',
      entrada: [],
      salida: '\n',
      tipo: 'edge',
    },
    {
      id: 'test_abc',
      descripcion: '"abc" → "cba"',
      entrada: ['abc'],
      salida: 'cba\n',
      tipo: 'normal',
    },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Entrada: "abc", calcula longitud',
      codigo: `argc=2, argv[1]="abc"
i = 0
while (argv[1][0]) → 'a' → i=1
while (argv[1][1]) → 'b' → i=2
while (argv[1][2]) → 'c' → i=3
while (argv[1][3]) → '\\0' → SALE
i-- → i=2  ← índice del último char`,
      variables: [
        { nombre: 'i', valor: '2', cambio: true, nota: '← índice de "c" (último char)' },
      ],
    },
    {
      paso: 2,
      titulo: 'i=2 → write "c"',
      codigo: `while (2 >= 0) → TRUE
write(1, &argv[1][2], 1);  → stdout: "c"
i--  → i=1`,
      variables: [
        { nombre: 'i', valor: '1', cambio: true, nota: '' },
        { nombre: 'stdout', valor: '"c"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 3,
      titulo: 'i=1 → write "b", i=0 → write "a"',
      codigo: `[i=1] write 'b' → stdout: "cb", i=0
[i=0] write 'a' → stdout: "cba", i=-1`,
      variables: [
        { nombre: 'i', valor: '-1', cambio: true, nota: '' },
        { nombre: 'stdout', valor: '"cba"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 4,
      titulo: 'i=-1 → sale del while, write \\n',
      codigo: `while (-1 >= 0) → FALSE → sale
write(1, "\\n", 1)
stdout: "cba\\n"`,
      variables: [
        { nombre: 'i', valor: '-1', cambio: false, nota: '← condición false' },
        { nombre: 'stdout', valor: '"cba\\n"', cambio: true, nota: '✓ String invertido' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'i = len sin el -1 → lee fuera del string',
      descripcion: 'Si len=3 (para "abc"), el último índice válido es 2, no 3. argv[1][3] es el \\0. Si empiezas en i=len sin restar 1, escribes el \\0 (invisible) y los chars quedan desplazados.',
      codigoMal: `// ❌ Empieza en i=len, escribe '\\0' primero
i = 0; while (argv[1][i]) i++;  // i=3
while (i >= 0) {
    write(1, &argv[1][i], 1);  // i=3: escribe '\\0' ← basura
    i--;
}`,
      codigoBien: `// ✅ i = len - 1 → último char válido
i = 0; while (argv[1][i]) i++;  // i=3
i--;                             // i=2 ← 'c'
while (i >= 0) {
    write(1, &argv[1][i], 1);
    i--;
}`,
    },
    {
      severidad: 'mortal',
      titulo: 'Condición i > 0 en vez de i >= 0 → pierde el primer char',
      descripcion: 'El índice 0 es el primer carácter. Con i > 0, nunca se escribe argv[1][0].',
      codigoMal: `// ❌ i>0 → no imprime argv[1][0]
while (i > 0) {  // para cuando i=0, sin imprimir argv[1][0]
    write(1, &argv[1][i], 1);
    i--;
}`,
      codigoBien: `// ✅ i>=0 → incluye el índice 0
while (i >= 0) {
    write(1, &argv[1][i], 1);
    i--;
}`,
    },
    {
      severidad: 'warning',
      titulo: 'String vacío → i queda en -1 antes del segundo while',
      descripcion: 'Con "" el primer while no entra, i=0, i-- → i=-1. El segundo while (i>=-1: TRUE) ¡escribiría argv[1][-1]! Usar i>=0 evita esto.',
      codigoMal: `// ❌ Con "" y condición i >= -1 escribiría basura
i = 0; while (argv[1][i]) i++; // i=0 para ""
i--;  // i=-1
while (i >= -1) {  // ← entra y lee memoria inválida
    write(1, &argv[1][i], 1);`,
      codigoBien: `// ✅ Condición i >= 0 protege contra string vacío
i = 0; while (argv[1][i]) i++;
i--;   // i=-1 para ""
while (i >= 0) {  // -1 >= 0 → FALSE → no entra ✓`,
    },
  ],

  bajoCelCapot: `"abc" en memoria: [a][b][c][\\0]
Índices:           0   1   2   3
Recorrido inverso: 2→c, 1→b, 0→a
El \\0 (índice 3) NO se imprime — queda excluido por la condición i>=0.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'Patrón de índice descendente. Se reutiliza en rstr_capitalizer, reverse_bits (concepto), ft_strrev.',
  relacionados: ['ft_strlen', 'ft_strrev'],
}

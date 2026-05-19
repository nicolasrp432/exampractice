export default {
  id: 'expand_str',
  nombre: 'expand_str',
  nivel: 3,
  dificultad: 'fácil',
  tipoEntrega: 'programa',
  archivosEsperados: ['expand_str.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : expand_str
Expected files   : expand_str.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays it, replacing every blank
character by 3 spaces, and without any trailing spaces.

If the number of arguments is not 1, just display a newline.

Example:
$> ./expand_str "hello world" | cat -e
hello   world$
$> ./expand_str " hello " | cat -e
   hello$
$> ./expand_str "  " | cat -e
$
$>`,

  descripcion: 'Programa que expande los espacios: cualquier grupo de espacios consecutivos se reemplaza por exactamente 3 espacios. Los espacios finales se eliminan. Similar a epur_str pero con 3 espacios en vez de 1.',

  palacio: {
    habitacion: 'dormitorio',
    mueble: 'persiana',
    personaje: 'El Acordeón de Tres Notas',
    emoji: '📐',
    historia: `En el dormitorio hay una Persiana que expande los silencios.
Es el hermano mayor de epur_str: en vez de UN silencio, hace TRES.
Cualquier grupo de uno o más espacios → exactamente 3 espacios.
Pero los espacios al FINAL también los elimina (igual que epur_str).
El algoritmo es idéntico a epur_str pero escribe "   " en vez de " ".`,
    anclas: [
      "k=0 inicialmente (sin grupo de espacios pendiente)",
      "si c==' ': k=1 (hay un grupo de espacios pendiente)",
      "si c!=' ': si k=1, write('   ') (3 espacios), k=0; luego write(c)",
      "espacios iniciales: añade 3 espacios ANTES del primer char",
      "espacios finales: k queda 1 pero no se escribe → eliminados",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'Flag k: cada grupo de espacios → exactamente 3 espacios antes del siguiente char',
    formula: 'for c: if c!=" " { if k: write("   "),k=0; write(c) } else: k=1',
    ejemplo: {
      entrada: '"hello world"',
      calculo: 'hello→ok; " "→k=1; w→write("   ")+"w" → "hello   world"',
      resultado: '"hello   world"',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Con flag k igual que epur_str pero con 3 espacios',
      descripcion: 'Idéntica estructura a epur_str, solo cambia " " por "   ". La diferencia clave.',
      recomendada: true,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tint\ti;
\tint\tk;

\tif (argc == 2)
\t{
\t\ti = 0;
\t\tk = 0;
\t\twhile (argv[1][i])
\t\t{
\t\t\tif (argv[1][i] != ' ')
\t\t\t{
\t\t\t\tif (k)
\t\t\t\t{
\t\t\t\t\twrite(1, "   ", 3);
\t\t\t\t\tk = 0;
\t\t\t\t}
\t\t\t\twrite(1, &argv[1][i], 1);
\t\t\t}
\t\t\telse
\t\t\t\tk = 1;
\t\t\ti++;
\t\t}
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'pendiente',
      nombre: 'Con bandera pending_spaces',
      descripcion: 'Usa una bandera más descriptiva: hay espacios pendientes antes del siguiente carácter.',
      recomendada: false,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tint\ti;
\tint\tpending_spaces;

\tif (argc == 2)
\t{
\t\ti = 0;
\t\tpending_spaces = 0;
\t\twhile (argv[1][i])
\t\t{
\t\t\tif (argv[1][i] == ' ')
\t\t\t\tpending_spaces = 1;
\t\t\telse
\t\t\t{
\t\t\t\tif (pending_spaces)
\t\t\t\t{
\t\t\t\t\twrite(1, "   ", 3);
\t\t\t\t\tpending_spaces = 0;
\t\t\t\t}
\t\t\t\twrite(1, &argv[1][i], 1);
\t\t\t}
\t\t\ti++;
\t\t}
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
  ],

  tests: [
    { id: 'test_un_espacio', descripcion: '"hello world" → "hello   world" (1 espacio → 3)', entrada: ['hello world'], salida: 'hello   world\n', tipo: 'normal' },
    { id: 'test_multi_espacios', descripcion: '"hello  world" → "hello   world" (2 espacios → 3)', entrada: ['hello  world'], salida: 'hello   world\n', tipo: 'normal' },
    { id: 'test_leading', descripcion: '" hello" → "   hello" (espacio inicial → 3 espacios)', entrada: [' hello'], salida: '   hello\n', tipo: 'normal' },
    { id: 'test_trailing', descripcion: '"hello " → "hello" (espacio final eliminado)', entrada: ['hello '], salida: 'hello\n', tipo: 'edge' },
    { id: 'test_solo_espacios', descripcion: '"  " → "" (solo espacios → nada)', entrada: ['  '], salida: '\n', tipo: 'edge' },
    { id: 'test_multi_inter', descripcion: '"a b c" → "a   b   c"', entrada: ['a b c'], salida: 'a   b   c\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: '"hello world": h,e,l,l,o normales; espacio → k=1',
      codigo: `k=0
i=0..4: 'h','e','l','l','o' → k=0, write cada char
i=5: ' ' → k=1
salida hasta ahora: "hello"`,
      variables: [
        { nombre: 'k', valor: '1', cambio: true, nota: '← espacio pendiente' },
        { nombre: 'salida', valor: '"hello"', cambio: false, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'i=6: "w" → k=1 → write("   ") antes de "w"',
      codigo: `i=6: 'w' != ' '
k=1 → write(1, "   ", 3)  ← los 3 espacios
k=0
write(1, "w", 1)
salida: "hello   w"`,
      variables: [
        { nombre: 'k', valor: '0', cambio: true, nota: '' },
        { nombre: 'salida', valor: '"hello   w"', cambio: true, nota: '← 3 espacios exactos' },
      ],
    },
    {
      paso: 3,
      titulo: '"o","r","l","d" y fin: sin espacios al final',
      codigo: `i=7..10: 'o','r','l','d' → sin k → write directo
fin del string: k=0 (no hay espacios al final en este test)
write("\\n")
Salida final: "hello   world\\n"`,
      variables: [
        { nombre: 'salida final', valor: '"hello   world\\n"', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Reemplazar CADA espacio por 3 en vez de cada GRUPO por 3',
      descripcion: 'Si "hello  world" (2 espacios), el resultado debe ser "hello   world" (3 espacios), NO "hello      world" (6 espacios = 2*3). Cada GRUPO de espacios se reemplaza por 3, sin importar cuántos haya.',
      codigoMal: `// ❌ Reemplaza cada espacio individual por 3
if (c == ' ')
    write(1, "   ", 3);  // "hello  world" → 6 spaces!`,
      codigoBien: `// ✅ Flag k: cualquier grupo de spaces → k=1 → 3 spaces una vez
if (c == ' ') k = 1;
else { if (k) { write(1, "   ", 3); k = 0; } write(1, &c, 1); }`,
    },
    {
      severidad: 'mortal',
      titulo: 'Confundir con epur_str: escribir 1 espacio en vez de 3',
      descripcion: 'epur_str escribe 1 espacio por grupo; expand_str escribe 3. La única diferencia es "   " vs " ".',
      codigoMal: `// ❌ epur_str, no expand_str
if (k) write(1, " ", 1);  // 1 espacio, no 3`,
      codigoBien: `// ✅ expand_str: siempre 3 espacios
if (k) write(1, "   ", 3);`,
    },
    {
      severidad: 'warning',
      titulo: 'expand_str SÍ añade 3 espacios para espacios iniciales (a diferencia de epur_str)',
      descripcion: 'En epur_str, los espacios iniciales se ignoran (no se imprime el espacio antes del primer char). En expand_str, si hay espacios iniciales, se imprimen 3 espacios antes del primer char.',
      codigoMal: `// ❌ Ignorar espacios iniciales como en epur_str
if (c == ' ' && started) k = 1;  // expand_str no tiene esta condición`,
      codigoBien: `// ✅ expand_str: k=1 para CUALQUIER espacio, incluyendo los iniciales
if (c == ' ') k = 1;  // sin condición "started"`,
    },
  ],

  bajoCelCapot: `expand_str es casi idéntico a epur_str con dos diferencias:
1. Escribe 3 espacios en vez de 1
2. Los espacios INICIALES también producen 3 espacios (k=1 sin condición "started")
Los espacios finales siguen eliminándose (k queda a 1 al salir del bucle → nunca se escribe).
El subject dice "every blank character" → cada char espacio activa k, pero un grupo solo produce 3.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'Una vez memorizado epur_str, expand_str es trivial: misma estructura, 3 espacios en vez de 1, y sin la condición "started" para espacios iniciales.',
  relacionados: ['epur_str', 'str_capitalizer'],
}

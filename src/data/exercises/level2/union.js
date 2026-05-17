export default {
  id: 'union',
  nombre: 'union',
  nivel: 2,
  dificultad: 'difícil',
  tipoEntrega: 'programa',
  archivosEsperados: ['union.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : union
Expected files   : union.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes two strings and prints, without doubles, the
characters that appear in either one of the strings.

The display will be in the order characters appear in the command line, and
will be followed by a newline.

If the number of arguments is not 2, the program displays a newline.

Example:
$> ./union "zpadinton" "notpad" | cat -e
zpadinto$
$> ./union "" "notpad" | cat -e
notpad$
$> ./union | cat -e
$
$>`,

  descripcion: 'Programa que imprime todos los chars de s1 y s2 combinados, sin duplicados, en orden de aparición. Usa tabla visto[256] con índice (unsigned char) para marcar chars ya escritos.',

  palacio: {
    habitacion: 'salon',
    mueble: 'maceta',
    personaje: 'El Jardinero de Caracteres',
    emoji: '🌱',
    historia: `En el salón hay un Jardinero con una maceta enorme donde cabe todo.
Le das dos bolsas de semillas (s1 y s2).
El Jardinero planta cada semilla EN ORDEN: primero las de s1, luego las de s2.
Si ya plantó esa semilla antes, no la repite — mira su libro visto[256].
CLAVE: el índice es (unsigned char)c para evitar acceso con índice negativo.
Al final, la maceta tiene todos los chars únicos en orden de primera aparición.`,
    anclas: [
      "visto[256] = {0}  ← tabla de chars ya vistos",
      "recorrer s1+s2 en orden (primero s1, luego s2)",
      "if (!visto[(unsigned char)c]): write(c); visto[(unsigned char)c]=1",
      "argc != 3 → solo '\\n'",
      "(unsigned char) evita índices negativos para chars > 127",
    ],
  },

  herramientas: ['strings', 'ascii'],

  formulaClave: {
    descripcion: 'Recorrer s1 luego s2: para cada char, si no está en visto, escribirlo y marcarlo',
    formula: 'for c in s1+s2: if !visto[(uchar)c]: write(c); visto[(uchar)c]=1',
    ejemplo: {
      entrada: 's1="hello", s2="world"',
      calculo: 'h→nuevo; e→nuevo; l→nuevo; l→visto; o→nuevo; w→nuevo; o→visto; r→nuevo; l→visto; d→nuevo',
      resultado: '"helowrd"',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Con tabla visto[256] e índice (unsigned char)',
      descripcion: 'La más segura y correcta. Inicializa visto[] con un bucle.',
      recomendada: true,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tint\t\t\ti;
\tint\t\t\tvisto[256];
\tchar\t\tc;

\ti = 0;
\twhile (i < 256)
\t\tvisto[i++] = 0;
\tif (argc == 3)
\t{
\t\ti = 0;
\t\twhile (argv[1][i])
\t\t{
\t\t\tc = argv[1][i];
\t\t\tif (!visto[(unsigned char)c])
\t\t\t{
\t\t\t\twrite(1, &c, 1);
\t\t\t\tvisto[(unsigned char)c] = 1;
\t\t\t}
\t\t\ti++;
\t\t}
\t\ti = 0;
\t\twhile (argv[2][i])
\t\t{
\t\t\tc = argv[2][i];
\t\t\tif (!visto[(unsigned char)c])
\t\t\t{
\t\t\t\twrite(1, &c, 1);
\t\t\t\tvisto[(unsigned char)c] = 1;
\t\t\t}
\t\t\ti++;
\t\t}
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'compacta',
      nombre: 'Con función auxiliar print_unique()',
      descripcion: 'Separa la lógica de escritura única en una función. Más limpia.',
      recomendada: false,
      codigo: `#include <unistd.h>

static void\tprint_unique(char *s, int *visto)
{
\tint\ti;
\tchar\tc;

\ti = 0;
\twhile (s[i])
\t{
\t\tc = s[i];
\t\tif (!visto[(unsigned char)c])
\t\t{
\t\t\twrite(1, &c, 1);
\t\t\tvisto[(unsigned char)c] = 1;
\t\t}
\t\ti++;
\t}
}

int\tmain(int argc, char **argv)
{
\tint\t\tvisto[256];
\tint\t\ti;

\ti = 0;
\twhile (i < 256)
\t\tvisto[i++] = 0;
\tif (argc == 3)
\t{
\t\tprint_unique(argv[1], visto);
\t\tprint_unique(argv[2], visto);
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
  ],

  tests: [
    { id: 'test_clasico', descripcion: '"zpadinton","notpad" → "zpadinto"', entrada: ['zpadinton', 'notpad'], salida: 'zpadinto\n', tipo: 'normal' },
    { id: 'test_hello_world', descripcion: '"hello","world" → "helowrd"', entrada: ['hello', 'world'], salida: 'helowrd\n', tipo: 'normal' },
    { id: 'test_s1_vacio', descripcion: '"","notpad" → "notpad"', entrada: ['', 'notpad'], salida: 'notpad\n', tipo: 'edge' },
    { id: 'test_s2_vacio', descripcion: '"hello","" → "helo"', entrada: ['hello', ''], salida: 'helo\n', tipo: 'edge' },
    { id: 'test_ambos_vacios', descripcion: '"","" → "" (nada)', entrada: ['', ''], salida: '\n', tipo: 'edge' },
    { id: 'test_sin_comun', descripcion: '"abc","xyz" → "abcxyz"', entrada: ['abc', 'xyz'], salida: 'abcxyz\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Inicializar visto[256] a 0',
      codigo: `i = 0;
while (i < 256)
    visto[i++] = 0;
// Todos los 256 slots a 0 (ningún char visto)`,
      variables: [
        { nombre: 'visto', valor: '[0,0,0,...,0] (256 ceros)', cambio: true, nota: '← clean state' },
      ],
    },
    {
      paso: 2,
      titulo: 'Recorrer s1="hello": h,e,l son nuevos',
      codigo: `s1[0]='h': visto['h']=0 → write('h'); visto['h']=1
s1[1]='e': visto['e']=0 → write('e'); visto['e']=1
s1[2]='l': visto['l']=0 → write('l'); visto['l']=1
s1[3]='l': visto['l']=1 → NO escribe
s1[4]='o': visto['o']=0 → write('o'); visto['o']=1
salida hasta ahora: "helo"`,
      variables: [
        { nombre: 'salida', valor: '"helo"', cambio: true, nota: '' },
        { nombre: "visto['l']", valor: '1', cambio: true, nota: '← duplicado bloqueado' },
      ],
    },
    {
      paso: 3,
      titulo: 'Recorrer s2="world": w,r,d son nuevos; o,l ya vistos',
      codigo: `s2[0]='w': visto['w']=0 → write('w')
s2[1]='o': visto['o']=1 → NO escribe
s2[2]='r': visto['r']=0 → write('r')
s2[3]='l': visto['l']=1 → NO escribe
s2[4]='d': visto['d']=0 → write('d')
salida: "helowrd"`,
      variables: [
        { nombre: 'salida', valor: '"helowrd"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 4,
      titulo: 'write("\\n")',
      codigo: `write(1, "\\n", 1)
// Salida final: "helowrd\\n"`,
      variables: [
        { nombre: 'salida final', valor: '"helowrd\\n"', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Usar char c como índice de visto[] sin cast → índice negativo',
      descripcion: 'En muchas plataformas char es signed (-128..127). Si c=200 (un char extendido), visto[c] sería visto[-56] → segfault. El cast a (unsigned char) lo hace 0..255.',
      codigoMal: `// ❌ Sin cast: char puede ser negativo → acceso fuera de rango
char c = argv[1][i];
if (!visto[c])  // si c > 127, c es negativo → crash`,
      codigoBien: `// ✅ Cast a unsigned char → siempre 0..255
char c = argv[1][i];
if (!visto[(unsigned char)c]) {
    write(1, &c, 1);
    visto[(unsigned char)c] = 1;
}`,
    },
    {
      severidad: 'mortal',
      titulo: 'No inicializar visto[] → valores basura de la pila',
      descripcion: 'int visto[256] sin inicializar contiene basura. Algunos chars parecerán "ya vistos" y no se imprimirán. Siempre inicializar a 0.',
      codigoMal: `// ❌ Sin inicializar → comportamiento indefinido
int visto[256];  // contiene basura de la pila`,
      codigoBien: `// ✅ Inicializar a 0 manualmente (o con memset si está permitido)
int visto[256];
int i = 0;
while (i < 256)
    visto[i++] = 0;`,
    },
    {
      severidad: 'warning',
      titulo: 'Confundir union (todos únicos) con inter (solo comunes)',
      descripcion: 'union: chars de s1 O s2 (todos, sin repetir). inter: chars de s1 QUE ESTÁN EN s2. Son complementarios.',
      codigoMal: `// ❌ Confusión: comprueba si c está en s2 antes de escribirlo → inter, no union
if (!visto[(unsigned char)c] && iter(argv[2], c))
    write(1, &c, 1);`,
      codigoBien: `// ✅ union: no comprueba si c está en s2
if (!visto[(unsigned char)c]) {
    write(1, &c, 1);
    visto[(unsigned char)c] = 1;
}`,
    },
  ],

  bajoCelCapot: `visto[256] indexado por (unsigned char) es el patrón estándar para "¿he visto este byte antes?".
La diferencia con inter: union incluye todos los chars de ambos strings; inter solo los que están en ambos.
El orden importa: primero s1 completo, luego s2 completo — los chars de s1 siempre van primero.
Para strings vacíos: el while de recorrido no entra, simplemente se salta.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El patrón visto[256]+(unsigned char) es universal para deduplicación de bytes. Aparece en union, inter, y cualquier problema de "chars únicos".',
  relacionados: ['inter', 'ft_strpbrk', 'ft_strcspn'],
}

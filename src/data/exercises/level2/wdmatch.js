export default {
  id: 'wdmatch',
  nombre: 'wdmatch',
  nivel: 2,
  dificultad: 'medio',
  tipoEntrega: 'programa',
  archivosEsperados: ['wdmatch.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : wdmatch
Expected files   : wdmatch.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes two strings and checks whether the second string's
characters can be found in the first string, in the same order.

If this is the case, display the second string, followed by a newline, otherwise
display just a newline.

If the number of arguments is not 2, the program displays a newline.

Example:
$> ./wdmatch "foobar" "bar" | cat -e
bar$
$> ./wdmatch "foobar" "rab" | cat -e
$
$>`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : wdmatch
Expected files   : wdmatch.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes two strings and checks whether it's possible to
write the first string with characters from the second string, while respecting
the order in which these characters appear in the second string.

If it's possible, the program displays the string, followed by a \\n, otherwise
it simply displays a \\n.

If the number of arguments is not 2, the program displays a \\n.

Examples:

$>./wdmatch "faya" "fgvvfdxcacpolhyghbreda" | cat -e
faya$
$>./wdmatch "faya" "fgvvfdxcacpolhyghbred" | cat -e
$
$>./wdmatch "quarante deux" "qfqfsudf arzgsayns tsregfdgs sjytdekuoixq " | cat -e
quarante deux$
$>./wdmatch "error" rrerrrfiiljdfxjyuifrrvcoojh | cat -e
$
$>./wdmatch | cat -e
$`,

  descripcion: 'Programa que comprueba si s2 es una subsecuencia de s1 (los chars de s2 aparecen en s1 en el mismo orden, pero no necesariamente contiguos). Si sí, imprime s2; si no, solo \\n.',

  palacio: {
    habitacion: 'salon',
    mueble: 'alfombra',
    personaje: 'El Detective de Subsecuencias',
    emoji: '🕵️',
    historia: `En el salón hay una Alfombra con huellas secretas.
El Detective tiene dos listas: la pista maestra (s1) y los sospechosos (s2).
Avanza por s1 buscando el primer sospechoso de s2. Cuando lo encuentra, busca el siguiente.
Si logra encontrar TODOS los sospechosos de s2 en orden dentro de s1 → imprime s2.
Si alguno falta o llega antes que su anterior → solo imprime '\\n'.
No importa si hay chars de más entre ellos en s1 — solo importa el ORDEN.`,
    anclas: [
      "j avanza solo cuando s1[i]==s2[j]  ← sólo al encontrar coincidencia",
      "i avanza siempre  ← recorre toda s1",
      "si argv[2][j]=='\\0' al final → todos encontrados → imprimir s2",
      "si argv[1][i]=='\\0' y argv[2][j]!='\\0' → no encontrado → solo '\\n'",
      "argc != 3 → solo '\\n'",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'Dos índices: i recorre s1, j avanza en s2 solo cuando hay match',
    formula: 'while(s1[i]&&s2[j]){ if(s1[i]==s2[j])j++; i++; } if(!s2[j]) write(s2);',
    ejemplo: {
      entrada: 's1="foobar", s2="bar"',
      calculo: 'f≠b,o≠b,o≠b,b==b(j=1),a==a(j=2),r==r(j=3); s2[3]=\\0 → print "bar"',
      resultado: '"bar"',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Con dos índices i y j',
      descripcion: 'El patrón clásico de verificación de subsecuencia. i siempre avanza, j solo cuando hay match.',
      recomendada: true,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tint\ti;
\tint\tj;

\tif (argc == 3)
\t{
\t\ti = 0;
\t\tj = 0;
\t\twhile (argv[1][i] && argv[2][j])
\t\t{
\t\t\tif (argv[1][i] == argv[2][j])
\t\t\t\tj++;
\t\t\ti++;
\t\t}
\t\tif (!argv[2][j])
\t\t{
\t\t\ti = 0;
\t\t\twhile (argv[2][i])
\t\t\t{
\t\t\t\twrite(1, &argv[2][i], 1);
\t\t\t\ti++;
\t\t\t}
\t\t}
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'punteros',
      nombre: 'Con punteros directos',
      descripcion: 'Avanza punteros en vez de índices. Más compacto.',
      recomendada: false,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tchar\t*s1;
\tchar\t*s2;

\tif (argc == 3)
\t{
\t\ts1 = argv[1];
\t\ts2 = argv[2];
\t\twhile (*s1 && *s2)
\t\t{
\t\t\tif (*s1 == *s2)
\t\t\t\ts2++;
\t\t\ts1++;
\t\t}
\t\tif (!*s2)
\t\t{
\t\t\ts2 = argv[2];
\t\t\twhile (*s2)
\t\t\t\twrite(1, s2++, 1);
\t\t}
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
  ],

  tests: [
    { id: 'test_bar', descripcion: '"foobar","bar" → "bar" (subsecuencia válida)', entrada: ['foobar', 'bar'], salida: 'bar\n', tipo: 'normal' },
    { id: 'test_rab', descripcion: '"foobar","rab" → "" (r antes de a pero no b a continuación)', entrada: ['foobar', 'rab'], salida: '\n', tipo: 'normal' },
    { id: 'test_heo', descripcion: '"hello","heo" → "heo" (h,e,o en orden en "hello")', entrada: ['hello', 'heo'], salida: 'heo\n', tipo: 'normal' },
    { id: 'test_oxe', descripcion: '"hello","oxe" → "" (no subsecuencia)', entrada: ['hello', 'oxe'], salida: '\n', tipo: 'normal' },
    { id: 'test_igual', descripcion: '"hello","hello" → "hello" (idéntico)', entrada: ['hello', 'hello'], salida: 'hello\n', tipo: 'edge' },
    { id: 'test_s2_mas_largo', descripcion: '"ab","abc" → "" (s2 más largo que s1)', entrada: ['ab', 'abc'], salida: '\n', tipo: 'edge' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 's1="foobar", s2="bar" — bucle principal',
      codigo: `i=0,j=0: s1[0]='f' != s2[0]='b' → i=1
i=1,j=0: s1[1]='o' != 'b' → i=2
i=2,j=0: s1[2]='o' != 'b' → i=3
i=3,j=0: s1[3]='b' == 'b' → j=1, i=4
i=4,j=1: s1[4]='a' == 'a' → j=2, i=5
i=5,j=2: s1[5]='r' == 'r' → j=3, i=6
s1[6]='\\0' → while FALSE`,
      variables: [
        { nombre: 'j final', valor: '3', cambio: true, nota: '← avanzó 3 veces' },
        { nombre: 'argv[2][3]', valor: "'\\0'", cambio: false, nota: '← todos encontrados' },
      ],
    },
    {
      paso: 2,
      titulo: '!argv[2][j]: j=3, s2[3]=\\0 → TRUE → imprimir s2',
      codigo: `argv[2][3] = '\\0'
!('\\0') = !(0) = TRUE
→ imprimir s2="bar":
  write('b'), write('a'), write('r')`,
      variables: [
        { nombre: 'condición', valor: '!s2[j] = TRUE', cambio: true, nota: '' },
        { nombre: 'salida', valor: '"bar"', cambio: true, nota: '✓' },
      ],
    },
    {
      paso: 3,
      titulo: 'Caso "foobar","rab" — r encontrado en pos 5 pero no hay a después',
      codigo: `i=0..4: f,o,o,b,a → 'r' no encontrado aún (j=0)
i=5: s1[5]='r' == s2[0]='r' → j=1, i=6
s1[6]='\\0' → while FALSE
s2[1]='a' ≠ '\\0' → !s2[j] = FALSE → no imprime`,
      variables: [
        { nombre: 'j final', valor: '1', cambio: true, nota: '← solo r encontrado' },
        { nombre: 'condición', valor: '!s2[1]="a" = FALSE', cambio: true, nota: '← no subsecuencia' },
        { nombre: 'salida', valor: '"" (solo \\n)', cambio: true, nota: '' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Avanzar j cuando NO hay match — j solo avanza en coincidencia',
      descripcion: 'j solo debe avanzar cuando s1[i]==s2[j]. Si avanza siempre, consume chars de s2 sin haberlos encontrado en s1.',
      codigoMal: `// ❌ j avanza siempre — no es subsecuencia correcta
while (s1[i] && s2[j]) {
    if (s1[i] == s2[j])
        write(1, &s2[j], 1);
    i++;
    j++;  // ← siempre avanza — incorrecto
}`,
      codigoBien: `// ✅ j solo avanza en match
while (s1[i] && s2[j]) {
    if (s1[i] == s2[j])
        j++;
    i++;  // i siempre avanza
}`,
    },
    {
      severidad: 'mortal',
      titulo: 'Imprimir s2 char a char dentro del while, no después',
      descripcion: 'No se puede imprimir s2 durante la búsqueda — no sabemos aún si toda la subsecuencia está. Hay que verificar primero (!s2[j]) y luego imprimir.',
      codigoMal: `// ❌ Imprime durante la búsqueda — imprime parcial si falla
while (s1[i] && s2[j]) {
    if (s1[i] == s2[j]) {
        write(1, &s2[j], 1);  // imprime aunque no complete s2
        j++;
    }
    i++;
}`,
      codigoBien: `// ✅ Verificar PRIMERO, luego imprimir s2 completo
// ... while de búsqueda ...
if (!s2[j]) {
    // imprimir s2 desde el inicio
    i = 0;
    while (s2[i]) write(1, &s2[i++], 1);
}`,
    },
    {
      severidad: 'warning',
      titulo: 'Confundir subsecuencia con substring',
      descripcion: '"bar" es substring Y subsecuencia de "foobar". Pero "bor" es subsecuencia (b,o,r en orden) pero NO substring (no son contiguos). wdmatch busca subsecuencia, no substring.',
      codigoMal: `// ❌ Busca substring (chars contiguos) — incorrecto
// strstr("foobar", "bor") = NULL → error
// wdmatch("foobar", "bor") debería imprimir "bor" ✓`,
      codigoBien: `// ✅ Subsecuencia: chars en orden, no necesariamente contiguos
// "foobar" contiene b(pos3), o(pos4), r(pos5) → "bor" es subsecuencia`,
    },
  ],

  bajoCelCapot: `Una subsecuencia mantiene el ORDEN pero no la contigüidad.
"abc" es subsecuencia de "axbxc" (a→b→c en orden, con x de por medio).
"cba" NO es subsecuencia de "abc" (el orden está invertido).
Este algoritmo es O(n+m) — óptimo para verificación de subsecuencias.
Se usa en algoritmos de alineamiento de secuencias de ADN y LCS (Longest Common Subsequence).`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El patrón "dos índices: i siempre avanza, j solo en match" es el algoritmo clásico de verificación de subsecuencia. Hay que conocerlo de memoria.',
  relacionados: ['inter', 'union', 'ft_strpbrk'],
}

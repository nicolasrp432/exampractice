export default {
  id: 'epur_str',
  nombre: 'epur_str',
  nivel: 3,
  dificultad: 'medio',
  tipoEntrega: 'programa',
  archivosEsperados: ['epur_str.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : epur_str
Expected files   : epur_str.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays it with no leading or
trailing spaces, and with each sequence of spaces reduced to a single space.

If the number of arguments is not 1, just display a newline.

Example:
$> ./epur_str "  hello   world  " | cat -e
hello world$
$> ./epur_str "  " | cat -e
$
$>`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : epur_str
Expected files   : epur_str.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string, and displays this string with exactly one
space between words, with no spaces or tabs either at the beginning or the end,
followed by a \\n.

A "word" is defined as a part of a string delimited either by spaces/tabs, or
by the start/end of the string.

If the number of arguments is not 1, or if there are no words to display, the
program displays \\n.

Example:

$> ./epur_str "See? It's easy to print the same thing" | cat -e
See? It's easy to print the same thing$
$> ./epur_str " this        time it      will     be    more complex  . " | cat -e
this time it will be more complex .$
$> ./epur_str "No S*** Sherlock..." "nAw S*** ShErLaWQ..." | cat -e
$
$> ./epur_str "" | cat -e
$
$>

$> ./epur_str "vous voyez c'est facile d'afficher la meme chose" | cat -e
vous voyez c'est facile d'afficher la meme chose$
$> ./epur_str " seulement          la c'est      plus dur " | cat -e
seulement la c'est plus dur$
$> ./epur_str "comme c'est cocasse" "vous avez entendu, Mathilde ?" | cat -e
$
$> ./epur_str "" | cat -e
$
$>`,

  descripcion: 'Programa que limpia los espacios de un string: elimina espacios iniciales y finales, y colapsa múltiples espacios consecutivos a uno solo. "Epurer" = purificar en francés.',

  palacio: {
    habitacion: 'dormitorio',
    mueble: 'acordeon',
    personaje: 'El Acordeón de Una Nota',
    emoji: '🎹',
    historia: `En el dormitorio hay un Acordeón especial que aplasta los espacios.
Le das una melodía (string) con silencios de diferentes longitudes (espacios múltiples).
El Acordeón los convierte todos a UN solo silencio (un espacio).
Además: si la melodía empieza o termina con silencio, los elimina.
Usa el flag k: k=1 "hay un espacio pendiente". Cuando llega el siguiente char no-espacio, escribe un espacio antes.`,
    anclas: [
      "k=0 inicialmente (sin espacio pendiente)",
      "si c==' ' && out.length>0: k=1 (espacio pendiente, pero no imprimir aún)",
      "si c!=' ': si k=1, primero write(' '), k=0; luego write(c)",
      "espacios iniciales: out vacío → k no se pone a 1 → se ignoran",
      "espacios finales: k queda 1 al salir → nunca se escriben",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'Flag k para espacio pendiente: escribirlo solo cuando llega el siguiente char real',
    formula: 'for c: if c!=" " { if k: write(" "),k=0; write(c) } else if out>0: k=1',
    ejemplo: {
      entrada: '"  hello   world  "',
      calculo: 'espacios iniciales→ignorados; hello→escrito; 3 spaces→k=1; world→" "+world; espacios finales→k pero no escrito',
      resultado: '"hello world"',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Con flag k y write char a char',
      descripcion: 'El algoritmo clásico del flag de "espacio pendiente". La más elegante.',
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
\t\t\t\t\twrite(1, " ", 1);
\t\t\t\t\tk = 0;
\t\t\t\t}
\t\t\t\twrite(1, &argv[1][i], 1);
\t\t\t}
			else if (i > 0 && argv[1][i - 1] && argv[1][i - 1] != ' ')
\t\t\t\tk = 1;
\t\t\ti++;
\t\t}
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'flag_i',
      nombre: 'Con flag started y flag space_pending',
      descripcion: 'Separa "¿hemos empezado?" de "¿hay espacio pendiente?". Más explícita.',
      recomendada: false,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tint\ti;
\tint\tstarted;
\tint\tpending;

\tif (argc == 2)
\t{
\t\ti = 0;
\t\tstarted = 0;
\t\tpending = 0;
\t\twhile (argv[1][i])
\t\t{
\t\t\tif (argv[1][i] != ' ')
\t\t\t{
\t\t\t\tif (started && pending)
\t\t\t\t\twrite(1, " ", 1);
\t\t\t\twrite(1, &argv[1][i], 1);
\t\t\t\tstarted = 1;
\t\t\t\tpending = 0;
\t\t\t}
\t\t\telse
\t\t\t\tpending = 1;
\t\t\ti++;
\t\t}
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'estado_explicito',
      nombre: 'Con estado explícito started/pending',
      descripcion: 'Hace el mismo trabajo con dos flags separados: si ya empezó y si hay espacio pendiente.',
      recomendada: false,
      codigo: `#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	int	started;
	int	pending;

	if (argc == 2)
	{
		i = 0;
		started = 0;
		pending = 0;
		while (argv[1][i])
		{
			if (argv[1][i] == ' ')
				pending = 1;
			else
			{
				if (started && pending)
					write(1, " ", 1);
				write(1, &argv[1][i], 1);
				started = 1;
				pending = 0;
			}
			i++;
		}
	}
	write(1, "\n", 1);
	return (0);
}`,
    },
  
    {
      id: 'rank02',
      nombre: 'Versión rank02 (solución de referencia)',
      descripcion: 'Solución tal y como aparece en el repo de referencia rank02. Útil para comparar estilo, validaciones y constraints reales del examen.',
      recomendada: false,
      origen: 'rank02',
      codigo: `

#include <unistd.h>

int		skip_whitespace(char *str, int i)
{
	while (str[i] == ' ' || str[i] == '\\t')
		++i;
	return (i);
}

int		ft_wordlen(char *str)
{
	int i = 0;

	while (str[i] != '\\0' && str[i] != ' ' && str[i] != '\\t')
		++i;
	return (i);
}

void	epur_str(char *str)
{
	int i = 0;
	int first_word = 1;
	int word_len;

	i = skip_whitespace(str, i);
	while (str[i] != '\\0')
	{
		if (first_word == 0)
			write(1, " ", 1);
		word_len = ft_wordlen(str + i);
		write(1, str + i, word_len);
		i = i + word_len;
		first_word = 0;
		i = skip_whitespace(str, i);
	}
}

int		main(int argc, char **argv)
{
	if (argc == 2)
		epur_str(argv[1]);
	write(1, "\\n", 1);
	return (0);
}`,
    },
  ],
  tests: [
    { id: 'test_clasico', descripcion: '"  hello   world  " → "hello world"', entrada: ['  hello   world  '], salida: 'hello world\n', tipo: 'normal' },
    { id: 'test_solo_espacios', descripcion: '"   " → "" (solo espacios)', entrada: ['   '], salida: '\n', tipo: 'edge' },
    { id: 'test_sin_espacios', descripcion: '"hello" → "hello" (sin espacios)', entrada: ['hello'], salida: 'hello\n', tipo: 'normal' },
    { id: 'test_leading', descripcion: '"  hello" → "hello" (solo leading spaces)', entrada: ['  hello'], salida: 'hello\n', tipo: 'normal' },
    { id: 'test_trailing', descripcion: '"hello  " → "hello" (solo trailing spaces)', entrada: ['hello  '], salida: 'hello\n', tipo: 'normal' },
    { id: 'test_multi_palabras', descripcion: '"a  b  c" → "a b c" (espacios entre palabras)', entrada: ['a  b  c'], salida: 'a b c\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: '"  hello" — espacios iniciales ignorados',
      codigo: `i=0: ' ', argv[-1] no existe o i=0 → condición else: ¿argv[1][i-1]...?
Mejor con la versión "pending":
  started=0, pending=0
  i=0: ' ' → pending=1
  i=1: ' ' → pending=1 (ya era 1)
  i=2: 'h' → started=0: NO escribe espacio; write('h'); started=1, pending=0`,
      variables: [
        { nombre: 'started', valor: '1', cambio: true, nota: '' },
        { nombre: 'pending', valor: '0', cambio: true, nota: '← espacios iniciales ignorados' },
        { nombre: 'salida', valor: '"h"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: '"hello   world" — espacios medios colapsados',
      codigo: `tras "hello": started=1, pending=0
i=5,6,7: ' ' → pending=1 (cada espacio pone pending=1)
i=8: 'w': started=1 && pending=1 → write(' '); write('w'); pending=0
... → "hello w..."
Final: "hello world"`,
      variables: [
        { nombre: 'pending', valor: '1 → 0', cambio: true, nota: '← 3 spaces → 1 space' },
        { nombre: 'salida', valor: '"hello world"', cambio: true, nota: '✓' },
      ],
    },
    {
      paso: 3,
      titulo: '"world  " — espacios finales eliminados',
      codigo: `tras "world": pending=0
i=7,8: ' ' → pending=1
fin del string: bucle termina
pending=1 pero NO escribimos más → espacios finales eliminados
write("\\n")`,
      variables: [
        { nombre: 'salida final', valor: '"hello world\\n"', cambio: true, nota: '✓ sin trailing spaces' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Escribir el espacio INMEDIATAMENTE al verlo, no al llegar al siguiente char',
      descripcion: 'Si escribes el espacio en cuanto lo ves, los espacios finales se imprimen (no deberían). El trick es: guardar en k=1 que hay espacio pendiente, y escribirlo solo cuando llega el siguiente char no-espacio.',
      codigoMal: `// ❌ Escribe espacios inmediatamente
if (c == ' ')
    write(1, " ", 1);  // imprime espacios finales también`,
      codigoBien: `// ✅ Retrasa el espacio hasta el siguiente char real
if (c == ' ') k = 1;
else { if (k) { write(1, " ", 1); k = 0; } write(1, &c, 1); }`,
    },
    {
      severidad: 'mortal',
      titulo: 'No evitar espacios iniciales: k=1 al primer espacio aunque out esté vacío',
      descripcion: 'k debe ponerse a 1 solo si ya hemos escrito algo (out no vacío). Sin esta condición, los espacios iniciales se escribirían.',
      codigoMal: `// ❌ k=1 siempre → espacios iniciales se imprimirían
if (c == ' ') k = 1;
else { if (k) write(1, " ", 1); ... }`,
      codigoBien: `// ✅ Solo poner k=1 si ya hemos escrito algo
if (c == ' ' && started) k = 1;
// O en la versión clásica: else if (argv[1][i-1] && argv[1][i-1] != ' ') k = 1`,
    },
  ],

  bajoCelCapot: `epur_str = "épurer la chaîne" (purificar el string) en francés.
El flag k (o pending) es el corazón del algoritmo: retrasa la escritura del espacio.
Espacios iniciales: k nunca se activa porque no hay char previo real (started=0).
Espacios finales: k queda a 1 pero el bucle termina antes de escribirlo.
Múltiples espacios: solo el primer espacio activa k=1, los siguientes son redundantes.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El truco del flag "espacio pendiente" es el patrón central. Sin haberlo visto, es difícil derivarlo. Con él, el algoritmo es elegante y corto.',
  relacionados: ['expand_str', 'str_capitalizer', 'rstr_capitalizer'],
}

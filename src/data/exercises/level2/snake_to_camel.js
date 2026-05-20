export default {
  id: 'snake_to_camel',
  nombre: 'snake_to_camel',
  nivel: 2,
  dificultad: 'fácil',
  tipoEntrega: 'programa',
  archivosEsperados: ['snake_to_camel.c'],
  funcionesPermitidas: ['malloc', 'free', 'realloc', 'write'],

  subject: `Assignment name  : snake_to_camel
Expected files   : snake_to_camel.c
Allowed functions: malloc, free, realloc, write
--------------------------------------------------------------------------------

Write a program that takes a single string in snake_case format
and converts it into a string in lowerCamelCase format.

A snake_case string is a string where each word is in lower case, separated by
an underscore "_".

A lowerCamelCase string is a string where each word begins with a capital letter
except for the first one.`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : snake_to_camel
Expected files   : snake_to_camel.c
Allowed functions: malloc, free, realloc, write
--------------------------------------------------------------------------------

Write a program that takes a single string in snake_case format
and converts it into a string in lowerCamelCase format.

A snake_case string is a string where each word is in lower case, separated by
an underscore "_".

A lowerCamelCase string is a string where each word begins with a capital letter
except for the first one.

Examples:
$>./snake_to_camel "here_is_a_snake_case_word"
hereIsASnakeCaseWord
$>./snake_to_camel "hello_world" | cat -e
helloWorld$
$>./snake_to_camel | cat -e
$`,

  descripcion: 'Programa que convierte una cadena snake_case en lowerCamelCase, quitando guiones bajos y capitalizando cada palabra después de la primera.',

  palacio: {
    habitacion: 'salón',
    mueble: 'pizarra',
    personaje: 'El Cambia-Nombres',
    emoji: '🐍',
    historia: `En la pizarra, el Cambia-Nombres ve palabras separadas por guiones bajos.
La primera palabra se queda en minúscula.
Cada palabra siguiente pierde el "_" y su primera letra sube de mayúscula.
Si no hay argumento, solo escribe un salto de línea.`,
    anclas: [
      'argc == 2 → procesar el string',
      'underscore = salto de palabra',
      'la letra después de "_" se capitaliza',
      'sin argumento → "\\n"',
    ],
  },

  herramientas: ['strings', 'ascii'],

  formulaClave: {
    descripcion: 'Recorrer la cadena y saltar/capitalizar al cruzar "_"',
    formula: 'for each char: if "_" skip and uppercase next; else write char',
    ejemplo: {
      entrada: '"here_is_a_snake_case_word"',
      calculo: 'here + Is + A + Snake + Case + Word',
      resultado: 'hereIsASnakeCaseWord',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'En una pasada sobre argv[1]',
      descripcion: 'La versión compacta de rank02: salta "_" y capitaliza la letra siguiente.',
      recomendada: true,
      codigo: `#include <unistd.h>

int main(int argc, char **argv)
{
\tint i;

\tif (argc == 2)
\t{
\t\ti = 0;
\t\twhile (argv[1][i])
\t\t{
\t\t\tif (argv[1][i] == '_')
\t\t\t{
\t\t\t\ti++;
\t\t\t\targv[1][i] -= 32;
\t\t\t}
\t\t\twrite(1, &argv[1][i], 1);
\t\t\ti++;
\t\t}
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'buffer',
      nombre: 'Con buffer dinámico',
      descripcion: 'Copia el resultado a un buffer nuevo para no tocar argv[1] en sitio.',
      recomendada: false,
      codigo: `#include <stdlib.h>
#include <unistd.h>

int main(int argc, char **argv)
{
\tchar *out;
\tint i;
\tint j;
\tint cap;

\tif (argc != 2)
\t\treturn (write(1, "\\n", 1), 0);
\tcap = 0;
\twhile (argv[1][cap])
\t\tcap++;
\tout = malloc(cap + 1);
\tif (!out)
\t\treturn (write(1, "\\n", 1), 0);
\ti = 0;
\tj = 0;
\twhile (argv[1][i])
\t{
\t\tif (argv[1][i] == '_' && argv[1][i + 1])
\t\t\tout[j++] = argv[1][++i] - 32;
\t\telse if (argv[1][i] != '_')
\t\t\tout[j++] = argv[1][i];
\t\ti++;
\t}
\tout[j] = '\\0';
\twrite(1, out, j);
\twrite(1, "\\n", 1);
\tfree(out);
\treturn (0);
}`,
    },
  
    {
      id: 'rank02',
      nombre: 'Versión rank02 (solución de referencia)',
      descripcion: 'Solución tal y como aparece en el repo de referencia rank02. Útil para comparar estilo, validaciones y constraints reales del examen.',
      recomendada: false,
      origen: 'rank02',
      codigo: `#include <stdlib.h>
#include <unistd.h>

int main(int argc, char **argv)
{
	if (argc == 2)
	{
		for (int i = 0; argv[1][i]; i += 1)
		{
			if (argv[1][i] == '_')
			{
				i += 1;
				argv[1][i] -= 32;
			}
			write(STDOUT_FILENO, &argv[1][i], 1);
		}
	}
	write(STDOUT_FILENO, "\\n", 1);
	return EXIT_SUCCESS;
}`,
    },
  ],

  tests: [
    { id: 'test_simple', descripcion: 'here_is_a_snake_case_word → hereIsASnakeCaseWord', entrada: ['here_is_a_snake_case_word'], salida: 'hereIsASnakeCaseWord\n', tipo: 'normal' },
    { id: 'test_short', descripcion: 'hello_world → helloWorld', entrada: ['hello_world'], salida: 'helloWorld\n', tipo: 'normal' },
    { id: 'test_one_word', descripcion: 'solo una palabra', entrada: ['word'], salida: 'word\n', tipo: 'normal' },
    { id: 'test_empty', descripcion: 'sin argumentos → salto de línea', entrada: [], salida: '\n', tipo: 'edge' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'argv[1] = "hello_world"',
      codigo: `i = 0
argv[1][0] = 'h' → write('h')
argv[1][5] = '_' → skip y capitalizar la siguiente letra`,
      variables: [
        { nombre: 'i', valor: '0', cambio: true, nota: 'comienza el recorrido' },
      ],
    },
    {
      paso: 2,
      titulo: 'Cruce del "_"',
      codigo: `argv[1][5] == '_'
i++
argv[1][6] == 'w'
'w' - 32 = 'W'`,
      variables: [
        { nombre: 'resultado parcial', valor: 'helloWorld', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'warning',
      titulo: 'Olvidar escribir \\n al final',
      descripcion: 'El programa siempre termina con salto de línea, incluso sin argumento.',
      codigoMal: `// ❌ sin newline final
write(1, out, len);`,
      codigoBien: `// ✅
write(1, out, len);
write(1, "\\n", 1);`,
    },
    {
      severidad: 'warning',
      titulo: 'No saltar el "_" antes de capitalizar',
      descripcion: 'Hay que avanzar el índice para no imprimir el guion bajo.',
      codigoMal: `// ❌ imprime "_" y capitaliza mal
if (c == '_') out[j++] = c;`,
      codigoBien: `// ✅ salta "_" y usa la siguiente letra
if (c == '_') i++;`,
    },
  ],

  bajoCelCapot: `snake_to_camel no crea palabras nuevas: reescribe el mismo stream de caracteres.
La única regla especial es que "_" desaparece y la siguiente letra sube a mayúscula.
En el examen es frecuente resolverlo con un solo recorrido y write() byte a byte.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'Es un ejercicio de transformación de strings muy mecánico: detectar "_" y capitalizar el siguiente carácter.',
  relacionados: ['camel_to_snake', 'ulstr', 'str_capitalizer'],
}

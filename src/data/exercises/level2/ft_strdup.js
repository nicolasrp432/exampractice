export default {
  id: 'ft_strdup',
  nombre: 'ft_strdup',
  nivel: 2,
  dificultad: 'medio',
  tipoEntrega: 'funcion',
  archivosEsperados: ['ft_strdup.c'],
  funcionesPermitidas: ['malloc'],

  subject: `Assignment name  : ft_strdup
Expected files   : ft_strdup.c
Allowed functions: malloc
--------------------------------------------------------------------------------

Write a function that duplicates the string pointed to by s. Returns a pointer
to the duplicated string, or NULL if there was insufficient memory.

char\t*ft_strdup(char *s);`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : ft_strdup
Expected files   : ft_strdup.c
Allowed functions: malloc
--------------------------------------------------------------------------------

Reproduce the behavior of the function strdup (man strdup).

Your function must be declared as follows:

char    *ft_strdup(char *src);`,

  descripcion: 'Función que crea una copia del string en memoria dinámica. Usa malloc para reservar strlen(s)+1 bytes, copia con strcpy y devuelve el puntero.',

  palacio: {
    habitacion: 'salon',
    mueble: 'fotocopiadora',
    personaje: 'La Clonadora de strings',
    emoji: '🧬',
    historia: `En el salón hay una Clonadora que fabrica copias en el montón (heap).
Le das el original (s) y ella:
1. Mide la longitud (ft_strlen(s)).
2. Pide memoria al montón: malloc(len + 1). El +1 es para el \\0.
3. Copia byte a byte (ft_strcpy o bucle).
4. Devuelve el puntero a la copia clonada.
¡Sin el +1, no hay sitio para el \\0 y es corrupción de memoria!`,
    anclas: [
      "len = ft_strlen(s)  ← medir primero",
      "malloc(len + 1)  ← +1 para el \\0",
      "if (!dest) return NULL  ← malloc puede fallar",
      "ft_strcpy(dest, s)  ← copiar el contenido",
      "return dest  ← el clon",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'malloc(strlen+1) + strcpy + return puntero',
    formula: 'len = ft_strlen(s); dest = malloc(len + 1); ft_strcpy(dest, s); return dest;',
    ejemplo: {
      entrada: '"hello"',
      calculo: 'len=5, malloc(6), copia h,e,l,l,o,\\0 → new ptr',
      resultado: 'puntero a "hello" en el heap',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica con ft_strlen + ft_strcpy',
      descripcion: 'La más legible y correcta en el examen.',
      recomendada: true,
      codigo: `#include <stdlib.h>

static int\tft_strlen(char *s)
{
\tint\ti;

\ti = 0;
\twhile (s[i])
\t\ti++;
\treturn (i);
}

static void\tft_strcpy(char *dest, char *src)
{
\tint\ti;

\ti = 0;
\twhile (src[i])
\t{
\t\tdest[i] = src[i];
\t\ti++;
\t}
\tdest[i] = '\\0';
}

char\t*ft_strdup(char *s)
{
\tchar\t*dest;
\tint\tlen;

\tlen = ft_strlen(s);
\tdest = malloc(len + 1);
\tif (!dest)
\t\treturn (NULL);
\tft_strcpy(dest, s);
\treturn (dest);
}`,
    },
    {
      id: 'compacta',
      nombre: 'Con bucle de copia inline',
      descripcion: 'Copia directamente en el bucle sin función auxiliar.',
      recomendada: false,
      codigo: `#include <stdlib.h>

char\t*ft_strdup(char *s)
{
\tchar\t*dest;
\tint\tlen;
\tint\ti;

\tlen = 0;
\twhile (s[len])
\t\tlen++;
\tdest = malloc(len + 1);
\tif (!dest)
\t\treturn (NULL);
\ti = 0;
\twhile (s[i])
\t{
\t\tdest[i] = s[i];
\t\ti++;
\t}
\tdest[i] = '\\0';
\treturn (dest);
}`,
    },
  
    {
      id: 'rank02',
      nombre: 'Versión rank02 (solución de referencia)',
      descripcion: 'Solución tal y como aparece en el repo de referencia rank02. Útil para comparar estilo, validaciones y constraints reales del examen.',
      recomendada: false,
      origen: 'rank02',
      codigo: `#include <stdlib.h>
#include <stdio.h>

char    *ft_strdup(char *src)
{
	int	i;
	char *dest;

	i = 0;
	while (src[i] != '\\0')
		i++;
	dest = malloc(sizeof (char) * (i + 1));
	if (dest == NULL)
		return (NULL);
	i = 0;
	while (src[i] != '\\0')
	{
		dest[i] = src[i];
		i++;
	}
	dest[i] = src[i];
	return (dest);
}`,
    },
  ],

  tests: [
    { id: 'test_hello', descripcion: '"hello" → duplicado "hello"', entrada: ['hello'], salida: 'hello\n', tipo: 'normal' },
    { id: 'test_vacio', descripcion: '"" → duplicado "" (solo \\0)', entrada: [''], salida: '\n', tipo: 'edge' },
    { id: 'test_espacio', descripcion: '"Hello World" → duplicado con espacio', entrada: ['Hello World'], salida: 'Hello World\n', tipo: 'normal' },
    { id: 'test_numeros', descripcion: '"42abc" → duplicado mixto', entrada: ['42abc'], salida: '42abc\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Inicio: s="hello"',
      codigo: `s = "hello"
len = ft_strlen("hello") = 5
dest = malloc(5 + 1) = malloc(6)
if (!dest) → FALSE (malloc exitoso)`,
      variables: [
        { nombre: 'len', valor: '5', cambio: true, nota: '' },
        { nombre: 'dest', valor: '0x7f... (nuevo bloque de 6 bytes)', cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'ft_strcpy: copia "hello" + \\0 a dest',
      codigo: `ft_strcpy(dest, s)
dest[0]='h', dest[1]='e', dest[2]='l', dest[3]='l', dest[4]='o', dest[5]='\\0'`,
      variables: [
        { nombre: 'dest', valor: '"hello\\0" en heap', cambio: true, nota: '6 bytes copiados' },
      ],
    },
    {
      paso: 3,
      titulo: 'return dest — puntero al clon',
      codigo: `return dest
// El caller ahora tiene un puntero a una copia independiente de "hello"
// La copia vive en el heap hasta que se llame free(dest)`,
      variables: [
        { nombre: 'retorno', valor: '0x7f... → "hello"', cambio: true, nota: '✓ Clon independiente del original' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'malloc(len) sin +1 → no hay espacio para el \\0',
      descripcion: 'ft_strlen devuelve el número de chars SIN contar el \\0. malloc(len) reserva exactamente los chars, pero no hay espacio para el terminador. El strcpy posterior escribe el \\0 fuera del bloque → heap corruption.',
      codigoMal: `// ❌ Sin +1 → el \\0 se escribe fuera del bloque
dest = malloc(len);      // "hello" len=5, malloc(5)
ft_strcpy(dest, s);      // escribe h,e,l,l,o,\\0 → \\0 en byte 5, fuera del bloque`,
      codigoBien: `// ✅ malloc(len + 1) → espacio para el \\0
dest = malloc(len + 1);  // malloc(6) para "hello"
ft_strcpy(dest, s);      // h,e,l,l,o,\\0 → todo dentro del bloque`,
    },
    {
      severidad: 'mortal',
      titulo: 'No comprobar si malloc devuelve NULL',
      descripcion: 'malloc puede fallar (sistema sin memoria). Si dest=NULL y haces ft_strcpy(NULL, s), segfault inmediato.',
      codigoMal: `// ❌ Sin check de NULL
dest = malloc(len + 1);
ft_strcpy(dest, s);  // crash si malloc falló`,
      codigoBien: `// ✅
dest = malloc(len + 1);
if (!dest)
    return (NULL);
ft_strcpy(dest, s);`,
    },
    {
      severidad: 'warning',
      titulo: 'El caller es responsable de free() — ft_strdup hace malloc',
      descripcion: 'La función devuelve un bloque malloc\'d. Si el caller no hace free(), hay memory leak. Esto no afecta a la Moulinette, pero es buena práctica mencionarlo.',
      codigoMal: `// ❌ Memory leak
char *dup = ft_strdup("hello");
// ... usar dup ...
// sin free(dup) → leak`,
      codigoBien: `// ✅
char *dup = ft_strdup("hello");
// ... usar dup ...
free(dup);  // ← siempre liberar`,
    },
  ],

  bajoCelCapot: `malloc(n) reserva n bytes en el heap y devuelve un puntero al inicio.
El \\0 no ocupa espacio en strlen pero sí en la memoria real del string.
"hello" ocupa 6 bytes: h(1)+e(1)+l(1)+l(1)+o(1)+\\0(1).
La copia es INDEPENDIENTE: modificar dest no afecta a s ni viceversa.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El patrón malloc+strlen+1+strcpy+return es el prototipo de todas las funciones que retornan strings dinámicos.',
  relacionados: ['ft_strlen', 'ft_strcpy', 'ft_split'],
}

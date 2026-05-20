export default {
  id: 'ft_range',
  nombre: 'ft_range',
  nivel: 3,
  dificultad: 'medio',
  tipoEntrega: 'funcion',
  archivosEsperados: ['ft_range.c'],
  funcionesPermitidas: ['malloc'],

  subject: `Assignment name  : ft_range
Expected files   : ft_range.c
Allowed functions: malloc
--------------------------------------------------------------------------------

Write a function that gets two int as parameters, the first is the beginning
of a range, and the second is its end.

The function creates and returns an array of all integers between min included
and max excluded, sorted in ascending order.

If min is greater than or equal to max, the function returns NULL.

int\t*ft_range(int min, int max);

Example:
ft_range(1, 5) → [1, 2, 3, 4]  (4 elements)
ft_range(5, 5) → NULL
ft_range(5, 3) → NULL`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : ft_range
Expected files   : ft_range.c
Allowed functions: malloc
--------------------------------------------------------------------------------

Write the following function:

int     *ft_range(int start, int end);

It must allocate (with malloc()) an array of integers, fill it with consecutive
values that begin at start and end at end (Including start and end !), then
return a pointer to the first value of the array.

Examples:

- With (1, 3) you will return an array containing 1, 2 and 3.
- With (-1, 2) you will return an array containing -1, 0, 1 and 2.
- With (0, 0) you will return an array containing 0.
- With (0, -3) you will return an array containing 0, -1, -2 and -3.`,

  descripcion: 'Función que crea con malloc un array de enteros desde min (inclusive) hasta max (exclusive), en orden ascendente. Si min >= max, devuelve NULL.',

  palacio: {
    habitacion: 'dormitorio',
    mueble: 'litera',
    personaje: 'El Escalador de la Litera',
    emoji: '🪜',
    historia: `En el dormitorio hay una Litera y el Escalador sube peldaño a peldaño.
Le dices: "sube desde el peldaño min hasta el peldaño max (sin llegar)."
El Escalador primero reserva con malloc tantos peldaños como haya (max-min).
Luego los rellena de min a max-1, uno a uno.
Si min >= max: no hay donde subir → NULL.`,
    anclas: [
      "if (min >= max) return NULL  ← sin rango → NULL",
      "arr = malloc((max - min) * sizeof(int))  ← tamaño exacto",
      "for i=0: arr[i] = min + i  ← rellenar ascendente",
      "no hay '\\0' al final — es int[], no char[]",
      "return arr  ← el caller es responsable del free()",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'malloc(max-min)*sizeof(int) + rellenar de min a max-1',
    formula: 'arr=malloc((max-min)*sizeof(int)); for i=0;i<max-min: arr[i]=min+i; return arr;',
    ejemplo: {
      entrada: 'min=1, max=5',
      calculo: 'malloc(4*4=16 bytes); arr[0]=1,arr[1]=2,arr[2]=3,arr[3]=4',
      resultado: '[1, 2, 3, 4]',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Con índice y llenado secuencial',
      descripcion: 'La más clara. malloc + bucle de llenado.',
      recomendada: true,
      codigo: `#include <stdlib.h>

int\t*ft_range(int min, int max)
{
\tint\t*arr;
\tint\ti;

\tif (min >= max)
\t\treturn (NULL);
\tarr = malloc((max - min) * sizeof(int));
\tif (!arr)
\t\treturn (NULL);
\ti = 0;
\twhile (i < max - min)
\t{
\t\tarr[i] = min + i;
\t\ti++;
\t}
\treturn (arr);
}`,
    },
    {
      id: 'puntero',
      nombre: 'Con incremento de min',
      descripcion: 'Usa min++ directamente en el bucle de llenado.',
      recomendada: false,
      codigo: `#include <stdlib.h>

int\t*ft_range(int min, int max)
{
\tint\t*arr;
\tint\ti;
\tint\ttmp;

\tif (min >= max)
\t\treturn (NULL);
\tarr = malloc((max - min) * sizeof(int));
\tif (!arr)
\t\treturn (NULL);
\ti = 0;
\ttmp = min;
\twhile (tmp < max)
\t\tarr[i++] = tmp++;
\treturn (arr);
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

int	*ft_range(int start, int end)
{
	int	size;
	int	*res;
	int	i;

	size = abs((end - start)) + 1;
	res = malloc(size * sizeof(int));
	if (!res)
		return (NULL);
	i = 0;
	if (start < end)
	{
		while (start <= end)
		{
			res[i] = start;
			start += 1;
			i += 1;
		}
	}
	else
	{
		while (start >= end)
		{
			res[i] = start;
			start -= 1;
			i += 1;
		}
	}
	return (res);
}`,
    },
  ],

  tests: [
    { id: 'test_1_5', descripcion: 'ft_range(1,5) → [1,2,3,4]', entrada: ['1', '5'], salida: '1\n2\n3\n4\n', tipo: 'normal' },
    { id: 'test_0_3', descripcion: 'ft_range(0,3) → [0,1,2]', entrada: ['0', '3'], salida: '0\n1\n2\n', tipo: 'normal' },
    { id: 'test_neg', descripcion: 'ft_range(-2,2) → [-2,-1,0,1]', entrada: ['-2', '2'], salida: '-2\n-1\n0\n1\n', tipo: 'normal' },
    { id: 'test_igual', descripcion: 'ft_range(5,5) → NULL', entrada: ['5', '5'], salida: '\n', tipo: 'edge' },
    { id: 'test_inv', descripcion: 'ft_range(5,3) → NULL (min>max)', entrada: ['5', '3'], salida: '\n', tipo: 'edge' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'ft_range(1, 5): validación y malloc',
      codigo: `min=1, max=5
min >= max? 1>=5 → FALSE → continúa
arr = malloc((5-1) * sizeof(int)) = malloc(16 bytes)
if (!arr) → FALSE (malloc OK)`,
      variables: [
        { nombre: 'tamaño', valor: '(5-1)*4 = 16 bytes', cambio: false, nota: '← 4 elementos de 4 bytes' },
        { nombre: 'arr', valor: '0x... (bloque heap)', cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'Relleno: arr[0]=1, arr[1]=2, ...',
      codigo: `i=0: arr[0] = 1 + 0 = 1
i=1: arr[1] = 1 + 1 = 2
i=2: arr[2] = 1 + 2 = 3
i=3: arr[3] = 1 + 3 = 4
i=4: 4 < max-min=4 → FALSE → sale`,
      variables: [
        { nombre: 'arr', valor: '[1, 2, 3, 4]', cambio: true, nota: '✓' },
      ],
    },
    {
      paso: 3,
      titulo: 'return arr',
      codigo: `return arr
// El caller puede iterar: for (i=0; i<max-min; i++) printf("%d\\n", arr[i]);
// No hay '\\0' — el caller debe saber el tamaño (max-min)`,
      variables: [
        { nombre: 'retorno', valor: 'ptr a [1,2,3,4]', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'malloc((max-min+1)*sizeof(int)) — +1 innecesario',
      descripcion: 'ft_range excluye max. ft_range(1,5) tiene 4 elementos (1,2,3,4), NO 5. El tamaño es (max-min), no (max-min+1). El +1 sería correcto si max fuera inclusive.',
      codigoMal: `// ❌ +1 innecesario — reserva un int extra
arr = malloc((max - min + 1) * sizeof(int));  // ft_range(1,5) → 5 ints en vez de 4`,
      codigoBien: `// ✅ max excluido → tamaño exacto
arr = malloc((max - min) * sizeof(int));  // ft_range(1,5) → 4 ints`,
    },
    {
      severidad: 'mortal',
      titulo: 'No verificar if (!arr) después de malloc',
      descripcion: 'malloc puede devolver NULL si no hay memoria. Si no se verifica, el acceso a arr[i] causará segfault.',
      codigoMal: `// ❌ Sin check
arr = malloc((max - min) * sizeof(int));
arr[0] = min;  // crash si malloc falló`,
      codigoBien: `// ✅
arr = malloc((max - min) * sizeof(int));
if (!arr) return (NULL);`,
    },
    {
      severidad: 'warning',
      titulo: 'No usar sizeof(int) — hardcodear 4',
      descripcion: 'sizeof(int) es portable (puede ser 4 u 8 bytes según la plataforma). Hardcodear 4 funciona en la mayoría de plataformas pero no es correcto.',
      codigoMal: `// ⚠️ Hardcodeado
arr = malloc((max - min) * 4);`,
      codigoBien: `// ✅ Portable
arr = malloc((max - min) * sizeof(int));`,
    },
  ],

  bajoCelCapot: `ft_range(min, max) crea [min, min+1, ..., max-1] — max EXCLUIDO.
El array tiene (max-min) elementos. No tiene terminador NULL (es int[], no char[]).
El caller debe conocer el tamaño para iterar: for (i=0; i<max-min; i++).
Memoria: malloc en el heap → el caller debe hacer free(arr) cuando termine.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El patrón malloc+fill es el prototipo de todas las funciones que crean arrays dinámicos. max excluido (tamaño=max-min) es la trampa principal.',
  relacionados: ['ft_rrange', 'ft_strdup', 'ft_split'],
}

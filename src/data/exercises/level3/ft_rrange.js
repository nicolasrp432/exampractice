export default {
  id: 'ft_rrange',
  nombre: 'ft_rrange',
  nivel: 3,
  dificultad: 'medio',
  tipoEntrega: 'funcion',
  archivosEsperados: ['ft_rrange.c'],
  funcionesPermitidas: ['malloc'],

  subject: `Assignment name  : ft_rrange
Expected files   : ft_rrange.c
Allowed functions: malloc
--------------------------------------------------------------------------------

Write a function that gets two int as parameters, the first is the beginning
of a range, and the second is its end.

The function creates and returns an array of all integers between min included
and max excluded, sorted in descending order.

If min is greater than or equal to max, the function returns NULL.

int\t*ft_rrange(int min, int max);

Example:
ft_rrange(1, 5) → [4, 3, 2, 1]  (4 elements, reversed)
ft_rrange(5, 5) → NULL`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : ft_rrange
Expected files   : ft_rrange.c
Allowed functions: malloc
--------------------------------------------------------------------------------

Write the following function:

int     *ft_rrange(int start, int end);

It must allocate (with malloc()) an array of integers, fill it with consecutive
values that begin at end and end at start (Including start and end !), then
return a pointer to the first value of the array.

Examples:

- With (1, 3) you will return an array containing 3, 2 and 1
- With (-1, 2) you will return an array containing 2, 1, 0 and -1.
- With (0, 0) you will return an array containing 0.
- With (0, -3) you will return an array containing -3, -2, -1 and 0.`,

  descripcion: 'Función idéntica a ft_range pero el array retornado está en orden DESCENDENTE (de max-1 a min). El hermano inverso de ft_range.',

  palacio: {
    habitacion: 'dormitorio',
    mueble: 'escalera',
    personaje: 'El Escalador al Revés',
    emoji: '🪜',
    historia: `En el dormitorio hay otra Escalera, pero esta baja en vez de subir.
El Escalador al Revés hace lo mismo que ft_range, pero rellena el array al revés.
Tiene dos opciones: empezar desde max-1 y bajar, o rellenar desde el final del array.
La más sencilla: arr[i] = max - 1 - i (el primer elemento es max-1, el último es min).
Mismo malloc, misma estructura, solo cambia la fórmula de llenado.`,
    anclas: [
      "if (min >= max) return NULL  ← igual que ft_range",
      "malloc((max - min) * sizeof(int))  ← igual que ft_range",
      "arr[i] = max - 1 - i  ← descendente (primer elem = max-1)",
      "o: tmp=max-1; while tmp>=min: arr[i++]=tmp--",
      "return arr",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'Igual que ft_range pero arr[i] = max-1-i (descendente)',
    formula: 'arr=malloc((max-min)*sizeof(int)); for i=0;i<max-min: arr[i]=max-1-i; return arr;',
    ejemplo: {
      entrada: 'min=1, max=5',
      calculo: 'malloc(4 ints); arr[0]=4,arr[1]=3,arr[2]=2,arr[3]=1',
      resultado: '[4, 3, 2, 1]',
    },
  },

  versiones: [
    {
      id: 'formula',
      nombre: 'Con fórmula arr[i] = max-1-i',
      descripcion: 'La más limpia. El índice i mapea directamente al valor descendente.',
      recomendada: true,
      codigo: `#include <stdlib.h>

int\t*ft_rrange(int min, int max)
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
\t\tarr[i] = max - 1 - i;
\t\ti++;
\t}
\treturn (arr);
}`,
    },
    {
      id: 'decremento',
      nombre: 'Con tmp=max-1 decrementando',
      descripcion: 'Usa una variable temporal que empieza en max-1 y decrementa.',
      recomendada: false,
      codigo: `#include <stdlib.h>

int\t*ft_rrange(int min, int max)
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
\ttmp = max - 1;
\twhile (tmp >= min)
\t\tarr[i++] = tmp--;
\treturn (arr);
}`,
    },
  
    {
      id: 'rank02',
      nombre: 'Versión rank02 (solución de referencia)',
      descripcion: 'Solución tal y como aparece en el repo de referencia rank02. Útil para comparar estilo, validaciones y constraints reales del examen.',
      recomendada: false,
      origen: 'rank02',
      codigo: `
#include <stdlib.h>

int		absolute_value(int n);

int		*ft_rrange(int start, int end)
{
	int number_of_ints;
	int *array;
	int step;
	int i;

	number_of_ints = 1 + absolute_value(end - start);
	array = malloc(sizeof(int) * number_of_ints);

	if (start > end)
		step = 1;
	else
		step = -1;

	i = 0;
	while (i < number_of_ints)
	{
		array[i] = end;
		end = end + step;
		++i;
	}
	return (array);
}`,
    },
  ],

  tests: [
    { id: 'test_1_5', descripcion: 'ft_rrange(1,5) → [4,3,2,1]', entrada: ['1', '5'], salida: '4\n3\n2\n1\n', tipo: 'normal' },
    { id: 'test_0_3', descripcion: 'ft_rrange(0,3) → [2,1,0]', entrada: ['0', '3'], salida: '2\n1\n0\n', tipo: 'normal' },
    { id: 'test_neg', descripcion: 'ft_rrange(-2,2) → [1,0,-1,-2]', entrada: ['-2', '2'], salida: '1\n0\n-1\n-2\n', tipo: 'normal' },
    { id: 'test_igual', descripcion: 'ft_rrange(5,5) → NULL', entrada: ['5', '5'], salida: '\n', tipo: 'edge' },
    { id: 'test_inv', descripcion: 'ft_rrange(5,3) → NULL (min>max)', entrada: ['5', '3'], salida: '\n', tipo: 'edge' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'ft_rrange(1, 5): malloc 4 ints',
      codigo: `min=1, max=5
1 >= 5 → FALSE → continúa
arr = malloc(4 * sizeof(int)) = malloc(16 bytes)`,
      variables: [
        { nombre: 'arr', valor: 'bloque de 16 bytes', cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'Relleno descendente: arr[i] = max-1-i',
      codigo: `i=0: arr[0] = 5-1-0 = 4
i=1: arr[1] = 5-1-1 = 3
i=2: arr[2] = 5-1-2 = 2
i=3: arr[3] = 5-1-3 = 1
i=4: 4 < 4 → FALSE → sale`,
      variables: [
        { nombre: 'arr', valor: '[4, 3, 2, 1]', cambio: true, nota: '← descendente ✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Confundir ft_range con ft_rrange — rellenar ascendente en vez de descendente',
      descripcion: 'ft_rrange devuelve el array en orden DESCENDENTE. El primer elemento es max-1, el último es min.',
      codigoMal: `// ❌ Orden ascendente — es ft_range, no ft_rrange
arr[i] = min + i;  // ft_rrange(1,5) → [1,2,3,4] incorrecto`,
      codigoBien: `// ✅ Orden descendente
arr[i] = max - 1 - i;  // ft_rrange(1,5) → [4,3,2,1]`,
    },
    {
      severidad: 'warning',
      titulo: 'tmp-- llega a min-1 en la versión con decremento',
      descripcion: 'En la versión con tmp, el while debe ser tmp >= min, no tmp > min. Si fuera tmp > min, el valor mínimo (min) no se incluiría.',
      codigoMal: `// ❌ Excluye min — pierde el último elemento
while (tmp > min)   // tmp=max-1 hasta tmp=min+1, sin min`,
      codigoBien: `// ✅ Incluye min
while (tmp >= min)  // tmp=max-1 hasta tmp=min`,
    },
  ],

  bajoCelCapot: `ft_rrange(1,5) = [4,3,2,1] = ft_range(1,5) invertido.
La fórmula arr[i] = max-1-i es la forma más elegante: i=0 → max-1, i=max-min-1 → min.
Internamente idéntico a ft_range excepto en la fórmula de relleno.
El caller no puede distinguir entre ft_range y ft_rrange solo mirando la memoria — solo el orden importa.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'Una vez memorizado ft_range, ft_rrange es trivial: cambiar arr[i]=min+i por arr[i]=max-1-i.',
  relacionados: ['ft_range', 'ft_strrev', 'ft_split'],
}

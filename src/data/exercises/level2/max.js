export default {
  id: 'max',
  nombre: 'max',
  nivel: 2,
  dificultad: 'fácil',
  tipoEntrega: 'funcion',
  archivosEsperados: ['max.c'],
  funcionesPermitidas: [],

  subject: `Assignment name  : max
Expected files   : max.c
Allowed functions:
--------------------------------------------------------------------------------

Write the following function:

int		max(int* tab, unsigned int len);

The first parameter is an array of int, the second is the number of elements in
the array.

The function returns the largest number found in the array.

If the array is empty, the function returns 0.`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : max
Expected files   : max.c
Allowed functions:
--------------------------------------------------------------------------------

Write the following function:

int		max(int* tab, unsigned int len);

The first parameter is an array of int, the second is the number of elements in
the array.

The function returns the largest number found in the array.

If the array is empty, the function returns 0.`,

  descripcion: 'Función que recorre un array de enteros y devuelve el valor máximo. Si len es 0, devuelve 0.',

  palacio: {
    habitacion: 'salón',
    mueble: 'estantería',
    personaje: 'El Guardián del Pico',
    emoji: '⛰️',
    historia: `En la estantería hay una montaña de números.
El Guardián mira el primer valor y lo usa como cima provisional.
Después compara cada elemento: si aparece uno más alto, la cima cambia.
Si la montaña está vacía, el Guardián devuelve 0 y no mira nada más.`,
    anclas: [
      'len == 0 → return 0',
      'res = tab[0]',
      'if (tab[i] > res) res = tab[i]',
      'los repetidos no cambian el máximo',
    ],
  },

  herramientas: ['arrays', 'comparación'],

  formulaClave: {
    descripcion: 'Guardar el mayor encontrado mientras se recorre el array',
    formula: 'if (len == 0) return 0; res = tab[0]; for i=1..len-1 if tab[i] > res res = tab[i]; return res;',
    ejemplo: {
      entrada: '[3, 7, 2, 7]',
      calculo: 'res=3 → 7 reemplaza → 2 no cambia → 7 no cambia',
      resultado: '7',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Recorrido lineal con máximo provisional',
      descripcion: 'La versión más directa: inicializar con tab[0] y comparar el resto.',
      recomendada: true,
      codigo: `int\tmax(int *tab, unsigned int len)
{
\tunsigned int\ti;
\tint\t\t\tres;

\tif (len == 0)
\t\treturn (0);
\tres = tab[0];
\ti = 1;
\twhile (i < len)
\t{
\t\tif (tab[i] > res)
\t\t\tres = tab[i];
\t\ti++;
\t}
\treturn (res);
}`,
    },
    {
      id: 'compacta',
      nombre: 'Con índice único',
      descripcion: 'Misma lógica, pero con el índice arranque en 0 y una condición explícita para len vacío.',
      recomendada: false,
      codigo: `int\tmax(int *tab, unsigned int len)
{
\tunsigned int\ti;
\tint\t\t\tres;

\tif (len == 0)
\t\treturn (0);
\tres = tab[0];
\ti = 0;
\twhile (i < len)
\t{
\t\tif (tab[i] > res)
\t\t\tres = tab[i];
\t\ti++;
\t}
\treturn (res);
}`,
    },
  ],

  tests: [
    { id: 'test_vacio', descripcion: 'Array vacío → 0', entrada: [], salida: '0\n', tipo: 'edge' },
    { id: 'test_simple', descripcion: '[3,7,2] → 7', entrada: ['3', '7', '2'], salida: '7\n', tipo: 'normal' },
    { id: 'test_negativos', descripcion: '[-8,-3,-10] → -3', entrada: ['-8', '-3', '-10'], salida: '-3\n', tipo: 'normal' },
    { id: 'test_iguales', descripcion: '[4,4,4] → 4', entrada: ['4', '4', '4'], salida: '4\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Inicio con tab = [3, 7, 2]',
      codigo: `len = 3
len == 0 → FALSE
res = tab[0] = 3
i = 1`,
      variables: [
        { nombre: 'res', valor: '3', cambio: true, nota: 'cima provisional' },
        { nombre: 'i', valor: '1', cambio: true, nota: 'siguiente elemento' },
      ],
    },
    {
      paso: 2,
      titulo: 'tab[1] = 7 supera a res',
      codigo: `i = 1
tab[1] = 7
7 > 3 → TRUE
res = 7`,
      variables: [
        { nombre: 'res', valor: '7', cambio: true, nota: 'nuevo máximo' },
      ],
    },
    {
      paso: 3,
      titulo: 'Fin del recorrido → return 7',
      codigo: `i = 2, tab[2] = 2
2 > 7 → FALSE
return res`,
      variables: [
        { nombre: 'retorno', valor: '7', cambio: true, nota: 'máximo final' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'No tratar len == 0',
      descripcion: 'Si el array está vacío no hay tab[0]. Hay que devolver 0 antes de leer nada.',
      codigoMal: `// ❌ tab[0] no existe si len == 0
int res = tab[0];`,
      codigoBien: `// ✅
if (len == 0)
\treturn (0);`,
    },
    {
      severidad: 'warning',
      titulo: 'Inicializar res a 0',
      descripcion: 'Si todos los valores son negativos, res = 0 devuelve un valor incorrecto.',
      codigoMal: `// ❌ rompe con [-8, -3]
int res = 0;`,
      codigoBien: `// ✅ tomar el primer elemento real
int res = tab[0];`,
    },
  ],

  bajoCelCapot: `max recorre un array plano de enteros.
No hay terminador especial: el tamaño lo marca len.
El patrón es “candidado provisional + comparación lineal” y se reutiliza en muchos ejercicios de búsqueda.`,

  estrategia: 'ENTENDER',
  razonEstrategia: 'Es un ejercicio base de recorrido de arrays. Sirve para practicar índices, límites y el caso vacío sin complejidad extra.',
  relacionados: ['ft_range', 'sort_int_tab', 'ft_atoi'],
}

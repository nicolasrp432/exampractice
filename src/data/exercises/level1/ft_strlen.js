export default {
  id: 'ft_strlen',
  nombre: 'ft_strlen',
  nivel: 1,
  dificultad: 'fácil',
  tipoEntrega: 'funcion',
  archivosEsperados: ['ft_strlen.c'],
  funcionesPermitidas: [],

  subject: `Assignment name  : ft_strlen
Expected files   : ft_strlen.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that returns the length of a string.

int\tft_strlen(char *str);`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : ft_strlen
Expected files   : ft_strlen.c
Allowed functions:
--------------------------------------------------------------------------------

Write a function that returns the length of a string.

Your function must be declared as follows:

int	ft_strlen(char *str);`,

  descripcion: 'Función que recorre el string carácter a carácter hasta encontrar el \\0 y devuelve el número de posiciones contadas.',

  palacio: {
    habitacion: 'cocina',
    mueble: 'nevera',
    personaje: 'El Alien Elástico',
    emoji: '👽',
    historia: `En la nevera vive el Alien Elástico que se ESTIRA por el string.
Cada celda que toca suma +1 a su contador interno.
Cuando toca al Fantasma Cero (\\0) se CONGELA al instante y no avanza más.
El número que tenía en ese momento = la longitud del string.
Ancla mental: el alien NUNCA cuenta al fantasma, solo se detiene ante él.`,
    anclas: [
      "while(str[i])  ← para en el \\0",
      "i++  ← avanza y cuenta",
      "return(i)  ← el total",
      "el \\0 congela al alien, no se cuenta",
      "off-by-one: devolver i, no i-1",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'Cuenta caracteres hasta el terminador nulo',
    formula: 'i = 0; while (str[i]) i++; return (i);',
    ejemplo: {
      entrada: '"hello"',
      calculo: 'h(i=1) e(i=2) l(i=3) l(i=4) o(i=5) \\0 → STOP',
      resultado: '5',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica (índice i)',
      descripcion: 'La más legible y la más segura en el examen.',
      recomendada: true,
      codigo: `int\tft_strlen(char *str)
{
\tint\ti;

\ti = 0;
\twhile (str[i])
\t\ti++;
\treturn (i);
}`,
    },
    {
      id: 'puntero',
      nombre: 'Con puntero auxiliar',
      descripcion: 'Avanza un puntero y devuelve la diferencia. Más idiomático en C puro.',
      recomendada: false,
      codigo: `int\tft_strlen(char *str)
{
\tchar\t*p;

\tp = str;
\twhile (*p)
\t\tp++;
\treturn (p - str);
}`,
    },
  
    {
      id: 'rank02',
      nombre: 'Versión rank02 (solución de referencia)',
      descripcion: 'Solución tal y como aparece en el repo de referencia rank02. Útil para comparar estilo, validaciones y constraints reales del examen.',
      recomendada: false,
      origen: 'rank02',
      codigo: `int     ft_strlen(char *str)
{
	int		i;

	i = 0;
	while (str[i] != '\\0')
		i++;
	return (i);
}`,
    },
  ],

  tests: [
    {
      id: 'test_vacio',
      descripcion: 'String vacío → 0',
      entrada: [''],
      salida: '0\n',
      tipo: 'edge',
    },
    {
      id: 'test_hello',
      descripcion: '"hello" → 5',
      entrada: ['hello'],
      salida: '5\n',
      tipo: 'normal',
    },
    {
      id: 'test_1char',
      descripcion: '"a" → 1',
      entrada: ['a'],
      salida: '1\n',
      tipo: 'normal',
    },
    {
      id: 'test_espacio',
      descripcion: '"hello world" incluye espacio → 11',
      entrada: ['hello world'],
      salida: '11\n',
      tipo: 'normal',
    },
    {
      id: 'test_numeros',
      descripcion: '"42" → 2',
      entrada: ['42'],
      salida: '2\n',
      tipo: 'normal',
    },
    {
      id: 'test_largo',
      descripcion: '"abcdefghij" → 10',
      entrada: ['abcdefghij'],
      salida: '10\n',
      tipo: 'normal',
    },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Inicio: str = "hello"',
      codigo: `(gdb) break ft_strlen
(gdb) run
Breakpoint 1, ft_strlen (str=0x... "hello") at ft_strlen.c:3
3\t\tint i;`,
      variables: [
        { nombre: 'str', valor: '"hello"', cambio: true, nota: 'Puntero al string' },
        { nombre: 'i', valor: '?', cambio: false, nota: 'Sin inicializar' },
      ],
    },
    {
      paso: 2,
      titulo: 'i = 0, comienza el while',
      codigo: `(gdb) next
5\t\ti = 0;
(gdb) next
6\t\twhile (str[i])  → str[0]='h' ≠ '\\0', ENTRA`,
      variables: [
        { nombre: 'i', valor: '0', cambio: true, nota: '→ apunta a "h"' },
        { nombre: 'str[0]', valor: "'h' (104)", cambio: false, nota: '≠ \\0 → entra' },
      ],
    },
    {
      paso: 3,
      titulo: 'Iteración 1-4: h, e, l, l → i = 4',
      codigo: `[i=0] str[0]='h' ≠ '\\0' → i++ → i=1
[i=1] str[1]='e' ≠ '\\0' → i++ → i=2
[i=2] str[2]='l' ≠ '\\0' → i++ → i=3
[i=3] str[3]='l' ≠ '\\0' → i++ → i=4`,
      variables: [
        { nombre: 'i', valor: '4', cambio: true, nota: 'Cuatro chars contados' },
      ],
    },
    {
      paso: 4,
      titulo: 'Iteración 5: "o" → i = 5',
      codigo: `(gdb) next
6\t\twhile (str[i])  → str[4]='o' ≠ '\\0', ENTRA
7\t\t\ti++;          → i = 5`,
      variables: [
        { nombre: 'i', valor: '5', cambio: true, nota: '' },
        { nombre: 'str[4]', valor: "'o' (111)", cambio: false, nota: '' },
      ],
    },
    {
      paso: 5,
      titulo: 'El Fantasma Cero \\0 → PARA',
      codigo: `(gdb) next
6\t\twhile (str[i])  → str[5]='\\0' = 0 → FALSE, sale del while`,
      variables: [
        { nombre: 'str[5]', valor: "'\\0' (0)", cambio: false, nota: '← El Fantasma Cero congela al alien' },
        { nombre: 'i', valor: '5', cambio: false, nota: 'No incrementa para \\0' },
      ],
    },
    {
      paso: 6,
      titulo: 'return (i) = 5',
      codigo: `(gdb) next
8\t\treturn (i);
(gdb) finish
Value returned is $1 = 5`,
      variables: [
        { nombre: 'i', valor: '5', cambio: false, nota: '✓ Longitud correcta' },
        { nombre: 'retorno', valor: '5', cambio: true, nota: '"hello" tiene 5 caracteres' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'return (i - 1) — off-by-one',
      descripcion: 'Al salir del while, i ya apunta al \\0 (no lo cuenta). Devolver i-1 daría 4 para "hello".',
      codigoMal: `// ❌ Off-by-one
while (str[i])
    i++;
return (i - 1); // 'hello' → 4, FALLA`,
      codigoBien: `// ✅
while (str[i])
    i++;
return (i);     // 'hello' → 5, CORRECTO`,
    },
    {
      severidad: 'mortal',
      titulo: 'Usar strlen() en vez de implementarla',
      descripcion: 'strlen() no está en la lista de funciones permitidas. La Moulinette compila con -lboundscheck y detecta si usas funciones no permitidas.',
      codigoMal: `// ❌ Prohibido
#include <string.h>
int ft_strlen(char *str) {
    return strlen(str); // función externa, no permitida
}`,
      codigoBien: `// ✅ Implementación propia
int ft_strlen(char *str) {
    int i = 0;
    while (str[i])
        i++;
    return (i);
}`,
    },
    {
      severidad: 'warning',
      titulo: 'No inicializar i = 0',
      descripcion: 'Sin i = 0, i tiene valor basura. El comportamiento es indefinido.',
      codigoMal: `int i; // ❌ valor basura
while (str[i]) i++;`,
      codigoBien: `int i;
i = 0;         // ✅ siempre inicializar
while (str[i]) i++;`,
    },
  ],

  bajoCelCapot: `La memoria de "hello" en C: [h][e][l][l][o][\\0]
                                              ↑ str apunta aquí al inicio
Cada char ocupa 1 byte. str[i] es equivalente a *(str + i).
El while evalúa el valor del char: 0 (falsy) = \\0 = FIN.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'Patrón clásico de recorrido de string. Se usa en ft_strcpy, ft_strdup, ft_strcmp...',
  relacionados: ['ft_strcpy', 'ft_putstr', 'ft_strdup'],
}

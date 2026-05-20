export default {
  id: 'ft_strrev',
  nombre: 'ft_strrev',
  nivel: 2,
  dificultad: 'fácil',
  tipoEntrega: 'funcion',
  archivosEsperados: ['ft_strrev.c'],
  funcionesPermitidas: [],

  subject: `Assignment name  : ft_strrev
Expected files   : ft_strrev.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that reverses a string in-place and returns it.

char\t*ft_strrev(char *str);

Example:
ft_strrev("hello") → returns str modified to "olleh"`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : ft_strrev
Expected files   : ft_strrev.c
Allowed functions:
--------------------------------------------------------------------------------

Write a function that reverses (in-place) a string.

It must return its parameter.

Your function must be declared as follows:

char    *ft_strrev(char *str);`,

  descripcion: 'Función que invierte un string in-place (dentro del mismo array) y lo devuelve. Usa dos índices que se acercan desde los extremos intercambiando chars.',

  palacio: {
    habitacion: 'salon',
    mueble: 'espejo',
    personaje: 'El Espejo Inversor',
    emoji: '🪞',
    historia: `En el salón hay un Espejo mágico que invierte todo lo que le pones delante.
Le das el string y el Espejo usa dos dedos: uno en el primer char, otro en el último.
Los intercambia con tmp, luego avanza el dedo izquierdo y retrocede el derecho.
Cuando los dos dedos se cruzan, la inversión está completa.
SIEMPRE devuelve el mismo puntero (str) — modifica in-place, sin malloc.`,
    anclas: [
      "len = strlen(str)  ← medir la longitud primero",
      "i=0, j=len-1  ← dos índices desde los extremos",
      "tmp = str[i]; str[i] = str[j]; str[j] = tmp  ← intercambio",
      "while (i < len / 2)  ← solo hasta la mitad",
      "return (str)  ← mismo puntero, modificado in-place",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'Intercambio de chars desde extremos hacia el centro',
    formula: 'while (i < len/2) { tmp=str[i]; str[i]=str[len-1-i]; str[len-1-i]=tmp; i++; } return str;',
    ejemplo: {
      entrada: '"hello"',
      calculo: 'len=5; i=0:h↔o; i=1:e↔l; i=2:l≈l(centro); → "olleh"',
      resultado: '"olleh"',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Con len calculado y dos variables',
      descripcion: 'Calcula len primero, intercambia con tmp. La más legible.',
      recomendada: true,
      codigo: `char\t*ft_strrev(char *str)
{
\tint\tlen;
\tint\ti;
\tchar\ttmp;

\tlen = 0;
\twhile (str[len])
\t\tlen++;
\ti = 0;
\twhile (i < len / 2)
\t{
\t\ttmp = str[i];
\t\tstr[i] = str[len - 1 - i];
\t\tstr[len - 1 - i] = tmp;
\t\ti++;
\t}
\treturn (str);
}`,
    },
    {
      id: 'dos_indices',
      nombre: 'Con dos índices i y j',
      descripcion: 'i desde el inicio, j desde el final, se acercan hasta cruzarse.',
      recomendada: false,
      codigo: `char\t*ft_strrev(char *str)
{
\tint\ti;
\tint\tj;
\tchar\ttmp;

\ti = 0;
\tj = 0;
\twhile (str[j])
\t\tj++;
\tj--;
\twhile (i < j)
\t{
\t\ttmp = str[i];
\t\tstr[i] = str[j];
\t\tstr[j] = tmp;
\t\ti++;
\t\tj--;
\t}
\treturn (str);
}`,
    },
  
    {
      id: 'rank02',
      nombre: 'Versión rank02 (solución de referencia)',
      descripcion: 'Solución tal y como aparece en el repo de referencia rank02. Útil para comparar estilo, validaciones y constraints reales del examen.',
      recomendada: false,
      origen: 'rank02',
      codigo: `char *ft_strrev(char *str)
{
	int i = -1;
	int length = 0;
	char temporary;

	while (str[length])
		length++;
	while (++i < length / 2)
	{
		temporary = str[i];
		str[i] = str[length - 1 - i];
		str[length - 1 - i] = temporary;
	}
	return (str);
}`,
    },
  ],

  tests: [
    { id: 'test_hello', descripcion: '"hello" → "olleh"', entrada: ['hello'], salida: 'olleh\n', tipo: 'normal' },
    { id: 'test_palindrome', descripcion: '"racecar" → "racecar" (palíndromo)', entrada: ['racecar'], salida: 'racecar\n', tipo: 'normal' },
    { id: 'test_single', descripcion: '"a" → "a" (un char)', entrada: ['a'], salida: 'a\n', tipo: 'edge' },
    { id: 'test_vacio', descripcion: '"" → "" (string vacío)', entrada: [''], salida: '\n', tipo: 'edge' },
    { id: 'test_abc', descripcion: '"abc" → "cba"', entrada: ['abc'], salida: 'cba\n', tipo: 'normal' },
    { id: 'test_numero', descripcion: '"12345" → "54321"', entrada: ['12345'], salida: '54321\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Calcular len de "hello"',
      codigo: `str = "hello"
len = 0
str[0]='h' → len++; str[1]='e' → len++; ... str[5]='\\0' → para
len = 5`,
      variables: [
        { nombre: 'len', valor: '5', cambio: true, nota: '' },
        { nombre: 'i', valor: '0', cambio: false, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'i=0: intercambiar str[0]="h" con str[4]="o"',
      codigo: `i=0, len-1-i = 4
tmp = str[0] = 'h'
str[0] = str[4] = 'o' → str="oello"
str[4] = tmp = 'h' → str="oellh"
i++ → i=1`,
      variables: [
        { nombre: 'tmp', valor: "'h'", cambio: true, nota: '' },
        { nombre: 'str', valor: '"oellh"', cambio: true, nota: '' },
        { nombre: 'i', valor: '1', cambio: true, nota: '' },
      ],
    },
    {
      paso: 3,
      titulo: 'i=1: intercambiar str[1]="e" con str[3]="l"',
      codigo: `i=1, len-1-i = 3
tmp = 'e'; str[1]='l'; str[3]='e' → str="olh"...
str="olleh" ... i=2`,
      variables: [
        { nombre: 'str', valor: '"olleh"', cambio: true, nota: '' },
        { nombre: 'i', valor: '2', cambio: true, nota: '' },
      ],
    },
    {
      paso: 4,
      titulo: 'i=2: 2 < 5/2=2 → FALSE → sale del while',
      codigo: `i=2, len/2=2
while (2 < 2) → FALSE → sale
return (str) = "olleh"`,
      variables: [
        { nombre: 'retorno', valor: '"olleh"', cambio: true, nota: '✓ invertido in-place' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'i < len en vez de i < len/2 → invierte el string dos veces',
      descripcion: 'Si el while va hasta len, pasa el punto medio y vuelve a invertir, dejando el string original. El intercambio debe hacerse solo hasta la mitad.',
      codigoMal: `// ❌ Invierte dos veces → string original
while (i < len) {
    tmp = str[i]; str[i] = str[len-1-i]; str[len-1-i] = tmp;
    i++;
}`,
      codigoBien: `// ✅ Solo hasta la mitad
while (i < len / 2) {
    tmp = str[i]; str[i] = str[len-1-i]; str[len-1-i] = tmp;
    i++;
}`,
    },
    {
      severidad: 'mortal',
      titulo: 'No devolver str — retornar NULL o void',
      descripcion: 'La firma es char *ft_strrev. Debe devolver el mismo puntero str. Si devuelves void o NULL, el caller no puede usar el resultado.',
      codigoMal: `// ❌ Olvida return
void ft_strrev(char *str) {
    // ... invierte ...
    // sin return
}`,
      codigoBien: `// ✅
char *ft_strrev(char *str) {
    // ... invierte ...
    return (str);  // mismo puntero
}`,
    },
    {
      severidad: 'warning',
      titulo: 'j = len sin -1 → j apunta al \\0',
      descripcion: 'Si j empieza en len (no len-1), apunta al \\0 terminal. El primer intercambio pondría \\0 al inicio del string.',
      codigoMal: `// ❌ j apunta al '\\0'
j = len;  // str[len] = '\\0'
// primer intercambio: str[0] ↔ str[len] = '\\0' → error`,
      codigoBien: `// ✅ j apunta al último char
j = len - 1;  // str[len-1] = último char real`,
    },
  ],

  bajoCelCapot: `ft_strrev modifica el string directamente (in-place), sin malloc.
El puntero str no cambia — devuelve la misma dirección.
El intercambio a la mitad: para len=5, solo 2 intercambios (i=0,1); el char central (i=2) no se mueve.
Para len=4: 2 intercambios (i=0,1); se cruzan en el medio.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El patrón de inversión in-place con dos índices es la base de reverse_bits, ft_strrev, y cualquier algoritmo de inversión de array.',
  relacionados: ['reverse_bits', 'ft_strlen', 'ft_strcpy'],
}

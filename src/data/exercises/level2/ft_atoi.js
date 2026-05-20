export default {
  id: 'ft_atoi',
  nombre: 'ft_atoi',
  nivel: 2,
  dificultad: 'medio',
  tipoEntrega: 'funcion',
  archivosEsperados: ['ft_atoi.c'],
  funcionesPermitidas: [],

  subject: `Assignment name  : ft_atoi
Expected files   : ft_atoi.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that converts the initial portion of the string pointed to
by str to int representation.

int\tft_atoi(const char *str);

The function should behave like the standard atoi(3) function:
- Skip whitespace characters (space, \\t, \\n, \\r, \\f, \\v).
- Read optional sign (+ or -).
- Read digits until non-digit.
- Return the resulting integer.`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : ft_atoi
Expected files   : ft_atoi.c
Allowed functions: None
--------------------------------------------------------------------------------

Write a function that converts the string argument str to an integer (type int)
and returns it.

It works much like the standard atoi(const char *str) function, see the man.

Your function must be declared as follows:

int	ft_atoi(const char *str);`,

  descripcion: 'Función que convierte un string a int: salta espacios blancos, lee signo opcional, acumula dígitos. Replica el comportamiento de atoi(3).',

  palacio: {
    habitacion: 'salon',
    mueble: 'television',
    personaje: 'El Traductor de números',
    emoji: '🔢',
    historia: `En el salón hay un Traductor de números que lee el string FASE A FASE.
FASE 1: Salta los espacios blancos (space, tab, \\n, \\r, \\f, \\v) del principio.
FASE 2: Lee el signo opcional (+ o -). Solo un signo.
FASE 3: Acumula dígitos: result = result*10 + (c-'0').
Cuando llega a un carácter no-dígito, para y devuelve el número.`,
    anclas: [
      "FASE 1: while(isspace) → salta espacios",
      "FASE 2: if (+/-) → signo; ¡solo uno!",
      "FASE 3: while(isdigit) result=result*10+(c-'0')",
      "return (result * sign)",
      "isspace: ' ', \\t, \\n, \\r, \\f, \\v",
    ],
  },

  herramientas: ['strings', 'ascii'],

  formulaClave: {
    descripcion: 'Acumulación de dígitos en base 10',
    formula: 'result = result * 10 + (str[i] - "0");',
    ejemplo: {
      entrada: '"  -42hello"',
      calculo: 'salta 2 spaces → sign=-1 → 4: result=4, 2: result=42 → para en h → return -42',
      resultado: '-42',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica tres fases',
      descripcion: 'Tres bucles/condiciones explícitos: whitespace, signo, dígitos.',
      recomendada: true,
      codigo: `int\tft_atoi(const char *str)
{
\tint\tresult;
\tint\tsign;

\tresult = 0;
\tsign = 1;
\twhile (*str == ' ' || (*str >= '\\t' && *str <= '\\r'))
\t\tstr++;
\tif (*str == '-' || *str == '+')
\t{
\t\tif (*str == '-')
\t\t\tsign = -1;
\t\tstr++;
\t}
\twhile (*str >= '0' && *str <= '9')
\t{
\t\tresult = result * 10 + (*str - '0');
\t\tstr++;
\t}
\treturn (result * sign);
}`,
    },
    {
      id: 'indice',
      nombre: 'Con índice i',
      descripcion: 'Usa índice explícito en vez de mover el puntero. Igual de válida.',
      recomendada: false,
      codigo: `int\tft_atoi(const char *str)
{
\tint\ti;
\tint\tsign;
\tint\tresult;

\ti = 0;
\tsign = 1;
\tresult = 0;
\twhile (str[i] == ' ' || (str[i] >= '\\t' && str[i] <= '\\r'))
\t\ti++;
\tif (str[i] == '-' || str[i] == '+')
\t{
\t\tif (str[i] == '-')
\t\t\tsign = -1;
\t\ti++;
\t}
\twhile (str[i] >= '0' && str[i] <= '9')
\t{
\t\tresult = result * 10 + (str[i] - '0');
\t\ti++;
\t}
\treturn (result * sign);
}`,
    },
    {
      id: 'puntero_y_estado',
      nombre: 'Con puntero y función auxiliar para whitespace',
      descripcion: 'Separa el salto de espacios y el parseo numérico en pasos fáciles de seguir.',
      recomendada: false,
      codigo: `static int\tis_ws(char c)
{
\treturn (c == ' ' || (c >= '\\t' && c <= '\\r'));
}

int\tft_atoi(const char *str)
{
\tint\tresult;
\tint\tsign;

\tresult = 0;
\tsign = 1;
\twhile (is_ws(*str))
\t\tstr++;
\tif (*str == '+' || *str == '-')
\t{
\t\tif (*str == '-')
\t\t\tsign = -1;
\t\tstr++;
\t}
\twhile (*str >= '0' && *str <= '9')
\t{
\t\tresult = result * 10 + (*str - '0');
\t\tstr++;
\t}
\treturn (result * sign);
}`,
    },
  
    {
      id: 'rank02',
      nombre: 'Versión rank02 (solución de referencia)',
      descripcion: 'Solución tal y como aparece en el repo de referencia rank02. Útil para comparar estilo, validaciones y constraints reales del examen.',
      recomendada: false,
      origen: 'rank02',
      codigo: `#include <stdio.h>

int     ft_atoi(const char *str)
{
	int	nbr;
	int sig;
	int	i;

	nbr = 0;
	sig = 1;
	i = 0;
	if (str[0] == '-' || str[0] == '+')
	{
		if (str[0] == '-')
			sig = -1;
		i += 1;
	}
	while (str[i] && str[i] >= '0' && str[i] <= '9')
		nbr = (nbr * 10) + (str[i++] - '0');
	return (nbr * sig);
}`,
    },
  ],

  tests: [
    { id: 'test_simple', descripcion: '"42" → 42', entrada: ['42'], salida: '42\n', tipo: 'normal' },
    { id: 'test_negativo', descripcion: '"-42" → -42', entrada: ['-42'], salida: '-42\n', tipo: 'normal' },
    { id: 'test_positivo', descripcion: '"+5" → 5 (signo positivo explícito)', entrada: ['+5'], salida: '5\n', tipo: 'normal' },
    { id: 'test_espacios', descripcion: '"  42" → 42 (salta espacios)', entrada: ['  42'], salida: '42\n', tipo: 'normal' },
    { id: 'test_letras', descripcion: '"abc" → 0 (sin dígitos)', entrada: ['abc'], salida: '0\n', tipo: 'edge' },
    { id: 'test_mixto', descripcion: '"-15hello" → -15 (para en h)', entrada: ['-15hello'], salida: '-15\n', tipo: 'normal' },
    { id: 'test_cero', descripcion: '"0" → 0', entrada: ['0'], salida: '0\n', tipo: 'edge' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'FASE 1: saltar whitespace en "  -42"',
      codigo: `str = "  -42"
FASE 1: while(*str==' ') str++
str[0]=' ' → str++
str[1]=' ' → str++
str[2]='-' ≠ ' ' → sale
str ahora apunta a "-42"`,
      variables: [
        { nombre: 'str', valor: '"  -42" → "-42"', cambio: true, nota: '2 espacios saltados' },
        { nombre: 'result', valor: '0', cambio: false, nota: '' },
        { nombre: 'sign', valor: '1', cambio: false, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'FASE 2: leer signo "-" → sign = -1',
      codigo: `if (*str == '-') → TRUE
sign = -1
str++  ← ahora apunta a "42"`,
      variables: [
        { nombre: 'sign', valor: '-1', cambio: true, nota: '← signo negativo' },
        { nombre: 'str', valor: '"42"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 3,
      titulo: 'FASE 3: leer "4" → result = 4',
      codigo: `while(*str >= '0' && *str <= '9')
*str = '4' (52) → 52>='0' y 52<='9' → TRUE
result = 0*10 + (52-48) = 4
str++`,
      variables: [
        { nombre: 'result', valor: '4', cambio: true, nota: '0*10 + (52-48)' },
      ],
    },
    {
      paso: 4,
      titulo: 'FASE 3: leer "2" → result = 42',
      codigo: `*str = '2' (50) → TRUE
result = 4*10 + (50-48) = 42
str++
*str = '\\0' → FALSE → sale del while`,
      variables: [
        { nombre: 'result', valor: '42', cambio: true, nota: '4*10+2=42' },
      ],
    },
    {
      paso: 5,
      titulo: 'return (result * sign) = 42 * (-1) = -42',
      codigo: `return (42 * -1) = -42`,
      variables: [
        { nombre: 'retorno', valor: '-42', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Olvidar los whitespace distintos del espacio (\t, \n, \r, \f, \v)',
      descripcion: 'atoi() salta TODOS los whitespace C: " ", \\t(9), \\n(10), \\r(13), \\f(12), \\v(11). Solo comprobar " " (espacio) hace fallar las pruebas con tabs.',
      codigoMal: `// ❌ Solo espacio
while (*str == ' ') str++;  // ¡falta \\t, \\n, \\r, \\f, \\v!`,
      codigoBien: `// ✅ Todos los whitespace
while (*str == ' ' || (*str >= '\\t' && *str <= '\\r'))
    str++;
// \\t=9, \\n=10, \\v=11, \\f=12, \\r=13 → rango 9..13`,
    },
    {
      severidad: 'mortal',
      titulo: 'Multiplicar result * 10 ANTES de sumar el nuevo dígito',
      descripcion: 'result = result + c - "0" acumula incorrectamente. Siempre: result = result * 10 + dígito.',
      codigoMal: `// ❌ Sin multiplicar por 10 — solo suma
result = result + (*str - '0');  // "42" → 4+2=6, no 42`,
      codigoBien: `// ✅
result = result * 10 + (*str - '0');  // "42" → 0*10+4=4, 4*10+2=42 ✓`,
    },
    {
      severidad: 'warning',
      titulo: 'Doble signo: "--5" o "+-5"',
      descripcion: 'El real atoi() solo lee UN signo. "--5" resultaría en 0 (el segundo "-" no es dígito). No intentes manejar múltiples signos.',
      codigoMal: `// ❌ Leer múltiples signos
while (*str == '-' || *str == '+') { ... }`,
      codigoBien: `// ✅ Solo un signo
if (*str == '-' || *str == '+') {
    if (*str == '-') sign = -1;
    str++;
}`,
    },
  ],

  bajoCelCapot: `El rango ASCII de whitespace: ' '(32), '\\t'(9), '\\n'(10), '\\v'(11), '\\f'(12), '\\r'(13).
El truco \\t..\\r (9..13) captura todos excepto el espacio.
result * 10 + dígito convierte "123" en 1*100+2*10+3=123.
La función no maneja overflow — comportamiento definido por implementación.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'ft_atoi es un building block de ft_atoi_base, do_op, y cualquier parser numérico. Las 3 fases son el patrón universal.',
  relacionados: ['do_op', 'ft_atoi_base'],
}

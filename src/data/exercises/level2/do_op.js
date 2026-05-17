export default {
  id: 'do_op',
  nombre: 'do_op',
  nivel: 2,
  dificultad: 'fácil',
  tipoEntrega: 'programa',
  archivosEsperados: ['do_op.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : do_op
Expected files   : do_op.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes three strings:
  - Two representing integer values.
  - One representing an arithmetic operator (+, -, *, /, %).

The program must display the integer result of the requested operation,
followed by a newline.

If the number of parameters is not 3, or if the operator is not one of the
valid operators, simply display "Error", followed by a newline.

Division and modulo by zero also display "Error".

Example:
$> ./do_op 42 "*" 2
84
$> ./do_op 10 / 2
5
$> ./do_op 10 % 0
Error
$>`,

  descripcion: 'Programa que realiza operaciones aritméticas: argc==4 (programa + 3 args). Convierte strings a int, aplica operador, imprime resultado o "Error".',

  palacio: {
    habitacion: 'salon',
    mueble: 'mesita',
    personaje: 'La Calculadora de la mesita',
    emoji: '🧮',
    historia: `En la mesita del salón hay una Calculadora mágica.
Le das TRES argumentos: el número A, el operador (+,-,*,/,%) y el número B.
Si el operador es válido y no hay división por cero, calcula y muestra el resultado.
Si algo está mal (mal argc, operador desconocido, /0), grita "Error".
¡El programa cuenta como argv[0], así que argc válido = 4!`,
    anclas: [
      "argc != 4 → Error (programa + 3 argumentos)",
      "a = atoi(argv[1]), op = argv[2][0], b = atoi(argv[3])",
      "/ o % con b==0 → Error",
      "operador inválido → Error",
      "división: truncar hacia cero (comportamiento C)",
    ],
  },

  herramientas: ['strings', 'argc', 'ascii'],

  formulaClave: {
    descripcion: 'Leer dos enteros y un operador, aplicar y escribir resultado',
    formula: 'a = ft_atoi(argv[1]); b = ft_atoi(argv[3]); op = argv[2][0];',
    ejemplo: {
      entrada: '"42" "*" "2"',
      calculo: 'a=42, op="*", b=2 → 42*2=84',
      resultado: '84',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica con ft_atoi y ft_putnbr propios',
      descripcion: 'La solución completa que implementa las funciones auxiliares necesarias.',
      recomendada: true,
      codigo: `#include <unistd.h>

static int\tft_atoi(char *str)
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
\t\tresult = result * 10 + (*str++ - '0');
\treturn (result * sign);
}

static void\tft_putnbr(int n)
{
\tchar\tc;

\tif (n < 0)
\t{
\t\twrite(1, "-", 1);
\t\tn = -n;
\t}
\tif (n >= 10)
\t\tft_putnbr(n / 10);
\tc = '0' + (n % 10);
\twrite(1, &c, 1);
}

int\tmain(int argc, char **argv)
{
\tint\ta;
\tint\tb;
\tchar\top;
\tint\tresult;

\tif (argc != 4)
\t{
\t\twrite(1, "Error\\n", 6);
\t\treturn (0);
\t}
\ta = ft_atoi(argv[1]);
\top = argv[2][0];
\tb = ft_atoi(argv[3]);
\tif (op == '+')
\t\tresult = a + b;
\telse if (op == '-')
\t\tresult = a - b;
\telse if (op == '*')
\t\tresult = a * b;
\telse if (op == '/' && b != 0)
\t\tresult = a / b;
\telse if (op == '%' && b != 0)
\t\tresult = a % b;
\telse
\t{
\t\twrite(1, "Error\\n", 6);
\t\treturn (0);
\t}
\tft_putnbr(result);
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
  ],

  tests: [
    { id: 'test_suma', descripcion: '42 + 2 → 44', entrada: ['42', '+', '2'], salida: '44\n', tipo: 'normal' },
    { id: 'test_resta', descripcion: '10 - 3 → 7', entrada: ['10', '-', '3'], salida: '7\n', tipo: 'normal' },
    { id: 'test_mult', descripcion: '6 * 7 → 42', entrada: ['6', '*', '7'], salida: '42\n', tipo: 'normal' },
    { id: 'test_div', descripcion: '10 / 3 → 3 (entero truncado)', entrada: ['10', '/', '3'], salida: '3\n', tipo: 'normal' },
    { id: 'test_mod', descripcion: '10 % 3 → 1', entrada: ['10', '%', '3'], salida: '1\n', tipo: 'normal' },
    { id: 'test_div_cero', descripcion: '5 / 0 → Error', entrada: ['5', '/', '0'], salida: 'Error\n', tipo: 'edge' },
    { id: 'test_bad_op', descripcion: 'Operador ^ inválido → Error', entrada: ['5', '^', '3'], salida: 'Error\n', tipo: 'edge' },
    { id: 'test_bad_argc', descripcion: 'Sin argumentos → Error', entrada: [], salida: 'Error\n', tipo: 'edge' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Entrada: "42" "+" "2" → argc=4',
      codigo: `argc=4, argv[1]="42", argv[2]="+", argv[3]="2"
a = ft_atoi("42") = 42
op = argv[2][0] = '+'
b = ft_atoi("2") = 2`,
      variables: [
        { nombre: 'a', valor: '42', cambio: true, nota: '' },
        { nombre: 'op', valor: "'+'", cambio: true, nota: '' },
        { nombre: 'b', valor: '2', cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: "op == '+' → result = 42 + 2 = 44",
      codigo: `if (op == '+') → TRUE
result = a + b = 42 + 2 = 44
ft_putnbr(44) → write '4','4'
write "\\n"
stdout: "44\\n"`,
      variables: [
        { nombre: 'result', valor: '44', cambio: true, nota: '' },
        { nombre: 'stdout', valor: '"44\\n"', cambio: true, nota: '✓' },
      ],
    },
    {
      paso: 3,
      titulo: 'Caso error: "5 / 0" → b=0 → Error',
      codigo: `a=5, op='/', b=0
if (op == '/') → TRUE
if (op == '/' && b != 0) → FALSE (b==0)
→ else → write "Error\\n"`,
      variables: [
        { nombre: 'b', valor: '0', cambio: false, nota: '← división por cero' },
        { nombre: 'stdout', valor: '"Error\\n"', cambio: true, nota: '' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'argc != 3 en vez de argc != 4',
      descripcion: 'El programa "do_op" es argv[0]. Con 3 argumentos de usuario → argc = 4. La comprobación correcta es argc != 4.',
      codigoMal: `// ❌ argc==3 con 3 args de usuario sería argc=4, no 3
if (argc != 3)  // do_op 42 + 2 → argc=4, no entraría aquí nunca`,
      codigoBien: `// ✅
if (argc != 4)  // programa + 3 argumentos = 4`,
    },
    {
      severidad: 'mortal',
      titulo: 'División entera trunca hacia cero en C (no floor)',
      descripcion: '-7 / 2 = -3 en C (trunca hacia cero), no -4 (que sería floor). La Moulinette espera el comportamiento de C.',
      codigoMal: `// ❌ No trunca hacia cero correctamente en todos los compiladores
// sin comportamiento definido para negativos en C89`,
      codigoBien: `// ✅ En C99/C11 la división entera siempre trunca hacia cero
// -7 / 2 = -3 (no -4)
result = a / b;  // comportamiento definido en C99+`,
    },
    {
      severidad: 'warning',
      titulo: 'Comprobar ambos / y % contra división por cero',
      descripcion: 'Tanto a/0 como a%0 son undefined behavior en C. Hay que proteger ambos.',
      codigoMal: `// ❌ Solo protege división
else if (op == '/' && b != 0) result = a / b;
else if (op == '%') result = a % b;  // ← a%0 también es UB`,
      codigoBien: `// ✅ Protege ambos
else if (op == '/' && b != 0) result = a / b;
else if (op == '%' && b != 0) result = a % b;`,
    },
  ],

  bajoCelCapot: `El operador viene como string (argv[2]). Sólo el primer byte es relevante (argv[2][0]).
La conversión de string a int la hace ft_atoi (o atoi si está permitida).
El resultado debe imprimirse con ft_putnbr (o printf si está permitida).`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'Patrón de parseo de argumentos múltiples + conversión de tipos. El manejo de argc==4 es la trampa clásica.',
  relacionados: ['ft_atoi', 'paramsum'],
}

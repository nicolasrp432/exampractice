export default {
  id: 'fprime',
  nombre: 'fprime',
  nivel: 4,
  dificultad: 'medio',
  tipoEntrega: 'programa',
  archivosEsperados: ['fprime.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : fprime
Expected files   : fprime.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a positive int and displays its prime factors on the
standard output, followed by a newline.

Factors must be displayed in ascending order and separated by '*'.

If the number of arguments is not 1, or the argument is not valid (negative,
zero, or not a number), just display a newline.

Example:
$> ./fprime 225 | cat -e
3*3*5*5$
$> ./fprime 8333333333333333333 | cat -e
$
$> ./fprime 101 | cat -e
101$
$> ./fprime 1 | cat -e
1$
$> ./fprime | cat -e
$
$> ./fprime 42 | cat -e
2*3*7$`,

  descripcion: 'Descomposición en factores primos. Divide el número por divisores empezando en 2. Cada vez que el divisor divide exactamente, imprime el factor y continúa con el cociente. Si quedan factores, imprime el número restante.',

  palacio: {
    habitacion: 'garaje',
    mueble: 'destornillador',
    personaje: 'El Destornillador de Primos',
    emoji: '🔩',
    historia: `En el garaje hay un Destornillador que desmonta cualquier número en sus piezas primas.
El proceso: prueba divisores desde 2 hacia arriba.
Cada vez que el divisor divide exactamente → imprimir factor, dividir n, no aumentar divisor.
Cuando ya no divide → aumentar divisor.
Si al final n > 1 → n mismo es primo, imprimir.
Caso especial: n=1 → imprimir "1".`,
    anclas: [
      "divisor d empieza en 2",
      "mientras d*d <= n: si n%d==0 → imprimir d, n/=d; si no d++",
      "al final, si n>1 → imprimir n (es primo)",
      "primer factor no lleva '*' antes — usar flag 'first'",
      "n=1 caso especial → imprimir '1' directamente",
    ],
  },

  herramientas: ['bits', 'ascii'],

  formulaClave: {
    descripcion: 'Divide por d mientras d*d<=n; resto n>1 es primo',
    formula: 'while d*d<=n: if n%d==0: print d; n/=d; else d++; if n>1: print n',
    ejemplo: {
      entrada: 'n=12',
      calculo: 'd=2: 12%2=0→print 2, n=6; 6%2=0→print 2, n=3; d=2: 2*2=4>3→stop; n=3>1→print 3',
      resultado: '"2*2*3"',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Con divisor incremental y flag first',
      descripcion: 'La versión estándar. Eficiente hasta √n. Maneja el caso primo al final.',
      recomendada: true,
      codigo: `#include <unistd.h>

static void\tft_putnbr(unsigned long long n)
{
\tchar\tc;

\tif (n >= 10)
\t\tft_putnbr(n / 10);
\tc = n % 10 + '0';
\twrite(1, &c, 1);
}

int\tmain(int argc, char **argv)
{
\tunsigned long long\tn;
\tunsigned long long\td;
\tint\t\t\t\ti;
\tint\t\t\t\tfirst;

\tif (argc != 2)
\t{
\t\twrite(1, "\\n", 1);
\t\treturn (0);
\t}
\tn = 0;
\ti = 0;
\twhile (argv[1][i] >= '0' && argv[1][i] <= '9')
\t\tn = n * 10 + (argv[1][i++] - '0');
\tif (argv[1][i] != '\\0' || n == 0)
\t{
\t\twrite(1, "\\n", 1);
\t\treturn (0);
\t}
\tif (n == 1)
\t{
\t\twrite(1, "1\\n", 2);
\t\treturn (0);
\t}
\td = 2;
\tfirst = 1;
\twhile (d * d <= n)
\t{
\t\twhile (n % d == 0)
\t\t{
\t\t\tif (!first)
\t\t\t\twrite(1, "*", 1);
\t\t\tft_putnbr(d);
\t\t\tn /= d;
\t\t\tfirst = 0;
\t\t}
\t\td++;
\t}
\tif (n > 1)
\t{
\t\tif (!first)
\t\t\twrite(1, "*", 1);
\t\tft_putnbr(n);
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'impares',
      nombre: 'Con 2 aparte y luego divisores impares',
      descripcion: 'Hace el caso par explícito y después prueba solo impares, que es más fácil de leer.',
      recomendada: false,
      codigo: `#include <unistd.h>

static void\tft_putnbr(unsigned long long n)
{
\tchar\tc;

\tif (n >= 10)
\t\tft_putnbr(n / 10);
\tc = n % 10 + '0';
\twrite(1, &c, 1);
}

int\tmain(int argc, char **argv)
{
\tunsigned long long\tn;
\tunsigned long long\td;
\tint\t\t\t\ti;
\tint\t\t\t\tfirst;

\tif (argc != 2)
\t{
\t\twrite(1, "\\n", 1);
\t\treturn (0);
\t}
\tn = 0;
\ti = 0;
\twhile (argv[1][i] >= '0' && argv[1][i] <= '9')
\t\tn = n * 10 + (argv[1][i++] - '0');
\tif (argv[1][i] != '\\0' || n == 0)
\t{
\t\twrite(1, "\\n", 1);
\t\treturn (0);
\t}
\tif (n == 1)
\t{
\t\twrite(1, "1\\n", 2);
\t\treturn (0);
\t}
\tfirst = 1;
\twhile (n % 2 == 0)
\t{
\t\tif (!first)
\t\t\twrite(1, "*", 1);
\t\tft_putnbr(2);
\t\tn /= 2;
\t\tfirst = 0;
\t}
\td = 3;
\twhile (d * d <= n)
\t{
\t\twhile (n % d == 0)
\t\t{
\t\t\tif (!first)
\t\t\t\twrite(1, "*", 1);
\t\t\tft_putnbr(d);
\t\t\tn /= d;
\t\t\tfirst = 0;
\t\t}
\t\td += 2;
\t}
\tif (n > 1)
\t{
\t\tif (!first)
\t\t\twrite(1, "*", 1);
\t\tft_putnbr(n);
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
  ],

  tests: [
    { id: 'test_225', descripcion: '225 → "3*3*5*5"', entrada: ['225'], salida: '3*3*5*5\n', tipo: 'normal' },
    { id: 'test_1', descripcion: '1 → "1"', entrada: ['1'], salida: '1\n', tipo: 'edge' },
    { id: 'test_101', descripcion: '101 (primo) → "101"', entrada: ['101'], salida: '101\n', tipo: 'normal' },
    { id: 'test_42', descripcion: '42 → "2*3*7"', entrada: ['42'], salida: '2*3*7\n', tipo: 'normal' },
    { id: 'test_6', descripcion: '6 → "2*3"', entrada: ['6'], salida: '2*3\n', tipo: 'normal' },
    { id: 'test_12', descripcion: '12 → "2*2*3"', entrada: ['12'], salida: '2*2*3\n', tipo: 'normal' },
    { id: 'test_no_args', descripcion: 'sin args → newline', entrada: [], salida: '\n', tipo: 'edge' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'fprime(225): descomposición',
      codigo: `n=225, d=2
d=2: 225%2≠0 → d=3
d=3: 225%3=0 → print "3", n=75, first=0
      75%3=0 → print "*3", n=25
      25%3≠0 → d=4
d=4: 25%4≠0 → d=5
d=5: 25%5=0 → print "*5", n=5
      5%5=0 → print "*5", n=1
      d=6: 6*6=36 > 1 → while FALSE
n=1: n>1 es FALSE → no imprime nada más
write("\\n")
Salida: "3*3*5*5"`,
      variables: [
        { nombre: 'salida', valor: '"3*3*5*5"', cambio: true, nota: '✓ 225=3²×5²' },
      ],
    },
    {
      paso: 2,
      titulo: 'fprime(42): número compuesto',
      codigo: `n=42, d=2
d=2: 42%2=0 → "2", n=21
     21%2≠0 → d=3
d=3: 21%3=0 → "*3", n=7
     7%3≠0 → d=4
d=4: 4*4=16 > 7 → while FALSE
n=7 > 1 → "*7"
Salida: "2*3*7"`,
      variables: [
        { nombre: 'salida', valor: '"2*3*7"', cambio: true, nota: '✓ 42=2×3×7' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Olvidar el caso n=1: sin factores, pero hay que imprimir "1"',
      descripcion: 'Si n=1, el while d*d<=n nunca entra (1*1=1, pero n%1=0 siempre), y n>1 es false. Sin caso especial para n=1, no se imprime nada.',
      codigoMal: `// ❌ Sin caso especial n=1 → output vacío (solo \\n)
// n=1: d=2, d*d=4>1 → while no entra; n>1 false → nada`,
      codigoBien: `// ✅ Caso especial antes del bucle
if (n == 1) { write(1, "1\\n", 2); return 0; }`,
    },
    {
      severidad: 'mortal',
      titulo: 'Usar int en vez de unsigned long long — overflow con números grandes',
      descripcion: 'Los argumentos pueden ser muy grandes. Usar unsigned long long (o al menos unsigned long) para evitar overflow al parsear y al computar d*d.',
      codigoMal: `// ❌ int desborda con números > 2^31-1
int n = atoi(argv[1]);`,
      codigoBien: `// ✅ unsigned long long para rangos grandes
unsigned long long n = 0;
while (argv[1][i] >= '0' && argv[1][i] <= '9')
    n = n * 10 + (argv[1][i++] - '0');`,
    },
    {
      severidad: 'warning',
      titulo: 'Separador "*" antes del primer factor',
      descripcion: 'El primer factor no lleva "*" delante. Usar un flag "first" o imprimir el primer factor fuera del bucle.',
      codigoMal: `// ❌ Imprime "*2*3*7" en vez de "2*3*7"
while (n % d == 0) { write("*"); ft_putnbr(d); n /= d; }`,
      codigoBien: `// ✅ Flag "first" para omitir el primer separador
if (!first) write(1, "*", 1);
ft_putnbr(d);
first = 0;`,
    },
  ],

  bajoCelCapot: `La factorización en primos divide repetidamente por el menor divisor posible.
Solo necesitamos probar hasta √n porque si n tiene un factor mayor que √n,
el cofactor correspondiente es menor que √n y ya lo habríamos encontrado.
225 = 3² × 5². 42 = 2 × 3 × 7. 101 es primo (no tiene factores hasta √101≈10).
El bucle while(n%d==0) extrae todas las potencias del divisor actual.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El patrón d*d<=n + while(n%d==0){imprimir;n/=d} + al_final_n>1_es_primo es la estructura clave. Memorizar con 225=3*3*5*5 como ejemplo de referencia.',
  relacionados: ['add_prime_sum', 'pgcd', 'lcm'],
}

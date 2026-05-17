export default {
  id: 'add_prime_sum',
  nombre: 'add_prime_sum',
  nivel: 3,
  dificultad: 'medio',
  tipoEntrega: 'programa',
  archivosEsperados: ['add_prime_sum.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : add_prime_sum
Expected files   : add_prime_sum.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a positive integer as argument and displays the
sum of all prime numbers up to and including it, followed by a newline.

If the number of arguments is not 1, or if the argument is not a positive
integer, just display 0 followed by a newline.

Example:
$> ./add_prime_sum 5 | cat -e
10$
$> ./add_prime_sum 7 | cat -e
17$
$> ./add_prime_sum 1 | cat -e
0$`,

  descripcion: 'Programa que suma todos los números primos hasta N (inclusive). Requiere is_prime() con verificación hasta sqrt(n), y put_nbr para imprimir el resultado.',

  palacio: {
    habitacion: 'dormitorio',
    mueble: 'microscopio',
    personaje: 'El Microscopio de Primos',
    emoji: '🔬',
    historia: `En el dormitorio hay un Microscopio que detecta números primos.
Le das un número N y el Microscopio examina cada número de 2 a N.
Para cada uno: ¿es primo? Si sí, lo añade a la suma.
La clave de is_prime: probar divisores solo hasta sqrt(n) — eficiencia crítica.
El 1 no es primo. El 2 sí es primo (el único par primo). Resultado: put_nbr(suma).`,
    anclas: [
      "is_prime(n): probar i de 2 hasta i*i<=n",
      "si n%i==0 → no es primo",
      "if (n < 2) return 0  ← 0 y 1 no son primos",
      "suma = 0; for i=2 to N: if is_prime(i) sum+=i",
      "put_nbr(suma); write('\\n')",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'is_prime hasta sqrt + suma acumulativa',
    formula: 'is_prime(x): i=2; while i*i<=x: if x%i==0 return 0; i++ return 1',
    ejemplo: {
      entrada: 'N=5',
      calculo: '2(primo)+3(primo)+4(no)+5(primo) = 10',
      resultado: '10',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Con is_prime() auxiliar',
      descripcion: 'Separa la verificación de primalidad. La más legible.',
      recomendada: true,
      codigo: `#include <unistd.h>

static int\tis_prime(int n)
{
\tint\ti;

\tif (n < 2)
\t\treturn (0);
\ti = 2;
\twhile (i * i <= n)
\t{
\t\tif (n % i == 0)
\t\t\treturn (0);
\t\ti++;
\t}
\treturn (1);
}

static void\tput_nbr(unsigned long n)
{
\tchar\tc;

\tif (n >= 10)
\t\tput_nbr(n / 10);
\tc = '0' + n % 10;
\twrite(1, &c, 1);
}

int\tmain(int argc, char **argv)
{
\tunsigned long\tsum;
\tint\t\t\tn;
\tint\t\t\ti;

\tif (argc != 2)
\t{
\t\twrite(1, "0\\n", 2);
\t\treturn (0);
\t}
\tn = 0;
\ti = 0;
\twhile (argv[1][i] >= '0' && argv[1][i] <= '9')
\t\tn = n * 10 + (argv[1][i++] - '0');
\tsum = 0;
\ti = 2;
\twhile (i <= n)
\t{
\t\tif (is_prime(i))
\t\t\tsum += i;
\t\ti++;
\t}
\tput_nbr(sum);
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
  ],

  tests: [
    { id: 'test_5', descripcion: 'N=5 → 10 (2+3+5)', entrada: ['5'], salida: '10\n', tipo: 'normal' },
    { id: 'test_7', descripcion: 'N=7 → 17 (2+3+5+7)', entrada: ['7'], salida: '17\n', tipo: 'normal' },
    { id: 'test_1', descripcion: 'N=1 → 0 (ningún primo ≤1)', entrada: ['1'], salida: '0\n', tipo: 'edge' },
    { id: 'test_2', descripcion: 'N=2 → 2 (solo el 2)', entrada: ['2'], salida: '2\n', tipo: 'edge' },
    { id: 'test_10', descripcion: 'N=10 → 17 (2+3+5+7)', entrada: ['10'], salida: '17\n', tipo: 'normal' },
    { id: 'test_20', descripcion: 'N=20 → 77 (2+3+5+7+11+13+17+19)', entrada: ['20'], salida: '77\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'N=5: is_prime para 2,3,4,5',
      codigo: `is_prime(2): i=2, i*i=4 > 2 → while FALSE → return 1 ✓ primo
is_prime(3): i=2, 4>3 → while FALSE → return 1 ✓ primo
is_prime(4): i=2, 4<=4 → 4%2=0 → return 0 ✗ no primo
is_prime(5): i=2, 4<=5 → 5%2=1; i=3, 9>5 → while FALSE → return 1 ✓ primo`,
      variables: [
        { nombre: 'primos ≤5', valor: '[2, 3, 5]', cambio: false, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'Sumar: 2+3+5=10',
      codigo: `sum = 0
i=2: is_prime(2)=1 → sum=2
i=3: is_prime(3)=1 → sum=5
i=4: is_prime(4)=0 → sum sin cambio
i=5: is_prime(5)=1 → sum=10
i=6: 6>5 → while FALSE`,
      variables: [
        { nombre: 'sum', valor: '10', cambio: true, nota: '← 2+3+5' },
      ],
    },
    {
      paso: 3,
      titulo: 'put_nbr(10) → "10"',
      codigo: `put_nbr(10):
  10 >= 10 → put_nbr(1) → write('1')
  c = '0' + 10%10 = '0' → write('0')
write("\\n")
Salida: "10\\n"`,
      variables: [
        { nombre: 'salida', valor: '"10\\n"', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'is_prime: probar hasta n/2 en vez de sqrt(n)',
      descripcion: 'Probar hasta n/2 funciona pero es O(n) en vez de O(sqrt(n)). Para N grande, puede ser muy lento. El examen puede tener timeouts. Usar i*i<=n.',
      codigoMal: `// ❌ Hasta n/2 — correcto pero lento
while (i <= n / 2) { if (n % i == 0) return 0; i++; }`,
      codigoBien: `// ✅ Hasta sqrt(n) — eficiente
while (i * i <= n) { if (n % i == 0) return 0; i++; }`,
    },
    {
      severidad: 'mortal',
      titulo: 'Considerar el 1 como primo',
      descripcion: 'El 1 NO es primo por definición. is_prime(1) debe devolver 0. La condición if (n < 2) return 0 cubre este caso.',
      codigoMal: `// ❌ 1 considerado primo
int is_prime(int n) {
    int i = 2;
    while (i * i <= n)  // para n=1: i=2, 4>1 → FALSE → return 1!
        if (n % i++ == 0) return 0;
    return 1;  // is_prime(1) devuelve 1 — INCORRECTO
}`,
      codigoBien: `// ✅ Excluir 0 y 1 explícitamente
if (n < 2) return (0);  // 0 y 1 no son primos`,
    },
    {
      severidad: 'warning',
      titulo: 'sum puede desbordar int para N grande',
      descripcion: 'La suma de todos los primos hasta N crece rápidamente. Usar unsigned long para evitar overflow.',
      codigoMal: `// ⚠️ int puede desbordar para N grande
int sum = 0;`,
      codigoBien: `// ✅
unsigned long sum = 0;  // o long long`,
    },
  ],

  bajoCelCapot: `Un número n es primo si solo es divisible por 1 y por sí mismo.
Si n = a*b con a<=b, entonces a<=sqrt(n). Basta probar hasta sqrt(n).
Primos hasta 20: 2, 3, 5, 7, 11, 13, 17, 19 → suma=77.
El 2 es el único primo par. Todos los demás son impares.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'La función is_prime con i*i<=n es el patrón que hay que memorizar. También se usa en pgcd, lcm y fprime.',
  relacionados: ['pgcd', 'lcm', 'fprime', 'tab_mult'],
}

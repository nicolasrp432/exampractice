export default {
  id: 'fizzbuzz',
  nombre: 'fizzbuzz',
  nivel: 1,
  dificultad: 'fácil',
  tipoEntrega: 'programa',
  archivosEsperados: ['fizzbuzz.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : fizzbuzz
Expected files   : fizzbuzz.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that displays numbers from 1 to 100, each separated by a
newline.

If the number is a multiple of 3, replace it with the word "Fizz".
If the number is a multiple of 5, replace it with the word "Buzz".
If the number is a multiple of both 3 and 5, replace it with the word "FizzBuzz".`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : fizzbuzz
Expected files   : fizzbuzz.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that prints the numbers from 1 to 100, each separated by a
newline.

If the number is a multiple of 3, it prints 'fizz' instead.

If the number is a multiple of 5, it prints 'buzz' instead.

If the number is both a multiple of 3 and a multiple of 5, it prints 'fizzbuzz' instead.

Example:

$>./fizzbuzz
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
[...]
97
98
fizz
buzz
$>`,

  descripcion: 'Programa que imprime del 1 al 100: múltiplos de 15 → "FizzBuzz", de 3 → "Fizz", de 5 → "Buzz", resto → el número.',

  palacio: {
    habitacion: 'cocina',
    mueble: 'horno',
    personaje: 'El Microondas que cuenta mal',
    emoji: '🎯',
    historia: `El Microondas de la cocina tiene manía con los números.
Cuando llega a un múltiplo de 3 grita "Fizz" en vez del número.
Cuando llega a un múltiplo de 5 grita "Buzz".
Cuando llega a un múltiplo de AMBOS (15, 30, 45...) grita "FizzBuzz".
El truco: comprobar el 15 PRIMERO (else if), sino Fizz y Buzz compiten.`,
    anclas: [
      "i % 15 == 0 → FizzBuzz  ← PRIMERO",
      "i % 3 == 0  → Fizz",
      "i % 5 == 0  → Buzz",
      "else → ft_putnbr(i)",
      "Mayúsculas: Fizz Buzz FizzBuzz (no fizz buzz fizzbuzz)",
    ],
  },

  herramientas: ['strings', 'ascii'],

  formulaClave: {
    descripcion: 'Triple condicional con módulo — orden de comprobación importa',
    formula: 'if (i%15==0) FizzBuzz; else if (i%3==0) Fizz; else if (i%5==0) Buzz; else número;',
    ejemplo: {
      entrada: 'i = 15',
      calculo: '15%15=0 → FizzBuzz (si compruebas %3 antes: también daría Fizz, perdería Buzz)',
      resultado: 'FizzBuzz',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica con ft_putnbr',
      descripcion: 'Función auxiliar ft_putnbr para imprimir el número. La más limpia en el examen.',
      recomendada: true,
      codigo: `#include <unistd.h>

static void\tft_putnbr(int n)
{
\tif (n >= 10)
\t\tft_putnbr(n / 10);
\twrite(1, &"0123456789"[n % 10], 1);
}

int\tmain(void)
{
\tint\ti;

\ti = 1;
\twhile (i <= 100)
\t{
\t\tif (i % 15 == 0)
\t\t\twrite(1, "FizzBuzz\\n", 9);
\t\telse if (i % 3 == 0)
\t\t\twrite(1, "Fizz\\n", 5);
\t\telse if (i % 5 == 0)
\t\t\twrite(1, "Buzz\\n", 5);
\t\telse
\t\t{
\t\t\tft_putnbr(i);
\t\t\twrite(1, "\\n", 1);
\t\t}
\t\ti++;
\t}
\treturn (0);
}`,
    },
    {
      id: 'iterativo',
      nombre: 'Con buffer para números',
      descripcion: 'Convierte el número a string manualmente sin recursión.',
      recomendada: false,
      codigo: `#include <unistd.h>

static void\tprint_num(int n)
{
\tchar\tbuf[4];
\tint\tlen;

\tlen = 0;
\tif (n == 100)
\t{
\t\twrite(1, "100\\n", 4);
\t\treturn ;
\t}
\tif (n >= 10)
\t\tbuf[len++] = '0' + (n / 10);
\tbuf[len++] = '0' + (n % 10);
\tbuf[len++] = '\\n';
\twrite(1, buf, len);
}

int\tmain(void)
{
\tint\ti;

\ti = 1;
\twhile (i <= 100)
\t{
\t\tif (i % 15 == 0)
\t\t\twrite(1, "FizzBuzz\\n", 9);
\t\telse if (i % 3 == 0)
\t\t\twrite(1, "Fizz\\n", 5);
\t\telse if (i % 5 == 0)
\t\t\twrite(1, "Buzz\\n", 5);
\t\telse
\t\t\tprint_num(i);
\t\ti++;
\t}
\treturn (0);
}`,
    },
  ],

  tests: [
    {
      id: 'test_completo',
      descripcion: 'Salida completa 1-100',
      entrada: [],
      salida: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz\n31\n32\nFizz\n34\nBuzz\nFizz\n37\n38\nFizz\nBuzz\n41\nFizz\n43\n44\nFizzBuzz\n46\n47\nFizz\n49\nBuzz\nFizz\n52\n53\nFizz\nBuzz\n56\nFizz\n58\n59\nFizzBuzz\n61\n62\nFizz\n64\nBuzz\nFizz\n67\n68\nFizz\nBuzz\n71\nFizz\n73\n74\nFizzBuzz\n76\n77\nFizz\n79\nBuzz\nFizz\n82\n83\nFizz\nBuzz\n86\nFizz\n88\n89\nFizzBuzz\n91\n92\nFizz\n94\nBuzz\nFizz\n97\n98\nFizz\nBuzz\n',
      tipo: 'normal',
    },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Inicio: i = 1',
      codigo: `(gdb) run
Breakpoint 1, main at fizzbuzz.c:12
12\t\ti = 1;
(gdb) next
13\t\twhile (i <= 100)`,
      variables: [
        { nombre: 'i', valor: '1', cambio: true, nota: 'Comienza en 1' },
      ],
    },
    {
      paso: 2,
      titulo: 'i=3 → 3%15≠0, 3%3=0 → "Fizz"',
      codigo: `[i=3]
if (3 % 15 == 0)    → 3 ≠ 0, NO
else if (3 % 3 == 0)→ 0 == 0, SÍ
→ write "Fizz\\n"`,
      variables: [
        { nombre: 'i', valor: '3', cambio: true, nota: 'Múltiplo de 3' },
        { nombre: '3 % 3', valor: '0', cambio: true, nota: '→ "Fizz"' },
      ],
    },
    {
      paso: 3,
      titulo: 'i=5 → 5%15≠0, 5%3≠0, 5%5=0 → "Buzz"',
      codigo: `[i=5]
if (5 % 15 == 0)    → 5 ≠ 0, NO
else if (5 % 3 == 0)→ 2 ≠ 0, NO
else if (5 % 5 == 0)→ 0 == 0, SÍ
→ write "Buzz\\n"`,
      variables: [
        { nombre: 'i', valor: '5', cambio: true, nota: 'Múltiplo de 5' },
        { nombre: '5 % 5', valor: '0', cambio: true, nota: '→ "Buzz"' },
      ],
    },
    {
      paso: 4,
      titulo: 'i=15 → 15%15=0 → "FizzBuzz" ← comprobar PRIMERO',
      codigo: `[i=15]
if (15 % 15 == 0)   → 0 == 0, SÍ ← entra aquí primero
→ write "FizzBuzz\\n"
// Si hubiéramos puesto %3 primero, solo saldría "Fizz"`,
      variables: [
        { nombre: 'i', valor: '15', cambio: true, nota: 'Múltiplo de 3 Y de 5' },
        { nombre: '15 % 15', valor: '0', cambio: true, nota: '← POR ESO %15 va PRIMERO' },
      ],
    },
    {
      paso: 5,
      titulo: 'i=7 → ningún módulo → ft_putnbr(7)',
      codigo: `[i=7]
if (7%15==0) → NO; if (7%3==0) → NO; if (7%5==0) → NO
→ ft_putnbr(7) → write "7\\n"`,
      variables: [
        { nombre: 'i', valor: '7', cambio: true, nota: 'No es múltiplo de 3 ni 5' },
        { nombre: 'stdout', valor: '"7\\n"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 6,
      titulo: 'i=100 → 100%5=0, 100%3=1 → "Buzz"',
      codigo: `[i=100]
if (100%15==0) → 10≠0, NO
else if (100%3==0) → 1≠0, NO
else if (100%5==0) → 0==0, SÍ
→ write "Buzz\\n"
i++→101, while(101<=100) FALSE → FIN`,
      variables: [
        { nombre: 'i', valor: '100', cambio: true, nota: 'Último número' },
        { nombre: '100 % 5', valor: '0', cambio: true, nota: '→ "Buzz" (no FizzBuzz: 100%3=1)' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Comprobar %3 y %5 ANTES que %15 → pierde FizzBuzz',
      descripcion: 'Si pones el else if (%3) antes del if (%15), cuando i=15 entra por %3 y escribe solo "Fizz". Nunca llega al %15.',
      codigoMal: `// ❌ Orden incorrecto — 15 da "Fizz" en vez de "FizzBuzz"
if (i % 3 == 0)       // ← i=15 entra AQUÍ
    write(1, "Fizz\\n", 5);
else if (i % 5 == 0)  // nunca llega para múltiplos de 15
    write(1, "Buzz\\n", 5);
else if (i % 15 == 0) // NUNCA se ejecuta`,
      codigoBien: `// ✅ %15 SIEMPRE primero
if (i % 15 == 0)
    write(1, "FizzBuzz\\n", 9);
else if (i % 3 == 0)
    write(1, "Fizz\\n", 5);
else if (i % 5 == 0)
    write(1, "Buzz\\n", 5);`,
    },
    {
      severidad: 'mortal',
      titulo: 'Mayúsculas incorrectas: "fizz" en vez de "Fizz"',
      descripcion: 'La Moulinette hace comparación byte a byte. "fizz\\n" ≠ "Fizz\\n". Perderías todos los múltiplos de 3.',
      codigoMal: `// ❌ minúsculas → falla la Moulinette
write(1, "fizz\\n", 5);  // 'f' ≠ 'F'
write(1, "buzz\\n", 5);
write(1, "fizzbuzz\\n", 9);`,
      codigoBien: `// ✅ primera letra mayúscula
write(1, "Fizz\\n", 5);
write(1, "Buzz\\n", 5);
write(1, "FizzBuzz\\n", 9);`,
    },
    {
      severidad: 'warning',
      titulo: 'i <= 100 vs i < 100 — incluir el 100',
      descripcion: 'El sujeto pide del 1 al 100 inclusive. Con i < 100 te falta el Buzz del 100.',
      codigoMal: `// ❌ Sin el 100
while (i < 100) // llega hasta 99, falta el 100`,
      codigoBien: `// ✅ Incluye el 100
while (i <= 100)`,
    },
  ],

  bajoCelCapot: `El operador % (módulo) devuelve el resto de la división entera.
15 % 3 = 0 porque 15 = 3×5 + 0
15 % 5 = 0 porque 15 = 5×3 + 0
15 % 15 = 0 — múltiplo de ambos.
La condición i%15 primero evita la doble impresión.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'Clásico de entrevistas y exámenes. El patrón del módulo se reutiliza en pgcd, fprime, add_prime_sum.',
  relacionados: ['pgcd', 'fprime'],
}

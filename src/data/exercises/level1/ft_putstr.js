export default {
  id: 'ft_putstr',
  nombre: 'ft_putstr',
  nivel: 1,
  dificultad: 'fácil',
  tipoEntrega: 'funcion',
  archivosEsperados: ['ft_putstr.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : ft_putstr
Expected files   : ft_putstr.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a function that displays a string on the standard output.

void\tft_putstr(char *str);`,

  descripcion: 'Función que escribe un string en la salida estándar usando write(). NO añade \\n al final — escribe exactamente los bytes del string.',

  palacio: {
    habitacion: 'cocina',
    mueble: 'ventana',
    personaje: 'La Tele que grita letras',
    emoji: '📺',
    historia: `En la ventana hay una Tele mágica que grita letras.
Le das un string y ella grita CADA LETRA una a una usando write().
Para al llegar al Fantasma Cero (\\0) — no lo grita.
NUNCA añade un newline al final: lo que le das, lo grita SIN AÑADIR NADA.
Fórmula: while(str[i]) { write(1, &str[i], 1); i++; }`,
    anclas: [
      "write(1, &str[i], 1)  ← un byte a la vez",
      "while (str[i])  ← para en el \\0",
      "SIN \\n al final — ft_putstr NO añade newline",
      "i = 0; antes del while",
      "tamaño 1 en write ← solo UN carácter",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'Escribe cada byte del string con write()',
    formula: 'write(1, &str[i], 1)',
    ejemplo: {
      entrada: '"hello"',
      calculo: 'write h, write e, write l, write l, write o → para en \\0',
      resultado: 'stdout: hello  (sin newline)',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica con índice',
      descripcion: 'La más legible en el examen.',
      recomendada: true,
      codigo: `#include <unistd.h>

void\tft_putstr(char *str)
{
\tint\ti;

\ti = 0;
\twhile (str[i])
\t{
\t\twrite(1, &str[i], 1);
\t\ti++;
\t}
}`,
    },
    {
      id: 'puntero',
      nombre: 'Con puntero',
      descripcion: 'Avanza el puntero directamente. Equivalente pero menos explícita.',
      recomendada: false,
      codigo: `#include <unistd.h>

void\tft_putstr(char *str)
{
\twhile (*str)
\t\twrite(1, str++, 1);
}`,
    },
    {
      id: 'write_total',
      nombre: 'Write de todo de una vez',
      descripcion: 'Más eficiente pero requiere ft_strlen. No válida sin strlen disponible.',
      recomendada: false,
      codigo: `#include <unistd.h>

static int\tft_strlen(char *str)
{
\tint\ti;

\ti = 0;
\twhile (str[i])
\t\ti++;
\treturn (i);
}

void\tft_putstr(char *str)
{
\twrite(1, str, ft_strlen(str));
}`,
    },
  ],

  tests: [
    {
      id: 'test_con_newline',
      descripcion: 'String que ya incluye \\n — ft_putstr lo escribe tal cual',
      entrada: ['hello\n'],
      salida: 'hello\n',
      tipo: 'normal',
    },
    {
      id: 'test_mundo',
      descripcion: '"mundo\\n" → lo escribe exacto',
      entrada: ['mundo\n'],
      salida: 'mundo\n',
      tipo: 'normal',
    },
    {
      id: 'test_42',
      descripcion: '"42\\n" → escribe 42 y newline',
      entrada: ['42\n'],
      salida: '42\n',
      tipo: 'normal',
    },
    {
      id: 'test_vacio',
      descripcion: 'String vacío → no escribe nada',
      entrada: [''],
      salida: '',
      tipo: 'edge',
    },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Inicio: str = "hello\\n"',
      codigo: `(gdb) break ft_putstr
(gdb) run
Breakpoint 1, ft_putstr (str=0x... "hello\\n") at ft_putstr.c:3
3\t\tint i;`,
      variables: [
        { nombre: 'str', valor: '"hello\\n"', cambio: true, nota: 'Puntero al string' },
        { nombre: 'i', valor: '?', cambio: false, nota: 'Sin inicializar' },
      ],
    },
    {
      paso: 2,
      titulo: 'i = 0, entra al while: str[0]="h"',
      codigo: `(gdb) next
5\t\ti = 0;
(gdb) next
6\t\twhile (str[i])  → str[0]='h' ≠ '\\0', ENTRA`,
      variables: [
        { nombre: 'i', valor: '0', cambio: true, nota: '' },
        { nombre: 'str[0]', valor: "'h'", cambio: false, nota: '' },
      ],
    },
    {
      paso: 3,
      titulo: 'write(1, &str[0], 1) → escribe "h"',
      codigo: `(gdb) next
7\t\t\twrite(1, &str[i], 1);  → stdout: "h"
(gdb) next
8\t\t\ti++;                   → i=1`,
      variables: [
        { nombre: 'i', valor: '1', cambio: true, nota: '' },
        { nombre: 'stdout', valor: '"h"', cambio: true, nota: '1 byte escrito' },
      ],
    },
    {
      paso: 4,
      titulo: 'Iteraciones e, l, l, o → i = 5',
      codigo: `[i=1] write 'e' → stdout: "he"
[i=2] write 'l' → stdout: "hel"
[i=3] write 'l' → stdout: "hell"
[i=4] write 'o' → stdout: "hello"
i → 5`,
      variables: [
        { nombre: 'i', valor: '5', cambio: true, nota: '' },
        { nombre: 'stdout', valor: '"hello"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 5,
      titulo: 'write "\\n" → i = 6',
      codigo: `[i=5] write '\\n' → stdout: "hello\\n"
i → 6`,
      variables: [
        { nombre: 'i', valor: '6', cambio: true, nota: '' },
        { nombre: 'stdout', valor: '"hello\\n"', cambio: true, nota: 'El \\n viene del string, no lo añade ft_putstr' },
      ],
    },
    {
      paso: 6,
      titulo: 'str[6] = \\0 → sale del while, return',
      codigo: `while (str[6]) → '\\0' = 0 → FALSE, sale
// ft_putstr NO añade \\n extra
(gdb) finish`,
      variables: [
        { nombre: 'str[6]', valor: "'\\0'", cambio: false, nota: '← Para el while' },
        { nombre: 'stdout total', valor: '"hello\\n"', cambio: false, nota: '✓ Exactamente lo que contenía el string' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Añadir \\n al final — ft_putstr NO es puts()',
      descripcion: 'puts() añade \\n automáticamente. ft_putstr NO lo hace. Si añades un write extra de \\n, la Moulinette fallará cuando el string no debe terminar en \\n.',
      codigoMal: `// ❌ Añade \\n extra — falla la Moulinette
void ft_putstr(char *str) {
    int i = 0;
    while (str[i])
        write(1, &str[i++], 1);
    write(1, "\\n", 1); // ← EXTRA, no pedido
}`,
      codigoBien: `// ✅ Solo los bytes del string
void ft_putstr(char *str) {
    int i = 0;
    while (str[i])
        write(1, &str[i++], 1);
    // sin write extra
}`,
    },
    {
      severidad: 'mortal',
      titulo: 'Usar printf() en vez de write()',
      descripcion: 'printf no está en la lista de funciones permitidas. Solo write() está permitido.',
      codigoMal: `// ❌ printf no está permitida
void ft_putstr(char *str) {
    printf("%s", str);
}`,
      codigoBien: `// ✅ Solo write, byte a byte
void ft_putstr(char *str) {
    int i = 0;
    while (str[i])
        write(1, &str[i++], 1);
}`,
    },
    {
      severidad: 'warning',
      titulo: 'write(1, str, ft_strlen(str)) sin incluir ft_strlen',
      descripcion: 'write() de todo el string de una vez es eficiente, pero requiere ft_strlen disponible en el mismo archivo o como cabecera.',
      codigoMal: `// ❌ ft_strlen no está declarada aquí
void ft_putstr(char *str) {
    write(1, str, ft_strlen(str)); // error de compilación
}`,
      codigoBien: `// ✅ Escribe byte a byte — siempre compila
void ft_putstr(char *str) {
    int i = 0;
    while (str[i])
        write(1, &str[i++], 1);
}`,
    },
  ],

  bajoCelCapot: `write(1, &str[i], 1):
  - 1 = file descriptor: stdout
  - &str[i] = dirección del byte a escribir
  - 1 = número de bytes a escribir
La llamada al sistema escribe directamente sin buffering (a diferencia de printf).`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'Base de todas las funciones de output. ft_putstr + ft_putchar + ft_putnbr forman el kit básico de 42.',
  relacionados: ['ft_strlen', 'ft_strcpy'],
}

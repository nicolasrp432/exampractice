export default {
  id: 'print_bits',
  nombre: 'print_bits',
  nivel: 2,
  dificultad: 'medio',
  tipoEntrega: 'funcion',
  archivosEsperados: ['print_bits.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : print_bits
Expected files   : print_bits.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a function that takes a byte, and prints it in binary without a
newline at the end.

void\tprint_bits(unsigned char octet);

Example:
print_bits(2)  → 00000010
print_bits(42) → 00101010`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : print_bits
Expected files   : print_bits.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a function that takes a byte, and prints it in binary WITHOUT A NEWLINE
AT THE END.

Your function must be declared as follows:

void	print_bits(unsigned char octet);

Example, if you pass 2 to print_bits, it will print "00000010"`,

  descripcion: 'Función que imprime los 8 bits de un byte en orden MSB→LSB. Itera desde el bit 7 al bit 0, extrayendo cada bit con (octet >> i) & 1 y escribiendo "0" o "1".',

  palacio: {
    habitacion: 'salon',
    mueble: 'radio',
    personaje: 'El Locutor Binario',
    emoji: '📻',
    historia: `En el salón hay una Radio que retransmite en binario.
El Locutor lee el byte desde el bit más importante (bit 7) al menos importante (bit 0).
Para cada bit: desplaza el byte i posiciones a la derecha, enmascara con &1.
Si el resultado es 1 → transmite "1", si es 0 → transmite "0".
SIEMPRE 8 bits, siempre con ceros a la izquierda. SIN newline al final.`,
    anclas: [
      "i = 7; while i >= 0: extraer bit",
      "(octet >> i) & 1  ← bit i del byte",
      "c = '0' + bit  ← convierte 0/1 a char",
      "write(1, &c, 1)  ← escribe un char",
      "SIN '\\n' al final (a diferencia de printf)",
    ],
  },

  herramientas: ['bits', 'ascii'],

  formulaClave: {
    descripcion: 'MSB primero: extraer bit i con (octet>>i)&1, escribir "0" o "1"',
    formula: 'i=7; while(i>=0){ c="0"+((octet>>i)&1); write(1,&c,1); i--; }',
    ejemplo: {
      entrada: 'octet=2 (00000010)',
      calculo: 'i=7→0, i=6→0, i=5→0, i=4→0, i=3→0, i=2→0, i=1→1, i=0→0',
      resultado: '"00000010"',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Desde i=7 hasta i=0 (MSB primero)',
      descripcion: 'Bucle descendente, extrae cada bit con shift y mask. La más clara.',
      recomendada: true,
      codigo: `#include <unistd.h>

void\tprint_bits(unsigned char octet)
{
\tint\ti;
\tchar\tc;

\ti = 7;
\twhile (i >= 0)
\t{
\t\tc = '0' + ((octet >> i) & 1);
\t\twrite(1, &c, 1);
\t\ti--;
\t}
}`,
    },
    {
      id: 'mascara',
      nombre: 'Con máscara 128 (1000 0000)',
      descripcion: 'Empieza con máscara=128, desplaza a la derecha. Evita el shift en el índice.',
      recomendada: false,
      codigo: `#include <unistd.h>

void\tprint_bits(unsigned char octet)
{
\tunsigned char\tmask;
\tchar\t\tc;

\tmask = 128;
\twhile (mask > 0)
\t{
\t\tc = (octet & mask) ? '1' : '0';
\t\twrite(1, &c, 1);
\t\tmask >>= 1;
\t}
}`,
    },
  ],

  tests: [
    { id: 'test_dos', descripcion: '2 → "00000010"', entrada: ['2'], salida: '00000010\n', tipo: 'normal' },
    { id: 'test_42', descripcion: '42 → "00101010"', entrada: ['42'], salida: '00101010\n', tipo: 'normal' },
    { id: 'test_cero', descripcion: '0 → "00000000"', entrada: ['0'], salida: '00000000\n', tipo: 'edge' },
    { id: 'test_255', descripcion: '255 → "11111111"', entrada: ['255'], salida: '11111111\n', tipo: 'edge' },
    { id: 'test_uno', descripcion: '1 → "00000001"', entrada: ['1'], salida: '00000001\n', tipo: 'normal' },
    { id: 'test_128', descripcion: '128 → "10000000"', entrada: ['128'], salida: '10000000\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'octet=2 (00000010) — i=7 hasta i=2: bits 0',
      codigo: `octet = 2 → 00000010
i=7: (2 >> 7) & 1 = 0 & 1 = 0 → write('0')
i=6: (2 >> 6) & 1 = 0 → write('0')
i=5: (2 >> 5) & 1 = 0 → write('0')
i=4: (2 >> 4) & 1 = 0 → write('0')
i=3: (2 >> 3) & 1 = 0 → write('0')
i=2: (2 >> 2) & 1 = 0 → write('0')`,
      variables: [
        { nombre: 'salida hasta i=2', valor: '"000000"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'i=1: bit 1 está activo en 2',
      codigo: `i=1: (2 >> 1) & 1 = 1 & 1 = 1 → write('1')
// 2 en binario: ...0010 → bit 1 (segundo desde la derecha) = 1`,
      variables: [
        { nombre: 'salida', valor: '"0000001"', cambio: true, nota: '' },
      ],
    },
    {
      paso: 3,
      titulo: 'i=0: bit 0 es 0',
      codigo: `i=0: (2 >> 0) & 1 = 2 & 1 = 0 → write('0')
// 2 en binario: 00000010 → bit 0 = 0`,
      variables: [
        { nombre: 'salida final', valor: '"00000010"', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Empezar desde i=0 (LSB primero) en vez de i=7 (MSB primero)',
      descripcion: 'print_bits imprime MSB primero (bit 7 al bit 0). Si empiezas desde i=0, el output es el binario al revés.',
      codigoMal: `// ❌ LSB primero → output invertido
i = 0;
while (i < 8) {
    c = '0' + ((octet >> i) & 1);
    write(1, &c, 1);
    i++;
}
// octet=2: "01000000" (invertido, incorrecto)`,
      codigoBien: `// ✅ MSB primero → correcto
i = 7;
while (i >= 0) {
    c = '0' + ((octet >> i) & 1);
    write(1, &c, 1);
    i--;
}
// octet=2: "00000010" (correcto)`,
    },
    {
      severidad: 'mortal',
      titulo: 'Añadir \\n al final — la función NO debe imprimir newline',
      descripcion: 'El subject dice explícitamente "without a newline at the end". Solo el main de prueba puede añadir el \\n. La función no debe.',
      codigoMal: `// ❌ No debe imprimir newline
write(1, "\\n", 1);  // al final de print_bits`,
      codigoBien: `// ✅ Sin newline — la función termina tras el bit 0
// El main de prueba añade el \\n separado`,
    },
    {
      severidad: 'warning',
      titulo: 'Usar printf en vez de write',
      descripcion: 'Las funciones permitidas son solo write. No puedes usar printf, puts ni putchar.',
      codigoMal: `// ❌ printf no está permitido
printf("%d", (octet >> i) & 1);`,
      codigoBien: `// ✅ write con char calculado
c = '0' + ((octet >> i) & 1);
write(1, &c, 1);`,
    },
  ],

  bajoCelCapot: `(octet >> i) desplaza el byte i posiciones a la derecha.
& 1 enmascara todo excepto el bit menos significativo → 0 o 1.
'0' + bit convierte 0→'0'(48) o 1→'1'(49) para poder escribirlo con write.
El bit más significativo (MSB) es el bit 7: (octet >> 7) & 1.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El patrón (octet>>i)&1 para extraer el bit i es universal en manipulación de bits. MSB primero (i=7..0) es el orden visual estándar.',
  relacionados: ['reverse_bits', 'swap_bits', 'is_power_of_2'],
}

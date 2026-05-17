export default {
  id: 'ft_strcpy',
  nombre: 'ft_strcpy',
  nivel: 1,
  dificultad: 'fácil',
  tipoEntrega: 'funcion',
  archivosEsperados: ['ft_strcpy.c'],
  funcionesPermitidas: [],

  subject: `Assignment name  : ft_strcpy
Expected files   : ft_strcpy.c
Allowed functions: none
--------------------------------------------------------------------------------

Reproduce the behavior of the function strcpy (man strcpy).

char\t*ft_strcpy(char *dest, char *src);`,

  descripcion: 'Función que copia el string src en dest (incluyendo el \\0 final) y devuelve dest. dest debe tener espacio suficiente para contener src.',

  palacio: {
    habitacion: 'cocina',
    mueble: 'alacena',
    personaje: 'La Fotocopiadora de recetas',
    emoji: '🖨️',
    historia: `En la alacena hay una Fotocopiadora de recetas mágica.
Le das el original (src) y el papel en blanco (dest).
Copia LETRA a LETRA: dest[i] = src[i].
Cuando llega al Fantasma Cero (\\0) lo copia también (¡es obligatorio!) y para.
Al final devuelve dest — el papel ya relleno.
¡El papel debe ser LO BASTANTE GRANDE antes de copiar!`,
    anclas: [
      "dest[i] = src[i]  ← copia byte a byte",
      "copiar el \\0 final  ← OBLIGATORIO",
      "return (dest)  ← devuelve destino",
      "i = 0; antes del while",
      "dest debe tener espacio: sin malloc aquí",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'Copia cada byte de src a dest incluyendo el \\0',
    formula: 'while ((dest[i] = src[i])) i++;',
    ejemplo: {
      entrada: 'src = "hello"',
      calculo: 'h→h e→e l→l l→l o→o \\0→\\0',
      resultado: 'dest = "hello"\\0, retorna dest',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica con while + índice',
      descripcion: 'La más legible y segura. Copia explícitamente el \\0 fuera del bucle.',
      recomendada: true,
      codigo: `char\t*ft_strcpy(char *dest, char *src)
{
\tint\ti;

\ti = 0;
\twhile (src[i])
\t{
\t\tdest[i] = src[i];
\t\ti++;
\t}
\tdest[i] = '\\0';
\treturn (dest);
}`,
    },
    {
      id: 'compacta',
      nombre: 'Compacta (asignación en while)',
      descripcion: 'La condición del while asigna y comprueba en la misma expresión. Copia el \\0 automáticamente.',
      recomendada: false,
      codigo: `char\t*ft_strcpy(char *dest, char *src)
{
\tint\ti;

\ti = 0;
\twhile ((dest[i] = src[i]))
\t\ti++;
\treturn (dest);
}`,
    },
    {
      id: 'puntero',
      nombre: 'Con punteros',
      descripcion: 'Avanza punteros directamente. Compacta pero menos legible bajo presión.',
      recomendada: false,
      codigo: `char\t*ft_strcpy(char *dest, char *src)
{
\tchar\t*start;

\tstart = dest;
\twhile ((*dest++ = *src++))
\t\t;
\treturn (start);
}`,
    },
  ],

  tests: [
    {
      id: 'test_hello',
      descripcion: 'Copia "hello" → "hello"',
      entrada: ['hello'],
      salida: 'hello\n',
      tipo: 'normal',
    },
    {
      id: 'test_vacio',
      descripcion: 'Copia "" → ""',
      entrada: [''],
      salida: '\n',
      tipo: 'edge',
    },
    {
      id: 'test_espacio',
      descripcion: 'Copia "Hello World" con espacio',
      entrada: ['Hello World'],
      salida: 'Hello World\n',
      tipo: 'normal',
    },
    {
      id: 'test_simbolos',
      descripcion: 'Copia "abc123!" — mezcla de chars',
      entrada: ['abc123!'],
      salida: 'abc123!\n',
      tipo: 'normal',
    },
    {
      id: 'test_1char',
      descripcion: 'Copia "x" — un solo carácter',
      entrada: ['x'],
      salida: 'x\n',
      tipo: 'normal',
    },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Inicio: src="hello", dest=buffer[10]',
      codigo: `(gdb) break ft_strcpy
(gdb) run
Breakpoint 1, ft_strcpy (dest=0x..., src=0x... "hello") at ft_strcpy.c:3
3\t\tint i;`,
      variables: [
        { nombre: 'src', valor: '"hello"', cambio: false, nota: 'Cadena origen' },
        { nombre: 'dest', valor: '[basura]', cambio: false, nota: 'Buffer destino sin inicializar' },
        { nombre: 'i', valor: '?', cambio: false, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'i=0 → copia h: dest[0] = src[0]',
      codigo: `i = 0
while (src[0])  → 'h' ≠ '\\0' → ENTRA
dest[0] = src[0];  // 'h'
i++;               // i=1`,
      variables: [
        { nombre: 'i', valor: '0 → 1', cambio: true, nota: '' },
        { nombre: 'dest[0]', valor: "'h'", cambio: true, nota: 'Primer byte copiado' },
      ],
    },
    {
      paso: 3,
      titulo: 'Copia e, l, l, o → i=5',
      codigo: `[i=1] dest[1]='e'
[i=2] dest[2]='l'
[i=3] dest[3]='l'
[i=4] dest[4]='o'
i = 5`,
      variables: [
        { nombre: 'i', valor: '5', cambio: true, nota: '' },
        { nombre: 'dest', valor: '"hello"...', cambio: true, nota: '5 bytes copiados, falta el \\0' },
      ],
    },
    {
      paso: 4,
      titulo: 'src[5] = \\0 → sale del while',
      codigo: `while (src[5])  → '\\0' = 0 → FALSE, sale
// Fuera del bucle: ahora copia el \\0
dest[5] = '\\0';`,
      variables: [
        { nombre: 'src[5]', valor: "'\\0'", cambio: false, nota: '← Termina el while' },
        { nombre: 'dest[5]', valor: "'\\0'", cambio: true, nota: '← ¡OBLIGATORIO! Sin esto dest no es string válido' },
      ],
    },
    {
      paso: 5,
      titulo: 'return (dest) → puntero al inicio',
      codigo: `return (dest);
// dest apunta al inicio del buffer: "hello\\0"
(gdb) print dest
$1 = 0x... "hello"`,
      variables: [
        { nombre: 'dest', valor: '"hello"', cambio: false, nota: '✓ Copia completa con \\0' },
        { nombre: 'retorno', valor: 'puntero a dest', cambio: true, nota: 'Permite encadenamiento: strcpy(strcpy(a,b), c)' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Olvidar copiar el \\0 final',
      descripcion: 'Sin dest[i] = "\\0" al final, dest no es un string válido. Cualquier función que lo reciba después iterará más allá del buffer → undefined behavior.',
      codigoMal: `// ❌ Sin el \\0 final
while (src[i]) {
    dest[i] = src[i];
    i++;
}
// dest = "hello" + basura, NO un string válido`,
      codigoBien: `// ✅ Con el \\0 final
while (src[i]) {
    dest[i] = src[i];
    i++;
}
dest[i] = '\\0'; // ← SIEMPRE`,
    },
    {
      severidad: 'mortal',
      titulo: 'No devolver dest — pérdida del puntero',
      descripcion: 'La firma dice char *. Sin return (dest), la función devuelve basura. Los encadenamientos como ft_putstr(ft_strcpy(buf, src)) fallan.',
      codigoMal: `// ❌ Sin return
char *ft_strcpy(char *dest, char *src) {
    int i = 0;
    while (src[i]) dest[i++] = src[i];
    dest[i] = '\\0';
    // falta return (dest);
}`,
      codigoBien: `// ✅
char *ft_strcpy(char *dest, char *src) {
    int i = 0;
    while (src[i]) { dest[i] = src[i]; i++; }
    dest[i] = '\\0';
    return (dest); // ← siempre
}`,
    },
    {
      severidad: 'warning',
      titulo: 'Buffer dest demasiado pequeño — buffer overflow',
      descripcion: 'ft_strcpy NO comprueba el tamaño de dest. Si src es más largo que dest, escribe fuera del buffer (stack smashing). Responsabilidad del llamador.',
      codigoMal: `// ❌ Buffer desbordado
char dest[3];
ft_strcpy(dest, "hello"); // escribe 6 bytes en 3 → overflow`,
      codigoBien: `// ✅ Buffer suficientemente grande
char dest[100];
ft_strcpy(dest, "hello"); // OK: 6 bytes en 100`,
    },
  ],

  bajoCelCapot: `strcpy es una de las funciones más peligrosas de C por el buffer overflow.
En producción se usa strncpy o strlcpy.
En 42 el sujeto garantiza que dest tiene espacio suficiente.
La versión compacta while((dest[i]=src[i])) aprovecha que '\\0'=0=falsy.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'Patrón base de copia de strings. Aparece en ft_strdup (con malloc), en manipulaciones de strings compuestos, etc.',
  relacionados: ['ft_strlen', 'ft_putstr', 'ft_strdup'],
}

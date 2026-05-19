export default {
  id: 'flood_fill',
  nombre: 'flood_fill',
  nivel: 4,
  dificultad: 'difícil',
  tipoEntrega: 'funcion',
  archivosEsperados: ['flood_fill.c'],
  funcionesPermitidas: [],

  subject: `Assignment name  : flood_fill
Expected files   : flood_fill.c
Allowed functions: -
--------------------------------------------------------------------------------

Write a function that takes a char ** as a 2-dimensional array of char, a
t_point as the dimensions of this array and a t_point as the starting point.

Starting from the given 'begin' t_point, this function fills an entire zone
by replacing characters inside with the character 'F'. A zone is an group of
the same character delimitated horizontally and vertically by other characters
or the array boundry.

The flood_fill function won't fill diagonally.

The flood_fill function will be prototyped like this:
  void  flood_fill(char **tab, t_point size, t_point begin);

The t_point structure is prototyped like this: (put it in flood_fill.c)

  typedef struct  s_point
  {
    int           x;
    int           y;
  }               t_point;`,

  descripcion: 'Función recursiva que rellena una zona conectada en una matriz 2D de caracteres usando F.',

  palacio: {
    habitacion: 'garaje',
    mueble: 'pizarra de mapas',
    personaje: 'La Pintora de Zonas',
    emoji: '🎨',
    historia: `La Pintora entra en una zona de la pizarra y pinta todas las celdas conectadas.
Solo se mueve arriba, abajo, izquierda y derecha.
Si una celda no tiene el mismo carácter que la de inicio, se detiene.
No pinta diagonales.`,
    anclas: [
      'comparar con el carácter de inicio',
      'parar en bordes',
      'recursión en 4 direcciones',
    ],
  },

  herramientas: ['recursión', 'matrices'],

  formulaClave: {
    descripcion: 'Guardar el carácter original y expandirse en cruz',
    formula: 'to_fill = tab[begin.y][begin.x]; recurse N/S/E/W if in bounds and same char',
    ejemplo: {
      entrada: 'zona 8x5 del enunciado',
      calculo: 'se pinta todo el componente conectado al begin',
      resultado: 'celdas originales → F',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Recursión directa',
      descripcion: 'La solución de rank02: una función helper recursiva que pinta y expande.',
      recomendada: true,
      codigo: `typedef struct  s_point
{
\tint x;
\tint y;
}               t_point;

static void fill(char **tab, t_point size, t_point cur, char to_fill)
{
\tif (cur.y < 0 || cur.y >= size.y || cur.x < 0 || cur.x >= size.x
\t\t|| tab[cur.y][cur.x] != to_fill)
\t\treturn;
\ttab[cur.y][cur.x] = 'F';
\tfill(tab, size, (t_point){cur.x - 1, cur.y}, to_fill);
\tfill(tab, size, (t_point){cur.x + 1, cur.y}, to_fill);
\tfill(tab, size, (t_point){cur.x, cur.y - 1}, to_fill);
\tfill(tab, size, (t_point){cur.x, cur.y + 1}, to_fill);
}

void flood_fill(char **tab, t_point size, t_point begin)
{
\tfill(tab, size, begin, tab[begin.y][begin.x]);
}`,
    },
  ],

  tests: [
    { id: 'test_example', descripcion: 'Ejemplo del subject', entrada: ['sample'], salida: '11111111\n10001001\n10010001\n10110001\n11100001\n\nFFFFFFFF\nF000F00F\nF00F000F\nF0FF000F\nFFF0000F\n', tipo: 'normal' },
    { id: 'test_border', descripcion: 'Arrancar en una esquina', entrada: ['border'], salida: '11111111\n10001001\n10010001\n10110001\n11100001\n\nFFFFFFFF\nF000F00F\nF00F000F\nF0FF000F\nFFF0000F\n', tipo: 'edge' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Caracter a pintar',
      codigo: `begin = {7,4}
to_fill = tab[4][7] = '1'
tab[4][7] = 'F'`,
      variables: [
        { nombre: 'to_fill', valor: "'1'", cambio: true, nota: 'carácter original' },
      ],
    },
    {
      paso: 2,
      titulo: 'Expansión a los vecinos',
      codigo: `izquierda, derecha, arriba, abajo
solo si están en bounds y tienen '1'`,
      variables: [
        { nombre: 'frontera', valor: 'filtrada por bounds', cambio: true, nota: 'sin diagonales' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Pintar diagonales',
      descripcion: 'La zona solo se conecta horizontal y verticalmente.',
      codigoMal: `fill(x-1, y-1); // ❌ diagonal`,
      codigoBien: `fill(x-1, y); fill(x+1, y); fill(x, y-1); fill(x, y+1);`,
    },
    {
      severidad: 'warning',
      titulo: 'No copiar el carácter inicial antes de pintar',
      descripcion: 'Hay que guardar el carácter original para comparar en todas las llamadas recursivas.',
      codigoMal: `tab[cur.y][cur.x] = 'F';
if (tab[cur.y][cur.x] == to_fill) ...`,
      codigoBien: `char to_fill = tab[begin.y][begin.x];`,
    },
  ],

  bajoCelCapot: `flood_fill es una búsqueda en profundidad sobre una rejilla.
Se guarda el carácter inicial y se expande en las 4 direcciones mientras la celda siga siendo el mismo carácter.
Es un ejemplo clásico de recursión sobre matrices.`,

  estrategia: 'ENTENDER',
  razonEstrategia: 'La clave es visualizar la rejilla y la expansión en cuatro direcciones. Si se entiende eso, la recursión sale natural.',
  relacionados: ['sort_int_tab', 'ft_split', 'ft_list_remove_if'],
}

export default {
  id: 'sort_list',
  nombre: 'sort_list',
  nivel: 4,
  dificultad: 'difícil',
  tipoEntrega: 'funcion',
  archivosEsperados: ['sort_list.c'],
  funcionesPermitidas: [],

  subject: `Assignment name  : sort_list
Expected files   : sort_list.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that sorts a linked list of integers in ascending order,
using the bubble sort algorithm.

The linked list is defined as follows:
  typedef struct s_list
  {
    struct s_list *next;
    void          *data;
  } t_list;

The comparison function is provided as a parameter:
  t_list *sort_list(t_list *lst, int (*cmp)(void *, void *));

The cmp function returns a negative value if a < b, 0 if equal, positive if a > b.

The function must not create new nodes or allocate memory.
It must sort by swapping the DATA (not the nodes).`,

  descripcion: 'Ordena una lista enlazada usando bubble sort intercambiando los DATA de los nodos (no los nodos en sí). Requiere comprender estructuras enlazadas y punteros a función.',

  palacio: {
    habitacion: 'garaje',
    mueble: 'nivel_burbuja',
    personaje: 'El Nivel de Burbuja',
    emoji: '🫧',
    historia: `En el garaje hay un Nivel de Burbuja que ordena herramientas de menor a mayor.
El algoritmo: burbuja clásica. Recorre la lista comparando pares adyacentes.
Si cmp(a->data, b->data) > 0 → intercambiar los DATA (no los nodos).
Repetir hasta que no haya intercambios en una pasada completa.
Clave: solo se intercambia data, los punteros next permanecen igual.`,
    anclas: [
      "swapped = 1 en el while externo — continuar mientras haya cambios",
      "ptr = lst al inicio de cada pasada",
      "si cmp(ptr->data, ptr->next->data) > 0 → swap data",
      "tmp = ptr->data; ptr->data = ptr->next->data; ptr->next->data = tmp",
      "parar al llegar a ptr->next == NULL",
    ],
  },

  herramientas: ['strings'],

  formulaClave: {
    descripcion: 'Bubble sort en lista: swap DATA de nodos adyacentes si están desordenados',
    formula: 'while(swapped){swapped=0;ptr=lst; while(ptr->next){if(cmp(ptr->data,ptr->next->data)>0){swap(ptr->data,ptr->next->data);swapped=1;}ptr=ptr->next;}}',
    ejemplo: {
      entrada: 'lista: [3]->[1]->[2]->NULL, cmp=(a-b)',
      calculo: 'Pasada1: 3>1→swap→[1,3,2]; 3>2→swap→[1,2,3]; swapped=1. Pasada2: no swap→swapped=0→fin',
      resultado: '[1]->[2]->[3]->NULL',
    },
  },

  versiones: [
    {
      id: 'bubble_swap_data',
      nombre: 'Bubble sort intercambiando data',
      descripcion: 'El enfoque más directo y el esperado en el examen. Sin malloc, sin nuevos nodos.',
      recomendada: true,
      codigo: `typedef struct s_list
{
\tstruct s_list\t*next;
\tvoid\t\t\t*data;
}	t_list;

t_list\t*sort_list(t_list *lst, int (*cmp)(void *, void *))
{
\tt_list\t*ptr;
\tvoid\t*tmp;
\tint\t\tswapped;

\tif (!lst)
\t\treturn (NULL);
\tswapped = 1;
\twhile (swapped)
\t{
\t\tswapped = 0;
\t\tptr = lst;
\t\twhile (ptr->next)
\t\t{
\t\t\tif (cmp(ptr->data, ptr->next->data) > 0)
\t\t\t{
\t\t\t\ttmp = ptr->data;
\t\t\t\tptr->data = ptr->next->data;
\t\t\t\tptr->next->data = tmp;
\t\t\t\tswapped = 1;
\t\t\t}
\t\t\tptr = ptr->next;
\t\t}
\t}
\treturn (lst);
}`,
    },
    {
      id: 'dowhile',
      nombre: 'Con do/while y puntero auxiliar',
      descripcion: 'La misma burbuja, pero escrita con do/while para que la primera pasada se vea más natural.',
      recomendada: false,
      codigo: `typedef struct s_list
{
\tstruct s_list\t*next;
\tvoid\t\t\t*data;
}\tt_list;

t_list\t*sort_list(t_list *lst, int (*cmp)(void *, void *))
{
\tt_list\t*ptr;
\tvoid\t*tmp;
\tint\t\tswapped;

\tif (!lst)
\t\treturn (NULL);
\tswapped = 1;
\twhile (swapped)
\t{
\t\tswapped = 0;
\t\tptr = lst;
\t\tdo
\t\t{
\t\t\tif (ptr->next && cmp(ptr->data, ptr->next->data) > 0)
\t\t\t{
\t\t\t\ttmp = ptr->data;
\t\t\t\tptr->data = ptr->next->data;
\t\t\t\tptr->next->data = tmp;
\t\t\t\tswapped = 1;
\t\t\t}
\t\t\tptr = ptr->next;
\t\t}
\t\twhile (ptr && ptr->next);
\t}
\treturn (lst);
}`,
    },
  ],

  tests: [
    { id: 'test_3_1_2', descripcion: '[3,1,2] → [1,2,3]', entrada: ['3', '1', '2'], salida: '1\n2\n3\n', tipo: 'normal' },
    { id: 'test_5_4_3_2_1', descripcion: '[5,4,3,2,1] → [1,2,3,4,5]', entrada: ['5', '4', '3', '2', '1'], salida: '1\n2\n3\n4\n5\n', tipo: 'normal' },
    { id: 'test_ya_ordenado', descripcion: '[1,2,3] ya ordenado → [1,2,3]', entrada: ['1', '2', '3'], salida: '1\n2\n3\n', tipo: 'normal' },
    { id: 'test_single', descripcion: '[42] → [42]', entrada: ['42'], salida: '42\n', tipo: 'edge' },
    { id: 'test_two', descripcion: '[5,3] → [3,5]', entrada: ['5', '3'], salida: '3\n5\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'sort_list([3,1,2]): pasadas de bubble sort',
      codigo: `PASADA 1: swapped=0
ptr=[3→1→2]
  cmp(3,1)>0 → swap → [1,3,2], swapped=1
  ptr=[3→2]: cmp(3,2)>0 → swap → [1,2,3], swapped=1
  ptr=[3→NULL]: ptr->next=NULL → fin pasada

PASADA 2: swapped=0
  cmp(1,2)≤0 → no swap
  cmp(2,3)≤0 → no swap
  swapped=0 → while FALSE

return lst → [1→2→3→NULL]`,
      variables: [
        { nombre: 'pasadas', valor: '2', cambio: false, nota: '' },
        { nombre: 'resultado', valor: '[1,2,3]', cambio: true, nota: '✓' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Intercambiar nodos (next) en vez de DATA — estructura rota',
      descripcion: 'El enunciado dice intercambiar los DATA. Si cambias los punteros next, la estructura de la lista se rompe y el resultado es incorrecto o provoca segfault.',
      codigoMal: `// ❌ Intercambiar nodos — estructura rota
t_list *tmp_node = ptr;
ptr = ptr->next;
// etc. — muy complejo y propenso a errores`,
      codigoBien: `// ✅ Solo intercambiar data — simple y correcto
tmp = ptr->data;
ptr->data = ptr->next->data;
ptr->next->data = tmp;`,
    },
    {
      severidad: 'mortal',
      titulo: 'Olvidar el flag swapped → bucle infinito o O(n²) siempre',
      descripcion: 'Sin el flag swapped, el while exterior nunca sabe si ya está ordenado y itera siempre n veces (ineficiente) o infinitamente.',
      codigoMal: `// ❌ Sin flag — itera siempre (o infinito si while(1))
int i = 0;
while (i < /* ¿cuántas veces? */) {
    // sin forma de saber si ya terminó`,
      codigoBien: `// ✅ Con swapped — para cuando no hubo intercambios
swapped = 1;
while (swapped) {
    swapped = 0;
    // ... si hay swap: swapped = 1
}`,
    },
    {
      severidad: 'warning',
      titulo: 'No verificar ptr->next == NULL antes de comparar',
      descripcion: 'El while interno debe ser while(ptr->next), no while(ptr). Si ptr->next es NULL, acceder a ptr->next->data provoca segfault.',
      codigoMal: `// ❌ Desborda al final
while (ptr) {
    cmp(ptr->data, ptr->next->data);  // ptr->next puede ser NULL`,
      codigoBien: `// ✅ Condición correcta
while (ptr->next) {
    cmp(ptr->data, ptr->next->data);  // ptr->next garantizado no-NULL`,
    },
  ],

  bajoCelCapot: `Bubble sort: O(n²) en el peor caso, O(n) en el mejor (ya ordenado con flag).
En listas enlazadas, no podemos indexar como en arrays, pero bubble sort es natural:
solo necesitamos acceder a nodos adyacentes (ptr y ptr->next).
Intercambiar data en vez de nodos es la clave: preserva la estructura de la lista,
evita el re-enlazado complejo de nodos y es la forma esperada en 42.
La función cmp es un puntero a función: cmp(a,b)<0 significa a<b.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El patrón bubble sort con flag swapped + swap de data es la estructura completa. Memorizar: while(swapped){swapped=0; while(ptr->next){if(cmp>0){swap;swapped=1;} ptr=ptr->next;}}',
  relacionados: ['ft_list_size', 'ft_split', 'pgcd'],
}

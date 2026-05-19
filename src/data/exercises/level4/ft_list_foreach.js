export default {
  id: 'ft_list_foreach',
  nombre: 'ft_list_foreach',
  nivel: 4,
  dificultad: 'medio',
  tipoEntrega: 'funcion',
  archivosEsperados: ['ft_list_foreach.c', 'ft_list.h'],
  funcionesPermitidas: [],

  subject: `Assignment name  : ft_list_foreach
Expected files   : ft_list_foreach.c, ft_list.h
Allowed functions:
--------------------------------------------------------------------------------

Write a function that takes a list and a function pointer, and applies this
function to each element of the list.

It must be declared as follows:

void    ft_list_foreach(t_list *begin_list, void (*f)(void *));

The function pointed to by f will be used as follows:

(*f)(list_ptr->data);

You must use the following structure, and turn it in as a file called
ft_list.h:

typedef struct    s_list
{
    struct s_list *next;
    void          *data;
}                 t_list;`,

  descripcion: 'Función que recorre una lista enlazada y aplica una función a cada nodo.',

  palacio: {
    habitacion: 'salón',
    mueble: 'cadena de luces',
    personaje: 'El Director de la Procesión',
    emoji: '🔗',
    historia: `El Director pasa por cada nodo y le dice a su data qué hacer.
No crea nodos nuevos, no elimina nodos: solo visita uno a uno.
El ritmo es simple: visitar, aplicar la función, avanzar al siguiente.`,
    anclas: [
      'while (node) { f(node->data); node = node->next; }',
      'no modifica la lista',
      'aplica f a cada nodo',
    ],
  },

  herramientas: ['listas', 'punteros a función'],

  formulaClave: {
    descripcion: 'Iterar lista y llamar al callback para cada elemento',
    formula: 'for node in list: f(node->data)',
    ejemplo: {
      entrada: '[1,2,3] con callback +1',
      calculo: '1→2, 2→3, 3→4',
      resultado: '2\n3\n4\n',
    },
  },

  versiones: [
    {
      id: 'clasica',
      nombre: 'Bucle while simple',
      descripcion: 'La forma más directa de recorrer la lista.',
      recomendada: true,
      codigo: `#include "ft_list.h"

void\tft_list_foreach(t_list *begin_list, void (*f)(void *))
{
\twhile (begin_list)
\t{
\t\t(*f)(begin_list->data);
\t\tbegin_list = begin_list->next;
\t}
}`,
    },
  ],

  tests: [
    { id: 'test_empty', descripcion: 'Lista vacía → salto de línea', entrada: [], salida: '\n', tipo: 'edge' },
    { id: 'test_plus1', descripcion: '[1,2,3] con callback +1', entrada: ['1', '2', '3'], salida: '2\n3\n4\n', tipo: 'normal' },
    { id: 'test_neg', descripcion: 'Negativos también se transforman', entrada: ['-2', '0'], salida: '-1\n1\n', tipo: 'normal' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Nodo actual y llamada al callback',
      codigo: `begin_list -> node[0]
(*f)(node->data)
begin_list = begin_list->next`,
      variables: [
        { nombre: 'node', valor: '1er nodo', cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'Último nodo alcanzado',
      codigo: `node->next = NULL
f(node->data)
advance → NULL`,
      variables: [
        { nombre: 'avance', valor: 'NULL', cambio: true, nota: 'fin de la lista' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'No avanzar al siguiente nodo',
      descripcion: 'Si begin_list no cambia dentro del bucle, la función entra en un bucle infinito.',
      codigoMal: `while (begin_list) { (*f)(begin_list->data); }`,
      codigoBien: `while (begin_list) { (*f)(begin_list->data); begin_list = begin_list->next; }`,
    },
    {
      severidad: 'warning',
      titulo: 'Asumir que f siempre existe',
      descripcion: 'El prototipo recibe un puntero a función; el ejercicio suele garantizarlo, pero la lógica debe ser clara.',
      codigoMal: `f(begin_list->data);`,
      codigoBien: `(*f)(begin_list->data);`,
    },
  ],

  bajoCelCapot: `ft_list_foreach es puro recorrido + callback.
No altera la estructura, solo ejecuta una acción sobre cada data.
Es una base perfecta para entender punteros a función antes de ejercicios más complejos.`,

  estrategia: 'ENTENDER',
  razonEstrategia: 'El objetivo es interiorizar el patrón “recorrer lista y ejecutar callback” antes de ejercicios que mutan o borran nodos.',
  relacionados: ['ft_list_remove_if', 'ft_list_size', 'sort_list'],
}

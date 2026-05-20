export default {
  id: 'ft_list_remove_if',
  nombre: 'ft_list_remove_if',
  nivel: 4,
  dificultad: 'difícil',
  tipoEntrega: 'funcion',
  archivosEsperados: ['ft_list_remove_if.c', 'ft_list.h'],
  funcionesPermitidas: ['free'],

  subject: `Assignment name  : ft_list_remove_if
Expected files   : ft_list_remove_if.c
Allowed functions: free
--------------------------------------------------------------------------------

Write a function called ft_list_remove_if that removes from the
passed list any element the data of which is "equal" to the reference data.

It will be declared as follows :

void ft_list_remove_if(t_list **begin_list, void *data_ref, int (*cmp)());

cmp takes two void* and returns 0 when both parameters are equal.

You have to use the ft_list.h file, which will contain:

typedef struct      s_list
{
    struct s_list   *next;
    void            *data;
}                   t_list;`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : ft_list_remove_if
Expected files   : ft_list_remove_if.c
Allowed functions: free
--------------------------------------------------------------------------------

Write a function called ft_list_remove_if that removes from the
passed list any element the data of which is "equal" to the reference data.

It will be declared as follows :

void ft_list_remove_if(t_list **begin_list, void *data_ref, int (*cmp)());

cmp takes two void* and returns 0 when both parameters are equal.

You have to use the ft_list.h file, which will contain:

$>cat ft_list.h
typedef struct      s_list
{
    struct s_list   *next;
    void            *data;
}                   t_list;`,

  descripcion: 'Función que recorre una lista enlazada y elimina los nodos cuyo data coincide con una referencia.',

  palacio: {
    habitacion: 'salón',
    mueble: 'papelera',
    personaje: 'El Eliminador Silencioso',
    emoji: '🗑️',
    historia: `El Eliminador recorre la lista y tira al cubo los nodos que coinciden.
Si el primero se borra, hay que mover begin_list.
Si un nodo se borra, la cadena debe seguir unida sin perder el resto.
Cada nodo eliminado debe liberarse con free.`,
    anclas: [
      'comparar con cmp(data, data_ref) == 0',
      'si se borra el head, actualizar begin_list',
      'free(node) al eliminar',
      'seguir el recorrido sin saltarse nodos',
    ],
  },

  herramientas: ['listas', 'free'],

  formulaClave: {
    descripcion: 'Borrar nodos coincidentes preservando el resto de la lista',
    formula: 'if cmp(node->data, ref)==0: unlink+free; else avanzar',
    ejemplo: {
      entrada: '[1,2,3,2] ref=2',
      calculo: 'se quitan los 2',
      resultado: '[1,3]',
    },
  },

  versiones: [
    {
      id: 'recursiva',
      nombre: 'Versión recursiva',
      descripcion: 'La versión de rank02: recurre sobre el resto de la lista y libera coincidencias.',
      recomendada: true,
      codigo: `#include <stdlib.h>
#include "ft_list.h"

void\tft_list_remove_if(t_list **begin_list, void *data_ref, int (*cmp)(void *, void *))
{
\tt_list *cur;

\tif (!begin_list || !*begin_list)
\t\treturn;
\tcur = *begin_list;
\tif (cmp(cur->data, data_ref) == 0)
\t{
\t\t*begin_list = cur->next;
\t\tfree(cur);
\t\tft_list_remove_if(begin_list, data_ref, cmp);
\t}
\telse
\t\tft_list_remove_if(&cur->next, data_ref, cmp);
}`,
    },
    {
      id: 'iterativa',
      nombre: 'Con nodo previo',
      descripcion: 'Una alternativa iterativa que evita recursión y deja claro el relink.',
      recomendada: false,
      codigo: `#include <stdlib.h>
#include "ft_list.h"

void\tft_list_remove_if(t_list **begin_list, void *data_ref, int (*cmp)(void *, void *))
{
\tt_list *cur;
\tt_list *prev;
\tt_list *next;

\tcur = begin_list ? *begin_list : NULL;
\tprev = NULL;
\twhile (cur)
\t{
\t\tnext = cur->next;
\t\tif (cmp(cur->data, data_ref) == 0)
\t\t{
\t\t\tif (prev)
\t\t\t\tprev->next = next;
\t\t\telse
\t\t\t\t*begin_list = next;
\t\t\tfree(cur);
\t\t}
\t\telse
\t\t\tprev = cur;
\t\tcur = next;
\t}
}`,
    },
  
    {
      id: 'rank02',
      nombre: 'Versión rank02 (solución de referencia)',
      descripcion: 'Solución tal y como aparece en el repo de referencia rank02. Útil para comparar estilo, validaciones y constraints reales del examen.',
      recomendada: false,
      origen: 'rank02',
      codigo: `#include <stdlib.h>
#include "ft_list.h"

int cmp(void *a, void *b);

void ft_list_remove_if(t_list **begin_list, void *data_ref, int (*cmp)(void *, void *))
{
	if (begin_list == NULL || *begin_list == NULL)
		return;

	t_list *cur = *begin_list;

	if (cmp(cur->data, data_ref) == 0)
	{
		*begin_list = cur->next;
		free(cur);
		ft_list_remove_if(begin_list, data_ref, cmp);
	}
	else
		ft_list_remove_if(&cur->next, data_ref, cmp);
}`,
    },
  ],

  tests: [
    { id: 'test_middle', descripcion: 'Eliminar los valores iguales al ref', entrada: ['2', '1', '2', '3', '2'], salida: '1\n3\n', tipo: 'normal' },
    { id: 'test_head', descripcion: 'Si el primer nodo coincide, también se borra', entrada: ['1', '1', '2', '3'], salida: '2\n3\n', tipo: 'normal' },
    { id: 'test_all', descripcion: 'Si todo coincide, la lista queda vacía', entrada: ['5', '5', '5'], salida: '\n', tipo: 'edge' },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Coincidencia en la cabeza',
      codigo: `cur = *begin_list
cmp(cur->data, ref) == 0
*begin_list = cur->next`,
      variables: [
        { nombre: 'head', valor: 'actualizado', cambio: true, nota: 'se movió la cabeza' },
      ],
    },
    {
      paso: 2,
      titulo: 'Eliminar un nodo intermedio',
      codigo: `prev->next = cur->next
free(cur)
seguir con next`,
      variables: [
        { nombre: 'lista', valor: 'sin el nodo coincidente', cambio: true, nota: '' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'No actualizar begin_list al borrar la cabeza',
      descripcion: 'Si el primer nodo coincide y no se mueve begin_list, la lista queda corrupta.',
      codigoMal: `if (cmp(cur->data, ref) == 0) free(cur);`,
      codigoBien: `if (cmp(cur->data, ref) == 0) { *begin_list = cur->next; free(cur); }`,
    },
    {
      severidad: 'mortal',
      titulo: 'Perder el siguiente nodo tras free',
      descripcion: 'Guardar next antes de liberar evita perder el resto de la cadena.',
      codigoMal: `free(cur);
cur = cur->next;`,
      codigoBien: `next = cur->next;
free(cur);
cur = next;`,
    },
  ],

  bajoCelCapot: `ft_list_remove_if combina recorrido, comparación y liberación.
El patrón correcto es guardar el siguiente nodo antes de free y relinkear sin perder la cadena.
Es uno de los ejercicios más importantes para entender mutación segura de listas enlazadas.`,

  estrategia: 'ENTENDER',
  razonEstrategia: 'Obliga a controlar punteros previos, cabeza de lista y liberación. Entender la mutación segura evita bugs de memoria.',
  relacionados: ['ft_list_foreach', 'ft_list_size', 'sort_list'],
}

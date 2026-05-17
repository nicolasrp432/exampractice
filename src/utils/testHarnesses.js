// Test harnesses for funcion-type exercises.
// Each entry: { header, main }
//   header  — prepended BEFORE the user's code (e.g. typedefs the user doesn't write)
//   main    — appended AFTER the user's code (the main() that calls their function)
//
// Assembly: header + userCode + '\n' + main
// Program-type exercises (inter, wdmatch, fizzbuzz, etc.) don't need a harness.

export const testHarnesses = {

  // ── Level 1 ─────────────────────────────────────────────────────────────────

  ft_strlen: {
    header: '',
    main: `#include <stdio.h>
int main(int argc, char **argv)
{
\tif (argc < 2) { printf("0\\n"); return (0); }
\tprintf("%d\\n", ft_strlen(argv[1]));
\treturn (0);
}`,
  },

  ft_swap: {
    header: '',
    // Output after swap: "new_a new_b\n"
    main: `#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
\tint a = atoi(argv[1]);
\tint b = atoi(argv[2]);
\tft_swap(&a, &b);
\tprintf("%d %d\\n", a, b);
\treturn (0);
}`,
  },

  ft_putstr: {
    header: '',
    // ft_putstr writes directly via write() — harness just calls it
    main: `int main(int argc, char **argv)
{
\tif (argc < 2) return (0);
\tft_putstr(argv[1]);
\treturn (0);
}`,
  },

  ft_strcpy: {
    header: '',
    main: `#include <stdio.h>
int main(int argc, char **argv)
{
\tchar dst[4096];
\tif (argc < 2) { printf("\\n"); return (0); }
\tft_strcpy(dst, argv[1]);
\tprintf("%s\\n", dst);
\treturn (0);
}`,
  },

  // ── Level 2 ─────────────────────────────────────────────────────────────────

  ft_strcmp: {
    header: '',
    main: `#include <stdio.h>
int main(int argc, char **argv)
{
\tif (argc < 3) { printf("0\\n"); return (0); }
\tprintf("%d\\n", ft_strcmp(argv[1], argv[2]));
\treturn (0);
}`,
  },

  ft_strcspn: {
    header: '',
    main: `#include <stdio.h>
int main(int argc, char **argv)
{
\tif (argc < 3) { printf("0\\n"); return (0); }
\tprintf("%d\\n", ft_strcspn(argv[1], argv[2]));
\treturn (0);
}`,
  },

  ft_strdup: {
    header: '',
    main: `#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
\tchar *dup;
\tif (argc < 2) { printf("\\n"); return (0); }
\tdup = ft_strdup(argv[1]);
\tif (!dup) { printf("(null)\\n"); return (0); }
\tprintf("%s\\n", dup);
\tfree(dup);
\treturn (0);
}`,
  },

  ft_strpbrk: {
    header: '',
    // NULL case must print "(null)\n" to match test.salida
    main: `#include <stdio.h>
int main(int argc, char **argv)
{
\tchar *p;
\tif (argc < 3) { printf("(null)\\n"); return (0); }
\tp = ft_strpbrk(argv[1], argv[2]);
\tif (p)
\t\tprintf("%s\\n", p);
\telse
\t\tprintf("(null)\\n");
\treturn (0);
}`,
  },

  ft_strrev: {
    header: '',
    main: `#include <stdio.h>
int main(int argc, char **argv)
{
\tif (argc < 2) { printf("\\n"); return (0); }
\tprintf("%s\\n", ft_strrev(argv[1]));
\treturn (0);
}`,
  },

  is_power_of_2: {
    header: '',
    main: `#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
\tunsigned int n;
\tif (argc < 2) { printf("0\\n"); return (0); }
\tn = (unsigned int)atoi(argv[1]);
\tprintf("%d\\n", is_power_of_2(n));
\treturn (0);
}`,
  },

  print_bits: {
    header: '',
    // print_bits writes bits via write() but NOT the trailing newline
    main: `#include <stdlib.h>
#include <unistd.h>
int main(int argc, char **argv)
{
\tunsigned char n;
\tif (argc < 2) return (0);
\tn = (unsigned char)atoi(argv[1]);
\tprint_bits(n);
\twrite(1, "\\n", 1);
\treturn (0);
}`,
  },

  reverse_bits: {
    header: '',
    main: `#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
\tif (argc < 2) { printf("0\\n"); return (0); }
\tprintf("%d\\n", (int)reverse_bits((unsigned char)atoi(argv[1])));
\treturn (0);
}`,
  },

  swap_bits: {
    header: '',
    main: `#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
\tif (argc < 2) { printf("0\\n"); return (0); }
\tprintf("%d\\n", (int)swap_bits((unsigned char)atoi(argv[1])));
\treturn (0);
}`,
  },

  // ── Level 3 ─────────────────────────────────────────────────────────────────

  pgcd: {
    header: '',
    main: `#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
\tunsigned int a;
\tunsigned int b;
\tif (argc < 3) { printf("0\\n"); return (0); }
\ta = (unsigned int)atoi(argv[1]);
\tb = (unsigned int)atoi(argv[2]);
\tprintf("%u\\n", pgcd(a, b));
\treturn (0);
}`,
  },

  lcm: {
    header: '',
    main: `#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
\tunsigned int a;
\tunsigned int b;
\tif (argc < 3) { printf("0\\n"); return (0); }
\ta = (unsigned int)atoi(argv[1]);
\tb = (unsigned int)atoi(argv[2]);
\tprintf("%u\\n", lcm(a, b));
\treturn (0);
}`,
  },

  ft_list_size: {
    // typedef must go BEFORE user's function (which uses t_list)
    header: `typedef struct s_list
{
\tstruct s_list\t*next;
\tvoid\t\t\t*data;
}\tt_list;\n\n`,
    main: `#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
\tt_list\t*head;
\tt_list\t*tail;
\tt_list\t*node;
\tint\t\ti;

\thead = NULL;
\ttail = NULL;
\ti = 1;
\twhile (i < argc)
\t{
\t\tnode = malloc(sizeof(t_list));
\t\tnode->data = argv[i];
\t\tnode->next = NULL;
\t\tif (tail)
\t\t\ttail->next = node;
\t\telse
\t\t\thead = node;
\t\ttail = node;
\t\ti++;
\t}
\tprintf("%d\\n", ft_list_size(head));
\treturn (0);
}`,
  },

  ft_range: {
    header: '',
    // NULL (when min >= max) → print just "\n" to match salida='\n'
    main: `#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
\tint\tmin;
\tint\tmax;
\tint\t*arr;
\tint\ti;

\tif (argc < 3) { printf("\\n"); return (0); }
\tmin = atoi(argv[1]);
\tmax = atoi(argv[2]);
\tif (min >= max) { printf("\\n"); return (0); }
\tarr = ft_range(min, max);
\tif (!arr) { printf("\\n"); return (0); }
\ti = 0;
\twhile (i < max - min)
\t{
\t\tprintf("%d\\n", arr[i]);
\t\ti++;
\t}
\tfree(arr);
\treturn (0);
}`,
  },

  ft_rrange: {
    header: '',
    main: `#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
\tint\tmin;
\tint\tmax;
\tint\t*arr;
\tint\ti;

\tif (argc < 3) { printf("\\n"); return (0); }
\tmin = atoi(argv[1]);
\tmax = atoi(argv[2]);
\tif (min >= max) { printf("\\n"); return (0); }
\tarr = ft_rrange(min, max);
\tif (!arr) { printf("\\n"); return (0); }
\ti = 0;
\twhile (i < max - min)
\t{
\t\tprintf("%d\\n", arr[i]);
\t\ti++;
\t}
\tfree(arr);
\treturn (0);
}`,
  },

  ft_atoi_base: {
    header: '',
    main: `#include <stdio.h>
int main(int argc, char **argv)
{
\tif (argc < 3) { printf("0\\n"); return (0); }
\tprintf("%d\\n", ft_atoi_base(argv[1], argv[2]));
\treturn (0);
}`,
  },

  // ── Level 4 ─────────────────────────────────────────────────────────────────

  ft_split: {
    header: '',
    main: `#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
\tchar\t**result;
\tint\t\ti;

\tif (argc < 3) return (0);
\tresult = ft_split(argv[1], argv[2][0]);
\tif (!result) return (0);
\ti = 0;
\twhile (result[i])
\t{
\t\tprintf("%s\\n", result[i]);
\t\tfree(result[i]);
\t\ti++;
\t}
\tfree(result);
\treturn (0);
}`,
  },

  sort_list: {
    header: `typedef struct s_list
{
\tstruct s_list\t*next;
\tvoid\t\t\t*data;
}\tt_list;\n\n`,
    main: `#include <stdio.h>
#include <stdlib.h>

static int\tcmp_ints(void *a, void *b)
{
\treturn (*(int *)a - *(int *)b);
}

int main(int argc, char **argv)
{
\tt_list\t*head;
\tt_list\t*tail;
\tt_list\t*node;
\tt_list\t*cur;
\tint\t\t*val;
\tint\t\ti;

\thead = NULL;
\ttail = NULL;
\ti = 1;
\twhile (i < argc)
\t{
\t\tnode = malloc(sizeof(t_list));
\t\tval = malloc(sizeof(int));
\t\t*val = atoi(argv[i]);
\t\tnode->data = val;
\t\tnode->next = NULL;
\t\tif (tail)
\t\t\ttail->next = node;
\t\telse
\t\t\thead = node;
\t\ttail = node;
\t\ti++;
\t}
\thead = sort_list(head, cmp_ints);
\tcur = head;
\twhile (cur)
\t{
\t\tprintf("%d\\n", *(int *)cur->data);
\t\tcur = cur->next;
\t}
\treturn (0);
}`,
  },
}

// Build the full C code to send to Piston.
// For funcion-type: header + userCode + '\n' + main
// For programa-type (no harness): just userCode
export function buildFullCode(exerciseId, tipoEntrega, userCode) {
  if (tipoEntrega !== 'funcion') return userCode
  const h = testHarnesses[exerciseId]
  if (!h) return userCode
  return h.header + userCode + '\n' + h.main
}

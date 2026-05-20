export default {
  id: 'first_word',
  nombre: 'first_word',
  nivel: 1,
  dificultad: 'fácil',
  tipoEntrega: 'programa',
  archivosEsperados: ['first_word.c'],
  funcionesPermitidas: ['write'],

  subject: `Assignment name  : first_word
Expected files   : first_word.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays its first word, followed
by a newline.

A word is a sequence of printable characters, not including ' ' or '\\t'.

If the number of parameters is not 1, or there are no words in the string,
display only a newline.

Examples:
$> ./first_word "FOR PONY"
FOR
$> ./first_word "   lorem   ipsum   dolor   "
lorem
$> ./first_word ""

$> ./first_word "  "

$>`,

  // Subject literal del repo rank02 (sub.txt). Útil para comparar con
  // el subject didáctico activo y para la pestaña "Examen real".
  subjectReal: `Assignment name  : first_word
Expected files   : first_word.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays its first word, followed by a
newline.

A word is a section of string delimited by spaces/tabs or by the start/end of
the string.

If the number of parameters is not 1, or if there are no words, simply display
a newline.

Examples:

$> ./first_word "FOR PONY" | cat -e
FOR$
$> ./first_word "this        ...    is sparta, then again, maybe    not" | cat -e
this$
$> ./first_word "   " | cat -e
$
$> ./first_word "a" "b" | cat -e
$
$> ./first_word "  lorem,ipsum  " | cat -e
lorem,ipsum$
$>`,

  descripcion: 'Programa que imprime la primera palabra del string (separadores: espacio y tab). Si no hay exactamente 1 argumento o no hay palabras, imprime solo \\n.',

  palacio: {
    habitacion: 'cocina',
    mueble: 'encimera',
    personaje: 'El Cuchillo',
    emoji: '🔪',
    historia: `En la encimera hay un Cuchillo que SALTA los espacios iniciales.
Cuando encuentra la primera letra (no espacio, no tab) empieza a CORTAR.
Corta letra a letra hasta que llega a otro espacio/tab o al final del string.
¡Esas letras cortadas son la primera palabra!
Fases: 1) Salta separadores. 2) Escribe letras. 3) Para en separador o \\0.`,
    anclas: [
      "fase 1: saltar spaces/tabs al inicio",
      "fase 2: escribir hasta space/tab/\\0",
      "argc != 2 → solo '\\n'",
      "string todo spaces → solo '\\n'",
      "separadores: ' ' y '\\t' (¡no olvides el tab!)",
    ],
  },

  herramientas: ['strings', 'argc'],

  formulaClave: {
    descripcion: 'Dos fases: saltar separadores, luego imprimir hasta separador',
    formula: 'while(sep) i++; while(no sep && str[i]) write & i++;',
    ejemplo: {
      entrada: '"  hello world"',
      calculo: 'salta 2 espacios → imprime h,e,l,l,o → para en espacio',
      resultado: 'hello',
    },
  },

  // Tester oficial copiado literalmente desde rank02 (tester.sh).
  testerReal: `#!/bin/bash
source ../../../main/colors.sh

file1=first_word.c
file2=../../../../rendu/first_word/first_word.c


# 1. test
    gcc -Werror -Wall -Wextra -o  out1 "$file1"
    gcc -Werror -Wall -Wextra -o  out2 "$file2"

    ./out1 "L'eSPrit nE peUt plUs pRogResSer s'Il staGne et sI peRsIsTent VAnIte et auto-justification." > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "L'eSPrit nE peUt plUs pRogResSer s'Il staGne et sI peRsIsTent VAnIte et auto-justification." > out2.txt 2>/dev/null 2>/dev/null
    
    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi


# 2. test
    gcc -w -o out1 "$file1"
    gcc -w -o out2 "$file2"

    ./out1 "S'enTOuRer dE sECreT eSt uN sIGnE De mAnQuE De coNNaiSSanCe.  " > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "S'enTOuRer dE sECreT eSt uN sIGnE De mAnQuE De coNNaiSSanCe.  " > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

# 3. test
    gcc -w -o out1 "$file1"
    gcc -w -o out2 "$file2"

    ./out1 "3:21 Ba  tOut  moUn ki Ka di KE m'en Ka fe fot" > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "3:21 Ba  tOut  moUn ki Ka di KE m'en Ka fe fot" > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

# 4. test
    gcc -w -o out1 "$file1"
    gcc -w -o out2 "$file2"

    ./out1 "Papache est un sabre" "a" "o" > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "Papache est un sabre" "a" "o" > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi


# 5. test 
    gcc -w -o out1 "$file1"
    gcc -w -o out2 "$file2"

    ./out1 "zaz" "art" "zul" > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "zaz" "art" "zul" > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

    rm out1 out2 out1.txt out2.txt 2>/dev/null
# 6. test
    gcc -w -o out1 "$file1"
    gcc -w -o out2 "$file2"

    ./out1 "zaz" "r" "u" > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "zaz" "r" "u" > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

# 7. test
    gcc -w -o out1 "$file1"
    gcc -w -o out2 "$file2"

    ./out1 "jacob" "a" "b" "c" "e" > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "jacob" "a" "b" "c" "e" > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

# 8. test
    gcc  -w -o out1 "$file1"
    gcc  -w -o out2 "$file2"

    ./out1 "ZoZ eT Dovid oiME le METol." "o" "a" > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "ZoZ eT Dovid oiME le METol." "o" "a" > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

# 9. test
    gcc  -w -o out1 "$file1"
    gcc  -w -o out2 "$file2"

    ./out1 "wNcOre Un ExEmPle Pas Facilw a Ecrirw " "w" "e" > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "wNcOre Un ExEmPle Pas Facilw a Ecrirw " "w" "e" > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

    rm out1 out2 out1.txt out2.txt 2>/dev/null
# 10. test
    gcc  -w -o out1 "$file1"
    gcc  -w -o out2 "$file2"

    ./out1 "AkjhZ zLKIJz , 23y " > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "AkjhZ zLKIJz , 23y " > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

    # 11. test
    gcc  -w -o out1 "$file1"
    gcc  -w -o out2 "$file2"

    ./out1 "FOR PONY" > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "FOR PONY" > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

    # 12. test
    gcc  -w -o out1 "$file1"
    gcc  -w -o out2 "$file2"

    ./out1 "this        ...       is sparta, then again, maybe    not" > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "this        ...       is sparta, then again, maybe    not" > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

    # 13. test
    gcc  -w -o out1 "$file1"
    gcc  -w -o out2 "$file2"

    ./out1 "   " > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "   " > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

    # 14. test
    gcc  -w -o out1 "$file1"
    gcc  -w -o out2 "$file2"

    ./out1 "a" "b" > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "a" "b" > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

    # 15. test
    gcc  -w -o out1 "$file1"
    gcc  -w -o out2 "$file2"

    ./out1 "  lorem,ipsum  " > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "  lorem,ipsum  " > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

    # 16. test
    gcc  -w -o out1 "$file1"
    gcc  -w -o out2 "$file2"

    ./out1 "" > out1.txt 2>/dev/null 2>/dev/null
    ./out2 "" > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi

    
     # 17. test
    gcc  -w -o out1 "$file1"
    gcc  -w -o out2 "$file2"

    ./out1 > out1.txt 2>/dev/null 2>/dev/null
    ./out2 > out2.txt 2>/dev/null 2>/dev/null

    if ! diff -q out1.txt out2.txt >/dev/null ; then
        out1=$(cat out1.txt)
        out2=$(cat out2.txt)
        echo "$(tput setaf 1)$(tput bold)FAIL$(tput sgr 0)"
        echo "\${GREEN}Expected Output:\${RESET} \\"$out1\\""
        echo "\${RED}Your Output:\${RESET}     \\"$out2\\""
        rm out1 out2 out1.txt out2.txt 2>/dev/null
        exit 1
    fi


    rm out1 out2 out1.txt out2.txt 2>/dev/null
    echo "$(tput setaf 2)$(tput bold)PASSED 🎉$(tput sgr 0)"
    exit 1`,

  // Tests derivados del tester.sh real. Las salidas se obtuvieron
  // compilando la solución de rank02 con gcc -w y ejecutándola.
  testsRank02: [
    { id: 'tester_1', entrada: ["L'eSPrit nE peUt plUs pRogResSer s'Il staGne et sI peRsIsTent VAnIte et auto-justification."], salida: "L'eSPrit\n", fuente: 'tester.sh' },
    { id: 'tester_2', entrada: ["S'enTOuRer dE sECreT eSt uN sIGnE De mAnQuE De coNNaiSSanCe.  "], salida: "S'enTOuRer\n", fuente: 'tester.sh' },
    { id: 'tester_3', entrada: ["3:21 Ba  tOut  moUn ki Ka di KE m'en Ka fe fot"], salida: "3:21\n", fuente: 'tester.sh' },
    { id: 'tester_4', entrada: ["Papache est un sabre","a","o"], salida: "\n", fuente: 'tester.sh' },
    { id: 'tester_5', entrada: ["zaz","art","zul"], salida: "\n", fuente: 'tester.sh' },
    { id: 'tester_6', entrada: ["zaz","r","u"], salida: "\n", fuente: 'tester.sh' },
    { id: 'tester_7', entrada: ["jacob","a","b","c","e"], salida: "\n", fuente: 'tester.sh' },
    { id: 'tester_8', entrada: ["ZoZ eT Dovid oiME le METol.","o","a"], salida: "\n", fuente: 'tester.sh' },
    { id: 'tester_9', entrada: ["wNcOre Un ExEmPle Pas Facilw a Ecrirw ","w","e"], salida: "\n", fuente: 'tester.sh' },
    { id: 'tester_10', entrada: ["AkjhZ zLKIJz , 23y "], salida: "AkjhZ\n", fuente: 'tester.sh' },
    { id: 'tester_11', entrada: ["FOR PONY"], salida: "FOR\n", fuente: 'tester.sh' },
    { id: 'tester_12', entrada: ["this        ...       is sparta, then again, maybe    not"], salida: "this\n", fuente: 'tester.sh' },
    { id: 'tester_13', entrada: ["   "], salida: "\n", fuente: 'tester.sh' },
    { id: 'tester_14', entrada: ["a","b"], salida: "\n", fuente: 'tester.sh' },
    { id: 'tester_15', entrada: ["  lorem,ipsum  "], salida: "lorem,ipsum\n", fuente: 'tester.sh' },
    { id: 'tester_16', entrada: [""], salida: "\n", fuente: 'tester.sh' },
    { id: 'tester_17', entrada: [], salida: "\n", fuente: 'tester.sh' },
  ],

  versiones: [
    {
      id: 'clasica',
      nombre: 'Clásica dos fases',
      descripcion: 'Dos bucles explícitos: uno para saltar, otro para imprimir. La más clara en el examen.',
      recomendada: true,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tint\ti;

\tif (argc != 2)
\t{
\t\twrite(1, "\\n", 1);
\t\treturn (0);
\t}
\ti = 0;
\twhile (argv[1][i] == ' ' || argv[1][i] == '\\t')
\t\ti++;
\twhile (argv[1][i] && argv[1][i] != ' ' && argv[1][i] != '\\t')
\t{
\t\twrite(1, &argv[1][i], 1);
\t\ti++;
\t}
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
    {
      id: 'punteros',
      nombre: 'Con punteros y avance lineal',
      descripcion: 'Usa un puntero para saltar separadores y escribir la primera palabra sin índices.',
      recomendada: false,
      codigo: `#include <unistd.h>

int\tmain(int argc, char **argv)
{
\tchar\t*s;

\tif (argc != 2)
\t{
\t\twrite(1, "\\n", 1);
\t\treturn (0);
\t}
\ts = argv[1];
\twhile (*s == ' ' || *s == '\\t')
\t\ts++;
\twhile (*s && *s != ' ' && *s != '\\t')
\t\twrite(1, s++, 1);
\twrite(1, "\\n", 1);
\treturn (0);
}`,
    },
  
    {
      id: 'rank02',
      nombre: 'Versión rank02 (solución de referencia)',
      descripcion: 'Solución tal y como aparece en el repo de referencia rank02. Útil para comparar estilo, validaciones y constraints reales del examen.',
      recomendada: false,
      origen: 'rank02',
      codigo: `#include <unistd.h>

void	ft_putchar(char c)
{
	write(1, &c, 1);
}

int	main(int ac, char **av)
{
	int	i;

	i = 0;
	if (ac == 2)
	{
		while (av[1][i] == ' ' || av[1][i] == '\\t')
			i++;
		while (av[1][i] != '\\0' && av[1][i] != ' ' && av[1][i] != '\\t')
		{
			ft_putchar(av[1][i]);
			i++;
		}
	}
	ft_putchar('\\n');
	return (0);
}`,
    },
  ],

  tests: [
    {
      id: 'test_normal',
      descripcion: '"hello world" → primera palabra hello',
      entrada: ['hello world'],
      salida: 'hello\n',
      tipo: 'normal',
    },
    {
      id: 'test_espacios_inicio',
      descripcion: '"  hello" → salta espacios, imprime hello',
      entrada: ['  hello'],
      salida: 'hello\n',
      tipo: 'normal',
    },
    {
      id: 'test_tab',
      descripcion: '"\\thello there" → tab como separador',
      entrada: ['\thello there'],
      salida: 'hello\n',
      tipo: 'edge',
    },
    {
      id: 'test_sin_args',
      descripcion: 'Sin argumentos → solo \\n',
      entrada: [],
      salida: '\n',
      tipo: 'edge',
    },
    {
      id: 'test_vacio',
      descripcion: 'String vacío → solo \\n',
      entrada: [''],
      salida: '\n',
      tipo: 'edge',
    },
    {
      id: 'test_solo_espacios',
      descripcion: '"   " → solo espacios, sin palabras → \\n',
      entrada: ['   '],
      salida: '\n',
      tipo: 'edge',
    },
    {
      id: 'test_1palabra',
      descripcion: '"word" → una sola palabra',
      entrada: ['word'],
      salida: 'word\n',
      tipo: 'normal',
    },
  ],

  gdbSteps: [
    {
      paso: 1,
      titulo: 'Entrada: "  hello world"',
      codigo: `(gdb) run "  hello world"
argc=2, argv[1]="  hello world"
i = 0`,
      variables: [
        { nombre: 'argc', valor: '2', cambio: true, nota: '✓ Un argumento' },
        { nombre: 'argv[1]', valor: '"  hello world"', cambio: true, nota: '' },
        { nombre: 'i', valor: '0', cambio: true, nota: '' },
      ],
    },
    {
      paso: 2,
      titulo: 'Fase 1: salta espacios — i=0,1 → i=2',
      codigo: `while (argv[1][0]==' ')  → TRUE → i=1
while (argv[1][1]==' ')  → TRUE → i=2
while (argv[1][2]=='h')  → 'h' ≠ ' ' y ≠ '\\t' → SALE`,
      variables: [
        { nombre: 'i', valor: '2', cambio: true, nota: '← apunta al "h" de hello' },
      ],
    },
    {
      paso: 3,
      titulo: 'Fase 2: imprime h,e,l,l,o',
      codigo: `[i=2] 'h' ≠ ' ' y ≠ '\\0' → write 'h', i=3
[i=3] 'e' → write 'e', i=4
[i=4] 'l' → write 'l', i=5
[i=5] 'l' → write 'l', i=6
[i=6] 'o' → write 'o', i=7`,
      variables: [
        { nombre: 'stdout', valor: '"hello"', cambio: true, nota: '' },
        { nombre: 'i', valor: '7', cambio: true, nota: '' },
      ],
    },
    {
      paso: 4,
      titulo: 'argv[1][7] = " " → para el segundo while',
      codigo: `[i=7] argv[1][7]=' ' → condición FALSE → sale del while
→ write("\\n", 1)`,
      variables: [
        { nombre: 'argv[1][7]', valor: "' '", cambio: false, nota: '← separador, para el while' },
        { nombre: 'stdout', valor: '"hello\\n"', cambio: true, nota: '✓ Primera palabra' },
      ],
    },
  ],

  trampas: [
    {
      severidad: 'mortal',
      titulo: 'Olvidar el tab como separador',
      descripcion: 'El sujeto dice "not including space or tab". Si solo compruebas espacio, el string "\\thello" no saltará el tab y escribirá el tab como parte de la salida.',
      codigoMal: `// ❌ Solo espacio, olvida tab
while (argv[1][i] == ' ')  // ← falta || argv[1][i]=='\\t'
    i++;`,
      codigoBien: `// ✅ Espacio Y tab
while (argv[1][i] == ' ' || argv[1][i] == '\\t')
    i++;`,
    },
    {
      severidad: 'mortal',
      titulo: 'String todo-espacios → imprime \\n extra',
      descripcion: 'Si el string es "   " (solo espacios), el primer while salta todo hasta el \\0. El segundo while no entra. Si añades write("\\n") fuera, está bien. Si añades un \\n extra dentro del segundo while también, se duplica.',
      codigoMal: `// ❌ Problema si el segundo while no entra pero hay \\n dentro
while (argv[1][i] && ...) {
    write(1, &argv[1][i], 1);
    i++;
    if (!argv[1][i] || argv[1][i]==' ')
        write(1, "\\n", 1); // ← \\n dentro del while: doble
}`,
      codigoBien: `// ✅ Un único write("\\n") AL FINAL, fuera del while
while (argv[1][i] && argv[1][i]!=' ' && argv[1][i]!='\\t') {
    write(1, &argv[1][i], 1);
    i++;
}
write(1, "\\n", 1); // ← siempre, una sola vez`,
    },
    {
      severidad: 'warning',
      titulo: 'argc != 2 imprime \\n pero olvida el return',
      descripcion: 'Sin return (0) después del write del caso de error, el programa continúa con argv[1]=NULL → segfault al acceder a argv[1][i].',
      codigoMal: `// ❌ Sin return, cae al código principal con NULL
if (argc != 2)
    write(1, "\\n", 1);
// continúa con argv[1] = NULL → crash`,
      codigoBien: `// ✅
if (argc != 2) {
    write(1, "\\n", 1);
    return (0); // ← obligatorio
}`,
    },
  ],

  bajoCelCapot: `"Palabra" en C = secuencia de bytes imprimibles hasta un espacio, tab o \\0.
No hay función mágica: hay que iterar manualmente.
El doble bucle (salta / imprime) es el patrón estándar para parsear tokens.`,

  estrategia: 'MEMORIZAR',
  razonEstrategia: 'El patrón "salta separadores → procesa token" se reutiliza en last_word, ft_split, ft_atoi, wdmatch.',
  relacionados: ['last_word', 'ft_atoi', 'ft_split'],
}

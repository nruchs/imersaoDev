var nome = "Natalia";

var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 7;
var notaDoTerceiroBimestre = 4;
var notaDoQuartoBimestre = 0;

var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4;

var notaFixada = notaFinal.toFixed(1);

console.log("Bem vindo " + nome);
console.log("Sua nota final é: " + notaFixada);

var resultadoFinal = document.getElementById("resultadoFinal");

if (notaFixada > 7) {
  console.log("Parabéns " + nome + ", você foi aprovado!");
  resultadoFinal.innerHTML +=
    "Sua nota final é: " +
    notaFixada +
    "\nParabéns " +
    nome +
    ". Você foi aprovado!";
} else {
  console.log("Infelizmente você foi reprovado!");
  resultadoFinal.innerHTML +=
    "Sua nota final é: " + notaFixada + "\n Infelizmente você foi reprovado!";
}

//revisão
//varíaveis, strings, console.log, toFixed, operações matemáticas, concatenação

/* Conteúdo detalhado desta aula:
 - Criar uma conta no CodePen;
 - Entender as diferenças entre HTML, CSS e JavaScript;
 - Variáveis, manipulação dos valores armazenados e a memória do computador;
 - Tipos de variáveis, como texto e inteiro;
 - Fixando a quantidade de casas decimais com a função toFixed();
 */

/* DESAFIOS: 
 - Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
 - Alterar o fundo da tela da maneira que achar mais legal
 - Imprimir na própria página o resultado, ao invés do console
 - Criar um conversor de temperaturas entre farenheit e celcius
 - Colocar a conta inteira da média em apenas uma linha
 */
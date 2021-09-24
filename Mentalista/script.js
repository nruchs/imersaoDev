var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML =
      "Errou! O número secreto era " + numeroSecreto;
  }

  /*  
  CONTEÚDOS DETALHADOS DESTA AULA:
* Realizar o fork do projeto com template inicial;
* Fazer testes utilizando console.log();
* Criar a lógica por trás do "chute" com if, else if e else;
* Utilizar a função Math.random() do JavaScript para gerar números aleatórios;
  DESAFIOS:
* Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.
* Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.
* Pesquisar e aprender a diferença entre == e === 

  CONTEÚDOS EXTRAS:
* Strict equality (===) >https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality<
* Math.random() no MDN >https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random<
* Operadores com Javascript >https://www.alura.com.br/artigos/operadores-matematicos-em-javascript<
  */
}
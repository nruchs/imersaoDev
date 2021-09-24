var cartaRafa = {
  nome: "Bulbasauro",
  imagem:
    "https://www.pngkit.com/png/detail/154-1545341_pokemon-png-bulbasaur-pokemon-png.png",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var cartaGui = {
  nome: "Darth Vader",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/51H--lU9YGL.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

var cartaPaulo = {
  nome: "Shiryu de dragão",
  imagem:
    "http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};

var cartas = [cartaPaulo, cartaRafa, cartaGui];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opçoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opçoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

/*
Conteúdo detalhado desta aula
- Adicionando o campo imagem nos objetos com o caminho da imagem;
- Criar uma função que exibe a carta do jogador após o sorteio das cartas;
- Adicionar a moldura da carta;
- Escrever o resultado na tela após o duelo das cartas informando se o jogador venceu ou perdeu;
- Criar uma função que exibe a carta da máquina;
- Exibir os atributos e pontos da carta da máquina.

Desafios desta aula!
- Criar de fato um baralho, com várias outras cartas
- Desenvolver um sistema em que a cada carta que um jogador ganhe, ele fique com a carta do oponente e vice versa
- Transformar as funções exibirCartaMaquina() e exibirCartaJogador() em apenas uma, chamada exibirCarta(), utilizando para isso a passagem de parâmetros
- Utilizar seus personagens e jogos preferidos nesse projeto

Links importantes para você acompanhar a aula
Usando o Vscode <https://www.youtube.com/watch?v=xvkuNF_8Coc&ab_channel=GuilhermeLima>

*/
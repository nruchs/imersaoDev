var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var gui = { nome: "Gui", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [rafa, paulo, gui];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

/* 
Conteúdo detalhado desta aula
- Remover o código estático do HTML;
- Criar um objeto no Javascript para cada jogador;
- Criar uma função que receba um objeto como parâmetro para calcular os pontos;
- Exibir o objeto na página HTML;
- Criar uma função para adicionar vitória, outra para adicionar empate e uma última para adicionar derrota;
- Recalcular os pontos quando vitória ou empate for adicionado.

Desafios desta aula!
- Fazer a lógica de quando houver um empate, obrigatóriamente deveria já ajustar como empate para os demais jogadores
- Validar se todos os pontos estão fazendo sentido, tanto o número de empates, quanto derrotas e vitórias com os demais jogadores (impossível haver mais vitórias que derrotas, por exemplo)
- Adicionar a imagem de cada jogador
- Criar um botão para zerar todos os pontos
- Criar um botão e inputs (campos de texto) para adicionar novos jogadores, com seus respectivos dados
- Utilizar seu jogo preferido para se basear na pontuação da sua tabela de classificação
*/
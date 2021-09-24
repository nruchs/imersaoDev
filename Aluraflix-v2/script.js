function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

/*
Conteúdo detalhado desta aula:
- Sintaxe e criação de funções no JavaScript;
- Integrando funções criadas no JavaScript com o HTML que está sendo exibido na tela;
- Condicionando a execução (ou "chamada") de uma função a um clique em um botão na tela;
- Usando o JavaScript para acessar o que está sendo exibido na tela e pegar valores digitados pelo usuário com getElementById() e .value;
- Passar informações que as funções precisam para funcionar, através dos parâmetros;
- Utilizar o .endsWith() para verificar se um texto termina com determinados caracteres;
- Ver mais um exemplo de reatribuição de variável para "limpar" o texto do campo com "".

Desafios desta aula!
- Criar um botão para remover um filme na tela
- Além de colocar a imagem do filme, também adicionar o nome por meio de outro input
- Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme
- Conversor de moedas: criar funções para cada tipo de conversão e chamá-las dependendo do que você quiser fazer, podendo colocar inputs ou botões e quando clicar chamar cada função converteDolar(), converteReal(), converteEuro() e converteBitcoin(), por exemplo

Como abrir um projeto do CodePen no VSCode 
<https://www.youtube.com/watch?v=xvkuNF_8Coc&ab_channel=GuilhermeLima>

Iteradores com JavaScript: while e for
<https://www.youtube.com/watch?v=c8Zac9hWbs8&ab_channel=AluraCursosOnline>
*/
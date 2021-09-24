var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];

listaFilmes.push("Harry Potter 2");
listaFilmes.push("Harry Potter 3");
listaFilmes.push("Harry Potter 4");
listaFilmes.push("Harry Potter 5");
listaFilmes.push("Harry Potter 6");
listaFilmes.push("Harry Potter 7");

console.log(listaFilmes.length);

// valor inicial, condição, expressão final
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}

/*
Documentação sobre Arrays:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
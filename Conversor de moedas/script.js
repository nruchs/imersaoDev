function Converter() {
  var valor = parseFloat(document.getElementById("valor").value);

  var dolar = valor * 5;
  var euro = valor * 6.2;
  var bitcoin = valor * 0.0000039;

  console.log("US$: " + dolar, "EUR: " + euro, "BTC: " + bitcoin);

  var resultado = document.getElementById("valorConvertido");
  var conversao =
    "R$ " +
    valor.toFixed(2) +
    " convertido é:" +
    "<br>" +
    "US$ " +
    dolar.toFixed(2) +
    "<br>" +
    "EUR " +
    euro.toFixed(2) +
    "<br>" +
    "Bitcoin " +
    bitcoin;
  resultado.innerHTML = conversao;
}

function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valor = parseFloat(document.getElementById("valor").value);

  var euro = valor * 6.2;
  console.log(euro);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + euro.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
  var valor = parseFloat(document.getElementById("valor").value);

  var bitcoin = valor * 0.0000039;
  console.log(bitcoin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + bitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
}
/* Conteúdo detalhado desta aula:
  Interagir com usuário para receber os preços a serem convertidos;
  Criar a lógica para saber como converter;
  Utilizar funções que interagem com a tela;
  Exibir o resultado na tela com innerHTML; 

  Desafios desta aula:
  Adicionar outras moedas para converter.
  Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
  Conversor de temperaturas entre farenheit, kelvin e celcius.
  Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
*/
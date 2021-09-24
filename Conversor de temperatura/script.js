function Converter() {
  var temp = parseFloat(document.getElementById("temp").value);

  var farenheit = (temp * 9) / 5 + 32;
  var kelvin = temp + 273.15;

  console.log("F: " + farenheit + "K: " + kelvin);

  var resultado = document.getElementById("tempConvertida");
  var conversao =
    temp.toFixed() +
    " °C convertido é: " +
    "<br>" +
    farenheit.toFixed(1) +
    " °F" +
    "<br>" +
    kelvin.toFixed(2) +
    " K";
  resultado.innerHTML = conversao;
}
/*
Conversor de temperaturas entre farenheit, kelvin e celcius.
*/
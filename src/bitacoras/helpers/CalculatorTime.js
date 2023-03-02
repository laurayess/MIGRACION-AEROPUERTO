function horaToDecimal(hora) {
  // Dividimos la hora, los minutos y los segundos en variables separadas
  const [horaStr, minutoStr, segundoStr] = hora.split(":");

  // Convertimos cada parte en un número entero
  const horaNum = parseInt(horaStr);
  const minutoNum = parseInt(minutoStr);
  const segundoNum = parseInt(segundoStr);

  // Calculamos la hora decimal
  const horaDecimal = horaNum + minutoNum / 60 + segundoNum / 3600;

  // Devolvemos el resultado redondeado a 2 decimales
  return horaDecimal.toFixed(2);
}

function decimalToHora(horaDecimal) {
  // Extraemos la hora y los minutos como números enteros
  const horas = Math.floor(horaDecimal);
  const minutos = Math.floor((horaDecimal - horas) * 60);

  // Calculamos los segundos a partir de los minutos restantes
  const segundos = Math.floor(((horaDecimal - horas) * 60 - minutos) * 60);

  // Agregamos ceros por delante de las horas, minutos y segundos si son menores a 10
  const horaStr = horas < 10 ? "0" + horas : horas.toString();
  const minutoStr = minutos < 10 ? "0" + minutos : minutos.toString();
  const segundoStr = segundos < 10 ? "0" + segundos : segundos.toString();

  // Unimos todo en una cadena con el formato "hh:mm:ss"
  return horaStr + ":" + minutoStr + ":" + segundoStr;
}

function sumarHoras(hora1, hora2) {
  // Convertimos ambas horas a segundos
  const hora1Segundos = hora1
    .split(":")
    .reduce((total, valor) => 60 * total + +valor, 0);
  const hora2Segundos = hora2
    .split(":")
    .reduce((total, valor) => 60 * total + +valor, 0);

  // Sumamos los segundos de ambas horas
  const totalSegundos = hora1Segundos + hora2Segundos;

  // Convertimos los segundos a formato "hh:mm:ss"
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = Math.floor(totalSegundos % 60);

  // Obtenemos los días de la suma total de segundos
  const dias = Math.floor(totalSegundos / 86400);

  // Agregamos ceros por delante de las horas, minutos y segundos si son menores a 10
  const horaStr = (horas + dias * 24).toString().padStart(2, "0");
  const minutoStr = minutos.toString().padStart(2, "0");
  const segundoStr = segundos.toString().padStart(2, "0");

  // Unimos todo en una cadena con el formato "hh:mm:ss"
  return horaStr + ":" + minutoStr + ":" + segundoStr;
}

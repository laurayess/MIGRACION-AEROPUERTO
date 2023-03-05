export function horaToDecimal(hora) {
  // Convertimos la hora a minutos
  const minutos = hora
    .split(":")
    .reduce((total, valor) => 60 * total + +valor, 0);

  // Calculamos la hora en formato decimal
  const horaDecimal = minutos / 60;

  // Redondeamos el resultado a dos decimales y lo devolvemos
  return horaDecimal.toFixed(2);
}

export function decimalToHora(decimal) {
  // Convertimos la hora decimal a minutos
  const minutos = Math.floor(decimal * 60);

  // Calculamos las horas y los minutos
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;

  // Agregamos ceros por delante de las horas y los minutos si son menores a 10
  const horaStr = horas.toString().padStart(2, "0");
  const minutoStr = minutosRestantes.toString().padStart(2, "0");

  // Unimos todo en una cadena con el formato "hh:mm"
  return horaStr + ":" + minutoStr;
}

/* export function sumarHoras(hora1, hora2) {
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
} */

export function sumarHoras(hora1, hora2) {
  const [hora1h, hora1m] = hora1.split(":").map(Number);
  const [hora2h, hora2m] = hora2.split(":").map(Number);

  let horas = hora1h + hora2h;
  let minutos = hora1m + hora2m;

  if (minutos >= 60) {
    minutos -= 60;
    horas += 1;
  }

  // Opcionalmente, si quieres que las horas sean mayores a 24:
  // while (horas >= 24) {
  //   horas -= 24;
  // }

  const horasStr = horas.toString().padStart(2, "0");
  const minutosStr = minutos.toString().padStart(2, "0");

  return `${horasStr}:${minutosStr}`;
}

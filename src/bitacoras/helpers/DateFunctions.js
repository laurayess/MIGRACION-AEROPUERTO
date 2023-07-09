export const timeStampToDate = (fecha) => {
  // Supongamos que tenemos un tipo timestamp de Firebase almacenado en la variable `timestamp`
  const timestamp = fecha;

  // Convertir el timestamp a un objeto Date
  const date = timestamp.toDate();

  // Obtener el día, mes y año de la fecha en formato de dos dígitos (dd, mm y yyyy)
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  // Crear la cadena de fecha en formato dd/mm/yyyy
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

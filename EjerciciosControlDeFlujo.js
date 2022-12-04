/**
 * Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.

El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */

const diasDeLaSemana = {
  Lunes: "Monday",
  Martes: "Tuesday",
  Miercoles: "Wednesday",
  Jueves: "Thursday",
  Viernes: "Friday",
  Sabado: "Saturday",
  Domingo: "Sunday",
};

var diaDeLaSemana = "Miercoles";

if (diaDeLaSemana === "Lunes") {
  console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Lunes}`);
} else if (diaDeLaSemana === "Martes") {
  console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Martes}`);
} else if (diaDeLaSemana === "Miercoles") {
  console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Miercoles}`);
} else if (diaDeLaSemana === "Jueves") {
  console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Jueves}`);
} else if (diaDeLaSemana === "Viernes") {
  console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Viernes}`);
} else if (diaDeLaSemana === "Sabado") {
  console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Sabado}`);
} else if (diaDeLaSemana === "Domingo") {
  console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Domingo}`);
} else {
  console.log(`${diaDeLaSemana} no es un dia de la semana correcto`);
}

switch (diaDeLaSemana) {
  case "Lunes":
    console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Lunes}`);
    break;
  case "Martes":
    console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Martes}`);
    break;
  case "Miercoles":
    console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Miercoles}`);
    break;
  case "Jueves":
    console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Jueves}`);
    break;
  case "Viernes":
    console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Viernes}`);
    break;
  case "Sabado":
    console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Sabado}`);
    break;
  case "Domingo":
    console.log(`${diaDeLaSemana} en ingles ${diasDeLaSemana.Domingo}`);
    break;
  default:
    console.log(`${diaDeLaSemana} no es un dia de la semana correcto`);
}

/**
 * Escribir un programa que según el total de la compra, se agregue un valor de envio.

Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3

Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5

Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7

Si la compra supera los $50 el gasto de envío será gratuito

El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */

var valorDeLaCompra = 51;

if (10 >= valorDeLaCompra) {
  console.log(`Gastos de envio 3€, total ${valorDeLaCompra + 3}€`);
} else if (10 < valorDeLaCompra && 20 >= valorDeLaCompra) {
  console.log(`Gastos de envio 5, total ${valorDeLaCompra + 5}€`);
} else if (20 < valorDeLaCompra && 50 >= valorDeLaCompra) {
  console.log(`Gastos de envio 7, total ${valorDeLaCompra + 7}€`);
} else if (50 < valorDeLaCompra) {
  console.log(`Gastos de envio gratuitos, total ${valorDeLaCompra}€`);
}

switch (true) {
  case 10 >= valorDeLaCompra:
    console.log(`Gastos de envio 3€, total ${valorDeLaCompra + 3}€`);
    break;
  case 10 < valorDeLaCompra && 20 >= valorDeLaCompra:
    console.log(`Gastos de envio 5, total ${valorDeLaCompra + 5}€`);
    break;
  case 20 < valorDeLaCompra && 50 >= valorDeLaCompra:
    console.log(`Gastos de envio 7, total ${valorDeLaCompra + 7}€`);
    break;
  case 50 < valorDeLaCompra:
    console.log(`Gastos de envio gratuitos, total ${valorDeLaCompra}€`);
  default:
    break;
}

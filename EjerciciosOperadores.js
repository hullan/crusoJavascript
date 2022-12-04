/**
 * Escribir un programa que calcule el número de segundos que existen en un día.

Para ello debemos multiplicar los segundos de un minuto, por los minutos de

una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.
 */

const HORAS_DIA = 24;
const MINUTOS_HORA = 60;
const SEGUNDOS_MINUTO = 60;

console.log(HORAS_DIA * MINUTOS_HORA * SEGUNDOS_MINUTO);

/**
 * Realiza un programa que a partir de los valores ancho=2 y alto=5,

calcule el área de un rectángulo.
 */

var alto = 5;
var ancho = 2;

var area = alto * ancho;
console.log(`El area del rectangulo ${ancho}x${alto} es ${area}`);

/**
 * Hacer un conversor de grados centígrados a grados Fahrenheit.

Para ello deberé multiplicar por 9/5 y sumar 32.

Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.
 */

var centigrados = 20;

const FAHRENHEIT = {
  m: 9 / 5,
  s: 32,
};

console.log(
  `${centigrados}C es igual a ${centigrados * FAHRENHEIT.m + FAHRENHEIT.s}F`
);

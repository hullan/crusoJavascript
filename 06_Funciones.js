/**
 * Funciones
 */

//declarativa
// function name() {
//     //cuerpo de nuestra funcion
// }

function saludar() {
  console.log("Hola soy Ignacio");
}

saludar();

function saludar(nombre) {
  console.log(`Hola soy ${nombre}`);
}

saludar("Ignacio");

function saludar(nombre) {
  return `Hola soy ${nombre}`;
}

var saludo = saludar("Ignacio");
console.log(saludo);
console.log(saludar("Ignacio Garcia"));

//Expresion o anonimas
var suma = function (a, b) {
  return a + b;
};

console.log(suma(2, 2));

//Funciones flecha

var resta = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return "Solo puede restar numeros";
  }
};

console.log(resta(4, 2));

var multiplicar = (a, b) => a * b;

console.log(multiplicar(2, 2));

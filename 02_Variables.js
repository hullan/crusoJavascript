/**
 * Variables
 *
 * 3 formas de definir variables
 *
 * var
 * let
 * const
 *
 */

// Variables con VAR
var nombre = "Ignacio"; // x = 2
console.log(nombre);

var edad = 37;
console.log(edad);

var persona = {
  nombre: "Ignacio",
  apellido: "Garcia",
  edad: 37,
  direccion: {
    calle: "Salomon y la reina de saba",
    numeroDeCasa: 34,
  },
  ciudadesVisitadas: ["Zaragoza", "Huesca", "Teruel"],
};

var ciudad;
ciudad = "Zaragoza";
ciudad = "Huesca";
ciudad = 12;
console.log(ciudad);

//Variables con let
let nombre = "Ignacio";
console.log(nombre);

{
  let saludo = "Hola soy Ignacio";
  console.log(saludo);
}
console.log(saludo);

{
  var saludo = "Hola soy Ignacio";
  console.log(saludo);
}
console.log(saludo);

//Variables con CONST
const PI = 3.14;
//PI = 3.141592;
console.log(PI);

var nombre = "Ignacio";
var saludo = `Hola soy ${nombre}

Como estas?`;
console.log(saludo);

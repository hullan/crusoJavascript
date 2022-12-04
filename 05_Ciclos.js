/**
 * Ciclos
 */

//While
var contador = 0;
while (contador <= 5) {
  console.log("Hola mundo!");
  contador += 1;
}

//Do While
var contador = 11;
do {
  console.log("Hola mundo!!");
  contador += 1;
} while (contador <= 10);

// For

// for (expresionInicial; expresionCondicional; expresionDeActualizacion) {

// }

for (let i = 0; i < 5; i++) {
  console.log("Hola mundo !!");
}

//For in

// for (variable operadorIN objeto){
//     //Instrucciones
// }

var persona = {
  nombre: "Ignacio",
  apellido: "Garcia",
  edad: 37,
};

for (let clave in persona) {
  console.log(clave, persona[clave]);
}

//For of

var arreglo = [1, 2, 3, 4, 5];
var nombre = "Ignacio";
for (let valor of nombre) {
  console.log(valor);
}

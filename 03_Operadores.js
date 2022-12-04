/**
 * Operadores
 */

/**
 * Operadores de asignación
 */

//Operador de asgiancion

var x = 2;
var y = true;

//Operador de asgianacion de adición
var x = 2;
var y = 1;

x += y;
console.log(x);

//Operador de asignaciono de resta
var x = 1;
var y = 2;

x -= y;
console.log(x);

//Operador de asignacion de multiplicación
var x = 1;
var y = 2;

x *= y;
console.log(x);

//Operador de asignacion de division
var x = 1;
var y = 2;

x /= y;
console.log(x);

//Operador de asignacion de modulo
var x = 1;
var y = 2;

x %= y;
console.log(x);

//Operador de asignacion de exponente
var x = 2;
var y = 3;

x **= y;
console.log(x);

/**
 * Operadores de comparacion
 */

//Operador igual

console.log(3 == 3);
console.log(3 == "3");

//Operador no es igual
console.log(3 != 3);

//Operador estrictamente igual
console.log(3 === 3);
console.log(3 === "3");

//Operador no es igual estricta
console.log(3 !== 3);
console.log(3 !== "3");

//Operadores > >= < <=
console.log(3 > 4);
console.log(3 <= 3);
console.log(2 >= 2);
console.log(2 > 2);

/**
 * Operadores aritmeticos
 *
 * + - * / % **
 */

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

//Operadores de incremento
var numero = 0;
console.log(++numero);
console.log(numero++);
console.log(numero);

//Operador de decremento
var numero = 3;
console.log(--numero);
console.log(numero--);
console.log(numero);

/**
 * operadores logicos
 */

// AND
console.log(true && true);
console.log(2 > 3 && 1 <= 2);

//OR
console.log(true || false);
console.log(false || false);

//NOT
console.log(!false);
console.log(!true);

//Operador de cadena o concatenacion
var nombre = "Ignacio";
var apellido = "Garcia";
var nombresCompletos = nombre + " " + apellido;
console.log(nombresCompletos);

//Operador condicional
console.log(2 > 3 ? "El numero es mayor" : "Es menor");

//Operador de desestruturacion

var persona = { nombre: "Ignacio", apellido: "Garcia" };

var { nombre: xyz, apellido } = persona;

console.log(xyz);
console.log(apellido);
console.log(persona);

// Operador de desestruturacion array

var arreglo = [1, 2, 3, 4, 5];

var [primeraPosicion, dos] = arreglo;

console.log(primeraPosicion);
console.log(dos);

/**
 * Operador de miembro o acceso de propiedad
 */

//Notacion punto
var persona = { nombre: "Ignacio", apellido: "Garcia" };

console.log(persona.nombre);
console.log(persona.apellido);

//Notacion por corchetes
var persona = { nombre: "Ignacio", apellido: "Garcia" };

console.log(persona["nombre"]);

//Notacion por corchetes en array
var arreglo = [1, 2, 3, 4, 5];
console.log(arreglo[3]);

//Operacion de determinaciono de tipo

console.log(typeof "Ignacio");
console.log(typeof 5);
console.log(typeof true);

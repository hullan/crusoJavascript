/**
 * Manipulacion arreglos
 */

//ForEach
var letras = ["a", "b", "c", "d", "e"];

// console.log(letras.length);

// for (let i = 0; i < letras.length; i++) {
//   const element = letras[i];
//   console.log(element);
// }
letras.forEach((elemento) => console.log(elemento));

//push (añade un elemento) - shift (obtiene el primer elemento y lo elimina) - pop (obtiene el ultimo elemento y lo elimina)
var letras = ["a", "b", "c", "d", "e"];
letras.push("f");
console.log(letras);
var primerElemento = letras.shift();
console.log(letras);
console.log(primerElemento);
var ultiomoElemento = letras.pop();
console.log(letras);
console.log(ultiomoElemento);

// map
var estudiantes = ["Pepe", "Carlos", "Juan"];
// var asistencia = estudiantes.map((nombre) => {
//   return {
//     nombre: nombre,
//     asistencia: false,
//   };
// });

var asistencia = estudiantes.map((nombre) => `${nombre}.`);
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

var productos = [
  { nombre: "Zapatillas", precio: 15 },
  { nombre: "Camisetas", precio: 20 },
  { nombre: "pantalon", precio: 25 },
];

var productosImpuestos = productos.map((producto) => {
  return {
    ...producto,
    impuesto: 12,
  };
});

var precios = productos.map((producto) => producto.precio);

console.log(productos);
console.log(productosImpuestos);
console.log(precios);

//Filter

var estudiantes = [
  { nombre: "Pepe", edad: 20, matriculado: true },
  { nombre: "Juan", edad: 19, matriculado: true },
  { nombre: "Carlos", edad: 22, matriculado: false },
  { nombre: "Antonio", edad: 30, matriculado: false },
];

var filtrado = estudiantes.filter(
  (estudiante) => (estudiante.edad >= 21) & estudiante.matriculado
);

console.log(estudiantes);
console.log(filtrado);

//reduce
var calificaciones = [3, 5, 9, 10, 10];
var suma = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  0
);

console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];

//salida
// {
//     21: 3,
//     43, 2

// }

var resultado = edades.reduce((acumulador, edad) => {
  if (!acumulador[edad]) {
    acumulador[edad] = 1;
  } else {
    acumulador[edad] += 1;
  }
  return acumulador;
}, {});

console.log(edades);
console.log(resultado);

var ventas = [
  { nombre: "camiseta", precio: 12, totalVendido: 10 },
  { nombre: "zapatillas", precio: 150, totalVendido: 8 },
  { nombre: "pantalon", precio: 20, totalVendido: 30 },
];

var resultado = ventas.reduce((acumulador, producto) => {
  let totalVentas = producto.precio * producto.totalVendido;
  acumulador[producto.nombre] = totalVentas;
  return acumulador;
}, {});

console.log(ventas);
console.log(resultado);

var estudiantes = [
  { nombre: "Pepe", edad: 20, matriculado: true },
  { nombre: "Juan", edad: 19, matriculado: true },
  { nombre: "Carlos", edad: 22, matriculado: false },
  { nombre: "Antonio", edad: 30, matriculado: false },
];

var resultado = estudiantes
  .map((estudiante) => estudiante.matriculado)
  .reduce(
    (acumulador, item) => {
      if (item) {
        acumulador.matriculado += 1;
      } else {
        acumulador.noMatriculado += 1;
      }
      return acumulador;
    },
    { matriculado: 0, noMatriculado: 0 }
  );
console.log(estudiantes);
console.log(resultado);

//some
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultado = numeros.some((numero) => numero % 2 === 0);
console.log(resultado);

var numeros = [1, 3, 5, 7, 9];
var resultado = numeros.some((numero) => numero % 2 === 0);
console.log(resultado);

//every

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultado = numeros.every((numero) => numero % 2 === 0);
console.log(resultado);

var numeros = [2, 4, 6, 8, 10];
var resultado = numeros.every((numero) => numero % 2 === 0);
console.log(resultado);

//find
var clientes = [
  { id: 1, nombre: "Pepe" },
  { id: 2, nombre: "Juan" },
  { id: 3, nombre: "Carlos" },
  { id: 4, nombre: "Oscar" },
  { id: 5, nombre: "Alberto" },
];

var cliente = clientes.find((cliente) => cliente.id === 1);
console.log(clientes);
console.log(cliente);

//findIndex
var clientes = [
  { id: 1, nombre: "Pepe" },
  { id: 2, nombre: "Juan" },
  { id: 3, nombre: "Carlos" },
  { id: 4, nombre: "Oscar" },
  { id: 5, nombre: "Alberto" },
];

var posicion = clientes.findIndex((cliente) => cliente.id === 2);
console.log(posicion);
console.log(clientes[posicion]);

//includes
var mascotas = ["perro", "gato", "conejo"];
var resultado = mascotas.includes("perro");
console.log(resultado);
console.log("Ignacio".includes("I"));

var buscador = (parametro) => {
  let clientes = [
    { id: 1, nombre: "Pepe" },
    { id: 2, nombre: "Juan" },
    { id: 3, nombre: "Carlos" },
    { id: 4, nombre: "Oscar" },
    { id: 5, nombre: "Alberto" },
  ];

  return clientes.filter((cliente) => cliente.nombre.includes(parametro));
};

console.log(buscador("a"));

//Join
var elementos = ["aire", "fuego", "agua", "tierra"];
var resultado = elementos.join("--");
console.log(resultado);

var clientes = [
  { id: 1, nombre: "Pepe" },
  { id: 2, nombre: "Juan" },
  { id: 3, nombre: "Carlos" },
  { id: 4, nombre: "Oscar" },
  { id: 5, nombre: "Alberto" },
];

// console.log(clientes.join());

var csvGenerator = (array, separador = ",") => {
  let header = Object.keys(array[0]).join(separador);
  let data = array.map((elemento) => Object.values(elemento).join(separador));
  console.log(header);
  data.forEach((elemento) => console.log(elemento));
};

csvGenerator(clientes, ";");

console.log(Object.values({ id: 1, nombre: "Pepe" }));
console.log(Object.keys({ id: 1, nombre: "Pepe" }));

//concat
var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 0];
var array3 = array1.concat(array2);
var array4 = [...array1, ...array2];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

//Short
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array1.sort());

var meses = ["Dic", "Ene", "Mar", "Feb"];
console.log(meses.sort());

var array = [1, 10000, 21, 30, 4];
var ordenado = array.sort((a, b) => a - b);
console.log(ordenado);

// splice
var nombres = ["Pepe", "Juan", "Angel"];
nombres.splice(1, 5, "Maria", "Marta");
console.log(nombres);

//slice
var nombres = ["Pepe", "Juan", "Angel"];
var resultado = nombres.slice(1, 5);
console.log(resultado);
console.log(nombres);

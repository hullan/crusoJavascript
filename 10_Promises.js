/**
 * Promises
 */

// const getData1 = () => {
//   return new Promise((resolve, reject) => {});
// };

const getData3 = () => new Promise((resolve, reject) => {});

// const getData2 = new Promise((resolve, reject) => {});

const getData1 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Ignacio",
          apellido: "Garcia",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos");
    }
  });

console.log("inicio");
getData1(false)
  .then((data) => {
    console.log(data);
    return getData2(true);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
console.log("Fin");

const getData2 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Pepe",
          apellido: "Perez",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos 2");
    }
  });

// async await
const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Ignacio",
          apellido: "Garcia",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos");
    }
  });

const main = async () => {
  try {
    let resultado = await getData(false);
    let resultado2 = await getData2(true);
    console.log(resultado);
    console.log(resultado2);
  } catch (error) {
    console.log(error);
  }
};

main();

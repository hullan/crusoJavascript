const axios = require("axios");

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;
  let personajes = results.map((character) => {
    return { id: character.id, name: character.name };
  });
  console.log(personajes);
};

main();

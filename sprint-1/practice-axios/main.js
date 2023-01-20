import { getData } from "./helper/getData.js";

const containerCards = document.getElementById("containerCards");

const URL_API = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async (url, searchTerm = "") => {
  const listPokemons = [];
  const response = await axios.get(url);
  const pokemons = searchTerm
    ? response.data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : response.data.results;
  console.log(pokemons);
  pokemons.forEach(async (pokemom, index) => {
    const dataPokemon = await axios.get(pokemom.url);
    const newPokemon = {
      name: pokemom.name,
      image: dataPokemon.data.sprites.front_default,
      weight: dataPokemon.data.weight,
      height: dataPokemon.data.height,
      experience: dataPokemon.data.base_experience,
      abilities: dataPokemon.data.abilities,
    };
    listPokemons.push(newPokemon);
    if (index + 1 === pokemons.length) {
      console.log(listPokemons);
      renderPokemons(listPokemons);
    }
  });
  // for (const pokemom of response.data.results) {
  //     const dataPokemon = await axios.get(pokemom.url);
  //     const newPokemon = {
  //         name: pokemom.name,
  //         image: dataPokemon.data.sprites.front_default,
  //         weight: dataPokemon.data.weight,
  //         height: dataPokemon.data.height,
  //         experience: dataPokemon.data.base_experience,
  //         abilities: dataPokemon.data.abilities
  //     }
  //     listPokemons.push(newPokemon)
  // }
  // console.log(listPokemons);
  // renderPokemons(listPokemons)
};

getPokemons(URL_API);

const renderPokemons = (arrayPokemons) => {
  containerCards.innerHTML = "";
  arrayPokemons.forEach((pokemom) => {
    containerCards.innerHTML += `
        <section class="card">
            <p class="card__title">${pokemom.name}</p>
            <figure>
                <img src="${pokemom.image}" alt="Ditto" class="card__image">
            </figure>
            <p class="card__info">Peso: ${pokemom.weight}</p>
            <p class="card__info">Altura: ${pokemom.height}</p>
            <p class="card__info">Experiencia: ${pokemom.experience}</p>
            <p class="card__info">Habilidades:
            ${renderAbilities(pokemom.abilities)}
            </p>
        </section>
        `;
  });
};

const renderAbilities = (arrayAbilities) => {
  let abilitiesList = "";
  arrayAbilities.forEach((ability) => {
    abilitiesList += `
        <span class="card__abilities">${ability.ability.name}</span>
        `;
  });
  return abilitiesList;
};

const renderPokemon = (pokemom) => {
  containerCards.innerHTML = `
        <section class="card">
            <p class="card__title">${pokemom.name}</p>
            <figure>
                <img src="${
                  pokemom.sprites.front_default
                }" alt="Ditto" class="card__image">
            </figure>
            <p class="card__info">Peso: ${pokemom.weight}</p>
            <p class="card__info">Altura: ${pokemom.height}</p>
            <p class="card__info">Experiencia: ${pokemom.base_experience}</p>
            <p class="card__info">Habilidades:
            ${renderAbilities(pokemom.abilities)}
            </p>
        </section>
        `;
};

//-----------Funcionalidades para la búqueda de pokemons por nombre------

//Cuando empleamos el método document.querySelector() y vamos a capurar el elemento por: 1. id: (#nombreID) 2. class: (.nombreClase) 3. elemento o etiqueta: (nombreDeLaEtiqueta).

const search = document.querySelector(".form__search");

search.addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputSearch = document.querySelector("#inputSearch");
  //Los valores que JavaScript reconoce como false son: undefined, null, 0, '' (strig vacío), NaN.
  const searchTerm = inputSearch.value;
  if (searchTerm) {
    console.log(searchTerm);
    console.log(typeof searchTerm);

    // const searchURL = `${URL_API}/${searchTerm}`;
    // const pokemon = await getData(searchURL);
    // console.log(pokemon);
    // if (pokemon) {
    //   renderPokemon(pokemon);
    // }
    getPokemons(URL_API, searchTerm);
  }
});

const containerCards = document.getElementById('containerCards');

const URL_API = 'https://pokeapi.co/api/v2/pokemon';

const listPokemons = [];

const getPokemons = async () => {
    const response = await axios.get(URL_API);
    console.log(response.data.results)
    response.data.results.forEach(async (element, index) => {
        const dataPokemon = await axios.get(element.url);
        const newPokemon = {
            name: element.name,
            image: dataPokemon.data.sprites.front_default,
            weight: dataPokemon.data.weight,
            height: dataPokemon.data.height,
            experience: dataPokemon.data.base_experience,
            abilities: dataPokemon.data.abilities
        }
        listPokemons.push(newPokemon)
        if ((index + 1) === response.data.results.length) {
            console.log(listPokemons)
            renderPokemons(listPokemons)
        }
    })
    // for (const element of response.data.results) {
    //     const dataPokemon = await axios.get(element.url);
    //     const newPokemon = {
    //         name: element.name,
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
}

getPokemons();

const renderPokemons = (arrayPokemons) => {
    containerCards.innerHTML = '';
    arrayPokemons.forEach((element) => {
        containerCards.innerHTML += `
        <section class="card">
            <p class="card__title">${element.name}</p>
            <figure>
                <img src="${element.image}" alt="Ditto" class="card__image">
            </figure>
            <p class="card__info">Peso: ${element.weight}</p>
            <p class="card__info">Altura: ${element.height}</p>
            <p class="card__info">Experiencia: ${element.experience}</p>
            <p class="card__info">Habilidades:
            ${renderAbilities(element.abilities)}
            </p>
        </section>
        `
    })
}


const renderAbilities = (arrayAbilities) => {
    let abilitiesList = '';
    arrayAbilities.forEach(ability => {
        abilitiesList += `
        <span class="card__abilities">${ability.ability.name}</span>
        `
    });
    return abilitiesList;
}

//-----------Funcionalidades para la búqueda de pokemons por nombre------

//Cuando empleamos el método document.querySelector() y vamos a capurar el elemento por: 1. id: (#nombreID) 2. class: (.nombreClase) 3. elemento o etiqueta: (nombreDeLaEtiqueta).

const search = document.querySelector('.form__search');

search.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputSearch = document.querySelector("#inputSearch");
    //Los valores que JavaScript reconoce como false son: undefined, null, 0, '' (strig vacío), NaN.
    if (inputSearch.value) {
        console.log(inputSearch.value);
        console.log(typeof inputSearch.value);
    }
});
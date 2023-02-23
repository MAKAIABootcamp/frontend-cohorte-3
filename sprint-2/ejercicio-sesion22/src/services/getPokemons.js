import axios from "axios";

const URL_API = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async () => {
    try {
        const { data } = await axios.get(URL_API);
        const pokemons=[]
        for (const pokemon of data.results) {
            const url = pokemon.url
            const response = await axios.get(url);
            pokemons.push(response.data);
        }
        return pokemons;
    } catch (error) {
        console.log(error);
        return[]
    }
}

export default getPokemons;
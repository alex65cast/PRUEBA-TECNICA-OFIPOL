import axios from "axios";

const urlApi = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = async()=>{
    const data = await axios.get(`${urlApi}`);
    const pokemons = await infoPokemon(data.data.results)
    return pokemons
}

export const getPokemonName = async(name)=>{
    const data = await axios.get(`${urlApi}/${name}`);

    return [data.data]
}

const infoPokemon = async (dataPoke) => {
    const pokemonArray = []
    for (let i = 0; i < dataPoke.length; i++) {
        const pokemonDetail = await axios.get(dataPoke[i].url)
        pokemonArray.push(pokemonDetail.data)
    }
    return pokemonArray;
  }

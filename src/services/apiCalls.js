import axios from "axios";

const urlApi = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemon = async()=>{
    return await axios.get(`${urlApi}`);
}
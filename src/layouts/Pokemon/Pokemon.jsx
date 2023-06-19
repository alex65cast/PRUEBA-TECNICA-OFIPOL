import React, { useEffect, useState } from 'react'
import { getPokemon } from '../../services/apiCalls'
import "./Pokemon.css"

export const Pokemon =()=> {
  const [dataPokemon, setDataPokemon] = useState([]);

    useEffect(()=>{
        getPokemon()
        .then((pokeData)=>{
            setDataPokemon(pokeData.data.results);
            console.log(dataPokemon,"Soy pokedata")
        })
        .catch((error)=>console.log(error))
    },[])

  return (
    <div className='pokemonDesing'>
        Pokemon
    </div>
  )
}

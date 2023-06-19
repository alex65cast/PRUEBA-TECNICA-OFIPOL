import React, { useEffect, useState } from 'react';
import { getPokemon, getPokemonName } from '../../services/apiCalls';
import "./Pokemon.css";
import Card from "react-bootstrap/Card";

export const Pokemon = () => {
  const [dataPokemon, setDataPokemon] = useState([]);

  useEffect(() => {
    getPokemon()
      .then((pokeData) => {
        setDataPokemon(pokeData);
        console.log(pokeData, "Soy pokedata");
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='pokemonDesing'>
      <div className='cardGrid'>
        {dataPokemon.map((pokemons) => (
          <div className="cardColumn" key={pokemons.id}>
            <Card className="desingCardPoke">
              <Card.Img variant="top" src={pokemons.sprites.front_default} />
              <Card.Body>
                <Card.Title>Name: {pokemons.name}</Card.Title>
                {pokemons.types.map((typ) => (
                  <Card.Title key={typ.type.name}>Type: {typ.type.name}</Card.Title>
                ))}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

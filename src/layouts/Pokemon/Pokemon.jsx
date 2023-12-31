import React, { useEffect, useState } from "react";
import { getPokemon, getPokemonName } from "../../services/apiCalls";
import "./Pokemon.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCharacter } from "../detailSlice";
import { useNavigate } from "react-router-dom";
import logoPokeball from "../../../public/pokeball.png"

export const Pokemon = () => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [bringPokemon, setBringPokemon] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setBringPokemon(e.target.value);
  };

  const selectedPokemon = (poke) =>{
    console.log(poke,"Pokemon escogido");
    dispatch(addCharacter(poke));
    navigate("/detailPokemon")
  }

  useEffect(() => {
    getPokemon()
      .then((pokeData) => {
        setDataPokemon(pokeData);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (bringPokemon !== "") {
      getPokemonName(bringPokemon)
        .then((pokeData) => {
          setDataPokemon(pokeData);
        })
        .catch((error) => console.log(error));
    } else {
      getPokemon()
        .then((pokeData) => {
          setDataPokemon(pokeData);
        })
        .catch((error) => console.log(error));
    }
  }, [bringPokemon]);

  return (
    <div className="pokemonDesing">
      <Container fluid="t" className="topCol mb-3 justify-content-center">
        <Row>
          <Col>
            <input
              className="buttonDesign"
              type="text"
              name="bringPokemon"
              placeholder="Search pokemon.."
              onChange={(e) => inputHandler(e)}
            />
            <img
                className="buscarIcon"
                src={logoPokeball}
                alt="buscarImagen"
              ></img>
          </Col>
        </Row>
      </Container>
      <div className="cardGrid">
        {dataPokemon.map((pokemons) => (
          <div className="cardColumn" key={pokemons.id} onClick={()=>selectedPokemon(pokemons)}>
            <Card className="desingCardPoke">
              <Card.Img variant="top" src={pokemons.sprites.front_default} />
              <Card.Body>
                <Card.Title>Name: {pokemons.name}</Card.Title>
                <Card.Title>Type: </Card.Title>
                {pokemons.types.map((typ) => (
                  <p key={typ.type.name}>
                    -{typ.type.name}
                  </p>
                ))}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

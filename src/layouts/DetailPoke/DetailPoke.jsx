import React, { useEffect, useState } from "react";
import "./DetailPoke.css";
import { useSelector } from "react-redux";
import { detailData } from "../detailSlice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { getMeal } from "../../services/apiCalls";

export const DetailPoke = () => {
  const detailPokeRdx = useSelector(detailData);
  const [bringMeal, setBringMeal] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    console.log(bringMeal,"SJSJSJSJSJ");
  }, []);

  useEffect(()=>{
    getMeal()
    .then((result)=>{
        console.log(result,"COMIDA")
        setBringMeal(result)
    })
    .catch((error)=>{console.log(error)})
  }, [])
  return (
    <div className="desingDetail">
      <Card className="cardPoke">
        <Card.Header as="h4">{detailPokeRdx.name}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={detailPokeRdx.sprites.front_default} />
          
          <Card.Title>Detail Pokemon {detailPokeRdx.name}</Card.Title>
          <br></br>
          <Card.Title>Abilities:</Card.Title>
          {detailPokeRdx.abilities.map((abi) => (
                  <Card.Text key={abi.ability.name}>
                    -{abi.ability.name}
                  </Card.Text>
                ))}
            <Card.Title> Type: </Card.Title>
          {detailPokeRdx.types.map((typ) => (
                  <Card.Text key={typ.type.name}>
                   -{typ.type.name}
                  </Card.Text>
            ))}
          <Card.Title>Best Moves:</Card.Title>
          <Card.Text>-{detailPokeRdx.moves[1].move.name}</Card.Text>
          <Card.Text>-{detailPokeRdx.moves[2].move.name}</Card.Text>
          <Card.Text>-{detailPokeRdx.moves[4].move.name}</Card.Text>
          <Card.Text>-{detailPokeRdx.moves[5].move.name}</Card.Text>

          <Card.Header as="h4">Foot recomended</Card.Header>
          <br></br>
          <Card.Img variant="top" src={bringMeal.strMealThumb} />
          <br></br>
          <br></br>
          <Card.Title>{bringMeal.strMeal}</Card.Title>
          <br></br>
          <Card.Title>Ingredients:</Card.Title>
          <Card.Text>-{bringMeal.strIngredient1}</Card.Text>
          <Card.Text>-{bringMeal.strIngredient2}</Card.Text>
          <Card.Text>-{bringMeal.strIngredient3}</Card.Text>
          <Card.Text>-{bringMeal.strIngredient4}</Card.Text>
          <Card.Text>-{bringMeal.strIngredient5}</Card.Text>
          <Card.Text>-{bringMeal.strIngredient6}</Card.Text>
          <Card.Text>-{bringMeal.strIngredient7}</Card.Text>

          <Card.Title>Instructions: </Card.Title>
          <Card.Text>{bringMeal.strInstructions}</Card.Text>
          <Card.Header as="h4"></Card.Header>
          <br></br>
          <Button variant="primary" onClick={()=>{navigate("/pokemon")}}>Go back</Button>
        </Card.Body>
      </Card>
      
    </div>
  );
};

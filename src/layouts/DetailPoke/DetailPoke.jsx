import React, { useEffect } from "react";
import "./DetailPoke.css";
import { useSelector } from "react-redux";
import { detailData } from "../detailSlice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const DetailPoke = () => {
  const detailPokeRdx = useSelector(detailData);

  useEffect(() => {
    console.log(detailPokeRdx);
  }, []);
  return (
    <div className="desingDetail">
      <Card>
        <Card.Header as="h5">{detailPokeRdx.name}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={detailPokeRdx.sprites.front_default} />
          
          <Card.Title>Detail Pokemon {detailPokeRdx.name}</Card.Title>
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
          <Card.Text>-{detailPokeRdx.moves[21].move.name}</Card.Text>
          <Card.Text>-{detailPokeRdx.moves[90].move.name}</Card.Text>
          <Card.Text>-{detailPokeRdx.moves[84].move.name}</Card.Text>

          <Button variant="primary">Go back</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

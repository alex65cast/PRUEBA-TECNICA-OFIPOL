import React from "react";
import "./Home.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
      navigate('/pokemon');
  };
  
  return (
    <>
      <div className="homeDiv">
        <img src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png" alt="Logo"></img>
        <br></br>
        <Button variant="primary" size="lg" className="buttonHome" onClick={handleStartClick}>
          Go Master!
        </Button>{' '}
      </div>
    </>
  );
};

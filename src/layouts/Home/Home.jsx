import React from "react";
import "./Home.css";
import Button from 'react-bootstrap/Button';

export const Home = () => {
  return (
    <>
      <div className="homeDiv">
        <img src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png" alt="Logo"></img>
        <br></br>
        <Button variant="primary" size="lg" className="buttonHome">
          Go Master!
        </Button>{' '}
      </div>
    </>
  );
};

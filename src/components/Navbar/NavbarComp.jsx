import React from 'react';
import './NavbarComp.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoApi from '../../../public/pokeapi.png';

export const NavbarComp = () => {
  const navigate = useNavigate();

  return (
    <div className="headerDesing">
      <Navbar className="mb-3 desingContainer link" onClick={() => navigate('/')}>
        <Container fluid>
          <img src={logoApi} alt="logoApi" />
        </Container>
      </Navbar>
    </div>
  );
};

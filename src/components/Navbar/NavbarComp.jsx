import React from 'react'
import "./NavbarComp.css"
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const NavbarComp = () => {
    const navigate = useNavigate()
  return (
<>
<div className='headerDesing'>
    {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3 desingContainer">
          <Container fluid>
            <Navbar className='link'>POKE API</Navbar>
          </Container>
        </Navbar>
      ))}
</div>
</>
    )
}

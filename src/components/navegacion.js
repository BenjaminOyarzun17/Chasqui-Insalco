import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,Form, NavDropdown, FormControl, Button} from 'react-bootstrap';

export default function Navegacion(){
      return (
        <>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Chasqui</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link ><Link className='linkNavegacion' to='/'> Inicio</Link>  </Nav.Link>
      <Nav.Link ><Link className='linkNavegacion'to='/dashboard'> Pymes</Link></Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        
        
       
      </>
      )
    }
  


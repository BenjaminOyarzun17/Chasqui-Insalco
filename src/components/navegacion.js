import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,Form, NavDropdown, FormControl, Button} from 'react-bootstrap';
import logoNav from '../images/navLogo.jpeg';
export default function Navegacion(){
      return (
        <>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logoNav}
        width="30px"
        height="30px"
        className="d-inline-block align-top"
        style={{marginLeft:"10px"}}
      />{' '}
      Chasqui
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link ><Link className='linkNavegacion' to='/'> Inicio</Link>  </Nav.Link>
            <Nav.Link ><Link className='linkNavegacion'to='/login'> Iniciar Sesión</Link></Nav.Link>
            <Nav.Link ><Link className='linkNavegacion'to='/dashboard'> Pymes</Link></Nav.Link>
            <Nav.Link ><Link className='linkNavegacion'to='/about'> Sobre nosotros</Link></Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
  </Navbar>    

        
        
        
       
      </>
      )
    }
  


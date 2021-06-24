import React from 'react';
import {Navbar, Nav, NavDropdown,Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Navegacion(){
      return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{marginLeft:'10px'}}>Chasqui</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link ><Link to='/'>Inicio</Link></Nav.Link>
            <Nav.Link ><Link to='/login'>Iniciar sesión</Link></Nav.Link>
            <Nav.Link ><Link to='/register'>Registrarse</Link></Nav.Link>
            <Nav.Link ><Link to='/pymes'>Pymes</Link></Nav.Link>
            <NavDropdown title="Otros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sobre Pyme Pyme</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contrata nuestros servicios</NavDropdown.Item>
              <NavDropdown.Divider />
             <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
      )
    }
  


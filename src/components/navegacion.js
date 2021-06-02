import React from 'react';
import {Navbar, Nav, NavDropdown,Form, FormControl, Button} from 'react-bootstrap';


class Navegacion extends React.Component {
    render() {
      return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Pyme Pyme</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Inicio</Nav.Link>
            <Nav.Link href="account">Mi cuenta</Nav.Link>
            <Nav.Link href="productos">Productos</Nav.Link>
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
  }

export default Navegacion;
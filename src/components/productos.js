import React from 'react';
import {Col, Row, Container, Card,Button} from 'react-bootstrap';
import Producto from './producto.js';

class Productos extends React.Component {
    constructor(){
      super();
    }
    

    render() {
      
      
      return (
      <Container>
        <h1>Productos</h1>
        <Container>
          <Row>
            <Col>
              <Producto/>
            
            </Col>
            <Col><Producto/></Col>
            <Col><Producto/></Col>
          </Row>
          <Row>
            <Col><Producto/></Col>
            <Col><Producto/></Col>
            <Col><Producto/></Col>
          </Row>
        </Container>
      </Container>
      
      
      
      )
    }
  }

export default Productos;
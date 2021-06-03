import React from 'react';
import {Col, Row, Container, Card,Button} from 'react-bootstrap';

class Pyme extends React.Component {
    constructor(){
      super();
    }
    

    render() { 
      return (
      
        
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{this.props.nombre}</Card.Title>
              <Card.Text>
                {this.props.descripcion}
              </Card.Text>
              <Card.Text>
                {this.props.direccion}
              </Card.Text>
              <Button variant="primary" href={this.props.link}>comprar aquí</Button>
            </Card.Body>
          </Card>
     
      
      
      
      )
    }
  }

export default Pyme;
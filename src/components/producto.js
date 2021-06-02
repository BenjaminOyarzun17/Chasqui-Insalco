import React from 'react';
import {Col, Row, Container, Card,Button} from 'react-bootstrap';

class Producto extends React.Component {
    constructor(){
      super();
    }
    

    render() { 
      return (
      
        
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
     
      
      
      
      )
    }
  }

export default Producto;
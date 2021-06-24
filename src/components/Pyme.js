import React from 'react';
import {Col, Row, Container, Card,Button} from 'react-bootstrap';



export default function Pyme(props){
      return (
      
        
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{props.nombre}</Card.Title>
              <Card.Text>
                {props.descripcion}
              </Card.Text>
              <Card.Text>
                {props.direccion}
              </Card.Text>
              <Button variant="primary" href={props.link}>comprar aquí</Button>
            </Card.Body>
          </Card>
     
      
      
      
      )
  }
  

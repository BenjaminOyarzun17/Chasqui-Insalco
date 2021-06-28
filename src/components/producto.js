import React from 'react';
import { Img, Card, Button } from 'react-bootstrap';

export default function Producto(props){
    


    return( 
    <Card className = "ContainerProducto">
          <Card.Img variant="top" src={props.imagen}/>
        <Card.Body>
            
            <Card.Title>{props.nombre}</Card.Title>
            <Card.Text>
            {props.descripcion}<br>
            </br>
            <h2>${props.precio}</h2>
            </Card.Text>
            <Button onClick= { props.agregarCarrito}  variant="primary">Agregar al carro</Button>
            
        </Card.Body>
    </Card>

    );



}
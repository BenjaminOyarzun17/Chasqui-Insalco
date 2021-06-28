import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Producto(props){
    


    return( 
    <Card className = "ContainerProducto">
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
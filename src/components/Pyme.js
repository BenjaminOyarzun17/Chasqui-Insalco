import React from 'react';
import { Container, Col, Row, Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



export default function Pyme(props){
      
    const laStr = 'dashboard/'+ props.nombre
  
    return (
      
        
        <Container className='ContainerModalDashboardPyme'>
        <Modal.Dialog>
            <Modal.Header >
                <Modal.Title>{props.nombre}</Modal.Title>
            </Modal.Header>

            <Modal.Body >
                <ul>
                    <li>Tipo: {props.tipo}</li>
                    <li>Despacho: {props.despacho}</li>
                    <li>Cercanía: {
                    props.ubicacion
                    }</li>
                    
                </ul>
                <img scr=""></img>
            </Modal.Body>

            <Modal.Footer>
                
                <Button variant="primary"><Link to={laStr}>Productos</Link></Button>
            </Modal.Footer> 
        </Modal.Dialog>
    </Container>
     
      
      
      
      )
  }
  

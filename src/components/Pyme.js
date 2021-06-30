import React from 'react';
import { Container, Col, Row, Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



export default function Pyme(props){
      
    const laStr = 'pymes/'+ props.nombre
    

    const revisarDespacho=(despacho)=>{
        if (despacho===true){
            return "sí";
        }else{
            return "no";
        }
    }

    return (
      
        <Col>
        <Container className='ContainerModalDashboardPyme'>
        <Modal.Dialog>
            <Modal.Header >
                <Modal.Title>{props.nombre}</Modal.Title>
            </Modal.Header>

            <Modal.Body >
                <Row>
                    <Col sm={6}>
                        <ul>
                            <li>Tipo: {props.tipo}</li>
                            <li>Despacho: {
                                revisarDespacho(props.despacho)
                            }
                            
                            </li>
                            <li>Reputación: {props.reputacion}</li>
                            <li>Cercanía: {
                            props.ubicacion
                            }</li>
                            
                        </ul>
                    </Col>
                    <Col>
                        <img className='ImagenPyme' src={props.imagen}></img>

                    </Col>
                </Row>
                
                
            </Modal.Body> 

            <Modal.Footer>
                
                <Button variant="primary"><Link style={{color:'white'}}to={laStr}>Productos</Link></Button>
            </Modal.Footer> 
        </Modal.Dialog>
    </Container>
    </Col>
      
      
      
      )
  }
  

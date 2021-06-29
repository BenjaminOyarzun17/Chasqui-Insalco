import React from 'react';
import { Container, Col, Row, Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



export default function PymeInicial(props){
      
    

    const revisarDespacho=(despacho)=>{
        if (despacho===true){
            return "con despacho";
        }else{
            return "sin despacho";
        }
    }

    return (
      
        
        <div className='ContainerModalDashboardPymeInicio'>
        <Modal.Dialog>
           

            <Modal.Body >
                <Row>
                <img className='ImagenPymeInicial' src={props.imagen}></img>
                </Row>
                <Row>
                <Container>
                <h3>{props.nombre}</h3>
                {props.tipo}
                <br></br>
                {revisarDespacho(props.despacho)}
                <br></br>
                {props.ubicacion}
                <br></br>
                </Container>
            
                </Row>
                
                
            </Modal.Body> 

            <Modal.Footer>
                
                <Button variant="primary"><Link style={{color:'white'}}to='/login'>Iniciar sesión para ver productos</Link></Button>
            </Modal.Footer> 
        </Modal.Dialog>
    </div>
    
      
      
      
      )
  }
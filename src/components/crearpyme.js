import React from 'react';
import {Col,Modal, Row, Button} from 'react-bootstrap';

import {Link} from 'react-router-dom';



export default function CrearPyme(){
    return (
        <div className='ContainerPyme'>
        <Row>
        <Col>
        <h1 style={{color:'white'}}>Planes disponibles</h1>
        <Modal.Dialog>
            <Modal.Header >
                <Modal.Title>Plan anual</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Costo primeros dos meses: <b>$0</b> </p>
                <p>Mensualidad posterior:</p>
            </Modal.Body>

            
        </Modal.Dialog>
        
        
        
        </Col>
        <Col xs={7}>
        
            
            <h1 style={{color:'white'}}>Abre tu Pyme al mundo: registra tu pyme</h1>
            
            <form action="#" method='POST'>
                <label for="nombre">Nombre de mi Pyme:</label>
                <input className = 'InputField' type = 'text' placeholder='nombre de tu pyme'  name = 'nombre' defaultValue=''/><br></br>
                <label for="password">Clave de mi cuenta:</label>
                <input className = 'InputField' type = 'password' placeholder='crea una clave' name='password' defaultValue=''/><br></br>
                <label for="tipo">Tipo de Pyme:</label>
                <input className = 'InputField' type = 'text' placeholder='tipo de pyme' name='tipo' defaultValue=''/><br></br>
                <label for="ubicacion">Dirección de mi Pyme:</label>
                <input className = 'InputField' type = 'text' placeholder='direccion de la pyme' name='ubicacion' defaultValue=''/><br></br>
                <label for="despacho">Posibilidad de despacho:</label>
                <input className = 'InputField' type = 'text' placeholder='posibilidad de despacho de productos' name='despacho' defaultValue=''/><br></br>
                <label for="imagen">Foto de perfil:</label>
                
                <input className = 'InputField' type = 'text' placeholder='perfil de la pyme' name='imagen' defaultValue=''/><br></br>
                <label for="historia">Historia de mi Pyme:</label>
                
                <input className = 'InputField' type = 'text' placeholder='historia' name='historia' defaultValue=''/><br></br>
                <label for="reputacion">Esta será tu reputación inicial:</label>
                
                <input className = 'InputField' type = 'text' placeholder='perfil de la pyme' name='reputacion' defaultValue='5'/><br></br>
                <label for="ahorro">Este será tu ahorro estimado inicial:</label>
                
                <input className = 'InputField' type = 'text' placeholder='perfil de la pyme' name='ahorro' defaultValue='0'/><br></br>
                <label for="telefono">Telefono de mi Pyme:</label>
                
                <input className = 'InputField' type = 'text' placeholder='teléfono' name='telefono' defaultValue=''/><br></br>

                
                <input style ={{marginLeft:'340px'}} className="btn btn-primary" type="submit" value="Pagar y Crear Pyme" />
                
            </form> 


        </Col>
        
        </Row>
        </div>

    )



}
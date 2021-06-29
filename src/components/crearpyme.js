import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';

import {Link} from 'react-router-dom';



export default function CrearPyme(){
    return (
        <div className='ContainerPyme'>
            
            <h1 style={{color:'white'}}>Crear una pyme</h1>
            
            <form action="#" method='POST'>
                <input className = 'InputField' type = 'text' placeholder='nombre de tu pyme'  name = 'nombre' defaultValue=''/><br></br>
                <input className = 'InputField' type = 'password' placeholder='crea una clave' name='password' defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='tipo de pyme' name='tipo' defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='direccion de la pyme' name='ubicacion' defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='posibilidad de despacho de productos' name='despacho' defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='perfil de la pyme' name='imagen' defaultValue=''/><br></br>

                
                <input type="submit" value="Crear" />
                
            </form> 


        </div>


    )



}
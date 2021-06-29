import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';

import {Link} from 'react-router-dom';


export default function PymeLogin(){


    
        return (
            <>
            <div className='ContainerPyme'>
                <Row>
                    <Col>
                    <h1 style ={{color:'white'}}>Iniciar Sesión como Pyme</h1>
                    <form action="#" method='POST'>
                        <input className = 'InputField' type = 'text' placeholder='ingresar usuario'  name = "nombre" defaultValue=''/><br></br>
                        <input className = 'InputField' type = 'password' placeholder='ingresar clave' name='password' defaultValue=''/><br></br>
                        <input type="submit" value="iniciar sesion"></input>
                        <button className='BotonLogin'><Link to='/crearpyme' style={{color:'white'}}>Registrarme</Link></button>
                    </form> 
                    </Col> 
                    <Col>
                        <div style ={{height:'1000px', width :'90%'}}  ></div>
                    </Col>
                </Row>


            
            </div>
            </>
        )

    }




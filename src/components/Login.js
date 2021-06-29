import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';



export default function UserLogin(){


    
        return (
            <>
            <div className='ContainerPyme'>
                <Row>
                    <Col>
                    <h1 style ={{color:'black'}}>Iniciar Sesión como usuario</h1>
                    <form action="#" method='POST'>
                        <input className = 'InputField' type = 'text' placeholder='ingresar usuario'  name = 'username' defaultValue=''/><br></br>
                        <input className = 'InputField' type = 'password' placeholder='ingresar clave' name='password' defaultValue=''/><br></br>
                        <button className='BotonLogin'><Link to='/pymes'  style={{color:'white'}}>Iniciar sesión</Link></button>
                        <button className='BotonLogin'><Link style={{color:'white'}}>Registrarme</Link></button>
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




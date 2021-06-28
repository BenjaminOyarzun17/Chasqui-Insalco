import React from 'react';
import {Col, Row} from 'react-bootstrap';



export default function Login(){


    
        return (
            <>
            <div className='ContainerPyme'>
                <Row>
                    <Col>
                    <h1 style ={{color:'white'}}>Iniciar Sesión</h1>
                    <form action="#" method='POST'>
                        <input className = 'InputField' type = 'text' placeholder='ingresar usuario'  name = 'username' defaultValue=''/><br></br>
                        <input className = 'InputField' type = 'password' placeholder='ingresar clave' name='password' defaultValue=''/><br></br>
                        <input className = 'InputField'type='submit' value="submit"/><br></br>
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




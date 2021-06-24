import React from 'react';
import {Form, Button,} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Registro(){

    
        return (
            <>
            <Container>
                <form action="#" method='POST'>
                    <label>Primer nombre:</label><br></br>
                    <input type = 'text' placeholder='ingresar primer nombre' name='username' defaultValue=''/><br></br>
                    
                    <label>Correo:</label><br></br>
                    <input type = 'email' placeholder='ingresar mail' name='email' defaultValue=''/><br></br>
                    <label>Clave:</label><br></br>
                    <input type = 'password' placeholder='ingresar clave' name = 'password' defaultValue=''/><br></br>
                    <Link to='/login'><input type='submit' value="Registrarme"/></Link>
                    
                </form> 
            </Container>
            </>
        )

    }




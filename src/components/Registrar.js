import React from 'react';
import {Form, Button,} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

class Registro extends React.Component{


    render(){
        return (
            <>
            <Container>
                <form action="#" method='POST'>
                    <label>Primer nombre:</label><br></br>
                    <input type = 'text' placeholder='ingresar primer nombre' name='name' defauemailltValue=''/><br></br>
                    <label>Primer apellido:</label><br></br>
                    <input type = 'text' placeholder='ingresar primer apellido' name='lastName' defauemailltValue=''/><br></br>
                    <label>Correo:</label><br></br>
                    <input type = 'email' placeholder='ingresar mail' name='email' defaultValue=''/><br></br>
                    <label>Clave:</label><br></br>
                    <input type = 'password' placeholder='ingresar clave' name = 'password' defaultValue=''/><br></br>
                    <label>Direccion:</label><br></br>
                    <input type = 'text' placeholder='ingresar direccion' name= 'direccion' defaultValue=''/><br></br>
                    <input type='submit' value="Registrarme"/>
                </form> 
            </Container>
            </>
        )

    }

}

export default Registro;
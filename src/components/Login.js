import React from 'react';
import {Form, Button,} from 'react-bootstrap';


class Login extends React.Component{


    render(){
        return (
            <>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar email" />
                    <Form.Text className="text-muted">
                        Tú correo no será compartido con nadie más
                    </Form.Text>
                    </Form.Group>
                
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordar mi contraseña" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Iniciar sesión
                    </Button>
                </Form>
            
            </>
        )

    }

}

export default Login;
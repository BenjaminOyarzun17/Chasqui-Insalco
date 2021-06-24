import React, { useState, useEffect } from 'react';
import './App.css';

import { Container, Col, Row,Image, Modal, Button} from 'react-bootstrap';



function App() {
  const [currentTime, setCurrentTime] = useState(0);

  

  return (
    <div className="principal">
      <Container className="principal">
      
                <Row>
                  <Col>
                    <Image style={{width:'80%', height:'auto',  borderRadius: "50%"}} src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Chasqui3.JPG'></Image>
                  </Col>
                  <Col xs={8}>
                    <h1>
                      Bienvenido a Chasqui
                    </h1>
                    
                    <p style={{textAlign:'justify'}}>
                    Chasqui es un emprendimiento al servicio de las pymes, que busca contactarla con clientes, para que estos al mismo tiempo puedan tener acceso facilitado a productos de mejor calidad y más baratos.
                    </p>
                    <Row>
                      <Col>
                        <div className='DivCircular'>
                          Barato
                        </div>
                      </Col>
                      <Col>
                        <div className='DivCircular'>
                         De Barrio
                        </div>
                      </Col>
                      <Col>
                        <div className='DivCircular'>
                         Conveniente
                        </div>
                      </Col>
                    </Row>
                    <Container>
                    <Button>Crear Cuenta</Button>
                    
                    <Button>Ser un Chasqui</Button>
                    
                    
                    </Container>
                  </Col>
                </Row>
                
                
                
               
                
            
      </Container>
      
      
     
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';

import { Container, Col, Row,Image, Modal, Button} from 'react-bootstrap';



function App() {
  const [currentTime, setCurrentTime] = useState(0);

  

  return (
    <div className="principal">
      <Container style={{paddingTop:'60px'}}>
      
                <Row>
                  <Col>
                    <Image className='ImgPerfilChasqui' src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Chasqui3.JPG'></Image>
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
                          <h2 id='fontTitulo'>Barato</h2>
                          
                        </div>
                      </Col>
                      <Col>
                        <div className='DivCircular'>
                        <h2 id='fontTitulo'>De Barrio</h2>
                         
                        </div>
                      </Col>
                      <Col>
                        <div className='DivCircular'>
                          <h2 id='fontTitulo'>Conveniente</h2>
                        </div>
                      </Col>
                    </Row>
                    <Container>
                    <Container className='ContainerMainBotones'>
                    
                      <Row>
                        <Col>
                        <Button className='BtnPrincipal'>Crear Cuenta</Button>

                        </Col>
                        <Col>
                        <Button className='BtnPrincipal'>Ser un Chasqui</Button>
                        </Col>
                      </Row>
                    </Container>
                    
                    
                    
                    
                    </Container>
                  </Col>
                </Row>
                
                
                
               
                
            
      </Container>
      
      
     
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import foto from './images/navLogo.jpeg'
import { Container, Col, Row,Image, Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



function App() {

  

  return (
    <div className="ContainerPyme">
      <Container  style={{paddingTop:'10px'}}>
      
                <Row>
                  <Col id="colIzqInicio">
                    <Image className='ImgPerfilChasqui' src={foto}></Image>

                    <Container className='ContainerMainBotones'>
                    
                    
                      
                      <Button className='BtnPrincipal'>Crear Cuenta</Button>

                      
                      <Button className='BtnPrincipal'>Ser un Chasqui</Button>
                     
                      
                  </Container>
                  
                  
                  
                  </Col>
                  <Col xs={8}>
                    <h1 style ={{fontFamily:'Lucida Handwriting'}}>
                      ¡Bienvenido a Chasqui!
                    </h1>
                    
                    <p style={{textAlign:'justify', fontFamily:'Calibri'}}>
                    Chasqui es una plataforma al servicio de las pymes que busca conectarlas con clientes a la cercanía para que estos reciban sus anhelados productos tan rápido como un chasquido, sin la necesidad de costosas empresas externas. Al mismo tiempo, tiene como finalidad que las pequeñas y medianas empresas puedan hacerse un nombre en igualdad de condiciones y en ausencia de empresas gigantescas. 
                    </p>
                    <Row>
                      
                      
                      <Col>
                        <div className='DivCircular'>
                          <h2 id='fontTitulo'><Link to='/about'>Sobre nosotros</Link></h2>
                        </div>
                      </Col>
                      <Col>
                        <div className='DivCircular'>
                          <h2 id='fontTitulo'><a href='https://historia.nationalgeographic.com.es/a/chasquis-mensajeros-inca_15459'>¿Qué fue un chasqui?</a></h2>
                          
                        </div>
                      </Col>
                    </Row>
                    <Container>
                    
                    
                    </Container>
                  </Col>
                </Row>
                
                
                
               
                
            
      </Container>
      
      
     
    </div>
  );
}

export default App;
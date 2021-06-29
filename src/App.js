import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Col, Row,Image, Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PymeInicial from './components/pymeinicial.js';
import CarouselInicial from './components/carouselinicio.js';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/pymes")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setItems(result.pymes);
        }
      )
  }, [])
  const mostrarPymes = items.map(
    (item,i) => {
      
      
      
      return ( 
        
        
        <Col style={{margin:'0px'}}>
        <PymeInicial 
            key = {i}
            nombre = {item.nombre}
            tipo = {item.tipo}
            despacho= {item.despacho}
            ubicacion= {item.ubicacion}
            imagen = {item.imagen}
        ></PymeInicial>
     </Col>
      
      )}
  );


  

  return (
    <div className="ContainerPyme">
      
                <Row>
                  <Col id="colIzqInicio">
                  <CarouselInicial></CarouselInicial>

                   
                  
                  
                  
                  </Col>
                  <Col xs={8}>
                    <h1 style ={{fontFamily:'Lucida Handwriting'}}>
                      ¡Bienvenido a Chasqui!
                    </h1>
                    
                    <p style={{textAlign:'justify', fontFamily:'Calibri'}}>
                    Chasqui es una plataforma al servicio de las pymes que busca conectarlas con clientes a la cercanía para que estos reciban sus anhelados productos tan rápido como un chasquido, sin la necesidad de costosas empresas externas. Al mismo tiempo, tiene como finalidad que las pequeñas y medianas empresas puedan hacerse un nombre en igualdad de condiciones y en ausencia de empresas gigantescas. 
                    </p>
                    
                  </Col>
                </Row>
                <h1 style={{marginTop:"10px"}}>Pymes famosas</h1>
                <Row>
                  
                  {mostrarPymes}

                </Row>
                
                
               
                
            
      
      
     
    </div>
  );
}

export default App;
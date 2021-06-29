import React from 'react';
import { Carousel, Jumbotron, Col, Row, Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import foto from '../images/navLogo.png'



export default function CarouselInicial(){
      
    return (
      
        
        <Carousel controls={false} interval={4000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={foto}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <Jumbotron>
                <h1>Chasqui</h1>
                <ul style={{textAlign:'justify'}}>
                    <li>Barato </li>
                    <li>Rápido </li>
                    <li>Confiable </li>
                    <li>Cercano </li>
                </ul>
                <p>
                    <Button variant="primary">Crear cuenta</Button>
                </p>
            </Jumbotron>
        </Carousel.Item>
        
      </Carousel>
      
      
      )
  }
import React,{useState, useEffect} from 'react';
import { Container, Col, Row, Modal, Button} from 'react-bootstrap';

import Pyme from './Pyme.js';


export default function DashBoard(){
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);

        useEffect(() => {
            fetch("/dashboard")
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setItems(result);
                }
              )
          }, [])
        
          const mostrarPymes = items.map(
            (item,i) => {
              return ( 
                <Pyme 
                    key = {i}
                    nombre = {item.nombre}
                    tipo = {item.tipo}
                    despacho= {item.despacho}
        
                ></Pyme>
             
              
              )}
          );




        return (
            <Container className='principal' style={{paddingTop:"60px"}}>
            <Row>
                <Col  xs={8}>
                    <div className='DivContainerPymesCercanas'>
                        <h2>Pymes cercanas a mí</h2>
                            <Container className='ContainerModalDashboardPyme'>
                                {mostrarPymes}
                            </Container>   
                    </div>
                </Col>
                <Col>
                    <div className="divContainerDatosPersonales">
                      <p style={{margin:"20px"}}>
                        <h2 className='titulo'>Mi perfil</h2>
                        <div className="caracteristicaPerfil">
                            Nombre: 
                        </div>
                        <div className="caracteristicaPerfil">
                            Correo:

                        </div>
                        <div className="caracteristicaPerfil">
                            Dirección: 

                        </div>
                        <Button className="BtnActualizarDatos" variant="primary">Actualizar mis datos</Button>
                          
                      </p>
                    </div>
                </Col>
                
            </Row>
            </Container>
        )

    }




import React,{useState, useEffect} from 'react';
import { Container, Col, Row, Modal, Button} from 'react-bootstrap';

import Pyme from './Pyme.js';


export default function DashBoard(){
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
        const [usuario, setUsuario] = useState(
          0);
        useEffect(() => {
            fetch("/dashboard")
              .then(res => res.json())
              .then(
                (result) => {
                  console.log(result);
                  setIsLoaded(true);
                  setItems(result.pymes);
                }
              )
          }, [])
          useEffect(() => {
            fetch("/dashboard")
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setUsuario(result.usuario);
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
                    ubicacion= {item.ubicacion}
        
                ></Pyme>
             
              
              )}
          );

        if(!isLoaded){
            return "loading..."
        }else{


        return (
            <div className='principal' style={{paddingTop:"60px"}}>
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
                      
                        <h2 className='titulo'>Mi perfil</h2>
                        <div className="caracteristicaPerfil">
                            Nombre: {usuario.nombre} 
                        </div>
                        <div className="caracteristicaPerfil">
                            Correo:{usuario.correo} 
                        </div>
                        <div className="caracteristicaPerfil">
                            Dirección: {usuario.direccion} 

                        </div>
                        <Button className="BtnActualizarDatos" variant="primary">Actualizar mis datos</Button>
                          
                      
                    </div>
                </Col>
                
            </Row>
            </div>
        )

    }
}



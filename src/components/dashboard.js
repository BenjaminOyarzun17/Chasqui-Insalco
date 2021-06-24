import React from 'react';
import { Container, Col, Row, Modal, Button} from 'react-bootstrap';
import axios from 'axios';

export default function DashBoard(){
        const [data, setData] = useState({ hits: [] });
    
        useEffect(async () => {
        const result = await axios(
            'http://localhost:5000/dashboard',
        );
    
        setData(result.data);
        });

    
        return (
            <Container className='principal' style={{paddingTop:"60px"}}>
            <Row>
                <Col  xs={8}>
                    <div className='DivContainerPymesCercanas'>
                        <h2>Pymes cercanas a mí</h2>
                            <Container className='ContainerModalDashboardPyme'>
                                <Modal.Dialog>
                                    <Modal.Header >
                                        <Modal.Title>Donde Sergio</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body >
                                        <ul>
                                            <li>Tipo:</li>
                                            <li>Despacho:</li>
                                            <li>Cercanía:</li>
                                            
                                        </ul>
                                        <img scr=""></img>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        
                                        <Button variant="primary">Productos</Button>
                                    </Modal.Footer> 
                                </Modal.Dialog>
                            </Container>
                            <Container className='ContainerModalDashboardPyme'>
                                <Modal.Dialog>
                                    <Modal.Header >
                                        <Modal.Title>Donde Ana</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body >
                                        <ul>
                                            <li>Tipo:</li>
                                            <li>Despacho:</li>
                                            <li>Cercanía:</li>
                                            
                                        </ul>
                                        <img scr=""></img>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        
                                        <Button variant="primary">Productos</Button>
                                    </Modal.Footer> 
                                </Modal.Dialog>
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




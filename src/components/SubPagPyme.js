import React,{useState, useEffect} from 'react';

import {Link, useLocation} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Producto from './producto.js';


export default function SubPagPyme(){
  let location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pyme, setPyme] = useState(
    0);
  useEffect(() => {
      fetch(location.pathname)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            setIsLoaded(true);
            setPyme(result);
          }
        )
    }, [])
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch(location.pathname)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.productos);
          setProductos(result.productos);
        }
      )
  }, [])




    const mostrarProductos = productos.map(
      (producto,i) => {
        return ( 
          <Col>
          <Producto
          nombre={producto.nombre}
          descripcion = {producto.descripcion}
          precio = {producto.precio}


          >
          

          </Producto>
          </Col>  
        
        )}
    );



    if(!isLoaded){
      return 'loading...'
    }else{
    return (
        <div className='ContainerPyme'>
            <Row>
              <Col>
                Inserte imagen aqui
              </Col>
              
              <Col xs={6}>
              <h1><u>{pyme.nombre}</u></h1>
              Tipo de Pyme: {pyme.tipo}<br></br>
              Historia de la Pyme: <br></br>
              Ubicado en: {pyme.ubicacion}<br>
              </br>
              Posibilidad de despacho: 
              </Col>
              <Col>
              <div className='ContainerCarrito'>
                <h2>Carrito</h2>
                <ul>
                  <li>item 1</li>
                  <h3>Total: </h3>

                </ul>
                <Row>
                  <Container className='ContainerPymeBotones'>
                    <Button className='ContainerPymeBotonesBoton'>Ordenar</Button>
                    <Button className='ContainerPymeBotonesBoton'>Chatear</Button>
                  </Container>
                </Row>
                
                
              </div>
              </Col>

            </Row>
            
            <h3><u>Productos disponibles</u></h3>

            <Row>

            {mostrarProductos}

            </Row>
            
            
        </div>
      )
    }
  
  }
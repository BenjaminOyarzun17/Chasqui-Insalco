import React,{useState, useEffect} from 'react';
import {Container, Modal, Row, Col, Button} from 'react-bootstrap';

import {Link, useLocation} from 'react-router-dom';
import Producto from './producto.js';
import { propTypes } from 'react-bootstrap/esm/Image';


export default function SubPagPyme(){
  let location = useLocation();
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pyme, setPyme] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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


  function handleRemove(carro) {
    console.log(carro[0]);
    let newList = [];
    let count =0;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i][0] != carro[0] && count ==0) {
            newList.push(carrito[i]);
        }else if (carrito[i][0] == carro[0] && count > 0 ){
          newList.push(carrito[i]);
          count++;
        }else if (carrito[i][0] == carro[0] && count == 0 ){
          count++;
        }
    }
    setCarrito(newList);


    setTotal(total-carro[1]);

  }
  const revisarDespacho=(despacho)=>{
    if (despacho===true){
        return "sí";
    }else{
        return "no";
    }
}
    const agregarCarrito = (nombre, precio)=>{
      setCarrito([...carrito, [nombre, precio]]);
      setTotal(total+precio);
    }
    const calcularCinco = (total)=>{
      return (5/100)*total;
    }

    const mostrarListaCarrito = carrito.map(
      (carro, i)=>{
        return (
          <li key = {i}>
            <div >
            {carro[0]}  (${carro[1]})
            <button onClick = {() => handleRemove(carro)} type="button" className="btn-close" aria-label="Close">

            </button>

            </div>
            
          </li>
        )
      }
      )

    const mostrarProductos = productos.map(
      (producto,i) => {
        return ( 
          <Col>
          <Producto
          nombre={producto.nombre}
          descripcion = {producto.descripcion}
          precio = {producto.precio}
          agregarCarrito = {()=>agregarCarrito(producto.nombre, producto.precio)}
          key = {i}
          imagen = {producto.imagen}
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
              
              
              <Col xs={8}>
              <Row>
              <Col>
                <img className="ImagenPyme" src={pyme.imagen}></img>
                <br></br> <p style={{textAlign:'justify'}}>Historia de la Pyme: {pyme.historia}</p>
              </Col>
              
              <Col xs={6}>
              <h1><u>{pyme.nombre}</u></h1>
              Tipo de Pyme: {pyme.tipo}<br></br>
              
              Ubicado en: {pyme.ubicacion}<br></br>
              Puntación de la Pyme: {pyme.reputacion}<br></br>
              Ahorro esperado: {pyme.ahorro}<br></br>
              Teléfono: +{pyme.telefono}<br></br>
              Posibilidad de despacho: {revisarDespacho(pyme.despacho)}<br></br>
              Puntua esta pyme: <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>

              </Col>
              </Row>
              <h3 style={{color:'white'}}><u>Productos disponibles</u></h3>
             
              <Row>
              {mostrarProductos}

              </Row>
              </Col>




              
              <Col>
              <Row>
              <div className='ContainerCarrito'>
                <h2>Carrito</h2>
                <div style={{textAlign:'left'}}>
                    Incluir despacho: <input  type="checkbox"></input><br></br>
                    </div>
                <ul>
                  {mostrarListaCarrito}
                </ul>
                <h3>Total: {total}</h3>
                <p>Se agrega un 5% de impuesto al total final</p>
                <Row>
                  
                  <Row>
                  <Container className='ContainerPymeBotones'>
                    
                    <Button variant="primary" onClick={handleShow}>
Ordenar             </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Confirmar pago</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Cuenta:
                      <ul>
                        <li>total: ${total}</li>
                        <li>5%: ${calcularCinco(total)}</li>
                        

                      </ul>
                      <h2>Total: ${total + (5/100)*total}</h2>




                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      

                      
                      
                      <Button className='ContainerPymeBotonesBoton'><Link style ={{color:'white'}}to='/success'>Ordenar</Link></Button>

                    </Modal.Footer>
                  </Modal>
    
                    <Button className='ContainerPymeBotonesBoton'>Chatear</Button>
                  </Container>
                  </Row>
                  
                </Row>
               
                  
              </div>
              </Row>
              <Row>
                  <h1>Ubicación</h1>
                  
                    <iframe style={{width:'100%'}} scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-33.426216950343516,%20-70.61110230378242+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" ></iframe>
                    
              </Row>
              </Col>
              

            </Row>
            
            

           
            
        </div>
      )
    }
  
  }
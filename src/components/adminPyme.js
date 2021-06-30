import React,{useState, useEffect} from 'react';

import {Link, useLocation} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Producto from './producto.js';
import { propTypes } from 'react-bootstrap/esm/Image';
import ProductoAdmin from './productoadmin.js';
import {ganancias} from './ganancias.json';
import axios from 'axios';

export default function AdminPyme(){
  let location = useLocation();
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [pyme, setPyme] = useState(0);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
      fetch(location.pathname)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            setIsLoaded(true);
            setPyme(result);
            setProductos(result.productos);

          }
        )
    }, [])

    function deleteProduct(nombre) 
    {
      let borrar= {"producto":nombre}
      axios.delete(location.pathname, { data: borrar}).then(window.location.reload())
      
    }
    const mostrarProductos = productos.map(
      (producto,i) => {
        return ( 
          <Col>
          <ProductoAdmin
          nombre={producto.nombre}
          descripcion = {producto.descripcion}
          precio = {producto.precio}
          key = {i}
          imagen = {producto.imagen}
          deleteProduct = {()=>deleteProduct(producto.nombre)}
          >
          

          </ProductoAdmin>
          </Col>  
        
        )}
    );
    let gananciasTotales = 0;

    const mostrarGanancias = ganancias.map((ganancia, i)=>{
      gananciasTotales+=parseInt(ganancia.ganancia);
      return(
        <Container style={{borderStyle:"solid", borderColor:"black", marginTop:"5px"}}>
          Cliente: {ganancia.usuario}<br></br>
          Fecha: {ganancia.fecha}<br></br>
          Ganancia: <b>${ganancia.ganancia}</b><br></br>
          Productos: {ganancia.productos}
          
        </Container>
      )

    })
    


   
    
    

    if(!isLoaded){
      return 'loading...'
    }else{
    return (
        <div className='ContainerPyme'>
           <Row>
            <Col>
            <h1 >Pagina de tu pyme        </h1>
           <br></br>
            <Container className="ContainerDatosPymeAdmin">
            <Row>
              <Col>
              <h2>Mi perfil</h2>
            <p >
            Pyme: {pyme.nombre}<br></br>
            Tipo: {pyme.tipo}<br></br>
            Ubicacion: {pyme.ubicacion}<br></br>
            <p style={{textAlign:'justify'}}>Historia: {pyme.historia}</p><br></br>
            Telefono: +{pyme.telefono}<br></br>
                </p>
            <Button>Editar datos</Button>
              </Col>
              <Col><img style={{width:'80%', height:'auto'}}src={pyme.imagen}></img></Col>

            </Row>
            

            </Container>
            
            
            
            <Container className="ContainerDatosPymeAdmin">
            <h2 >Agregar producto</h2>
            <form action="#" method='POST'>
                <input className = 'InputField' type = 'text' placeholder='nombre producto'  name = "nombre" defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='descripcion' name='descripcion' defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='precio' name='precio' defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='image' name='imagen' defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='id' name='id' defaultValue={pyme.id}/><br></br>
                <input className = 'BotonLogin' style={{color:'white'}} type="submit" value="agregar producto"></input>
            </form> 
            </Container>
            <Container className="ContainerDatosPymeAdmin">
              <h1>Entregas pendientes</h1>
              <ol>
                <li>Benjamín Oyarzún (hoy, hace pocos minutos)</li>
                <ul>
                  <li>
                    direccion: Av. Providencia, Pedro de Valdivia
                  </li>
                  <li>
                    productos: 
                    <ul>
                      <li>
                        chocman (5)
                      </li>
                      <li>
                        pepsi (2)
                      </li>
                    </ul>
                  </li>
                </ul>
                <li>Felipe Campos (hoy, hace pocos minutos)</li>
                <ul>
                  <li>
                  direccion: Juana de Arco, Pedro de Valdivia
                  </li>
                  <li>productos
                    

                  </li>
                  <ul>
                      <li>Mantequilla colun (4)</li>
                      <li>Caja Bon o Bon (4)</li>
                    </ul>
                </ul>
              </ol>




            </Container>
            <Container className="ContainerDatosPymeAdmin">
              <h1>Mis ganancias: ${gananciasTotales}</h1>
              {mostrarGanancias}
            </Container>
            


            </Col>

            <Col>
            <Row>
              <h1>Mis productos</h1>
            {mostrarProductos}

            </Row>
            

            </Col>

           </Row>
           

        </div>
      )
    }
  
  }

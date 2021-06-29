import React,{useState, useEffect} from 'react';

import {Link, useLocation} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Producto from './producto.js';
import { propTypes } from 'react-bootstrap/esm/Image';
import ProductoAdmin from './productoadmin.js';

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
          >
          

          </ProductoAdmin>
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
            <h1 >Pagina de tu pyme        </h1>
           <br></br>
           
            <p >
            Pyme:{pyme.nombre}<br></br>
            Tipo:{pyme.tipo}<br></br>
            Ubicacion:{pyme.ubicacion}
                </p>
            <h2 >Agregar producto</h2>
            <form action="#" method='POST'>
                <input className = 'InputField' type = 'text' placeholder='nombre producto'  name = "nombre" defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='descripcion' name='descripcion' defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='precio' name='precio' defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='image' name='imagen' defaultValue=''/><br></br>
                <input className = 'InputField' type = 'text' placeholder='id' name='id' defaultValue={pyme.id}/><br></br>
                <input type="submit" value="agregar producto"></input>
            </form> 
           
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
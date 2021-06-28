import React,{useState, useEffect} from 'react';
import { Container, Col, Row, Modal, Button} from 'react-bootstrap';

import Pyme from './Pyme.js';


export default function DashBoard(){
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
        const [usuario, setUsuario] = useState(
          0);
        useEffect(() => {
            fetch("/pymes")
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
            fetch("/pymes")
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
                    imagen = {item.imagen}
                ></Pyme>
             
              
              )}
          );

        if(!isLoaded){
            return "loading..."
        }else{


        return (
            <div className='principal' style={{paddingTop:"10px"}}>
            
                
                
                    
                    <div className='DivContainerPymesCercanas'>
                        <h2 style={{color:'white'}}><b> <u>Pymes cercanas a mí</u></b></h2>
                            
                            
                            <Row >
                                {mostrarPymes}
                            </Row>   
                    
                    
                    </div>
                    
                    
                
                
            </div>
        )

    }
}



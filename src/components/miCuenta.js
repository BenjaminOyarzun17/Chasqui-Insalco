import React,{useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';



export default function MyAccount(){
    const [usuario, setUsuario] = useState(0)
        useEffect(() => {
            fetch("/pymes")
              .then(res => res.json())
              .then(
                (result) => {
                  setUsuario(result.usuario);
                }
              )
          }, []);
    
    return (
        <div className='ContainerPyme'>
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

        
        </div>


    )



}
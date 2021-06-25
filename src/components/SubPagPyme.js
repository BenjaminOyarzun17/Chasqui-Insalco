import React,{useState, useEffect} from 'react';

import {Link, useLocation} from 'react-router-dom';
import {Container} from 'react-bootstrap';



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
 
    if(!isLoaded){
      return 'loading...'
    }else{
    return (
        <Container>
            <h1>{pyme.nombre}</h1>
            tipo: {pyme.tipo}<br></br>
            ubicacion: {pyme.ubicacion}
        </Container>
      )
    }
  
  }
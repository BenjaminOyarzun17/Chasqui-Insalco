import React, {useState} from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import Axios from 'axios';
import {Link} from 'react-router-dom';




export default function PymeLogin(){
    const url="localhost:3000/pymelogin";
    const [data, setData] = useState({
        nombre: "",
        clave:""
    })
    function handle(e){
        const newdata= {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }
    function submit(e){
        Axios.post(url,{
            nombre:data.nombre
        })
    }

    
        return (
            <>
            <div className='ContainerPyme'>
                <Row>
                    <Col>
                    <h1 style ={{color:'white'}}>Iniciar Sesión como Pyme</h1>
                    <form onSubmit={(e)=>submit(e)}>
                        <input onChange={(e)=>handle(e)} id="nombre" value={data.nombre} placeholder="nombre" type="text"></input>
                        <input onChange={(e)=>handle(e)} id="clave" value={data.clave} placeholder="password" type="password"></input><br></br>
                        <button><Link to={'adminpyme/'+data.nombre}>Submit</Link></button>
                        <button><Link to='/crearpyme'>Crear Pyme</Link></button>

                    </form> 
                    </Col> 
                    <Col>
                        <div style ={{height:'1000px', width :'90%'}}  ></div>
                    </Col>
                </Row>


            
            </div>
            </>
        )

    }




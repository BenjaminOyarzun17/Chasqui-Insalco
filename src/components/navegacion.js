import React from 'react';
import {Link} from 'react-router-dom';


export default function Navegacion(){
      return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top py-3">
        <div className="container"><a className="navbar-brand text-uppercase font-weight-bold" style={{color:'white'}}>Chasqui</a>
            
            
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link to='/'>Inicio </Link></li>
                    <li className="nav-item"><Link to='/dashboard'>Dashboard</Link></li>
                    <li className="nav-item"><Link to='/pymes'>Pymes</Link></li>
                    
                </ul>
            </div>
        </div>
    </nav>
      </>
      )
    }
  


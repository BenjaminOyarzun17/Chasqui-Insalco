import React from 'react';
import {Navbar, Nav, NavDropdown,Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Navegacion(){
      return (
        <>
        <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container"><a href="#" class="navbar-brand text-uppercase font-weight-bold" style={{color:'white'}}>Chasqui</a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
            
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><Link to='/'><a href="#" class="nav-link text-uppercase font-weight-bold" style={{color:'white'}}>Inicio </a></Link></li>
                    <li class="nav-item"><Link to='/dashboard'><a href="#" class="nav-link text-uppercase font-weight-bold" style={{color:'white'}}>Dashboard </a></Link></li>
                    <li class="nav-item"><Link to='/pymes'><a href="#" class="nav-link text-uppercase font-weight-bold" style={{color:'white'}}>Pymes</a></Link></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold" style={{color:'white'}}>Portfolio</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold" style={{color:'white'}}>Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>
      </>
      )
    }
  


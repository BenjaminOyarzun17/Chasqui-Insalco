import React,{ useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import {Navbar,Nav,Form, NavDropdown, FormControl, Button} from 'react-bootstrap';
import logoNav from '../images/navLogo.jpeg';




export default function Navegacion(){
  let location = useLocation();
  
  useEffect(()=>{console.log(location.pathname);});
  if (location.pathname == '/' || location.pathname=='login'){
    return (
        <>
          <Navbar bg="dark" variant="dark" style={{padding:'0px', height:'70px'}}>
              <Navbar.Brand  style={{margin:'0px'}}>
                <div className='ContainerLogo'>
                <img
                  alt=""
                  src={logoNav}
                  width="30px"
                  height="30px"
                  className="d-inline-block  align-top"
                  style={{marginLeft:"10px"}}
                />{' '}
                <Link to='/' style={{color:'white'}}>Chasqui</Link>
                
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{margin:'0px'}}/>
                  <Navbar.Collapse id="basic-navbar-nav" style={{margin:'0px'}}>
                    <Nav className="mr-auto">
                      <Nav.Link ><Link className='linkNavegacion' to='/'> Inicio</Link>  </Nav.Link>
                      <Nav.Link ><Link className='linkNavegacion'to='/login'> Iniciar sesión</Link></Nav.Link>
                      <Nav.Link ><Link className='linkNavegacion'to='/pymelogin'> Administra tu Pyme</Link></Nav.Link>
                      
                      <Nav.Link ><Link className='linkNavegacion'to='/about'> Sobre nosotros</Link></Nav.Link>
                      
                    </Nav>
                    
                  </Navbar.Collapse>
            </Navbar>    

      </>
   

    )
  }
  
  else if (location.pathname=='/login' || location.pathname=='/pymelogin'){
  
    return (
      <>
        <Navbar bg="dark" variant="dark" style={{padding:'0px', height:'70px'}}>
            <Navbar.Brand  style={{margin:'0px'}}>
              <div className='ContainerLogo'>
              <img
                alt=""
                src={logoNav}
                width="30px"
                height="30px"
                className="d-inline-block  align-top"
                style={{marginLeft:"10px"}}
              />{' '}
              <Link to='/' style={{color:'white'}}>Chasqui</Link>
              <p style={{fontSize:'15px', marginLeft:'10px'}}>Enviar a Benjamin, Providencia</p>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{margin:'0px'}}/>
                <Navbar.Collapse id="basic-navbar-nav" style={{margin:'0px'}}>
                  <Nav className="mr-auto">
                    <Nav.Link ><Link className='linkNavegacion' to='/'> Inicio</Link>  </Nav.Link>
                    <Nav.Link ><Link className='linkNavegacion'to='/about'> Sobre nosotros</Link></Nav.Link>
                    
                  </Nav>
                  
                </Navbar.Collapse>
          </Navbar>    

    </>
    )

  
  }
  
  
  else{
  
  return (
        <>
          <Navbar bg="dark" variant="dark" style={{padding:'0px', height:'70px'}}>
              <Navbar.Brand  style={{margin:'0px'}}>
                <div className='ContainerLogo'>
                <img
                  alt=""
                  src={logoNav}
                  width="30px"
                  height="30px"
                  className="d-inline-block  align-top"
                  style={{marginLeft:"10px"}}
                />{' '}
                <Link to='/' style={{color:'white'}}>Chasqui</Link>
                <p style={{fontSize:'15px', marginLeft:'10px'}}>Enviar a: Av Providencia, Providencia</p>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{margin:'0px'}}/>
                  <Navbar.Collapse id="basic-navbar-nav" style={{margin:'0px'}}>
                    <Nav className="mr-auto">
                      
                      <Nav.Link ><Link className='linkNavegacion' to='/'> Inicio</Link>  </Nav.Link>
                      <Nav.Link ><Link className='linkNavegacion' to='/miCuenta'>Mi cuenta</Link></Nav.Link>
                      <Nav.Link ><Link className='linkNavegacion'to='/pymes'> Pymes</Link></Nav.Link>
                      <Nav.Link ><Link className='linkNavegacion'to='/about'> Sobre nosotros</Link></Nav.Link>
                      
                      
                    </Nav>
                    
                  </Navbar.Collapse>
            </Navbar>    

      </>
      )
    }
  

  }
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navegacion from './components/navegacion.js';
import PymeLogin from './components/PymeLogin.js';
import UserLogin from './components/Login.js';
import Registro from './components/Registrar.js';
import DashBoard from './components/dashboard.js';
import SubPagPyme from './components/SubPagPyme.js'; 
import About from './components/about.js'; 
import MyAccount from './components/miCuenta.js';
import Mipyme from './components/mipyme';
import CrearPyme from './components/crearpyme.js';
import AdminPyme from './components/adminPyme';
import CompraExitosa from './components/compraExitosa';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
    <Navegacion></Navegacion>

      <Switch>
        
        
        <Route path='/pymes/:name'>
          <SubPagPyme
          
          ></SubPagPyme>
        </Route>
        <Route path='/adminpyme/:name'>
          <AdminPyme
          ></AdminPyme>
        </Route>


        <Route path='/pymes'>
          <DashBoard></DashBoard>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/pymelogin'>
          <PymeLogin></PymeLogin>
        </Route>
        <Route path='/mipyme'>
          <Mipyme></Mipyme>
        </Route>
        <Route path='/crearpyme'>
          <CrearPyme></CrearPyme>
        </Route>
        <Route path ='/success'>
          <CompraExitosa></CompraExitosa>
        </Route>

        <Route path = '/login'>
          <UserLogin></UserLogin>
        </Route>
        <Route path = '/miCuenta'>
          <MyAccount></MyAccount>
        </Route>
       

        
        <Route path='/'><App /></Route>


      </Switch>

    </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);



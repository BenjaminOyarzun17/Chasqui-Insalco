import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navegacion from './components/navegacion.js';
import Login from './components/Login.js';
import Registro from './components/Registrar.js';
import DashBoard from './components/dashboard.js';
import SubPagPyme from './components/SubPagPyme.js'; 
import About from './components/about.js'; 

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
    <Navegacion></Navegacion>

      <Switch>
        
        
        <Route path='/dashboard/:name'>
          <SubPagPyme
          
          ></SubPagPyme>
        </Route>
        <Route path='/dashboard'>
          <DashBoard></DashBoard>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='pymes/pyme'>
          <DashBoard></DashBoard>
        </Route>

        
        <Route path='/'><App /></Route>


      </Switch>

    </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);



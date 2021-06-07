import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pymes from './components/Pymes.js';
import Navegacion from './components/navegacion.js';
import Login from './components/Login.js';
import Registro from './components/Registrar.js';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
    <Navegacion></Navegacion>

      <Switch>
      <Route path='/pymes'>
        <Pymes/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Registro/>
        </Route>

        
        <Route path='/'><App /></Route>


      </Switch>

    </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);



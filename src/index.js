import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pymes from './components/Pymes.js';
import Navegacion from './components/navegacion.js';



ReactDOM.render(
  <React.StrictMode>
    
    <Navegacion></Navegacion>
    <Router>
      
      <Switch>
        <Route path='/pymes'>
        <Pymes/>
        </Route>
        
        <Route path='/'><App /></Route>


      </Switch>

    </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);



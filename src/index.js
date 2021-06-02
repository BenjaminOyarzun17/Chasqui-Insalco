import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Productos from './components/productos.js'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      
      <Switch>
        <Route path='/productos'>
        <Productos/>
        </Route>
        
        <Route path='/'><App /></Route>


      </Switch>

    </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);



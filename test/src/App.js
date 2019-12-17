import React from 'react';
import './App.css';
import Login from './components/login/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
          <Router>
      
        

        
        <Switch>
          
          
          <Route exact path="/admin" component={Login}/>
        </Switch>
     
    </Router>
        
        
 
  );
}

export default App;

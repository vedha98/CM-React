import React from 'react';
import './App.css';
import Login from './components/login/login';
import Home from './components/home/home';
import Dash from './components/dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";

function App() {
  return (
    <div className="app">
          <Router>
      
        

        
        <Switch>
          
          
          <Route exact path="/user/login" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/dashboard" component={Dash}/>
          <Route  path="*"  render={() => (<Redirect to="/home" />)}/>
          
        </Switch>
     
    </Router>
    </div>
        
 
  );
}

export default App;

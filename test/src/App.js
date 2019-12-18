import React from 'react';
import './App.css';
import Login from './components/login/login';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Dash from './components/dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
const testAuth=()=>{
  const token = localStorage.getItem("token")
  if(token){
    return true}else{return false}
}
const PrivateRoute =({ component: Component, ...rest }) =>{
  let val =testAuth() 
  return(<Route {...rest} render={(props) => (
    val=== true
     ? <Component {...props} />
     : <Redirect to='login' />
 )} />)
  
 
} 
function App() {
  return (
    <div className="app">
          <Router>
      <Navbar></Navbar>
        

        
        <Switch>
          
          
          <Route exact path="/login" component={Login}/>
          <Route exact path="/home" component={Home}/>       
          <PrivateRoute path="*" component={Dash}/>
          
        </Switch>
     
    </Router>
    </div>
        
 
  );
}

export default App;

import React from 'react';
import './login.css'
const axios = require('axios');
class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
    
        return (
            <div>
            
            
            </div>
        );
    }
    componentDidMount(){
        axios.get('http://localhost:8000/user')
  .then(function (response) {
    console.log(response.data);
  })
    }
}

export default login;
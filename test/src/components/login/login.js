import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button, Form, Col,Row, Container, Alert } from 'react-bootstrap';
import './login.css';

const axios = require('axios');

class login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:"",
            Password:"",
            validation:{
                id:"",
                Password:"",
            },
            login_result:""
        };

    }
    goDashboard() {
        this.props.history.push('/dashboard');
      }
    handleLogin(    ){
        this.setState({validation:{id:"",Password:""}})

      if(this.state.id!=="" && this.state.Password!==""){
          var self = this;
          //send post req
        axios.post('http://localhost:8000/api/users/login', {
            id: this.state.id,
            password: this.state.Password
          })
          .then(function (response) {
            
            if(response.data.success){
                localStorage.setItem('token',response.data.token)
                self.goDashboard()
            }else{
                self.setState({login_result:response.data.msg})
            }
          })
          .catch(function (error) {
            console.log(error);
            self.setState({login_result:"unable to connect to the server"})
            
          });
        
      }else{
         let val = {id:"",Password:""}
         if(this.state.id===""){val.id="pls enter id"}
         if(this.state.Password===""){val.Password="pls enter password"}
         this.setState({validation:val})
         console.log(this.state)
      } 
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };
    
    render() {

        return (
<Container><Row><Col md={{ span: 6, offset: 3 }}>    
    <Container>
    {this.state.login_result!==""?<Alert variant="danger">{this.state.login_result}</Alert>:null}
            <Form>
                <Form.Group as={Row} controlId="formBasicName">
                    <Form.Label column sm="2">
                        UserId
                    </Form.Label>
                    
                    <Col sm="10">
                        <Form.Control  placeholder="Enter your User ID" defaultValue={this.state.id} type="number" onChange={this.handleChange('id').bind(this)}/>
                        <Form.Text className="text-muted">{this.state.validation.id}</Form.Text>
                    </Col>
                    
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control  placeholder="Enter your Password" defaultValue={this.state.Password} type="password" onChange={this.handleChange('Password').bind(this)} />
                        <Form.Text className="text-muted">{this.state.validation.Password}</Form.Text>
                    </Col>
                </Form.Group>
                <Row> 
                    <Col >         
                <Button variant="secondary" size="lg" block  onClick={()=>this.handleLogin()}>
                    Submit
                </Button>
                </Col>  
                </Row>  
            </Form>
            </Container>
            </Col>
            </Row>
            </Container>
        );
    }
    componentDidMount() {
        localStorage.clear()
    }
}

export default withRouter(login);
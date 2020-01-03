import React from 'react';
import {withRouter} from 'react-router-dom';
import AccountInfo from './AccountInfo'
import PersonalInfo from './PersonalInfo';
import Steps from './Steps'
import "./signup.css"
import Identity from './Identity';
import Nominee from './Nominee';
const axios = require('axios');
class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname:"",
            lastname:"",
            email:"",
            aadharNo:"",
            password:"",
            cpassword:"",
            panNo:"",
            dob:"",
            nfirstname:"",
            nlastname:"",
            phone:"",
            ndob:"",
            valid_result:"",
            stage:0,
            validation:{
                firstname:"",
                lastname:"",
                email:"",
                aadharNo:"",
                password:"",
                cpassword:"",
                panNo:"",
                nfirstname:"",
                nlastname:"",
                phone:"",
                ndob:"" 
            }

        };
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };
      nextstep=()=>{
          this.setState(state=>({stage:state.stage+1}))
      }
      prevstep=()=>{
          if(this.state.stage>0){
            this.setState(state=>({stage:state.stage-1}))
          }
    }
    goLogin() {
        this.props.history.push('/login');
      }
    registerClick(){
        var self = this;
        console.log(this.state)
      axios.post('http://localhost:8000/api/users/register', {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          password: this.state.password,
          email:this.state.email,
          phone:this.state.phone,
          aadharNo:this.state.aadharNo,
          panNo:this.state.panNo,
          dob:this.state.dob,
          nfirstname:this.state.nfirstname,
          nlastname:this.state.nlastname,
          ndob:this.state.ndob
        })
        .then(function (response) {
          console.log(response);
          if(response.data.success){
              
              self.goLogin()
          }else{
              self.setState({valid_result:response.data.msg})
          }
        })
        .catch(function (error) {
          console.log(error);
          self.setState({login_result:"unable to connect to the server"})

    })}
    render() {
        return (
          <div className="signup-container">
              <Steps currentstep={this.state.stage}/>
             {{
    0: (
        <AccountInfo {...this.state} nextStep={this.nextstep} handleChange={this.handleChange}/>
    ),
    1: (
        <PersonalInfo {...this.state} prevStep={this.prevstep} nextStep={this.nextstep} handleChange={this.handleChange}/>
    ),
    2:(
        <Identity {...this.state}  prevStep={this.prevstep} nextStep={this.nextstep} handleChange={this.handleChange}/>
    ),
    3:(
        <Nominee {...this.state}  prevStep={this.prevstep} nextStep={this.nextstep} handleChange={this.handleChange}/>
    ),
    default: (
      <AccountInfo/>
    )
  }[this.state.stage]}
          </div>
        );
    }
}

export default withRouter(signup);




{/* <Container><Row><Col md={{ span: 6, offset: 3 }}>    
<Container>
{this.state.valid_result!==""?<Alert variant="danger">{this.state.valid_result}</Alert>:null}
       
        <Form>
        {this.state.stage===0?<div><Form.Group as={Row} controlId="firstName">
                <Form.Label column sm="2">
                    Firstname
                </Form.Label>
                
                <Col sm="10">
                    <Form.Control  placeholder="Enter your Firstname" defaultValue={this.state.firstname} type="text" onChange={this.handleChange('firstname').bind(this)}/>
                    <Form.Text className="text-muted">{this.state.validation.firstname}</Form.Text>
                </Col>
                
            </Form.Group>
            <Form.Group as={Row} controlId="lastname">
                <Form.Label column sm="2">
                    Lastname
                </Form.Label>
                <Col sm="10">
                    <Form.Control  placeholder="Enter your Lastname" defaultValue={this.state.lastname} type="text" onChange={this.handleChange('lastname').bind(this)} />
                    <Form.Text className="text-muted">{this.state.validation.lastname}</Form.Text>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="email">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control  placeholder="Enter your Email" defaultValue={this.state.email} type="email" onChange={this.handleChange('email').bind(this)} />
                    <Form.Text className="text-muted">{this.state.validation.email}</Form.Text>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="phone">
                <Form.Label column sm="2">
                    Phone No
                </Form.Label>
                <Col sm="10">
                    <Form.Control  placeholder="Enter your PhoneNo" defaultValue={this.state.phone} type="number" onChange={this.handleChange('phone').bind(this)} />
                    <Form.Text className="text-muted">{this.state.validation.phone}</Form.Text>
                </Col>
            </Form.Group></div>:null}
            {this.state.stage===1?<div><Form.Group as={Row} controlId="password">
                <Form.Label column sm="2">
                    password
                </Form.Label>
                
                <Col sm="10">
                    <Form.Control  placeholder="Enter your Password" defaultValue={this.state.password} type="password" onChange={this.handleChange('password').bind(this)}/>
                    <Form.Text className="text-muted">{this.state.validation.password}</Form.Text>
                </Col>
                
            </Form.Group>
            <Form.Group as={Row} controlId="cpassword">
                <Form.Label column sm="2">
                    Confirm Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control  placeholder="COnfirm your pass" defaultValue={this.state.cpassword} type="password" onChange={this.handleChange('cpassword').bind(this)} />
                    <Form.Text className="text-muted">{this.state.validation.cpassword}</Form.Text>
                </Col>
            </Form.Group>
           </div>:null}
           {this.state.stage===2?<div><Form.Group as={Row} controlId="dob">
                <Form.Label column sm="2">
                     DOB
                </Form.Label>
                
                <Col sm="10">
                    <Form.Control  placeholder="Enter your DOB" defaultValue={this.state.dob} type="date" onChange={this.handleChange('dob').bind(this)}/>
                    <Form.Text className="text-muted">{this.state.validation.dob}</Form.Text>
                </Col>
                
            </Form.Group>
            <Form.Group as={Row} controlId="aadharNO">
                <Form.Label column sm="2">
                    AADHAR No
                </Form.Label>
                <Col sm="10">
                    <Form.Control  placeholder="Enter your aadharNo" defaultValue={this.state.aadharNo} type="number" onChange={this.handleChange('aadharNo').bind(this)} />
                    <Form.Text className="text-muted">{this.state.validation.aadharNo}</Form.Text>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="PanNO">
                <Form.Label column sm="2">
                    PAN No
                </Form.Label>
                <Col sm="10">
                    <Form.Control  placeholder="Enter your PanNo" defaultValue={this.state.panNo} type="text" onChange={this.handleChange('panNo').bind(this)} />
                    <Form.Text className="text-muted">{this.state.validation.panNo}</Form.Text>
                </Col>
            </Form.Group>
           </div>:null}
           {this.state.stage===3?<div><Form.Group as={Row} controlId="dob">
                <Form.Label column sm="2">
                    nominee firstname
                </Form.Label>
                
                <Col sm="10">
                    <Form.Control  placeholder="Enter your nominee firstname" defaultValue={this.state.nfirstname} type="text" onChange={this.handleChange('nfirstname').bind(this)}/>
                    <Form.Text className="text-muted">{this.state.validation.nfirstname}</Form.Text>
                </Col>
                
            </Form.Group>
            <Form.Group as={Row} controlId="nlastname">
                <Form.Label column sm="2">
                nominee lastname
                </Form.Label>
                <Col sm="10">
                    <Form.Control  placeholder="Enter your nominee lastname" defaultValue={this.state.nlastname} type="text" onChange={this.handleChange('nlastname').bind(this)} />
                    <Form.Text className="text-muted">{this.state.validation.nlastname}</Form.Text>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="ndob">
                <Form.Label column sm="2">
                    nominee DOB
                </Form.Label>
                <Col sm="10">
                    <Form.Control  placeholder="Enter your nominee DOB" defaultValue={this.state.ndob} type="date" onChange={this.handleChange('ndob').bind(this)} />
                    <Form.Text className="text-muted">{this.state.validation.ndob}</Form.Text>
                </Col>
            </Form.Group>
           </div>:null}
            
            <Row> 
                <Col >  
                {this.state.stage<3?<Button variant="secondary" size="lg" block  onClick={()=>this.nextstep()}>
                Next
            </Button>:<Button variant="primary" size="lg" block  onClick={()=>this.registerClick()}>
                Submit
            </Button>}       
            {this.state.stage>0?<Button variant="secondary" size="lg" block  onClick={()=>this.prevstep()}>
                Back
            </Button>:null}
            

            </Col>  
            </Row>  
        </Form>
        </Container>
        </Col>
        </Row>
        </Container> */}
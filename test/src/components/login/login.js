import React from 'react';
import { Button, Form, Col,Row, Container } from 'react-bootstrap';
import './login.css';

const axios = require('axios');

class login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }
    render() {

        return (
<Container><Row><Col md={{ span: 6, offset: 3 }}>
    <Container>
            <Form>
                <Form.Group as={Row} controlId="formBasicName">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control  placeholder="Enter your User ID" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control  placeholder="Enter your Password" />
                    </Col>
                </Form.Group>              
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
            </Col>
            </Row>
            </Container>
        );
    }
    componentDidMount() {
        axios.get('http://localhost:8000/user')
            .then(function (response) {
                console.log(response.data);
            })
    }
}

export default login;
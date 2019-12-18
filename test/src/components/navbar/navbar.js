import React from 'react';
import {  Navbar} from 'react-bootstrap';
class navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <img
        alt=""
        src="/icon.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      TheBank
    </Navbar.Brand>
  </Navbar>
        );
    }
}

export default navbar;
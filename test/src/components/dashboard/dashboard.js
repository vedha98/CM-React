import React from 'react';
import SideNav from './SideNav';
import './dashboard.css';
import TopNav from './TopNav';
import Welcome from './Welcome';
import Axios from 'axios';
class dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="dashboard-wrap">
                <SideNav/>
                <div className="main-dash">
                    <TopNav/>
                    <Welcome />
                </div>
                
            </div>
            
        );
    }
    componentDidMount=()=>{
        Axios.post()
    }
}

export default dashboard;
import React from 'react';
import SideNav from './SideNav';
import './dashboard.css';
import TopNav from './TopNav';
import Welcome from './Welcome';
import Axios from 'axios';
import AddAccount from './AddAccount';
import Accounts from './Accounts';
class dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{},
            newaccount:{}
          };
    }
    showAdd=()=>{

    }
    render() {
        return (
            <div className="dashboard-wrap">
                <AddAccount/>
                <SideNav/>
                <div className="main-dash">
                    <TopNav/>
                    <Welcome name={this.state.user.firstname} showAdd={this.showAdd}/>
                    <Accounts/>
                </div>
                
            </div>
            
        );
    }
    componentDidMount=()=>{
        let config = {
            headers: {'Authorization': "bearer " + localStorage.getItem("token")}
        };
        Axios.get('http://localhost:8000/api/users/tokenlogin',config).then(
            val=>{
                this.setState({user:val.data.user})
            }
        )
    }
}

export default dashboard;
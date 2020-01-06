import React from 'react';
import SideNav from './SideNav';
import './dashboard.css';
import TopNav from './TopNav';
import Welcome from './Welcome';
import Axios from 'axios';
import AddAccount from './AddAccount';
import Accounts from './Accounts';
import { toast } from 'react-toastify';
class dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{},
            newaccount:{},
            showa:false
          };
    }
    showAdd=()=>{
        this.setState({
            showa:true
        })
    }
    hideAdd=()=>{
        this.setState({
            showa:false
        })
    }
    render() {
        return (
            <div className="dashboard-wrap">
              
                
                <SideNav/>
                
                <div className="main-dash">
                {this.state.showa?<AddAccount hideAdd={this.hideAdd}/>:null}
                    <TopNav/>
                    <Welcome name={this.state.user.firstname} showAdd={this.showAdd}/>
                    <Accounts />
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
                if(val.data.success){
                    this.setState({user:val.data.user})
                    toast.success(val.data.msg, {
                        position: toast.POSITION.BOTTOM_RIGHT
                      })
                }else{
                    toast.error(val.data.msg)
                    this.props.history.push('/login', {
                        position: toast.POSITION.BOTTOM_RIGHT
                      })
                }
                

                
            }
        )
    }
}

export default dashboard;
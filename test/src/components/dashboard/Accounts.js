import React, { Component } from 'react';
import AccountCard from './AccountCard';
import Axios from 'axios';

export class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state={
            accounts:[]
        }
    }
    
    render() {
        return (
            <div className="accounts-wrap">
                {this.state.accounts.map((account)=><AccountCard key={account.id} accountdata={account}/>)}
                
            </div>
        );
    }
    componentDidMount=()=>{
       let url = 'http://localhost:8000/api/accounts/getaccounts'
       let config = {
        headers: {'Authorization': "bearer " + localStorage.getItem("token")}
    };
        Axios.get(url,config).then(res=>{
           this.setState({accounts:res.data.accounts})
        })
    }
}


export default Accounts;

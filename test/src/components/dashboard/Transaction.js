import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
export class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state={
            clientNo :"",
            Amount:0

        }
    }
    handleChange=(value,e)=>{
        this.setState({[value]:e.target.value})
        let account = this.state.accounts.find(item => {
            return item.AccountNo == this.props.id
         })
         console.log(this.props)
    }
    
    render() {
        return (
            <div>
                Current Balance : 
                <div className="form">
                    <div className="form-input">
                        <div className="input-group">
                            <input type="text" value={this.state.clientNo} placeholder="account number" onChange={e=>this.handleChange('clientNo',e)}></input>
                        </div>
                    </div>
                    <div className="form-input">
                        <div className="input-group">
                            <input type="text" value={this.state.Amount} placeholder="account number" onChange={e=>this.handleChange('Amount',e)}></input>
                        </div>
                    </div>
                    <div className="form-action">
                        <button className="step-button" onClick={this.handleClick}>Send Money</button>

                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        let url = 'http://localhost:8000/api/accounts/getaccounts'
        let config = {
         headers: {'Authorization': "bearer " + localStorage.getItem("token")}
     };
         axios.get(url,config).then(res=>{
            this.setState({accounts:res.data.accounts})
         })
     }
    
}

export default withRouter(Transaction);

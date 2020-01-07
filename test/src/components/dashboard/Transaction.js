import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
export class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state={
            clientNo :"",
            Amount:0,
            account:{}

        }
    }
    handleChange=(value,e)=>{
        this.setState({[value]:e.target.value})
        
    }
    
    render() {
        return (
            <div>
                Current Balance : {this.state.account.balance}
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
    componentDidMount=()=>{
        let account = this.props.accounts.find(item => {
            return item.AccountNo == this.props.match.params.id
         })
         this.setState({account})
         console.log(account)
    }
    
}

export default withRouter(Transaction);

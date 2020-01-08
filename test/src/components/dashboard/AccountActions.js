import React, { Component } from 'react';
import TransactionNav from './TransactionNav';
import { Transaction } from './Transaction';
import {withRouter} from 'react-router-dom'
import AddMoney from './AddMoney';
import {connect} from 'react-redux';
import {getAccounts,loadAccounts} from '../../actions/accountActions';
import {gettransactions,sendmoney,addmoney} from '../../actions/transactionActions';

export class AccountActions extends Component {
    constructor(props) {
        super(props);
        this.state={
            stage:0
        }

    }
    nextstep = () => {
        this.setState(state => ({ stage: state.stage + 1 }))
    }
    prevstep = () => {
        if (this.state.stage > 0) {
            this.setState(state => ({ stage: state.stage - 1 }))
        }
    }
    setstep=(step)=>{
        this.setState({stage:step})
    }
    
    render() {
        return (
            <div>  
                 <TransactionNav stage={this.state.stage} setstep={this.setstep} closewindow={e=> this.props.history.push('/dashboard')}/>

               
                {{
                    0: (
                        <Transaction {...this.props}/>
                    ),
                    1: (
                        <AddMoney accno={this.props.match.params.id} addmoney={this.props.addmoney}/>
                    ),
                    

                    default: (
                        <Transaction/>
                    )
                }[this.state.stage]}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        accounts:state.accountsReducer.accounts,
        sent:state.transactionReducer.sent,
        recieved:state.transactionReducer.recieved,
        redirect:state.transactionReducer.redirect
      }
}
  
export default connect(mapStateToProps,{getAccounts,sendmoney,addmoney,loadAccounts,gettransactions})(withRouter(AccountActions))

import React, { Component } from 'react';

export class TransactionNav extends Component {
    render() {
        return (
            <div className="transnav-wrap">
               <div className="transnav-item active">
                Send Money
               </div>
               <div className="transnav-item">
                Add Money
               </div>
               <div className="transnav-item">
                Passbook
               </div>
               <div onClick={this.props.closewindow} className="transnav-item close">
                close
               </div>
            </div>
        );
    }
}

export default TransactionNav;

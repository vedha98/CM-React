import React, { Component } from 'react';

export class ViewTransactions extends Component {
    render() {
        return (<div >
            <div  className="view-head">
            <div id="rec-head" className="rec-item-head">transactions from</div> 
            <div id="sent-head" className="rec-item-head">transactions to</div> 
            </div>
            <div className="view-wrap">
               <div id="viewtrans" className="rec-wrap">
                  
                {this.props.recieved.map((val,i)=>
                <div key={i} className="rec-item">
                    <div className="rec-no">
                    {val.fromno}
                    </div>
                    <div className="rec-amount">
                    +{val.amount}
                    </div>
                </div>
                )}
               </div>
               <div id="sentview" className="sent-wrap">
               
               {this.props.sent.map((val,i)=>
                <div key={i} className="rec-item">
                    <div className="rec-no">
                    {val.tono}
                    </div>
                    <div className="sent-amount">
                    -{val.amount}
                    </div>
                </div>
                )}
               </div>
            </div>
            </div>
        );
    }
}

export default ViewTransactions;

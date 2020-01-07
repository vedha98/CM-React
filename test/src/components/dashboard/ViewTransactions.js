import React, { Component } from 'react';

export class ViewTransactions extends Component {
    render() {
        return (<div>
            <div className="view-head">
            
       
            <div className="rec-item-head">sent</div> 
            <div className="rec-item-head">recieved</div> 
            </div>
            <div className="view-wrap">
               <div className="rec-wrap">
                  
                {this.props.sent.map((val,i)=>
                <div key={i} className="rec-item">
                    <div className="rec-no">
                    {val.tono}
                    </div>
                    <div className="rec-amount">
                    +{val.amount}
                    </div>
                </div>
                )}
               </div>
               <div className="sent-wrap">
               
               {this.props.recieved.map((val,i)=>
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

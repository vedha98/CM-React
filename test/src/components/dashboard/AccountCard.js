import React from 'react';

const AccountCard = (props) => {
    return (
        <div className="account-card">
            <div className="account-header">
    <div className="account-no">{props.accountdata.AccountNo}</div>
    {props.accountdata.IsPrimary?<div className="primary">primary</div>:null}
            </div>
            <div className="account-item">
                <div className="account-balance">
                    {props.accountdata.balance}
                </div>
                 </div>
                 <div className="account-item">
                <div className="account-type">
                    {props.accountdata.AccountType}
                </div>
                 </div>
        </div>
    );
}

export default AccountCard;

import React, { Component } from 'react';

export class Steps extends Component {
    render() {
        return (
            <div className="step-container">
                   <div className="step-item active">
                    AccountInfo   
                    </div>   
                    <div className="step-item">
                    PersonalInfo   
                    </div>  
                    <div className="step-item">
                    Identity
                    </div>    
                    <div className="step-item">
                    Nominee
                    </div>  
                    <div className="step-item">
                    Review
                    </div>  
            </div>
        );
    }
}

export default Steps;

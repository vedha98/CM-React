import React from 'react';

const Welcome = ({name}) => {
    return (
        <div className="welcome-wrap">
            Welcome back {name} ,
            <button className="add-btn">add account</button>
        </div>
    );
}

export default Welcome;

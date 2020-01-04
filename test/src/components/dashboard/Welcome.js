import React from 'react';

const Welcome = ({name,showAdd}) => {
    return (
        <div className="welcome-wrap">
            Welcome back {name} ,
            <button className="add-btn" onClick={showAdd}>add account</button>
        </div>
    );
}

export default Welcome;

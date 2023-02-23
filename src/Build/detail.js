import React from 'react';
import './detail.css';

const Detail= (props) => {
    if (props.hidden === true){ return(null); }
    return(
        <div className="build-detail"></div>
    );

};

export default Detail;
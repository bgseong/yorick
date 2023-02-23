import React, { useState } from 'react';
import './build-all.css';

import Comet from '../img/comet.png';
import Uit from '../img/uit.png';

import Detail from './detail';

const Build_all= (props) => {
    let [hid, changeHid] = useState(true);

    const changeHidden= () => {
        if (hid === true) { changeHid(false) }
        else { changeHid(true); }
    };
    return(
        <>
        <div className="build-simple" onClick={()=>{changeHidden()}}>
            <div className="runes">
            <img src={Comet} alt="유성"></img>
            <img src={Uit} alt="영감"></img>
            </div>
        <div className="items"></div>
        </div>
        <Detail hidden={hid}/>     
      </>
    );

};

export default Build_all;
import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import './build-all.css';

import Comet from '../img/comet.png';
import Uit from '../img/uit.png';

import Hydra from '../img/hydra.png';
import Moon from '../img/moon.png';
import Selida from '../img/selida.png';
import {useSelector} from "react-redux";

import Detail from './detail';



const Build_all= (props) => {

    let {id} = useParams();

    console.log(id)

    const build_data = useSelector(state => state.buildData);

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
        <div className="items">
            <img src={Hydra} alt=""></img>
            <img src={Moon} alt=""></img>
            <img src={Selida} alt=""></img>
        </div>
        </div>
        <Detail hidden={hid}/>     
      </>
    );

};

export default Build_all;
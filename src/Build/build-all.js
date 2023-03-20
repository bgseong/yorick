import React, { useState } from 'react';
import './build-all.css';

import Comet from '../img/comet.png';
import Uit from '../img/uit.png';


import Detail from './detail';



const Build_all= (props) => {

    
    console.log("hey",props.data)

    let [hid, changeHid] = useState(true);
    
    const changeHidden= () => {
        if (hid === true) { changeHid(false) }
        else { changeHid(true); }
    };
    return(
        <div>
            <div className="build-simple" onClick={()=>{changeHidden()}}>
                <div className="runes">
                <img src={Comet} alt="유성"></img>
                <img src={Uit} alt="영감"></img>
                </div>
                <div className="items">
                    <img src={"https://ddragon.leagueoflegends.com/cdn/13.5.1/img/item/"+props.data.item0+".png"} alt=""></img>
                    <img src={"https://ddragon.leagueoflegends.com/cdn/13.5.1/img/item/"+props.data.item1+".png"} alt=""></img>
                    <img src={"https://ddragon.leagueoflegends.com/cdn/13.5.1/img/item/"+props.data.item2+".png"} alt=""></img>
                    <img src={"https://ddragon.leagueoflegends.com/cdn/13.5.1/img/item/"+props.data.item3+".png"} alt=""></img>
                    <img src={"https://ddragon.leagueoflegends.com/cdn/13.5.1/img/item/"+props.data.item4+".png"} alt=""></img>
                    <img src={"https://ddragon.leagueoflegends.com/cdn/13.5.1/img/item/"+props.data.item5+".png"} alt=""></img>
                    <img src={"https://ddragon.leagueoflegends.com/cdn/13.5.1/img/item/"+props.data.item6+".png"} alt=""></img>
                </div>
            </div>
            <Detail hidden={hid}/>
      </div>
    );

};

export default Build_all;
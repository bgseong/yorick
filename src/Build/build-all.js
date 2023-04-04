import {React, useEffect, useState} from 'react';
import './build-all.css';

import Uit from '../img/uit.png';
import {loadRune} from "../modules/runeSlice";

import Detail from './detail';
import {useDispatch, useSelector} from "react-redux";


const Build_all= (props) => {
    const dispatch = useDispatch();
    const rune_data = useSelector(state => state.runeData);

    useEffect(() => {
        dispatch(loadRune());
    }, [])
    let rune1
    try {
        rune1=rune_data.data.find(v => v.id === props.data.perk0).icon
    } catch (e) {
        rune1 = "no"
    }
    

    let [hid, changeHid] = useState(true);
    
    const changeHidden= () => {
        if (hid === true) { changeHid(false) }
        else { changeHid(true); }

    
    };
    return(
        <div>
            <div className="build-simple" onClick={()=>{changeHidden()}}>
                <div className="runes">
                <img className="main-rune"src={"https://ddragon.canisback.com/img/"+rune1} alt="메인 룬"></img>
                <img src={Uit} alt="보조룬"></img>
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
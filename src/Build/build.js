import {React, useEffect, useState} from 'react';
import './build.css';
import Build_all from './build-all';

import loadData from "../modules/dataSlice";
import {useDispatch, useSelector} from "react-redux";



const Build= () => {

  const dispatch = useDispatch();
  const build_data = useSelector(state => state.data);

  dispatch(loadData);

  console.log(build_data)
  const insertChampIcon = () =>{
    let arr=[];
    for (let i = 0; i<build_data.data.length; i++){
      if (!(<img className="champ-icon" src={"//ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/"+build_data[i].enemy+".png"} alt="icon"></img> in arr)) {
        arr.push(
          <img className="champ-icon" src={"//ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/"+build_data[i].enemy+".png"} alt="icon"></img>
        );
      }
    }
    return arr;
  } 

  return (
    <div className="container-build">
      <div className="champs-con">
        {insertChampIcon()}
      </div>
      <div className="build-con">
        <div className="build-list" >
          <Build_all />
        </div>
      </div>
    </div>
  )
  
};
    
export default Build;
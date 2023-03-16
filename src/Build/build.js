import {React, useEffect} from 'react';
import { Route } from 'react-router-dom';
import './build.css';
import Build_all from './build-all';

import {loadData} from "../modules/dataSlice";
import {useDispatch, useSelector} from "react-redux";



const Build= ({ match }) => {

  const dispatch = useDispatch();
  const build_data = useSelector(state => state.buildData);

  useEffect(() => {
    dispatch(loadData());
  }, [])

  console.log(build_data)
  const insertChampIcon = () =>{
    try {
      let arr=[];
      for (let i = 0; i<build_data.data.length; i++){
        if (!(<img className="champ-icon" src={"http://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/"+build_data.data[i].enemy+".png"} alt="icon" /> in arr )) {
          arr.push(
            <a href={"https://localhost:3000/build/"+build_data.data[i].enemy}>
              <img className="champ-icon" src={"http://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/"+build_data.data[i].enemy+".png"} alt="icon" />
            </a>
          );
        }
      }
      return arr;
    }
    catch (err) {
      console.log("로딩중")
    }
  } 

  const insertBuild = () =>{
    let arr=[];
      for (let i = 0; i<build_data.data.length; i++) {
        arr.push(
        <Route path={`${match.path}/${build_data.data[i].enemy}}`} component={Build_all} />
        )
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
          {insertBuild()}
        </div>
      </div>
    </div>
  )
  
};
    
export default Build;
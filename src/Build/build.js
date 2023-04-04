import {React, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import './build.css';
import Build_all from './build-all';

import {loadData} from "../modules/dataSlice";
import {useDispatch, useSelector} from "react-redux";



const Build= () => {

  const dispatch = useDispatch();
  const build_data = useSelector(state => state.buildData);

  useEffect(() => {
    dispatch(loadData());
  }, [])




  const insertChampIcon = () =>{
    try {
      let arr=[];
      for (let i = 0; i<build_data.data.length; i++){
          arr.push(
            <a href={"/build/"+build_data.data[i].enemy}>
              <img className="champ-icon" src={"http://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/"+build_data.data[i].enemy+".png"} alt="icon" />
            </a>
          )
        }
        const setarr = new Set(arr);
        arr = setarr
        return arr;
      }
    catch (err) {
      console.log("로딩중")
    }
  } 
  let {id} = useParams();
  let res = build_data.data.filter(it => it.enemy.includes(id));

  const insertBuild=() =>{
    let arr=[];
    for (let i=0;i<res.length;i++) {
      arr.push(
        <div>
          <Build_all data={res[i]}/>
        </div>
      );
    }
    return arr;
  };

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
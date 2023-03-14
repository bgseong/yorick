import {React, useEffect, useState} from 'react';
import './build.css';
import axios from 'axios';
import Build_all from './build-all';



const Build= (props) => {
  const [data, setData] = useState([]);
  	
  	useEffect(() => {
		const fetchData = async() => {
          const res = await axios.get('https://port-0-yorick-backend-3kzv72nlemj02qx.sel3.cloudtype.app/Builds');
          return res.data;
        }	
        
        fetchData().then(res => setData(res));
    }, []);
    
    const insertChampIcon = () =>{
      let arr=[];
      for (let i = 0; i<data.length; i++){
        if (!(<img className="champ-icon" src={"//ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/"+data[i].enemy+".png"} alt="icon"></img> in arr)) {
          arr.push(
            <img className="champ-icon" src={"//ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/"+data[i].enemy+".png"} alt="icon"></img>
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
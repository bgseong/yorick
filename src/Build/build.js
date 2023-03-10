import {React, useEffect, useState} from 'react';
import './build.css';
import axios from 'axios';
import Build_all from './build-all';


import Jax from '../img/jax.png';
import Darius from '../img/darius.png';
import Aatrox from '../img/aatrox.png';
import Gangplank from '../img/gangplank.png';
import Mundo from '../img/mundo.png';



const Build= (props) => {
  const [data, setData] = useState([]);
  	
  	useEffect(() => {
		const fetchData = async() => {
          const res = await axios.get('http://localhost:8000/Builds');
          return res.data;
        }	
        
        fetchData().then(res => setData(res));
    }, []);

  return (
    <div className="container-build">
      <div className="champs-con">
        <img className="champ-icon" src={Jax} alt="Jax"></img>
        <img className="champ-icon" src={Darius} alt="Darius"></img>
        <img className="champ-icon" src={Mundo} alt="Mundo"></img>
        <img className="champ-icon" src={Aatrox} alt="Aatox"></img>
        <img className="champ-icon" src={Gangplank} alt="Gangplank"></img>
        
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
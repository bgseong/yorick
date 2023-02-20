import React from 'react';
import './main.css';

import bookImg from '../img/book.png';
import userImg from '../img/user.png';
import rankingImg from '../img/ranking.png';

class Main extends React.Component{
  render(){
    return (
      <div className="container">
        <div className="title">
          <div className='main-title'>
            <div className='main'>
              <p>YR INFO</p>
            </div>
            <div className='sub'>
              <p>뷇</p>
            </div>
          </div>
        </div>
        <div className='menu'>
          <img src={bookImg} alt = "빌드아이콘"></img>
          <div>빌드</div>
          </div>
        <div className='menu'>
          <img src={rankingImg} alt = "랭킹아이콘"></img>
          <div>랭킹</div>
        </div>
        <div className='menu'>
          <img src={userImg} alt = "유저아이콘"></img>
          <div>MY</div>
        </div>
      </div>
    )
  }
}
    
export default Main;
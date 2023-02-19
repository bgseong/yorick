import React from 'react';
import './main.css';
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
              <p>요릭을 사랑하는 당신을 위한 정보들</p>
            </div>
          </div>
        </div>
        <div className='menu'>빌드</div>
        <div className='menu'>랭킹</div>
        <div className='menu'>나의 요릭</div>
      </div>
    )
  }
}
    
export default Main;
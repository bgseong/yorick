import React from 'react';
import './nav.css';
class Nav extends React.Component{
  render(){
    return (
      <div className="nav">
        <ul>
          <li className='main-button' href="#">YR INFO</li>
          <li className='menu-button' href="#">홈</li>
          <li className='menu-button' href="#">빌드</li>
          <li className='menu-button' href="#">랭킹</li>
          <li className='menu-button' href="#">나의 요릭</li>
        </ul>
      </div>
    )
  }
}
    
export default Nav;
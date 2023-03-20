import React from 'react';
import './nav.css';
class Nav extends React.Component{
  render(){
    return (
      <div className="nav">
        <ul>
          <li className='main-button'><a href="/">YR INFO</a></li>
          <li className='menu-button'><a href="/">홈</a></li>
          <li className='menu-button'><a href="/build/all">빌드</a></li>
          <li className='menu-button'><a href="/">랭킹</a></li>
          <li className='menu-button'><a href="/">나의 요릭</a></li>
        </ul>
      </div>
    )
  }
}
    
export default Nav;
import React, { Component } from 'react';
import Nav from './Nav/nav';
import Main from './Main/main'
import './App.css';


          
class App extends Component {
  render() {
    return (
      <div className="App" 
        style={{
          display: 'flex',
          width: `100vw`,
          height: `100vh`,
        }}>
          <Nav></Nav>
          <div className='main-body'>
            <Main></Main>
          </div>
      </div>
    );
  }
}
           
export default App;
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav/nav';
import Main from './Main/main';
import Build from './Build/build';
import NotFound from './NotFount';
import './App.css';


          
class App extends Component {
  render() {
    return (
      <div className="App" 
        style={{
          display: 'grid',
          
          width: `100vw`,
          height: `100vh`,
          
          gridTemplateColumns:'200px 1fr',
        }}>
          <Nav></Nav>
          <BrowserRouter>
            <div className='main-body'>
              <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/build' element={<Build />}></Route>
              </Routes>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}
           
export default App;
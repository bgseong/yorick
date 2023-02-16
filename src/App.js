import React, { Component } from 'react';
import Header from './Header/header';
import Body from './Body/body';
import Footer from './Footer/footer';


import backgroundImg from './img/1.png';

          
class App extends Component {
  render() {
    return (
      <div className="App" 
        style={{

          backgroundImage: `url('${backgroundImg}'), linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1))`,
          backgroundBlendMode: 'overlay',
          backgroundRepeat: `no-repeat`,
          backgroundPosition:`top center`,
          backgroundSize: `cover`,
          backgroundAttachment: `fixed`,

          width: `100vw`,
          height: `100vh`,
          opacity: `0.7`,


        }}>

        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}
           
export default App;
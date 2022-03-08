import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import StateExample from './StateExample';
import Lab01UsingState from './Lab01UsingState';

function App() {
  return (
    <div>
      <Lab01UsingState/>
    </div>
  );

  // return (
  //   <div>
  //     <StateExample/>
  //   </div>
  // );
  
  // return (
  //   <div className="App">
  //       <Header/>
  //       <hr/>
  //       <br/><br/><br/><br/>
  //       <Footer/>
  //   </div>
  // );
}

export default App;

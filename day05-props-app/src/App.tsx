import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DisplayDetails } from './DisplayDetails';

function App() {
  return (
    <div className="App">
      <DisplayDetails title="Hello there" year={2022}/> <br/>
      <DisplayDetails title="Hi! TGIF"/> 
    </div>
  );
}

export default App;

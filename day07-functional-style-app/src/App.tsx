import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { StateHookExample } from './StateHookExample';

function App() {
  return (
    <div className="App">
        <Header title='Function component'/>
        <hr/>
        <StateHookExample/> 
        <hr/>
        <br/><br/><br/><br/>
        <Footer year={2021}/>
    </div>
  );
}

export default App;

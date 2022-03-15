import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { StateHookExample } from './StateHookExample';
import { StateHookExample2 } from './StateHookExample2';
import { Lab05 } from './Lab05';

function App() {
  return (
    <div className="App">
        <Header title='Function component'/>
        <hr/>
        <Lab05/>
        <hr/>
        <StateHookExample2/> 
        <hr/>
        <br/><br/><br/><br/>
        <Footer year={2021}/>
    </div>
  );
}

export default App;

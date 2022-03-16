import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { BookDetails, BookList, Contact, Home } from './MyPages';
import { MemoAndCallbacksExample } from './MemoAndCallbacks';


function App() {
  return (
    <div>
      <MemoAndCallbacksExample/>
    </div>
    // <div className="App">
    //    <HashRouter>
    //      <div>
    //        <Routes>
    //         <Route path="/" element={<Home/>}></Route>
    //         <Route path="/contact" element={<Contact/>}></Route>
    //         <Route path="/books" element={<BookList/>}></Route>
    //         <Route path="/bookdetails/:title" element={<BookDetails/>}></Route>
    //        </Routes>
    //      </div>
    //    </HashRouter>      
    // </div>
  );
}

export default App;

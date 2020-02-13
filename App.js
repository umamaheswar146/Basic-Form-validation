import React, { Component } from 'react';
import './App.css';
import SearchButton from './SearchButton';
import  Home from './Home';
class App extends Component{
  render(){
    return (
      <div className="App">
        {/* ======================================================= */}
     <Home/>
     <SearchButton/>
      </div>
    );
  }
}

export default App;

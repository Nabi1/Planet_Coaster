import React, { Component } from 'react';
import './App.css';
import FiltersImg from './components/FiltersImg';
import FiltersText from './components/FiltersText';
import FetchData from './components/FetchData';
import Plan from './components/Plan'; 
import MapGrid from './components/MapGrid'


class App extends Component {
  render() {
    return (
      <div className="App">
      <FiltersText />
      <FiltersImg />
      <FetchData />
        <header className="App-header">
         <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
   
        <MapGrid />
      </div>
    );
  }
}

export default App;

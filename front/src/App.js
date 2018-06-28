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
  
        <MapGrid />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import FiltersImg from './components/FiltersImg';
import FiltersText from './components/FiltersText';
import FetchData from './components/FetchData';
import Plan from './components/Plan'; 
import MapGrid from './components/MapGrid'
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <FiltersText />
        <FiltersImg />
        <FetchData />
          <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <img src="../img/plan.png" usemap="#image-map">

          <map name="image-map">
              <area target="" alt="title" title="title" href="link" coords="751,235" shape="rect"/>
          </map>
    
          {/* <MapGrid /> */}
      </div>
    );
  }
}

export default App;

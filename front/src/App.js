import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';

import AllComponents from './components/AllComponents';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <h1>BIENVENUE A DESPAIRWORLD</h1>
        <AllComponents/>
      </div>
    );
  }
}

export default App;

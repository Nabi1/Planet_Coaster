import React, { Component } from 'react';
import './App.css';
import FiltersImg from './components/FiltersImg';
import FiltersText from './components/FiltersText'


class App extends Component {
  render() {
    return (
      <div className="App">
        <FiltersText />
        <FiltersImg />
      </div>
    );
  }
}

export default App;

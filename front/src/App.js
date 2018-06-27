import React, { Component } from 'react';
import './App.css';
import FiltersImg from './components/FiltersImg';
import FiltersText from './components/FiltersText';
import FetchData from './components/FetchData';
import PopUp from './components/PopUp'


class App extends Component {
  render() {
    return (
      <div className="App">
        <FiltersText />
        <FiltersImg />
        <PopUp />
        <FetchData />
      </div>
    );
  }
}

export default App;

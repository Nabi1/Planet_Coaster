import React, { Component } from 'react';
import './App.css';
import FiltersImg from './components/FiltersImg';
import FiltersText from './components/FiltersText';
import FetchData from './components/FetchData';
import ShowResults from './components/ShowResults';




class App extends Component {
  render() {
    return (
      <div className="App">
        <FiltersText />
        <FiltersImg />
        <FetchData />
        <ShowResults />
      </div>
    );
  }
}

export default App;

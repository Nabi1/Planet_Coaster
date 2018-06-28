import React, { Component } from 'react';
import './App.css';
import FiltersImg from './components/FiltersImg';
import FiltersText from './components/FiltersText';
import FetchData from './components/FetchData';
import ShowResults from './components/ShowResults';
=
class App extends Component {
  render() {
    return (
      <div className="App">
        <FiltersText />
        <FiltersImg />
        <ShowResults />
        <FetchData />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

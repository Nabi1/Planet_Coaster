import React, { Component } from 'react';
import './App.css';
// import FiltersImg from './components/FiltersImg';
// import FiltersText from './components/FiltersText';
// import FetchData from './components/FetchData';
// import ShowResults from './components/ShowResults';
// import MapGrid from './components/MapGrid';
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

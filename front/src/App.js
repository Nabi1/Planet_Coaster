import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import AllComponents from './components/AllComponents';
import Home from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/carte" component={AllComponents} />
          <Home />
        </Switch>
      </div>
    );
  }
}

export default App;

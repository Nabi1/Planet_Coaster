import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import TemporaryDrawer from './components/TemporaryDrawer';
// Components
import AllComponents from './components/AllComponents';
import HomePage from './components/HomePage';

// Routes
class App extends Component {
  render() {
    return (
      <div className="App">
        <TemporaryDrawer />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/allcomponents" component={AllComponents} />
          <AllComponents />
        </Switch>
      </div>
    );
  }
}

export default App;

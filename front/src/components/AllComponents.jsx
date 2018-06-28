import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MapGrid from './MapGrid';
import ShowResults from './ShowResults';
import FiltersImg from './FiltersImg';
import FiltersText from './FiltersText';

class AllComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>BIENVENUE A DESPAIRWORLD</h1>
        <Grid container spacing={24}>
          <Grid item xs={12} md={2}>
            <FiltersText />
            <ShowResults />
            <FiltersImg />
          </Grid>

          <Grid item xs={12} md={10}>
            <MapGrid />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AllComponents;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Map from './Map';
import ShowResults from './ShowResults';
import FiltersImg from './FiltersImg';
import FiltersText from './FiltersText';
import NavBar from './NavBar';

class AllComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <Grid container spacing={24}>
          <Grid item xs={12} md={2}>
            <FiltersText />
            <ShowResults />
            <FiltersImg />
          </Grid>

          <Grid item xs={12} md={10}>
            <Map/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AllComponents;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MapGrid from './MapGrid';
import ShowResults from './ShowResults';

class AllComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} md={2}>
            <ShowResults />
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

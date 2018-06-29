import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import map from '../img/index.png';
import _ from 'lodash';

const styles = theme => ({
  parentMap: {
    width: '100%',
    overflow: 'auto',
    position: 'relative',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  map: {},
});

class Map extends Component {
  render() {
    const { classes, datas } = this.props;
    return (
      <div className={classes.parentMap}>
        <img className={classes.map} src={map} />
        {!_.isEmpty(datas) &&
          datas.attractions.map(data => (
            <img key={data.id} src={data.srcLogo} style={data.style} id={data.id} />
          ))}
        {!_.isEmpty(datas) &&
          datas.resto.map(data => (
            <img key={data.id} src={data.srcLogo} style={data.style} />
          ))}
        {!_.isEmpty(datas) &&
          datas.toilettes.map(data => (
            <img key={data.id} src={data.srcLogo} style={data.style} />
          ))}
        {!_.isEmpty(datas) &&
          datas.sortiesSecours.map(data => (
            <img key={data.id} src={data.srcLogo} style={data.style} />
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    datas: state.datasReducer.datas,
    loading: state.datasReducer.loading,
    error: state.datasReducer.error,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Map));

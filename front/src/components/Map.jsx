import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import map from '../img/index.png';
import _ from 'lodash';
import Tooltip from '@material-ui/core/Tooltip';
import compose from 'recompose/compose';
import { bindActionCreators } from 'redux';
import { fetchDatas, showDataBox } from '../actions/fetchActions';

const styles = theme => ({
  parentMap: {
    width: '100%',
    overflow: 'auto',
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
  switchType = item => {
    this.setState({
      witchOne: item,
    });
  };

  render() {
    const { classes, datas, witchOne, showIcons } = this.props;
    return (
      <div className={classes.parentMap}>
        <img className={classes.map} src={map} />
        {/* ATTRACTION*/}

        {!_.isEmpty(datas) &&
          showIcons.isAttractions &&
          datas.attractions.map(data => (
            <Tooltip title={data.name} placement="top">
              <img
                onClick={() => {
                  this.switchType(data.id);
                }}
                key={data.id}
                src={data.srcLogo}
                style={data.style}
                alt={data.name}
              />
            </Tooltip>
          ))}
        {/* RESTO*/}
        {!_.isEmpty(datas) &&
          showIcons.isResto &&
          datas.resto.map(data => (
            <Tooltip title={data.name} placement="top">
              <img
                onClick={() => {
                  this.switchType(data.id);
                }}
                key={data.id}
                src={data.srcLogo}
                style={data.style}
                alt={data.name}
              />
            </Tooltip>
          ))}
        {/* TOILETTES*/}
        {!_.isEmpty(datas) &&
          showIcons.isToilettes &&
          datas.toilettes.map(data => (
            <Tooltip title={data.name} placement="top">
              <img
                onClick={() => {
                  this.switchType(data.id);
                }}
                key={data.id}
                src={data.srcLogo}
                style={data.style}
                alt={data.name}
              />
            </Tooltip>
          ))}
        {/* SORTIES*/}
        {!_.isEmpty(datas) &&   showIcons.isSortie &&
          datas.sortiesSecours.map(data => (
            <Tooltip title={data.auxNormes} placement="top">
              <img
                onClick={() => {
                  this.switchType(data.id);
                }}
                key={data.id}
                src={data.srcLogo}
                style={data.style}
                alt={data.name}
              />
            </Tooltip>
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
    witchOne: state.datasReducer.witchOne,
    showIcons: state.showIconsReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDatas, showDataBox }, dispatch);
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Map);

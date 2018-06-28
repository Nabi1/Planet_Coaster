import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import map from '../img/index.png';
import _ from 'lodash';
import Tooltip from '@material-ui/core/Tooltip';
import compose from 'recompose/compose';
import { bindActionCreators } from 'redux';
import { fetchDatas } from '../actions/fetchActions';

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
  
  switchType = (item) => {
    this.setState({
      witchOne: item,
    });
  };
  
  render() {
    const { classes, datas, witchOne} = this.props;
    return (
      <div className={classes.parentMap}>
        <img className={classes.map} src={map}/>
        {!_.isEmpty(datas) && datas.attractions.map((data) => (
            <Tooltip title={data.name} placement="top">
            <img  onClick={() => {
                      this.switchType(data.id);
                    }} key={data.id} src={data.srcLogo} style={data.style} alt={data.name}/>
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
    };
  }
 
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDatas }, dispatch);
  }

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Map);

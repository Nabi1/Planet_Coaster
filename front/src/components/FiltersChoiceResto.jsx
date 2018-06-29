import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDatas } from '../actions/fetchActions';
import _ from 'lodash';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

class FiltersChoiceResto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wichType: 'resto',
    };
    this.props.fetchDatas();
  }

  render() {
    const { classes, datas } = this.props;
    const { isAttractions, isResto, isToilettes, witchOne } = this.state;
    return (
      <div>
        <div class="mdc-form-field">
          <div class="mdc-checkbox">
            <label for="checkbox-1">Peu d'intoxications alimentaires</label>
            <input type="checkbox"
                   class="mdc-checkbox__native-control"
                   id="checkbox-1"/>
          </div>
          <div class="mdc-checkbox">
            <label for="checkbox-2">Moins de 5 poils pubiens moyen par assiette</label>
            <input type="checkbox"
                   class="mdc-checkbox__native-control"
                   id="checkbox-2"/>
          </div>
          <div class="mdc-checkbox">
            <label for="checkbox-3">Pas de rats</label>
            <input type="checkbox"
                   class="mdc-checkbox__native-control"
                   id="checkbox-3"/>
          </div>
          <div class="mdc-checkbox">
            <label for="checkbox-4">Pas trop d'urines différentes par cacahuète</label>
            <input type="checkbox"
                   class="mdc-checkbox__native-control"
                   id="checkbox-4"/>
          </div>
        </div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDatas }, dispatch);
}

FiltersChoiceResto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(FiltersChoiceResto);

import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDatas } from '../actions/fetchActions';

class FiltersChoiceAttractions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wichType: 'attractions',
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
            <label for="checkbox-1">Nombre de vomis faible</label>
            <input type="checkbox"
                   class="mdc-checkbox__native-control"
                   id="checkbox-1"/>
          </div>
          <div class="mdc-checkbox">
            <label for="checkbox-2">Moins de 400 chaussures perdues</label>
            <input type="checkbox"
                   class="mdc-checkbox__native-control"
                   id="checkbox-2"/>
          </div>
          <div class="mdc-checkbox">
            <label for="checkbox-3">Pas de mort</label>
            <input type="checkbox"
                   class="mdc-checkbox__native-control"
                   id="checkbox-3"/>
          </div>
          <div class="mdc-checkbox">
            <label for="checkbox-4">Moins de 50 vis manquantes</label>
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

FiltersChoiceAttractions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(FiltersChoiceAttractions);

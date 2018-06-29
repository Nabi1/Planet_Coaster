import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDatas } from '../actions/fetchActions';

class FiltersChoiceToilettes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wichType: 'toilettes',
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
            <label for="checkbox-1">Moins de 30 enfants dévorés</label>
            <input type="checkbox"
                   class="mdc-checkbox__native-control"
                   id="checkbox-1"/>
          </div>
          <div class="mdc-checkbox">
            <label for="checkbox-2">Fonctionnelle</label>
            <input type="checkbox"
                   class="mdc-checkbox__native-control"
                   id="checkbox-2"/>
          </div>
          <div class="mdc-checkbox">
            <label for="checkbox-3">Moins d'1h d'attente</label>
            <input type="checkbox"
                   class="mdc-checkbox__native-control"
                   id="checkbox-3"/>
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

FiltersChoiceToilettes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(FiltersChoiceToilettes);

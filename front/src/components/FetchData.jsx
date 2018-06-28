// React
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchDatas } from "../actions/fetchActions";
import _ from 'lodash';

// Components
class fetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchDatas());
  }

  render() {
    const { error, loading, datas } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {/* <ul>
          {this.state.loaded && data.attractions.map(traveler => (
          <li key={traveler.id}>{traveler.type}</li>
          ))}
        </ul>  */}
        <ul>
          {!_.isEmpty(datas) && datas.attractions.map(data =>
            <li key={data.id}>{data.type}</li>
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return({
    datas: state.datasReducer.datas,
    loading: state.datasReducer.loading,
    error: state.datasReducer.error
  })
};


export default connect(mapStateToProps)(fetchData);

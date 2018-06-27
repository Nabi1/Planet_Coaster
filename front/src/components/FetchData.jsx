// React
import React, { Component } from 'react';
// Components
class fetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    fetch('../data.json')
      .then((response) => {
        response.json();
      })
      .then(data =>
        this.setState({
          result: data,
        })
      );
  }
  render() {
    return <div>{this.state.result}</div>;
  }
}

export default fetchData;

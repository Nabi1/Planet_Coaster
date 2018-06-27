// React
import React, { Component } from 'react';
// Components
class fetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch(
      'https://rawgit.com/Nabi1/Planet_Coaster/createJson/front/src/data.json'
    )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  render() {
    const {data} = this.state;
    return (
      <div>
        ok
      </div>
    )
  }
}

export default fetchData;

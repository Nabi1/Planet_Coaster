// React
import React, { Component } from 'react';
// Components
import ShowResults from './ShowResults';
class fetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      loaded: false,
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
            loaded: true,
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
    const { data } = this.state;
    return (
      <div>
        <ul>
          {this.state.loaded &&
            data.attractions.map(traveler => (
              <li key={traveler.id}>{traveler.type}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default fetchData;

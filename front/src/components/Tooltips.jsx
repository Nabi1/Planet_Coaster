import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

class Toolips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClickMessage: ''
     };
  }

  ShowMessage = () => {
    this.setState({ onClickMessage: "HELLO" });
  };

    render () {
     return(
      <div>
        <a data-tip='INFOS' onClick={this.ShowMessage()}>HERE</a>
         <ReactTooltip delayHide={2000} effect='solid'/>
      </div>
    )
  }
}

export default Toolips;

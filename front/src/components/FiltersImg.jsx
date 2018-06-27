import React, { Component } from 'react';
import './../App.css';

class FiltersImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    if(e.target.name === 'family'){
      alert('family')
    }
    else if(e.target.name === 'children'){
      alert('children')
    }
    else if(e.target.name === 'adventure'){
      alert('adventure')
    }
  }




  render() {
    return (
      <div>
        <span title="Pour toute la famille"><img name='family' className='filterAge' src='https://image.flaticon.com/icons/svg/374/374971.svg' onClick={this.handleClick} alt='family '/></span>
        <span title="Pour les enfants"><img name='children' className='filterAge' src='https://image.flaticon.com/icons/svg/344/344754.svg' onClick={this.handleClick} alt='children' /></span>
        <span title="Pour les plus aventuriers"><img name='adventure' className='filterAge' src='https://image.flaticon.com/icons/svg/188/188500.svg' onClick={this.handleClick} alt='adventure' /></span>
      </div>
    );
  }
}

export default FiltersImg;

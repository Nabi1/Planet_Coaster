import React, { Component } from 'react';
import './../App.css';

class FiltersImg extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [], data : [], loaded: false, attractions: []};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
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


  handleClick(e){
    if(e.target.name === 'family'){
      this.state.loaded && this.state.data.attractions.map(traveler => (
      (traveler.type === 'Horreur') ? this.setState({attractions:traveler}) : console.log(this.state.attractions) ))
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
        {
						(this.state.attractions.length !== 0)
							?
							Object.keys(this.state.attractions).map((k, i) => (
                <ul button key={k} >
                  <li primary={`${k}: ${this.state.attractions[k]}`}>{this.state.attractions[k]}</li>
                </ul>
							))
							:
              ''
					}
      </div>
    );
  }
}

export default FiltersImg;

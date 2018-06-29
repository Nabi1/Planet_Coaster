import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import home from '../img/home2.jpg';
import logo from '../img/logo.svg';
import mon1 from '../img/mongolfiere.svg';
import mon2 from '../img/mongolfiere2.svg';
import mon3 from '../img/mongolfiere3.svg';
import roue from '../img/roue.svg';
import nacelle from '../img/nacelle.svg';
import bonhome from '../img/bonhome.svg';
import alex from '../img/alex.png';
import greg from '../img/greg.png';

const styles = theme => ({
  parentMap: {
    width: '100%',
    overflow: 'auto',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  logo: {
    position: 'absolute',
    top: '10%',
    left: '30%',
    width: '550px',
    zIndex:1
  },
  mon1: {
    position: 'absolute',
    top: '50%',
    right: '15%',
    width: '80px',
    zIndex:1
  },
  mon2: {
    position: 'absolute',
    top: '30%',
    left: '5%',
    width: '80px',
    zIndex:1
  },
  mon3: {
    position: 'absolute',
    top: '40%',
    right: '5%',
    width: '80px',
    zIndex:1
  },
  roue: {
    position: 'absolute',
    top: '48%',
    right: '20%',
    width: '250px',
    zIndex:1
  },
  nacelle: {
    position: 'absolute',
    top: '48%',
    right: '20%',
    width: '250px',
    zIndex:1
  },
  bonhome: {
    position: 'absolute',
    top: '80%',
    left: '30%',
    width: '200px',
    zIndex:1
  },
  alex: {
    position: 'absolute',
    top: '82%',
    left: '33%',
    maxWidth: '30px',
    zIndex:1
  },
  greg: {
    position: 'absolute',
    top: '82%',
    left: '39%',
    maxWidth: '30px',
    zIndex:1
  },
  fond: {
    position: 'relative',
  }
});

const move = keyframes`
0%{
  transform:translateX(0);
  opacity:1;
}
50%{
  transform:translateY(10px);
  opacity:1;
}
100%{
  opacity:1;
}
`;
const Move = styled.div`
  animation: ${move} 4s linear infinite;
`;
const move2 = keyframes`
0%{
  transform:translateX(0);
  opacity:1;
}
50%{
  transform:translateY(15px);
  opacity:1;
}
100%{
  opacity:1;
}
`;
const Move2 = styled.div`
  animation: ${move2} 2s linear infinite;
`;

const scale = keyframes`
0%{
  transform: scale(1.0);
}
50%{
  transform: scale(1.1);
}
100%{
  transform: scale(1.0);
}
`;
const Scale = styled.div`
  animation: ${scale} 4s linear infinite;
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;
const Rotate = styled.div`
  animation: ${rotate} 5s linear infinite;;
`;

const rotate2 = keyframes`
0% {
  transform: rotate(0deg);
}
50% {
  transform: rotate(20deg);
}
100% {
  transform: rotate(0deg);
}
`;
const Rotate2 = styled.div`
  animation: ${rotate2} 2s linear infinite;;
`;

const AllComponent = props => <Link to="/carte" {...props} />;

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.parentMap}>
        <img className={classes.fond} src={home} alt="Home Page" />
        <Scale className={classes.logo}><Link to="/carte" component={AllComponent}><img src={logo} alt="Parc du Petit Gregory" /></Link></Scale>
        <Rotate className={classes.roue}><img src={roue} alt="Roue" /></Rotate>
        <img className={classes.nacelle} src={nacelle} alt="Nacelle" />
        <Move className={classes.mon1}><img src={mon1} alt="Mongolfiere" /></Move>
        <Move className={classes.mon2}><img src={mon2} alt="Mongolfiere 2" /></Move>
        <Move2 className={classes.mon3}><img src={mon3} alt="Mongolfiere 3" /></Move2>
        <img className={classes.bonhome} src={bonhome} alt="Bonhome" />
        <Rotate2 className={classes.alex}><img src={alex} alt="Alex" /></Rotate2>
        <Rotate2 className={classes.greg}><img src={greg} alt="Fred" /></Rotate2>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

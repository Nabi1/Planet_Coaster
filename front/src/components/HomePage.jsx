import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import home from '../img/home2.jpg'

const styles = theme => ({
  parentMap: {
    width:'100%',
    overflow: 'auto'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  map: {
  }
});

class Home extends Component {

  render() {
    const { classes} = this.props;
    return (
      <div className={classes.parentMap}>
        <img src={home} alt='Home Page'/>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

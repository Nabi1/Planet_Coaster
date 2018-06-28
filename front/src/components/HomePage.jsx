import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import home from '../img/home2.jpg';

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
  map: {},
});

const AllComponent = props => <Link to="/carte" {...props} />;

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.parentMap}>
        <img src={home} alt="Home Page" />
        <Button color="inherit" component={AllComponent}>
          Carte
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

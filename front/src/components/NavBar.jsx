import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../img/logo.svg'

const styles = {
    root: {
        flexGrow: 1,
    },
    nav: {
        backgroundColor:'#17FBD2',
        marginTop:'40px',
        position:'relative',
        zIndex:'0'
    },
    image: {
        flex: 1,
        maxWidth:'220px',
        position:'absolute',
        zIndex:'10',
        top:'0',
        left:'20px'
    }
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.nav}>
            
            <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton> */}
            
            {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
        </AppBar>
        <img src={logo} alt="Parc du Petit Gregory" className={classes.image}/>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
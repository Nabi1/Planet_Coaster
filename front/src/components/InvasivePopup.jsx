import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 45) - 10;
}

function getRandomMessage(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
  };

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * "auto",
    height: theme.spacing.unit * "auto",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  img: {
    width : "auto",
    height : "auto"
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    number: getRandomMessage(8),
    image: ""
  };

  componentWillMount() {
    if (this.state.number === 1) {this.setState({ image : "https://files.slack.com/files-tmb/T8N6XQH6V-FBEH3T6KS-416b8ab41c/sans_titre_7_720.jpg"})}
    else if (this.state.number === 2) {this.setState({ image : "http://www.vins-et-spiritueux.com/wp-content/uploads/2018/02/ves_a-quoi-ressemblent-les-pubs-dalcool-et-de-tabac-les-plus-kitsch-du.jpg"})}
    else if (this.state.number === 3) {this.setState({ image : "http://www.william-saurin.fr/wp-content/uploads/2015/08/william-saurin-cassoulet-un-regal.jpg"})}
    else if (this.state.number === 4) {this.setState({ image : "http://www.konbini.com/wp-content/blogs.dir/3/files/2015/07/012cocedropkids-810x497.jpg"})}
    else if (this.state.number === 5) {this.setState({ image : "http://la-femme-au-travers-de-la-pub.e-monsite.com/medias/images/mythologie-roland-barthes-publicite-de-la-profondeur-nivea-346200-scalewidth-460.jpg"})}
    else if (this.state.number === 6) {this.setState({ image : "https://group.renault.com/wp-content/uploads/2015/06/3.jpg"})}
    else if (this.state.number === 7) {this.setState({ image : "http://cache.magicmaman.com/data/photo/w800_c18/3o/publicite-alcool-1900-pub-alcool-1900-big1.jpg"})}
    else if (this.state.number === 8) {this.setState({ image : "http://www.llllitl.fr/wp-content/uploads/2013/03/llllitl-lu-tuc-biscuits-ap%C3%A9ritif-sal%C3%A9-promo-publicit%C3%A9-marketing-sexy-tendancieux-agence-draft-fcb-paris-2.jpg"})}
}

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>CLOSE</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="subheading" id="simple-modal-description">
              <img src={this.state.image} className={classes.img}/>
            </Typography>
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
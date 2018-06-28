import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class FiltersText extends React.Component {
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="uncontrolled-native">
            L'ambiance de mon attraction
          </InputLabel>
          <NativeSelect
            defaultValue={2}
            input={<Input name="typeAttraction" id="uncontrolled-native" />}
          >
            <option value="" />
            <option value={1}>Dirty Dancing</option>
            <option value={2}>American Horror Show</option>
            <option value={3}>Le diner de cons</option>
          </NativeSelect>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="uncontrolled-native">
            Le temps d'attente de mon attraction
          </InputLabel>
          <NativeSelect
            defaultValue={1}
            input={<Input name="tempsAttente" id="uncontrolled-native" />}
          >
            <option value="" />
            <option value={1}>Je suis pressé(-de 5mins)</option>
            <option value={2}>
              Je veux bien patienter mais pas trop(-de 15mins)
            </option>
            <option value={3}>J'ai le temps</option>
          </NativeSelect>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="uncontrolled-native">
            J'en ai marre des attractions
          </InputLabel>
          <NativeSelect
            defaultValue={3}
            input={<Input name="autre" id="uncontrolled-native" />}
          >
            <option value="" />
            <option value={1}>A boire ! J'ai fort soif !</option>
            <option value={2}>J'ai aussi très faim</option>
            <option value={3}>Et pour les toilettes maintenant ? </option>
            <option value={4}>Un dernier souvenir avant de partir</option>
            <option value={5}>Où est ma voiture au fait ?</option>
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

FiltersText.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FiltersText);

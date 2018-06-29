import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDatas } from '../actions/fetchActions';
import _ from 'lodash';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import FiltersChoiceAttractions from './FiltersChoiceAttractions';
import FiltersChoiceResto  from './FiltersChoiceResto';
import FiltersChoiceToilettes from './FiltersChoiceToilettes';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const Accueil = props => <Link to="/" {...props} />;

class ShowResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      loaded: false,
      isAttractions: true,
      isResto: false,
      isToilettes: false,
      witchOne: 0,
      goClick: false,
      wichType: 'attractions',
    };
    this.props.fetchDatas();
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  switchType = i => {
    this.setState({
      witchOne: i,
      goClick: true,
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes, datas } = this.props;
    const { isAttractions, isResto, isToilettes, witchOne } = this.state;
    return (
      <div>
        <ul>
          {!_.isEmpty(datas) &&
            datas.resto.map((item, i) => (
              <li key={i}>
                {item.name}
                <span>
                  <button
                    onClick={() => {
                      this.switchType(i);
                    }}
                  >
                    Choix
                  </button>
                </span>
              </li>
            ))}
        </ul>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="uncontrolled-native">Type</InputLabel>
          <NativeSelect
            defaultValue={1}
            input={<Input name="autre" id="uncontrolled-native" />}
          >
            <option value="" />
            <option
              onClick={() => {
                this.setState({
                  isAttractions: true,
                  isResto: false,
                  isToilettes: false,
                });
              }}
              value={1}
            >
              Attractions
            </option>
            <option
              onClick={() => {
                this.setState({
                  isAttractions: false,
                  isResto: true,
                  isToilettes: false,
                });
              }}
              value={2}
            >
              Restaurants
            </option>
            <option
              onClick={() => {
                this.setState({
                  isAttractions: false,
                  isResto: false,
                  isToilettes: true,
                });
              }}
              value={3}
            >
              Toilettes{' '}
            </option>
          </NativeSelect>
        </FormControl>

        {this.state.isAttractions && <FiltersChoiceAttractions /> }
        {this.state.isResto && <FiltersChoiceResto /> }
        {this.state.isToilettes && <FiltersChoiceToilettes />}
        
        <Card className={classes.card}>

          {/* ATTRACTIONS */}
          {isAttractions && (
            <div>
              <CardHeader
                title={!_.isEmpty(datas) && datas.attractions[witchOne].name}
              />
              <CardMedia
                className={classes.media}
                image={!_.isEmpty(datas) && datas.attractions[witchOne].src}
                title="Contemplative Reptile"
              />
              <CardContent style={{ textAlign: 'left' }}>
                <Typography variant="title" component="p">
                  Morts:{' '}
                  {!_.isEmpty(datas) && datas.attractions[witchOne].nbrMorts}
                </Typography>
                <Typography variant="title" component="p">
                  Chaussures perdues:{' '}
                  {!_.isEmpty(datas) &&
                    datas.attractions[witchOne].nbrChaussuresPerdues}
                </Typography>
                <Typography variant="title" component="p">
                  Vomis:{' '}
                  {!_.isEmpty(datas) && datas.attractions[witchOne].nbrVomis}
                </Typography>
                <Typography variant="title" component="p">
                  Vis manquantes:{' '}
                  {!_.isEmpty(datas) &&
                    datas.attractions[witchOne].nbrVisManquantes}
                </Typography>
              </CardContent>
            </div>
          )}
          {/* RESTAURANTS */}
          {isResto && (
            <div>
              <CardHeader
                title={!_.isEmpty(datas) && datas.resto[witchOne].name}
              />
              <CardMedia
                className={classes.media}
                image={!_.isEmpty(datas) && datas.resto[witchOne].src}
                title={!_.isEmpty(datas) && datas.resto[witchOne].name}
              />
              <CardContent style={{ textAlign: 'left' }}>
                <Typography variant="title" component="p">
                  Intoxications:{' '}
                  {!_.isEmpty(datas) && datas.resto[witchOne].nbrIntoxications}
                </Typography>
                <Typography variant="title" component="p">
                  Poils pubiens / assiette:{' '}
                  {!_.isEmpty(datas) &&
                    datas.resto[witchOne].poilsPubiensMoyenParAssiette}
                </Typography>
                <Typography variant="title" component="p">
                  Urines/cacahuete:{' '}
                  {!_.isEmpty(datas) &&
                    datas.resto[witchOne].nbrUrinesDiffParCacahuete}
                </Typography>
                <Typography variant="title" component="p">
                  Rats: {!_.isEmpty(datas) && datas.resto[witchOne].nbrRats}
                </Typography>
              </CardContent>
            </div>
          )}
          {/* TOILETTES */}
          {isToilettes && (
            <div>
              <CardHeader
                title={!_.isEmpty(datas) && datas.toilettes[witchOne].name}
              />
              <CardMedia
                className={classes.media}
                image={!_.isEmpty(datas) && datas.toilettes[witchOne].src}
                title="Contemplative Reptile"
              />
              <CardContent style={{ textAlign: 'left' }}>
                <Typography variant="title" component="p">
                  Temps d'attente:
                  {!_.isEmpty(datas) && datas.toilettes[witchOne].tempsAttente}
                </Typography>
                <Typography variant="title" component="p">
                  Enfants dévorés
                  {!_.isEmpty(datas) &&
                    datas.toilettes[witchOne].nbrEnfantsDévorés}
                </Typography>
                <Typography variant="title" component="p">
                  Urines / cacahuete:
                  {!_.isEmpty(datas) && datas.toilettes[witchOne].HS}
                </Typography>
              </CardContent>
            </div>
          )}

          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Method:
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
}
<Button color="inherit" component={Accueil}>
Accueil
</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    datas: state.datasReducer.datas,
    loading: state.datasReducer.loading,
    error: state.datasReducer.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDatas }, dispatch);
}

ShowResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ShowResults);

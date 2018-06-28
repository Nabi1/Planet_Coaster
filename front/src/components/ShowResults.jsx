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
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

class ShowResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      loaded: false,
      isAttractions: false,
      isResto: true,
      isToilettes: false,
      witchOne: 0,
      goClick: false,
      wichType: "attractions",
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  switchType = i => {
    const allAttractions = this.props.datas.attractions[i].name;
    this.setState({
      witchOne: i,
      goClick: true,
    });
  };

  componentDidUpdate() {
    if (this.state.goClick) {
    }
  }

  render() {
    const { classes, datas } = this.props;
    const { isAttractions, isResto, isToilettes, witchOne, wichType } = this.state;
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
          <InputLabel htmlFor="age-helper">Type</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={<Input name="age" id="age-helper" />}
          >
            <MenuItem value="">
              <em>Choix</em>
            </MenuItem>
            <MenuItem
              onClick={() => {
                this.setState({
                  wichType: "attractions",
                });
              }}
              value={10}
            >
              Attractions
            </MenuItem>
            <MenuItem
              onClick={() => {
                this.setState({
                  wichType: "resto",
                });
              }}
              value={20}
            >
              Restaurants
            </MenuItem>
            <MenuItem
              onClick={() => {
                this.setState({
                  wichType: "toilettes",
                });
              }}
              value={30}
            >
              Toilettes
            </MenuItem>
          </Select>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
        <Card className={classes.card}>
          {/* ATTRACTIONS */}
          {isAttractions && (
            <div>
              <CardHeader
                titre={!_.isEmpty(datas) && datas[wichType][witchOne].name}
              />
              <CardMedia
                className={classes.media}
                image={!_.isEmpty(datas) && datas[wichType][witchOne].src}
                title="Contemplative Reptile"
              />
              <CardContent style={{ textAlign: 'left' }}>
                <Typography variant="title" component="p">
                  Morts:{' '}
                  {!_.isEmpty(datas) && datas[wichType][witchOne].nbrMorts}
                </Typography>
                <Typography variant="title" component="p">
                  Chaussures perdues:{' '}
                  {!_.isEmpty(datas) &&
                    datas[wichType][witchOne].nbrChaussuresPerdues}
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
                titre={!_.isEmpty(datas) && datas.resto[witchOne].name}
                subheader={!_.isEmpty(datas) && datas.resto[witchOne].name}
              />
              <CardMedia
                className={classes.media}
                image={!_.isEmpty(datas) && datas.resto[witchOne].src}
                title={!_.isEmpty(datas) && datas.resto[witchOne].name}
              />
              <CardContent style={{ textAlign: 'left' }}>
                <Typography variant="title" variant="title" component="p">
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
                titre={!_.isEmpty(datas) && datas.attractions[witchOne].name}
                subheader={
                  !_.isEmpty(datas) && datas.attractions[witchOne].name
                }
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.datasReducer.datas);
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

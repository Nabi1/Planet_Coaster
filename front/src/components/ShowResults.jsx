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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../../../.cache/typescript/2.9/node_modules/redux';
import { fetchDatas } from '../actions/fetchActions';
import _ from 'lodash';

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
      isResto: false,
      isToilettes: true,
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, datas } = this.props;
    const { isAttractions, isResto, isToilettes } = this.state;
    return (
      <div>
        <Card className={classes.card}>
          {/* ATTRACTIONS */}
          {isAttractions && (
            <div>
              <CardHeader
                titre={!_.isEmpty(datas) && datas.attractions[0].name}
              />
              <CardMedia
                className={classes.media}
                image={!_.isEmpty(datas) && datas.attractions[0].src}
                title="Contemplative Reptile"
              />
              <CardContent style={{ textAlign: 'left' }}>
                <Typography component="p">
                  Nbr de Morts:{' '}
                  {!_.isEmpty(datas) && datas.attractions[0].nbrMorts}
                </Typography>
                <Typography component="p">
                  Nbr de chaussures perdues:{' '}
                  {!_.isEmpty(datas) &&
                    datas.attractions[0].nbrChaussuresPerdues}
                </Typography>
                <Typography component="p">
                  Nbr de vomis:{' '}
                  {!_.isEmpty(datas) && datas.attractions[0].nbrVomis}
                </Typography>
                <Typography component="p">
                  Nbr de vis manquantes:{' '}
                  {!_.isEmpty(datas) && datas.attractions[0].nbrVisManquantes}
                </Typography>
              </CardContent>
            </div>
          )}
          {/* RESTAURANTS */}
          {isResto && (
            <div>
              <CardHeader
                titre={!_.isEmpty(datas) && datas.attractions[0].name}
                subheader={!_.isEmpty(datas) && datas.attractions[0].name}
              />
              <CardMedia
                className={classes.media}
                image="http://cf.broadsheet.ie/wp-content/uploads/2014/09/Screen-Shot-2014-09-09-at-01.56.35-e1410225924240.jpeg"
                title="Contemplative Reptile"
              />
              <CardContent style={{ textAlign: 'left' }}>
                <Typography component="p">
                  Nbr de Intoxications:{' '}
                  {!_.isEmpty(datas) && datas.resto[0].nbrIntoxications}
                </Typography>
                <Typography component="p">
                  Nbr de poils pubiens / assiette:{' '}
                  {!_.isEmpty(datas) &&
                    datas.resto[0].poilsPubiensMoyenParAssiette}
                </Typography>
                <Typography component="p">
                  Nbr d'urines/cacahuete:{' '}
                  {!_.isEmpty(datas) &&
                    datas.resto[0].nbrUrinesDiffParCacahuete}
                </Typography>
                <Typography component="p">
                  Nbr de rats: {!_.isEmpty(datas) && datas.resto[0].nbrRats}
                </Typography>
              </CardContent>
            </div>
          )}
          {/* TOILETTES */}
          {isToilettes && (
            <div>
              <CardHeader
                titre={!_.isEmpty(datas) && datas.attractions[0].name}
                subheader={!_.isEmpty(datas) && datas.attractions[0].name}
              />
              <CardMedia
                className={classes.media}
                image={!_.isEmpty(datas) && datas.toilettes[0].src}
                title="Contemplative Reptile"
              />
              <CardContent style={{ textAlign: 'left' }}>
                <Typography component="p">
                  Temps d'attente:
                  {!_.isEmpty(datas) && datas.toilettes[0].tempsAttente}
                </Typography>
                <Typography component="p">
                  Nbr d'enfants dévorés
                  {!_.isEmpty(datas) && datas.toilettes[0].nbrEnfantsDévorés}
                </Typography>
                <Typography component="p">
                  Nbr d'urines / cacahuete:
                  {!_.isEmpty(datas) && datas.toilettes[0].HS}
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

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
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
      data: [],
      loaded: false,
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  componentDidMount() {
    fetch(
      'https://rawgit.com/Nabi1/Planet_Coaster/createJson/front/src/data.json'
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            data: result,
            loaded: true,
          });
        },
        error => {
          this.setState({
            error,
          });
        }
      );
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="ok"
          />
          <CardMedia
            className={classes.media}
            image="http://cf.broadsheet.ie/wp-content/uploads/2014/09/Screen-Shot-2014-09-09-at-01.56.35-e1410225924240.jpeg"
            title="Contemplative Reptile"
          />
          <CardContent style={{ textAlign: 'left' }}>
            <Typography component="p">Nbr de Morts: 18</Typography>
            <Typography component="p">
              Nbr de chaussures perdues: 18
            </Typography>
            <Typography component="p">Nbr de vomis: 18</Typography>
            <Typography component="p">Nbr de vis manquantes: 345</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
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

ShowResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowResults);

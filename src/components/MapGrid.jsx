import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function MapGrid(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
              <TableRow>
                <TableCell id="A1"></TableCell>
                <TableCell id="B1"></TableCell>
                <TableCell id="C1"></TableCell>
                <TableCell id="D1"></TableCell>
                <TableCell id="E1"></TableCell>
                <TableCell id="F1"></TableCell>
                <TableCell id="G1"></TableCell>
                <TableCell id="H1"></TableCell>
                <TableCell id="I1"></TableCell>
                <TableCell id="J1"></TableCell>  
              </TableRow>
              <TableRow>
                <TableCell id="A2"></TableCell>
                <TableCell id="B2"></TableCell>
                <TableCell id="C2"></TableCell>
                <TableCell id="D2"></TableCell>
                <TableCell id="E2"></TableCell>
                <TableCell id="F2"></TableCell>
                <TableCell id="G2"></TableCell>
                <TableCell id="H2"></TableCell>
                <TableCell id="I2"></TableCell>
                <TableCell id="J2"></TableCell>  
              </TableRow>
              <TableRow>
                <TableCell id="A3"></TableCell>
                <TableCell id="B3"></TableCell>
                <TableCell id="C3"></TableCell>
                <TableCell id="D3"></TableCell>
                <TableCell id="E3"></TableCell>
                <TableCell id="F3"></TableCell>
                <TableCell id="G3"></TableCell>
                <TableCell id="H3"></TableCell>
                <TableCell id="I3"></TableCell>
                <TableCell id="J3"></TableCell>  
              </TableRow>
              <TableRow>
                <TableCell id="A4"></TableCell>
                <TableCell id="B4"></TableCell>
                <TableCell id="C4"></TableCell>
                <TableCell id="D4"></TableCell>
                <TableCell id="E4"></TableCell>
                <TableCell id="F4"></TableCell>
                <TableCell id="G4"></TableCell>
                <TableCell id="H4"></TableCell>
                <TableCell id="I4"></TableCell>
                <TableCell id="J4"></TableCell>  
              </TableRow>
              <TableRow>
                <TableCell id="A5"></TableCell>
                <TableCell id="B5"></TableCell>
                <TableCell id="C5"></TableCell>
                <TableCell id="D5"></TableCell>
                <TableCell id="E5"></TableCell>
                <TableCell id="F5"></TableCell>
                <TableCell id="G5"></TableCell>
                <TableCell id="H5"></TableCell>
                <TableCell id="I5"></TableCell>
                <TableCell id="J5"></TableCell>  
              </TableRow>
              <TableRow>
                <TableCell id="A6"></TableCell>
                <TableCell id="B6"></TableCell>
                <TableCell id="C6"></TableCell>
                <TableCell id="D6"></TableCell>
                <TableCell id="E6"></TableCell>
                <TableCell id="F6"></TableCell>
                <TableCell id="G6"></TableCell>
                <TableCell id="H6"></TableCell>
                <TableCell id="I6"></TableCell>
                <TableCell id="J6"></TableCell>  
              </TableRow>
              <TableRow>
                <TableCell id="A7"></TableCell>
                <TableCell id="B7"></TableCell>
                <TableCell id="C7"></TableCell>
                <TableCell id="D7"></TableCell>
                <TableCell id="E7"></TableCell>
                <TableCell id="F7"></TableCell>
                <TableCell id="G7"></TableCell>
                <TableCell id="H7"></TableCell>
                <TableCell id="I7"></TableCell>
                <TableCell id="J7"></TableCell>  
              </TableRow>
              <TableRow>
                <TableCell id="A8"></TableCell>
                <TableCell id="B8"></TableCell>
                <TableCell id="C8"></TableCell>
                <TableCell id="D8"></TableCell>
                <TableCell id="E8"></TableCell>
                <TableCell id="F8"></TableCell>
                <TableCell id="G8"></TableCell>
                <TableCell id="H8"></TableCell>
                <TableCell id="I8"></TableCell>
                <TableCell id="J8"></TableCell>  
              </TableRow>
              <TableRow>
                <TableCell id="A9"></TableCell>
                <TableCell id="B9"></TableCell>
                <TableCell id="C9"></TableCell>
                <TableCell id="D9"></TableCell>
                <TableCell id="E9"></TableCell>
                <TableCell id="F9"></TableCell>
                <TableCell id="G9"></TableCell>
                <TableCell id="H9"></TableCell>
                <TableCell id="I9"></TableCell>
                <TableCell id="J9"></TableCell>  
              </TableRow>
              <TableRow>
                <TableCell id="A10"></TableCell>
                <TableCell id="B10"></TableCell>
                <TableCell id="C10"></TableCell>
                <TableCell id="D10"></TableCell>
                <TableCell id="E10"></TableCell>
                <TableCell id="F10"></TableCell>
                <TableCell id="G10"></TableCell>
                <TableCell id="H10"></TableCell>
                <TableCell id="I10"></TableCell>
                <TableCell id="J10"></TableCell>  
              </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

MapGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapGrid);
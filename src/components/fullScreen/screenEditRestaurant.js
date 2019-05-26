import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CardListProduit from '../cards/cardListProduit';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const styles = {
  appBar: {
    position: 'fixe',
    backgroundColor: "#8678EE"
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ScreenEditRestaurant extends Component {

  handleClickOpen = () => {
    this.props.handleClickOpen(this.props.data.id_film)
  };

  handleClose = () => {
    this.props.handleClose()
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div>
        <Button color='primary' size="small" onClick={this.handleClickOpen}>
         Voir plus
        </Button>
        <Dialog
          fullScreen
          open={this.props.fullD}
          onClose={this.handleClose}
          TransitionComponent={Transition}
          >             
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                {this.props.data.film_nom}
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                sortir
              </Button>
            </Toolbar>
          </AppBar>
          <div className="form-row" style={{marginTop:'15%', marginLeft:'15%', marginRight:'0%'}}>
            <div className="col-md-3" style={{paddingTop:'0px'}}>
              <Card className={classes.card}>
                  <CardContent>
                  <table style={{width:'80%'}}>
                    <tbody>
                    <tr>
                      <th>escenario</th>
                      <td>{this.props.data.escenario}</td>
                    </tr>
                    <tr>
                      <th>bande_sonore</th>
                      <td>{this.props.data.bande_sonore}</td>
                    </tr>
                    <tr>
                      <th>effets_speciaux</th>
                      <td>{this.props.data.effets_speciaux}</td>
                    </tr>
                    <tr>
                      <th>histoire</th>
                      <td>{this.props.data.histoire}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>{this.props.data.score}</td>
                    </tr>
                    <tr>
                      <th>nb_evaluations</th>
                      <td>{this.props.data.nb_evaluations}</td>
                    </tr>
                    </tbody>
                  </table>
                  </CardContent>
                </Card>
            </div>
            <div className="col-md-2">

            </div>
            <div className="col-md-5">     
              <CardListProduit 
                  values ={this.props.directeurs}
              ></CardListProduit>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

/*

                  data = {value}
                  fullD = {this.state.fullDisplay}
                  handleClickOpen = {this.handleClickOpen}
                  handleClose = {this.handleClose}
                  categories ={this.state.categories}
                  directeurs ={this.state.directeurs}
                  artistes ={this.state.artistes}
                  photos ={this.state.photos}

*/


const mapStateToProps = (state) => {

  return {
    sessID: state.counter.sessID
  }
}

ScreenEditRestaurant.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)( withStyles(styles)(ScreenEditRestaurant));
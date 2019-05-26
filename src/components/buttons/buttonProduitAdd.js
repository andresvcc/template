import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import {login, logout} from '../../actions/index'
import FormNewProduit from '../forms/formNewProduit';

class ButtonAdd extends Component{
  state = {
    open: false,
  };

  handleBtnActionLogout = () => {
    this.props.onLogoutClick()
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.back ? this.props.back() : void
    this.setState({ open: false });
  };

  render() {
    const { fullScreen, surname } = this.props;
    return (
      <div>
        <div style={{textAlign:'center'}}>
        <Fab size="large" color="secondary" aria-label="Add" className={'margin'} onClick={this.handleClickOpen} >
            <AddIcon />
        </Fab>
        <h6>Produit</h6>
        </div>
          <Dialog
            fullScreen={fullScreen}
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="responsive-dialog-title">
              <DialogContent style ={{minWidth:'600px'}}>
              </DialogContent>
              <div style={{paddingBottom:'30px'}}>
                <FormNewProduit 
                  back = {this.handleClose} 
                  surname={surname} 
                  action={this.props.action}
                  restaurant={this.props.restaurant}/>
              </div>
          </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    loginStatus: state.counter.loginStatus,
    typeUser: state.counter.typeUser,
    surname:state.counter.surname
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (typeUser) => {
      dispatch(login(typeUser))
    },
    onLogoutClick: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ButtonAdd)
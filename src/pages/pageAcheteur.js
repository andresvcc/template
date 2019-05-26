import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import { ToastContainer } from "react-toastify";
import SearchBar from '../components/searchBar/searchBar.js'
import List from '@material-ui/core/List';
import CardListProduitExpo from '../components/cards/cardListProduitExpo';
import BarnerBar from '../components/barnerBar/barnerBar'
import {updatePanier} from '../actions/index'




//import { Button } from '@material-ui/core';


class PageAcheteur extends Component{

  state = {
    values: []
  }

  componentDidMount() {
    axios.post('https://projbd.herokuapp.com/listFilm')
        .then(res => {
            const values = res.data.results;
            this.setState({values});
        })
  }

  toNormalised =(cadena)=>{
    // Definimos los caracteres que queremos eliminar
    var specialChars = "!@#$^&%*()+=-[]/{}|:<>?,.";
 
    // Los eliminamos todos
    for (var i = 0; i < specialChars.length; i++) {
        cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }   
 
    // Lo queremos devolver limpio en minusculas
    cadena = cadena.toLowerCase();
 
    // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
    cadena = cadena.replace(/á/gi,"a");
    cadena = cadena.replace(/é/gi,"e");
    cadena = cadena.replace(/í/gi,"i");
    cadena = cadena.replace(/ó/gi,"o");
    cadena = cadena.replace(/ú/gi,"u");
    cadena = cadena.replace(/ñ/gi,"n");
    cadena = cadena.replace(/è/gi,"e");
    return cadena;
 }

  onChangeSearchInput = (evt) => {
    console.log(this.toNormalised(evt))
  }

  updateInputBio = (evt) => {   
    console.log('check bio')
  }


  keyEnterSearchInput = (evt) => {
    const resultado = this.state.produits.filter( produit => produit.nom.toLowerCase().indexOf(evt) > -1 );
    console.log(resultado)
  }


  render() {
    //const {count, loginStatus, typeUser, surname, sessID}=this.props
    return(
        <div>
          <div>
            <BarnerBar/>
            <SearchBar
              action ={this.onChangeSearchInput}
              keyDawEnter = {this.keyEnterSearchInput}
            />
            
          </div>

            <div style={{position:'relative', paddingTop:'11%', marginLeft:'1%', marginRight:'auto'}}>

              <div className ='col-ms-9'>
                <CardListProduitExpo 
                      values ={this.state.values} 
                ></CardListProduitExpo>
              </div>

      



            </div>

          <ToastContainer autoClose={2000} position={'top-center'}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    loginStatus: state.counter.loginStatus,
    typeUser: state.counter.typeUser,
    surname: state.counter.surname,
    sessID: state.counter.sessID,
    produitPanier: state.counter.produitPanier
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ajouterPanier: (panierList) => {  
      dispatch(updatePanier(panierList))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageAcheteur)
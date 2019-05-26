import React, { Component } from 'react';
import CardBoxRestaurant from './cardBoxRestaurant'
import axios from 'axios';


export default class CardListRestaurant extends Component {
    state={
        fullDisplay:false,
        categories:[],
        directeurs:[],
        artistes:[],
        photos:[]
    }


    updateListProduit = (id_film)=>{
        axios.post(`https://projbd.herokuapp.com/listeCategoriesFilm`,{id_film: id_film})
        .then(res => {
            const values = res.data.results;
            this.setState({categories:values});
        })  
        axios.post(`https://projbd.herokuapp.com/listeDirecteursFilm`,{id_film: id_film})
        .then(res => {
            const values = res.data.results;
            this.setState({directeurs:values});
        })  
        axios.post(`https://projbd.herokuapp.com/listeArtistesFilm`,{id_film: id_film})
        .then(res => {
            const values = res.data.results;
            this.setState({artistes:values});
        })  
        axios.post(`https://projbd.herokuapp.com/listePhotosFilm`,{id_film: id_film})
        .then(res => {
            const values = res.data.results;
            this.setState({photos:values});
        }) 
    }




    handleClickOpen = (id_film)=>{
        this.setState({fullDisplay:true})
        this.updateListProduit(id_film)
    }
    
    handleClose = () => {
    this.setState({fullDisplay:false})
    };

    render(){
        var values = this.props.values.map((value, i) => {
            return (
                <div className ='col-ms-9' key={i} style={{width:'450px', height:'510px', paddingTop:'40px', paddingLeft:'20px'}}>
                    <CardBoxRestaurant
                        data = {value}
                        fullD = {this.state.fullDisplay}
                        handleClickOpen = {this.handleClickOpen}
                        handleClose = {this.handleClose}
                        categories ={this.state.categories}
                        directeurs ={this.state.directeurs}
                        artistes ={this.state.artistes}
                        photos ={this.state.photos}
                    />
               </div>           
            )
        })
        
        return (
            <div className={'form-inline form-group '}>
                    {values}
            </div>
        )
    }
}
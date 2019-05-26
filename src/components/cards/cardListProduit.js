import React, { Component } from 'react';
import CardBoxProduit from './cardBoxProduit'

export default class CardListProduit extends Component {
    render(){
        var values = this.props.values.map((value, i) => {

            return (
                <div className ='' key={i} >
                    <CardBoxProduit
                        data ={value} 
                    />
                </div>           
            )
        })
        
        return (
            <div>
                    {values}
            </div>
        )
    }
}
import React, { Component } from 'react';
import './Pokecard.css';
const img_api =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class PokeCard extends Component {
    render() {
        return (
            <div className='Pokecard'>
                <div>{this.props.name}</div>
                <img src={img_api + this.props.id + '.png'} />
                <div>{this.props.type}</div>
                <div>{this.props.exp}</div>
            </div>
        );
    }
}

export default PokeCard;

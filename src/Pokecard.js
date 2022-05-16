import React, { Component } from 'react';
import './Pokecard.css';
const img_api = ' https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const paddToThree = number =>
    number <= 999 ? `00${number}`.slice(-3) : number;

class PokeCard extends Component {
    render() {
        return (
            <div className='Pokecard'>
                <div>{this.props.name}</div>
                <img src={img_api + paddToThree(this.props.id) + '.png'} />
                <div>{this.props.type}</div>
                <div>{this.props.exp}</div>
            </div>
        );
    }
}

export default PokeCard;

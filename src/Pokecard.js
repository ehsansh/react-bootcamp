import React, { Component } from 'react';
const img_api =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class PokeCard extends Component {
    render() {
        return (
            <div>
                <h1>pokecard</h1>
                <div>{this.props.name}</div>
                <img src={img_api + this.props.id + '.png'} />
            </div>
        );
    }
}

export default PokeCard;

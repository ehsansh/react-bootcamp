import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return <img src={this.props.image} alt='card image' />;
    }
}

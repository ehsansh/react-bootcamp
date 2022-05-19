import React, { Component } from 'react';

class Coin extends Component {
    render() {
        const { src, side } = this.props.coin;
        return <img width='200px' src={src} alt={side} />;
    }
}

export default Coin;

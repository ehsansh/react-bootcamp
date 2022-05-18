import React, { Component } from 'react';
import Coin from './Coin';

class Flip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            backs: 0,
        };
        this.filpHandler = this.filpHandler.bind(this);
    }
    filpHandler() {}
    render() {
        return (
            <div>
                <h1>Let's Flip a coin</h1>
                <Coin side='head' />
                <button onClick={this.filpHandler}>Flip Meeee</button>
            </div>
        );
    }
}

export default Flip;

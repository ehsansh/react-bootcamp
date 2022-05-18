import React, { Component } from 'react';
import Coin from './Coin';
import Result from './Result';

class Flip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            backs: 0,
            side: null,
        };
        this.filpHandler = this.filpHandler.bind(this);
    }
    filpHandler() {
        const rand = Math.floor(Math.random() * 2);
        if (rand === 0) {
            this.setState(curState => {
                return {
                    heads: curState.heads + 1,
                    side: 'head',
                };
            });
        } else {
            this.setState(curState => {
                return {
                    backs: curState.backs + 1,
                    side: 'back',
                };
            });
        }
    }
    render() {
        return (
            <div>
                <h1>Let's Flip a coin</h1>
                <Coin side={this.state.side} />
                <button onClick={this.filpHandler}>Flip Meeee</button>
                <Result
                    heads={this.state.heads}
                    backs={this.state.backs}
                    flips={this.state.heads + this.state.backs}
                />
            </div>
        );
    }
}

export default Flip;

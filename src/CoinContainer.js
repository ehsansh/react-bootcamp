import React, { Component } from 'react';
import head from './head.jpg';
import tail from './tail.jpg';
class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: 'head', src: head },
            { side: 'tail', src: tail },
        ],
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            flips: 0,
            heads: 0,
            tails: 0,
        };
    }
    render() {
        return (
            <div>
                <h1>Let's flip a coin</h1>
                <p>
                    Out of {this.state.flips} there have been {this.state.heads}{' '}
                    heads and {this.state.tails} tails
                </p>
            </div>
        );
    }
}

export default CoinContainer;

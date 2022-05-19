import React, { Component } from 'react';
import head from './head.jpg';
import tail from './tail.jpg';
import { choice } from './helpers';
import Coin from './Coin';
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
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            //lony way
            // const newState = {
            //     ...st,
            //     currCoin: newCoin,
            //     flips: st.flips + 1,
            // };
            // if (newCoin.side === 'head') newState.heads++;
            // else newState.tails++;
            // return newState;

            //short way
            return {
                currCoin: newCoin,
                flips: st.flips + 1,
                heads: st.heads + (newCoin.side === 'head' ? 1 : 0),
                tails: st.tails + (newCoin.side === 'tail' ? 1 : 0),
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Let's flip a coin</h1>
                {this.state.currCoin && <Coin coin={this.state.currCoin} />}
                <button onClick={this.handleClick}>flip me</button>
                <p>
                    Out of {this.state.flips} there have been {this.state.heads}{' '}
                    heads and {this.state.tails} tails
                </p>
            </div>
        );
    }
}

export default CoinContainer;

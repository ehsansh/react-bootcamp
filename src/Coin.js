import React, { Component } from 'react';
import back from './back.jpg';
import head from './head.jpg';
class Coin extends Component {
    render() {
        const { side } = this.props;
        return (
            <div>
                {side === 'back' && (
                    <img width='200px' src={back} alt='back-coin' />
                )}
                {side === 'head' && (
                    <img width='200px' src={head} alt='head-coin' />
                )}
            </div>
        );
    }
}

export default Coin;

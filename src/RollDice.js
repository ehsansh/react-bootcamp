import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
    render() {
        return (
            <div>
                <Dice num={1} />
                <Dice num={6} />
            </div>
        );
    }
}
export default RollDice;

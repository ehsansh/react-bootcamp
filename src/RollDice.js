import React, { Component } from 'react';
import Dice from './Dice';
class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six'],
    };
    constructor(props) {
        super(props);
        this.state = {
            dice1: 'one',
            dice2: 'one',
        };
        this.roll = this.roll.bind(this);
    }
    roll() {
        const dice1 = this.props.sides[Math.floor(Math.random() * 6)];
        const dice2 = this.props.sides[Math.floor(Math.random() * 6)];

        this.setState({
            dice1: dice1,
            dice2: dice2,
        });
    }
    render() {
        return (
            <div>
                <Dice face={this.state.dice1} />
                <Dice face={this.state.dice2} />
                <button onClick={this.roll}>roll dices</button>
            </div>
        );
    }
}

export default RollDice;

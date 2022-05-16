import React, { Component } from 'react';
import Dice from './Dice';
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
} from '@fortawesome/free-solid-svg-icons';
class RollDice extends Component {
    static defaultProps = {
        faces: [
            faDiceOne,
            faDiceTwo,
            faDiceThree,
            faDiceFour,
            faDiceFive,
            faDiceSix,
        ],
    };
    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            b: 1,
        };
        this.roll = this.roll.bind(this);
    }
    roll() {
        let rand1 = Math.floor(Math.random() * 6);
        let rand2 = Math.floor(Math.random() * 6);
        this.setState({ a: rand1, b: rand2 });
    }
    render() {
        return (
            <div>
                <Dice icon={this.props.faces[this.state.a]} />
                <Dice icon={this.props.faces[this.state.b]} />
                <button onClick={this.roll}>roll the dices</button>
            </div>
        );
    }
}
export default RollDice;

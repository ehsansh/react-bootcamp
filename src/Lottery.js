import React, { Component } from 'react';

class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balls: Array.from({ length: this.props.numBalls }),
        };
        this.generateBallNumbers = this.generateBallNumbers.bind(this);
    }
    generateBallNumbers() {
        this.setState(curState => {
            return {
                balls: curState.balls.map(
                    b => Math.floor(Math.random() * this.props.maxNum) + 1
                ),
            };
        });
    }
    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                {this.state.balls.map(b => (
                    <span>{b} - </span>
                ))}
                <button onClick={this.generateBallNumbers}>generate</button>
            </div>
        );
    }
}

export default Lottery;

import React, { Component } from 'react';

class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    makeRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }
    handleClick() {
        let rand = this.makeRandomNumber();
        this.setState({ number: rand });
    }
    render() {
        return (
            <div>
                <h1>number is {this.state.number}</h1>
                {this.state.number === 7 ? (
                    'You win'
                ) : (
                    <button onClick={this.handleClick}>
                        make random number
                    </button>
                )}
            </div>
        );
    }
}

export default Random;

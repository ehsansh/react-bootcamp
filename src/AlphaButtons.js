import React, { Component } from 'react';
class AlphaButtons extends Component {
    constructor(props) {
        super(props);
        this.handleGuess = this.handleGuess.bind(this);
    }
    handleGuess(evt) {
        this.props.guess(evt);
    }
    render() {
        return this.props.letters.split('').map((ltr, i) => (
            <button
                key={i}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.props.guessed.has(ltr)}
            >
                {ltr}
            </button>
        ));
    }
}

export default AlphaButtons;

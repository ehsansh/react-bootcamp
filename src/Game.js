import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 99,
            gameOver: false,
        };
    }
    render() {
        return (
            <div>
                your score is:
                {this.state.score}
            </div>
        );
    }
}

export default Game;

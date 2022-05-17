import React, { Component } from 'react';

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        };
        this.add = this.add.bind(this);
    }
    add() {
        //when we want to change the state accroding to its current state
        // we use callback form
        this.setState(curState => {
            return { score: curState.score + 1 };
        });
    }
    render() {
        return (
            <div>
                <h1>current socre is {this.state.score}</h1>
                <button onClick={this.add}>add by one</button>
            </div>
        );
    }
}

export default Score;

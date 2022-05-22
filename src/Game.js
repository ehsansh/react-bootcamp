import React, { Component } from 'react';
import Cells from './Cells';
class Game extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Cells />
            </div>
        );
    }
}

export default Game;

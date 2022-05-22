import React, { Component } from 'react';
import Cells from './Cells';
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCells: [4, 18, 23],
        };
        this.cellClick = this.cellClick.bind(this);
    }
    cellClick(index) {
        console.log(index);
    }
    render() {
        return (
            <div>
                <Cells
                    cellClick={this.cellClick}
                    selectedCells={this.state.selectedCells}
                />
            </div>
        );
    }
}

export default Game;

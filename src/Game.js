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
    cellClick(val) {
        let index = +val;
        let toggleIndexes = [index];
        let col = index % 5;
        if (col > 0) toggleIndexes.push(index - 1);
        if (col < 4) toggleIndexes.push(index + 1);
        if (index - 5 > 0) toggleIndexes.push(index - 5);
        if (index + 5 < 25) toggleIndexes.push(index + 5);

        this.setState(st => {
            return {
                selectedCells: Array.from({ length: 25 })
                    .map((el, i) => i)
                    .filter(
                        el =>
                            (toggleIndexes.includes(el) &&
                                !st.selectedCells.includes(el)) ||
                            (!toggleIndexes.includes(el) &&
                                st.selectedCells.includes(el))
                    ),
            };
        });
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

import React, { Component } from 'react';
import './cells.css';

class Cells extends Component {
    constructor(props) {
        super(props);
        this.handleCellClick = this.handleCellClick.bind(this);
    }
    handleCellClick(ev) {
        // console.log(ev.target.getAttribute('index'));
        this.props.cellClick(ev.target.getAttribute('index'));
    }
    render() {
        const indexes = this.props.selectedCells;
        const cells = Array.from({ length: 25 }).map((e, i) => {
            return (
                <div
                    className={`cell ${indexes.includes(i) && 'active'}`}
                    key={i}
                    index={i}
                    onClick={this.handleCellClick}
                >
                    {i}
                </div>
            );
        });
        return <div className='cells-container'>{cells}</div>;
    }
}

export default Cells;

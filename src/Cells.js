import React, { Component } from 'react';
import './cells.css';

class Cells extends Component {
    render() {
        const cells = Array.from({ length: 25 }).map((e, i) => {
            return (
                <div className='cell' key={i}>
                    {i}
                </div>
            );
        });
        return <div className='cells-container'>{cells}</div>;
    }
}

export default Cells;

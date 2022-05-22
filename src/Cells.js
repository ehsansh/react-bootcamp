import React, { Component } from 'react';

class Cells extends Component {
    render() {
        {
            Array.from({ length: 25 }).map(e => {
                return <div></div>;
            });
        }
    }
}

export default Cells;

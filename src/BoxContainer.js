import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';
class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 4,
    };
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => {
            return <Box />;
        });
        return <div className='BoxContainer'>{boxes}</div>;
    }
}
export default BoxContainer;

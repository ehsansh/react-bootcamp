import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    render() {
        return (
            <div
                className='Box'
                style={{ backgroundColor: this.props.color }}
                onClick={this.props.onChildClick}
                id={this.props.id}
            ></div>
        );
    }
}

export default Box;

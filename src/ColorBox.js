import React, { Component } from 'react';
import './ColorBox.css';
export default class ColorBox extends Component {
    render() {
        return (
            <div
                style={{ background: this.props.background }}
                className='ColorBox'
            >
                <span>More</span>
                <span>{this.props.name}</span>
            </div>
        );
    }
}

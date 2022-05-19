import React, { Component } from 'react';

class ColorBox extends Component {
    static defaultProps = {
        colors: [
            'green',
            'midnightblue',
            'red',
            'yellow',
            'blue',
            'orange',
            'white',
            'black',
            'grey',
            'magenta',
            'maroon',
            'gold',
            'goldenrod',
        ],
        numBoxes: 16,
    };
    constructor(props) {
        super(props);
        this.state = {
            boxColors: Array(this.props.numBoxes)
                .fill('')
                .map(el => this.choice(this.props.colors)),
        };
    }
    choice(arr) {
        console.log('here');
        return arr[Math.floor(Math.random() * arr.length)];
    }
    render() {
        return (
            <div>
                <h1>color box</h1>
                {}
            </div>
        );
    }
}

export default ColorBox;

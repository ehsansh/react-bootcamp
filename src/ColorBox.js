import React, { Component } from 'react';
import Box from './Box';
import './ColorBox.css';
class ColorBox extends Component {
    static defaultProps = {
        colors: [
            'green',
            'midnightblue',
            'red',
            'yellow',
            'blue',
            'orange',
            'brown',
            'cyan',
            'purple',
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
        this.clickHandler = this.clickHandler.bind(this);
    }
    choice(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    clickHandler(e) {
        const id = e.target.id;
        let newColor;
        do {
            newColor = this.choice(this.props.colors);
        } while (newColor === this.state.boxColors[id]);
        let colors = [...this.state.boxColors];
        colors[id] = newColor;
        this.setState({ boxColors: colors });
    }
    render() {
        return (
            <div>
                <h1>color box</h1>
                <div className='boxContainer'>
                    {this.state.boxColors.map((el, i) => {
                        return (
                            <Box
                                key={i}
                                id={i}
                                color={el}
                                onChildClick={this.clickHandler}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ColorBox;

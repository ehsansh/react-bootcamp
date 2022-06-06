import React, { Component } from 'react';
import ColorBox from './ColorBox';

import './Palette.css';

import Navbar from './Navbar';

export default class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex',
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level) {
        this.setState({ level });
    }
    changeFormat(val) {
        this.setState({ format: val });
    }
    render() {
        const { colors } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map((c, i) => (
            <ColorBox background={c[format]} name={c.name} key={i} />
        ));
        return (
            <div className='Palette'>
                <Navbar
                    handleChange={this.changeFormat}
                    level={level}
                    changeLevel={this.changeLevel}
                />
                <div className='Palette-colors'>{colorBoxes}</div>
            </div>
        );
    }
}

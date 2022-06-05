import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
        };
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level) {
        this.setState({ level });
    }
    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map((c, i) => (
            <ColorBox background={c.hex} name={c.name} key={i} />
        ));
        return (
            <div className='Palette'>
                <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                />
                <div className='Palette-colors'>{colorBoxes}</div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import styled from '@emotion/styled';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

import Navbar from './Navbar';

const PaletteContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    & .Palette-footer {
        background-color: white;
        height: 5vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: bold;
    }
    & .emoji {
        font-size: 1.5rem;
        margin: 0 1rem;
    }
`;
const PaletteColors = styled.div`
    height: 90%;
`;

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
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map((c, i) => (
            <ColorBox
                background={c[format]}
                name={c.name}
                key={c.id}
                id={c.id}
                paletteId={id}
                showLink={true}
            />
        ));
        return (
            <PaletteContainer>
                <Navbar
                    handleFormatChange={this.changeFormat}
                    level={level}
                    changeLevel={this.changeLevel}
                    showAllColors
                />
                <PaletteColors>{colorBoxes}</PaletteColors>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </PaletteContainer>
        );
    }
}

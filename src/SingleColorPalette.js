import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useParams, Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

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
const GoBack = styled.div`
    width: 20%;
    height: 50%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-bottom: -3.5px;
    background-color: black;
    & a {
        width: 100px;
        height: 30px;
        position: absolute;
        display: inline-block;
        top: 50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -15px;
        text-align: center;
        outline: none;
        background: rgba(255, 255, 255, 0.3);
        font-size: 1rem;
        line-height: 30px;
        color: white;
        text-transform: uppercase;
        border: none;
        text-decoration: none;
    }
`;

function SingleColorPalette(props) {
    const { paletteName, emoji, id } = props.palette;
    const { colorId } = useParams();
    const [format, setFormat] = useState('hex');
    const gatherShades = function (palette) {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorId)
            );
        }
        return shades.slice(1);
    };
    const changeFormat = function (val) {
        setFormat(val);
    };
    const shades = gatherShades(props.palette);
    const colorBoxes = shades.map(color => (
        <ColorBox
            key={color.name}
            name={color.name}
            background={color[format]}
            showLink={false}
        />
    ));
    return (
        <PaletteContainer>
            <Navbar handleFormatChange={changeFormat} showAllColors={false} />
            <PaletteColors>
                {colorBoxes}
                <GoBack>
                    <Link to={`/palette/${id}`} className='back-button'>
                        Go Back
                    </Link>
                </GoBack>
            </PaletteColors>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </PaletteContainer>
    );
}

export default SingleColorPalette;

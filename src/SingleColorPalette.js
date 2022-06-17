import React, { useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

import {
    PaletteColors,
    PaletteContainer,
    GoBack,
} from './styles/SingleColorPaletteStyles';

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
                    <Link to={`/palette/${id}`}>Go Back</Link>
                </GoBack>
            </PaletteColors>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </PaletteContainer>
    );
}

export default SingleColorPalette;

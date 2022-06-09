import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

function SingleColorPalette(props) {
    const { paletteName, emoji } = props.palette;
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
            key={color.id}
            name={color.name}
            background={color[format]}
            showLink={false}
        />
    ));
    return (
        <div className='Palette'>
            <Navbar handleFormatChange={changeFormat} showAllColors={false} />
            <div className='Palette-colors'> {colorBoxes}</div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
    );
}

export default SingleColorPalette;

import { useParams } from 'react-router-dom';
import ColorBox from './ColorBox';

function SingleColorPalette(props) {
    const { colorId } = useParams();
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
    const shades = gatherShades(props.palette);
    const colorBoxes = shades.map(color => (
        <ColorBox
            key={color.id}
            name={color.name}
            background={color.hex}
            showLink={false}
        />
    ));
    return (
        <div className='Palette'>
            <h1>single color palette</h1>
            <div className='Palette-colors'> {colorBoxes}</div>
        </div>
    );
}

export default SingleColorPalette;

import { Footer, Emoji } from './styles/PaletteFooterStyles';

function PaletteFooter(props) {
    const { paletteName, emoji } = props;

    return (
        <Footer>
            {paletteName}
            <Emoji>{emoji}</Emoji>
        </Footer>
    );
}

export default PaletteFooter;

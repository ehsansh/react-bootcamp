import {
    Colors,
    Title,
    Emoji,
    Root,
    MiniColor,
} from './styles/MiniPaletteStyles';

function App(props) {
    const { paletteName, emoji, colors } = props;
    const miniColorBoxes = colors.map(color => (
        <MiniColor key={color.name} bg={color.color} />
    ));
    return (
        <Root onClick={props.handleClick}>
            <Colors>{miniColorBoxes}</Colors>
            <Title>
                {paletteName} <Emoji>{emoji}</Emoji>
            </Title>
        </Root>
    );
}

export default App;

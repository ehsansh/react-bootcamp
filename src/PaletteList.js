import { useNavigate } from 'react-router-dom';

import MiniPalette from './MiniPalette';

import { Palettes, Container, Root, Nav } from './styles/PaletteListStyles';

function PaletteList(props) {
    const { palettes } = props;
    let navigate = useNavigate();
    const goToPalette = function (id) {
        navigate(`/palette/${id}`);
    };
    return (
        <Root>
            <Container>
                <Nav>
                    <h1>React Colors</h1>
                </Nav>
                <Palettes>
                    {palettes.map(p => (
                        <MiniPalette
                            key={p.id}
                            handleClick={() => goToPalette(p.id)}
                            {...p}
                        />
                    ))}
                </Palettes>
            </Container>
        </Root>
    );
}

export default PaletteList;

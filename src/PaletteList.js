// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import MiniPalette from './MiniPalette';

const Root = styled.div`
    background-color: blue;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const Container = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
`;

const Nav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: white;
`;

const Palettes = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 5%;
`;

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
                        <MiniPalette handleClick={() => goToPalette(p.id)} {...p} />
                    ))}
                </Palettes>
            </Container>
        </Root>
    );
}

export default PaletteList;

// export default class PaletteList extends Component {
//     render() {
//         const { palettes } = this.props;
//         return (
//             <Root>
//                 <Container>
//                     <Nav>
//                         <h1>React Colors</h1>
//                     </Nav>
//                     <Palettes>
//                         {palettes.map(p => (
//                             <MiniPalette {...p} />
//                         ))}
//                     </Palettes>
//                 </Container>
//             </Root>
//         );
//     }
// }

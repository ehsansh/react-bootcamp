import styled from '@emotion/styled';

const Root = styled('div')/*css*/ `
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.5rem;
    position: relative;
    overflow: hidden;
    &:hover {
        cursor: pointer;
    }
`;

const Colors = styled('div')/*css*/ `
    background-color: grey;
`;

const Title = styled('h5')/*css*/ `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    color: black;
    padding-top: 0.5rem;
    font-size: 1rem;
    position: relative;
`;
const Emoji = styled('span')/*css*/ `
    margin-left: 0.5rem;
    font-size: 1.5rem;
`;

function App(props) {
    const { classes, paletteName, emoji } = props;
    return (
        <Root>
            <Title>
                {paletteName} <Emoji>{emoji}</Emoji>
            </Title>
        </Root>
    );
}

export default App;

// import styled from '@emotion/styled';
// /** @jsxImportSource @emotion/react */
// import { css, jsx } from '@emotion/react';

// const Heading = styled('h1')`
//     background-color: ${props => props.bg};
//     color: ${props => props.fg};
// `;

// function App() {
//     const color = 'white';
//     return (
//         <div>
//             <Heading bg='#008f68' fg='#fae042'>
//                 Heading with a green background and yellow text.
//             </Heading>
//             <div
//                 css={css`
//                     padding: 32px;
//                     background-color: hotpink;
//                     font-size: 24px;
//                     border-radius: 4px;
//                     &:hover {
//                         color: ${color};
//                     }
//                 `}
//             >
//                 Hover to change color.
//             </div>
//         </div>
//     );
// }

// export default App;

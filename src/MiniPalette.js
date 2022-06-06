import styled from '@emotion/styled';
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const Heading = styled('h1')`
    background-color: ${props => props.bg};
    color: ${props => props.fg};
`;

function App() {
    const color = 'white';
    return (
        <div>
            <Heading bg='#008f68' fg='#fae042'>
                Heading with a green background and yellow text.
            </Heading>
            <div
                css={css`
                    padding: 32px;
                    background-color: hotpink;
                    font-size: 24px;
                    border-radius: 4px;
                    &:hover {
                        color: ${color};
                    }
                `}
            >
                Hover to change color.
            </div>
        </div>
    );
}

export default App;

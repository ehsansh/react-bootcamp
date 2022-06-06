import styled from '@emotion/styled';

const Heading = styled('h1')`
    background-color: ${props => props.bg};
    color: ${props => props.fg};
`;

function App() {
    return (
        <div>
            <Heading bg='#008f68' fg='#fae042'>
                Heading with a green background and yellow text.
            </Heading>
        </div>
    );
}

export default App;

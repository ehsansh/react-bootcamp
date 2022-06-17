import styled from '@emotion/styled';

export const Root = styled.div`
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

export const Title = styled.h5`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    color: black;
    padding-top: 0.5rem;
    font-size: 0.9rem;
    position: relative;
`;
export const Emoji = styled.span`
    margin-left: 0.5rem;
    font-size: 1.5rem;
`;

export const Colors = styled.div`
    background-color: #dae1e4;
    height: 150px;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
`;

export const MiniColor = styled.div`
    background-color: ${props => props.bg};
    height: 25%;
    width: 20%;
    display: inline-block;
    margin: 0 auto;
    position: relative;
    margin-bottom: -3.5px;
`;

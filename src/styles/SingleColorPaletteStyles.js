import styled from '@emotion/styled';
export const PaletteContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    & .Palette-footer {
        background-color: white;
        height: 5vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: bold;
    }
    & .emoji {
        font-size: 1.5rem;
        margin: 0 1rem;
    }
`;
export const PaletteColors = styled.div`
    height: 90%;
`;
export const GoBack = styled.div`
    width: 20%;
    height: 50%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-bottom: -3.5px;
    background-color: black;
    & a {
        width: 100px;
        height: 30px;
        position: absolute;
        display: inline-block;
        top: 50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -15px;
        text-align: center;
        outline: none;
        background: rgba(255, 255, 255, 0.3);
        font-size: 1rem;
        line-height: 30px;
        color: white;
        text-transform: uppercase;
        border: none;
        text-decoration: none;
    }
`;

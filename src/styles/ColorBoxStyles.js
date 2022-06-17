import styled from '@emotion/styled';
import chroma from 'chroma-js';

export const ColorBoxContainer = styled.div`
    height: ${props => (props.showLink ? '25%' : '50%')};
    width: 20%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-bottom: -3.5px;
    &:hover button {
        opacity: 1;
        transition: 0.5s;
    }
`;

export const CopyText = styled.p`
    color: ${props =>
        chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'};
`;

export const ColorName = styled.span`
    color: ${props =>
        chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'};
`;
export const SeeMore = styled.span`
    color: ${props =>
        chroma(props.background).luminance() >= 0.7
            ? 'rgba(0,0,0,0.6)'
            : 'white'};
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    text-transform: uppercase;
`;
export const CopyButton = styled.button`
    color: ${props =>
        chroma(props.background).luminance() >= 0.7
            ? 'rgba(0,0,0,0.6)'
            : 'white'};
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
    text-transform: uppercase;
    border: none;
    text-decoration: none;
    opacity: 0;
`;
export const BoxContent = styled.div`
    position: absolute;
    padding: 10px;
    left: 0;
    bottom: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 12px;
`;
export const CopyOverlay = styled.div`
    opacity: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease-in-out;
    transform: scale(0.1);
    &.show {
        opacity: 1;
        transform: scale(50);
        z-index: 3;
        position: absolute;
    }
`;
export const CopyMessage = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    transform: scale(0.1);
    opacity: 0;
    color: white;
    &.show {
        opacity: 1;
        transform: scale(1);
        z-index: 9;
        transition: all 0.4s ease-in-out;
        transition-delay: 0.3s;
    }
    & h1 {
        font-weight: 400;
        text-shadow: 1px 2px black;
        background-color: rgba(255, 255, 255, 0.3);
        width: 100%;
        text-align: center;
        margin-bottom: none;
        padding: 1rem;
        text-transform: uppercase;
    }
    & p {
        font-size: 2rem;
        font-weight: 100;
    }
`;

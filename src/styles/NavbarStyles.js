import styled from '@emotion/styled';
export const NavbarContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 6vh;
`;
export const Logo = styled.div`
    margin-right: 15px;
    padding: 0 13px;
    font-size: 22px;
    background-color: #eceff1;
    height: 100%;
    display: flex;
    align-items: center;
    & a {
        text-decoration: none;
        color: black;
    }
`;
export const SliderContainer = styled.div`
    width: 340px;
    margin: 0 10px;
    display: inline-block;
    & .rc-slider-track {
        background-color: transparent;
    }
    & .rc-slider-rail {
        height: 8px;
    }
    & .rc-slider-handle,
    & .rc-slider-handle:active,
    & .rc-slider-handle:hover,
    & .rc-slider-handle :focus {
        background-color: green;
        outline: none;
        border: 1px solid green;
        box-shadow: none;
        height: 13px;
        width: 13px;
        margin-top: -3px;
        margin-left: -7px;
    }
`;

export const SelectContainer = styled.div`
    margin-left: auto;
    margin-right: 1rem;
`;

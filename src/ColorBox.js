import React, { Component } from 'react';
import styled from '@emotion/styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';

const CopyText = styled.p`
    color: ${props =>
        chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'};
`;

const ColorName = styled.span`
    color: ${props =>
        chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'};
`;
const SeeMore = styled.span`
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
const CopyButton = styled.button`
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
    &:hover {
        opacity: 1;
        transition: 0.5s;
    }
`;

export default class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false,
        };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false });
            }, 1500);
        });
    }
    render() {
        const { name, background, paletteId, id, showLink } = this.props;
        let { copied } = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className='ColorBox'>
                    <div
                        style={{ background }}
                        className={`copy-overlay ${copied && 'show'}`}
                    ></div>
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <CopyText background={background}>
                            {background}
                        </CopyText>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <ColorName background={background}>
                                {name}
                            </ColorName>
                        </div>
                    </div>
                    <CopyButton background={background}>Copy</CopyButton>

                    {showLink && (
                        <Link
                            to={`/palette/${paletteId}/${id}`}
                            onClick={e => e.stopPropagation()}
                        >
                            <SeeMore background={background}>MORE</SeeMore>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

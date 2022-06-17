import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import {
    ColorBoxContainer,
    CopyText,
    CopyOverlay,
    CopyButton,
    CopyMessage,
    BoxContent,
    SeeMore,
    ColorName,
} from './styles/ColorBoxStyles';

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
                <ColorBoxContainer showLink={showLink} style={{ background }}>
                    <CopyOverlay
                        style={{ background }}
                        className={`${copied && 'show'}`}
                    ></CopyOverlay>

                    <CopyMessage className={`${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <CopyText background={background}>
                            {background}
                        </CopyText>
                    </CopyMessage>

                    <div>
                        <BoxContent>
                            <ColorName background={background}>
                                {name}
                            </ColorName>
                        </BoxContent>
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
                </ColorBoxContainer>
            </CopyToClipboard>
        );
    }
}

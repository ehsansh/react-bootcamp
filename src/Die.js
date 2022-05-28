import React, { Component } from 'react';
import './Die.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
} from '@fortawesome/fontawesome-free-solid';

class Die extends Component {
    static defaultProps = {
        icons: [
            faDiceOne,
            faDiceTwo,
            faDiceThree,
            faDiceFour,
            faDiceFive,
            faDiceSix,
        ],
    };
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleClick(this.props.idx);
    }
    render() {
        return (
            <FontAwesomeIcon
                style={{
                    backgroundColor: this.props.locked ? 'grey' : 'black',
                }}
                onClick={this.handleClick}
                icon={this.props.icons[this.props.val - 1]}
                className={'Die'}
                size='5x'
                color='white'
            />
        );
    }
}

export default Die;

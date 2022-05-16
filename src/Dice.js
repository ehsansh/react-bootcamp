import React, { Component } from 'react';
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dice extends Component {
    render() {
        let icon;
        switch (this.props.num) {
            case 1:
                icon = faDiceOne;
                break;
            case 2:
                icon = faDiceTwo;
                break;
            case 3:
                icon = faDiceThree;
                break;
            case 4:
                icon = faDiceFour;
                break;
            case 5:
                icon = faDiceFive;
                break;
            default:
                icon = faDiceSix;
                break;
        }

        return <FontAwesomeIcon icon={icon} size='6x' />;
    }
}

export default Dice;

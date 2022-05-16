import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dice extends Component {
    render() {
        return <FontAwesomeIcon icon={this.props.icon} size='6x' />;
    }
}

export default Dice;

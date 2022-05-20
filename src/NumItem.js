import React, { Component } from 'react';

class NumItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.remove(this.props.value);
    }
    render() {
        const { value } = this.props;
        return (
            <div>
                {value}
                <button onClick={this.handleClick}>X</button>
            </div>
        );
    }
}

export default NumItem;

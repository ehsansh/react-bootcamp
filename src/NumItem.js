import React, { Component } from 'react';

class NumItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove() {
        this.props.remove(this.props.value);
    }
    render() {
        const { value } = this.props;
        return (
            <div>
                {value}
                <button onClick={this.handleRemove}>X</button>
            </div>
        );
    }
}

export default NumItem;

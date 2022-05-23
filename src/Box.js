import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const style = {
            backgroundColor: this.props.backgroundColor,
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
        };
        return (
            <div>
                <div style={style}></div>
                <button onClick={() => this.props.remove(this.props.id)}>
                    X
                </button>
            </div>
        );
    }
}

export default Box;

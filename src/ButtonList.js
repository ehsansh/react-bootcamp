import React, { Component } from 'react';

class ButtonList extends Component {
    static defaultProps = {
        colors: ['green', 'orange', 'magenta', 'blue'],
    };
    constructor(props) {
        super(props);
        this.state = {
            color: 'cyan',
        };
    }
    changeColor(newColor) {
        this.setState({ color: newColor });
    }
    render() {
        return (
            <div style={{ backgroundColor: this.state.color }}>
                {this.props.colors.map((c, i) => {
                    return (
                        <button
                            onClick={this.changeColor.bind(this, c)}
                            key={i}
                            style={{ backgroundColor: c }}
                        >
                            click me
                        </button>
                    );
                })}
            </div>
        );
    }
}

export default ButtonList;

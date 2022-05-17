import React, { Component } from 'react';

class Icons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: ['happy', 'sad', 'sick', 'nice', 'mean', 'kind'],
        };
        this.add = this.add.bind(this);
    }
    add() {
        let newItem =
            this.state.icons[
                Math.floor(Math.random() * this.state.icons.length)
            ];

        this.setState({
            icons: [...this.state.icons, newItem],
        });
    }
    render() {
        return (
            <div>
                {this.state.icons.map(i => (
                    <span>{i} </span>
                ))}
                <button onClick={this.add}>add another icon</button>
            </div>
        );
    }
}

export default Icons;

import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        };
        console.log('in the constructor');
    }
    componentDidMount() {
        let timer = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }

    render() {
        return <div> {this.state.time.getSeconds()} </div>;
    }
}

import React, { Component } from 'react';

export default class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10,
    };
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
        };
    }
    async componentDidMount() {
        let jokes = [];
        while (jokes.length < this.props.numJokesToGet) {
            const response = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            jokes.push(data.joke);
        }
        this.setState({ jokes: jokes });
    }
    render() {
        return (
            <div>
                <h1>joke list</h1>
                <div>
                    {this.state.jokes.map(j => (
                        <div>{j}</div>
                    ))}
                </div>
            </div>
        );
    }
}

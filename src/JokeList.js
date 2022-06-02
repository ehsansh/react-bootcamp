import React, { Component } from 'react';
import Joke from './Joke';
import { v4 as uuid } from 'uuid';

export default class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10,
    };
    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem('jokes')) || [],
            loading: false,
        };
        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        this.handleVote = this.handleVote.bind(this);
        this.getJokes = this.getJokes.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) this.getJokes();
    }
    handleClick() {
        this.setState({ loading: true }, this.getJokes);
    }
    handleVote(id, change) {
        this.setState(
            st => ({
                jokes: st.jokes.map(j =>
                    j.id === id ? { ...j, votes: j.votes + change } : j
                ),
            }),
            () =>
                window.localStorage.setItem(
                    'jokes',
                    JSON.stringify(this.state.jokes)
                )
        );
    }
    async getJokes() {
        let jokes = [];
        while (jokes.length < this.props.numJokesToGet) {
            const response = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (!this.seenJokes.has(data.joke)) {
                jokes.push({ id: uuid(), text: data.joke, votes: 0 });
            }
        }
        this.setState(
            st => ({
                jokes: [...st.jokes, ...jokes],
                loading: false,
            }),
            () =>
                window.localStorage.setItem(
                    'jokes',
                    JSON.stringify(this.state.jokes)
                )
        );
    }
    render() {
        if (this.state.loading) return <h1>loading...</h1>;
        return (
            <div>
                <h1>joke list</h1>
                <div className='sidebar'>
                    <button onClick={this.handleClick}>new jokes</button>
                </div>
                <div>
                    {this.state.jokes.map(j => (
                        <Joke
                            upvote={() => this.handleVote(j.id, 1)}
                            downvote={() => this.handleVote(j.id, -1)}
                            key={j.id}
                            votes={j.votes}
                            text={j.text}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

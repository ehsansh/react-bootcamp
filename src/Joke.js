import React, { Component } from 'react';

export default class Joke extends Component {
    render() {
        return (
            <div>
                <div className='buttons'>
                    <button onClick={this.props.upvote}>up vote</button>
                    <span>{this.props.votes}</span>
                    <button onClick={this.props.downvote}>down vote</button>
                </div>
                <div className='text'>{this.props.text}</div>
            </div>
        );
    }
}

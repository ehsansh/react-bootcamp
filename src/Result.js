import React, { Component } from 'react';

class Result extends Component {
    render() {
        const { heads, backs, flips } = this.props;
        return (
            <div>
                Out of {flips} flips, there have been {heads} heads and {backs}{' '}
                tails.
            </div>
        );
    }
}

export default Result;

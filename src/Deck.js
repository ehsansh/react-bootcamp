import React, { Component } from 'react';
const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle';

export default class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null,
        };
    }
    async componentDidMount() {
        const response = await fetch(API_URL);
        const deck = await response.json();
        this.setState({ deck: deck });
    }
    render() {
        return <div>Deck</div>;
    }
}

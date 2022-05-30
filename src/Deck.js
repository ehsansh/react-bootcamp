import React, { Component } from 'react';
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

export default class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            drawn: [],
        };
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount() {
        const response = await fetch(`${API_BASE_URL}/new/shuffle`);
        const deck = await response.json();
        this.setState({ deck: deck });
    }
    async getCard() {
        try {
            const id = this.state.deck.deck_id;
            const card_url = `${API_BASE_URL}/${id}/draw/`;
            const response = await fetch(card_url);
            const data = await response.json();
            if (!data.success) {
                throw new Error('no cards left');
            }
            const card = data.cards[0];

            this.setState(st => {
                return {
                    drawn: [
                        ...st.drawn,
                        {
                            id: card.code,
                            image: card.image,
                        },
                    ],
                };
            });
        } catch (e) {}
    }
    render() {
        return (
            <div>
                <h1>deck</h1>
                <button onClick={this.getCard}>Get Card</button>
            </div>
        );
    }
}

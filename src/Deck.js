import React, { Component } from 'react';
import Card from './Card';

export default class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardIds: [],
            remaining: 52,
            images: new Map(),
        };
        this.addCard = this.addCard.bind(this);
        this.imgSrc = this.imgSrc.bind(this);
    }
    componentDidMount() {
        this.addCard();
    }
    async addCard() {
        const response = await fetch(
            'https://deckofcardsapi.com/api/deck/new/shuffle/'
        );
        const data = await response.json();
        const image = await this.imgSrc(
            `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/`
        );
        this.setState(st => {
            return {
                cardIds: [...st.cardIds, data.deck_id],
                remaining: st.remaining - 1,
                images: st.images.set(data.deck_id, image),
            };
        });
    }
    async imgSrc(url) {
        const response = await fetch(url);
        const data = await response.json();
        const { cards } = await data;
        return cards[0].image;
    }
    render() {
        return (
            <div>
                <button onClick={this.addCard}>add a card</button>
                {this.state.cardIds.map(c => (
                    <Card key={c} url={this.state.images.get(c)} />
                ))}
            </div>
        );
    }
}

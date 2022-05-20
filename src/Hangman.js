import React, { Component } from 'react';
import './Hangman.css';
import img0 from './0.jpg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import { randomWord } from './words';

import AlphaButtons from './AlphaButtons';

class Hangman extends Component {
    /** by default, allow 6 guesses and use provided gallows images. */
    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6],
    };

    constructor(props) {
        super(props);
        this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
        this.guess = this.guess.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() });
    }

    /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
    guessedWord() {
        return this.state.answer
            .split('')
            .map(ltr => (this.state.guessed.has(ltr) ? ltr : '_'));
    }
    // hasWon() {
    //     return this.state.answer
    //         .split('')
    //         .every(ltr => this.state.guessed.has(ltr));
    // }
    /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
    guess(evt) {
        let ltr = evt.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
        }));
    }

    /** generateButtons: return array of letter buttons to render */

    /** render: render game */
    render() {
        const altImg = `${this.state.nWrong}/${this.props.maxWrong}`;
        return (
            <div className='Hangman'>
                <h1>Hangman</h1>
                <img alt={altImg} src={this.props.images[this.state.nWrong]} />
                <p>Number wrong: {this.state.nWrong}</p>
                <p className='Hangman-word'>{this.guessedWord()}</p>

                {this.state.nWrong < this.props.maxWrong ? (
                    <AlphaButtons
                        guess={this.guess}
                        letters='abcdefghijklmnopqrstuvwxyz'
                        guessed={this.state.guessed}
                    />
                ) : (
                    <p>You lose the correct word is {this.state.answer}</p>
                )}

                {this.guessedWord().join('') === this.state.answer && (
                    <p>You win!</p>
                )}

                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Hangman;

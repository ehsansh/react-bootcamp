import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
export default class Chips extends Component {
    render() {
        return (
            <div>
                <Message>
                    <h1>Chips</h1>
                    <p>some text for chips</p>
                </Message>
                <Link to='/'>Back</Link>
            </div>
        );
    }
}

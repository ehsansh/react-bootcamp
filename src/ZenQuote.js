import React, { Component } from 'react';
import axios from 'axios';

export default class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            isLoaded: false,
        };
    }
    componentDidMount() {
        // fetch('https://api.github.com/zen')
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        axios.get('https://api.github.com/zen').then(res => {
            setTimeout(() => {
                this.setState({
                    quote: res.data,
                    isLoaded: true,
                });
            }, 3000);
        });
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <h1>{this.state.quote}</h1>
                ) : (
                    <p>is loading ....</p>
                )}
            </div>
        );
    }
}

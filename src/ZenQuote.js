import React, { Component } from 'react';
import axios from 'axios';

export default class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
        };
    }
    componentDidMount() {
        // fetch('https://api.github.com/zen')
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        axios.get('https://api.github.com/zen').then(res => {
            this.setState({
                quote: res.data,
            });
        });
    }
    render() {
        return <div>{this.state.quote}</div>;
    }
}

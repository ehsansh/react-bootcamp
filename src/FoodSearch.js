import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({ query: evt.target.value });
    }
    render() {
        return (
            <div>
                <input
                    onChange={this.handleChange}
                    type='text'
                    name='query'
                    value={this.state.query}
                />
                <Link to={`/food/${this.state.query}`}>Go to the ...</Link>
            </div>
        );
    }
}

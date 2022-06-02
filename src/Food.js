import React, { Component } from 'react';

export default class Food extends Component {
    render() {
        const url = `https://source.unsplash.com/800x600/?${this.props.name}`;
        return (
            <div>
                <h1>this is a {this.props.name}</h1>
                <img src={url} alt={this.props.name} />
            </div>
        );
    }
}

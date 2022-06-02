import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Sardines extends Component {
    render() {
        return (
            <div>
                <h1>sardines</h1>
                <Link to='/'>Back</Link>
            </div>
        );
    }
}

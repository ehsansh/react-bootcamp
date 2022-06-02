import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Soda from './Soda';

export default class VendingMachine extends Component {
    render() {
        return (
            <div>
                <h1>VendingMachine</h1>
                <Link to='/soda'>Soda</Link>
                <br />
                <Link to='/chips'>Chips</Link>
                <br />
                <Link to='/sardines'>Sardines</Link>
            </div>
        );
    }
}

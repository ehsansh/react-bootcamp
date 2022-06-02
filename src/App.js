import './App.css';

import React, { Component } from 'react';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import { Route, Routes } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route exact path='/' element={<VendingMachine />} />
                    <Route exact path='chips' element={<Chips />} />
                    <Route exact path='sardines' element={<Sardines />} />
                    <Route exact path='soda' element={<Soda />} />
                </Routes>
            </div>
        );
    }
}

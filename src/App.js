import './App.css';

import React, { Component } from 'react';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
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

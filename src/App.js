import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import About from './About';

export default class App extends Component {
    render() {
        return (
            <div>
                App
                <Routes>
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />} />
                </Routes>
            </div>
        );
    }
}

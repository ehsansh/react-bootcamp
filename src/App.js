import React, { Component } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';

export default class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />} />
                </Routes>
            </div>
        );
    }
}

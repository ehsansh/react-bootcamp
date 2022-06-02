import React, { Component } from 'react';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';

export default class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink activeclassname='true' exact='true' to='/'>
                        Home
                    </NavLink>
                    <NavLink activeclassname='true' exact='true' to='/about'>
                        About
                    </NavLink>
                    <NavLink activeclassname='true' exact='true' to='/contact'>
                        Contact
                    </NavLink>
                </nav>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route
                        exact
                        path='/about'
                        element={<About name='ehsan' />}
                    />
                    <Route exact path='/contact' element={<Contact />} />
                </Routes>
            </div>
        );
    }
}

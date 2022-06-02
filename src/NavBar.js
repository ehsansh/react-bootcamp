import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink activeclassname='true' to='/'>
                    home
                </NavLink>
                <br />
                <NavLink activeclassname='true' to='/sardines'>
                    sardines
                </NavLink>
                <br />
                <NavLink activeclassname='true' to='/soda'>
                    soda
                </NavLink>
                <br />
                <NavLink activeclassname='true' to='/chips'>
                    chips
                </NavLink>
            </div>
        );
    }
}

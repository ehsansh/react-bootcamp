import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
    const themeValue = useContext(ThemeContext);
    const { isLightTheme, light, dark } = themeValue;
    const theme = isLightTheme ? light : dark;

    const { isAuthenticated, toggleAuth } = useContext(AuthContext);

    return (
        <div style={{ background: theme.bg, color: theme.color }}>
            <h1>context app</h1>
            <h3 onClick={toggleAuth}>
                {isAuthenticated ? 'logged in' : 'logged out'}
            </h3>
            <ul>
                <li style={{ background: theme.ui }}>Home</li>
                <li style={{ background: theme.ui }}>About</li>
            </ul>
        </div>
    );
};

export default Navbar;

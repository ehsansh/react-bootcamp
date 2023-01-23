import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const value = useContext(ThemeContext);
    const { isLightTheme, light, dark } = value;
    const theme = isLightTheme ? light : dark;

    return (
        <div style={{ background: theme.bg, color: theme.color }}>
            <h1>context app</h1>
            <ul>
                <li style={{ background: theme.ui }}>Home</li>
                <li style={{ background: theme.ui }}>About</li>
            </ul>
        </div>
    );
};

export default Navbar;

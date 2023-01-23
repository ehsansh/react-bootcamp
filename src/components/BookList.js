import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

const BookList = () => {
    const value = useContext(ThemeContext);
    const { isLightTheme, light, dark } = value;
    const theme = isLightTheme ? light : dark;

    return (
        <div style={{ background: theme.bg, color: theme.color }}>
            <h2>BookList</h2>
            <ul>
                <li>book 1</li>
                <li>book 2</li>
            </ul>
        </div>
    );
};

export default BookList;

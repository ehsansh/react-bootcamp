import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext';

const BookList = () => {
    const value = useContext(ThemeContext);
    const { isLightTheme, light, dark } = value;
    const theme = isLightTheme ? light : dark;
    const { books } = useContext(BookContext);

    return (
        <div style={{ background: theme.bg, color: theme.color }}>
            <h2>BookList</h2>
            <ul>
                {books.map(b => (
                    <li key={b.id}>{b.title} </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;

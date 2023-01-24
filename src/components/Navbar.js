import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>Book list</h1>
            <p>Currenttly you have {books.length} books</p>
        </div>
    );
};

export default Navbar;

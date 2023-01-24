import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: 'book 1',
        },
        {
            id: 2,
            title: 'book 2',
        },
    ]);
    return (
        <BookContext.Provider value={{ books }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;

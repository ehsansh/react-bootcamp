import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([
        {
            title: 'title1',
            author: 'authro1',
            id: 1,
        },
        {
            title: 'title1',
            author: 'authro1',
            id: 2,
        },
    ]);

    const addBooks = (title, author) => {
        setBooks([...books, { title, author, id: uuidv4() }]);
    };
    const removeBooks = id => setBooks(books.filter(book => book.id !== id));

    return (
        <BookContext.Provider value={{ books, addBooks, removeBooks }}>
            {children}
        </BookContext.Provider>
    );
};

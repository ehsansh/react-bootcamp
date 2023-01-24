import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
    const [books, dispatch] = useReducer(bookReducer, [
        {
            title: 'title1',
            author: 'authro1',
            id: 1,
        },
        {
            title: 'title2',
            author: 'authro2',
            id: 2,
        },
    ]);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {children}
        </BookContext.Provider>
    );
};

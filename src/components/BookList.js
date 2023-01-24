import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);

    return books.length ? (
        <ul>
            {books.map(book => (
                <BookDetails book={book} key={book.id} />
            ))}
        </ul>
    ) : (
        <div>No books to read</div>
    );
};

export default BookList;

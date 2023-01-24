import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const { dispatch } = useContext(BookContext);

    const submit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_BOOK',
            book: { title, author },
        });
    };

    return (
        <form onSubmit={submit}>
            <input
                type='text'
                value={title}
                placeholder='title is...'
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type='text'
                value={author}
                placeholder='author is...'
                onChange={e => setAuthor(e.target.value)}
            />
            <button>submit</button>
        </form>
    );
};

export default BookForm;

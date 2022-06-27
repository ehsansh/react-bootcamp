import React, { useState, useEffect } from 'react';

export default function Movies() {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState('');
    useEffect(() => {
        async function fetchMovie() {
            const response = await fetch(
                `https://swapi.dev/api/films/${number}`
            );
            const result = await response.json();
            setMovie(result);
        }
        fetchMovie();
    }, [number]);
    return (
        <div>
            <h1>Pick a Movie</h1>
            <h2>You chose: {movie.title}</h2>
            <select value={number} onChange={e => setNumber(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select>
        </div>
    );
}

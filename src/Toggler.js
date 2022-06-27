import React from 'react';
import useToggle from './hooks/useToggle';

export default function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isFresh, toggleIsFresh] = useToggle(true);

    return (
        <div>
            <h1 onClick={toggleIsHappy}> {isHappy ? 'happy' : 'sad'} </h1>
            <h1 onClick={toggleIsFresh}> {isFresh ? 'fresh' : 'tired'}</h1>
        </div>
    );
}

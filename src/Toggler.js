import React, { useState } from 'react';

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const toggle = () => {
        setIsHappy(!isHappy);
    };
    return <h1 onClick={toggle}> {isHappy ? 'happy' : 'sad'} </h1>;
}

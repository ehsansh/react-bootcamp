import React, { useState, useEffect } from 'react';

export default function Clicker() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${count} times`;
    });
    return (
        <div>
            <h1>clicker example</h1>
            <button onClick={() => setCount(count + 1)}>
                you clicked {count}
            </button>
        </div>
    );
}

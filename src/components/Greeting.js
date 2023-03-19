import React, { useState } from 'react';

const Greeting = () => {
    const [text, setText] = useState(false);

    const changeTextHandler = () => {
        setText(true);
    };

    return (
        <div>
            <h2>Hello World</h2>
            {text ? <p>Changed.</p> : <p>It's good to see you.</p>}
            <button onClick={changeTextHandler}>change text</button>
        </div>
    );
};

export default Greeting;

import React, { useState } from 'react';

export default function SimpleFormHook() {
    const [email, setEmail] = useState('');
    const handleChange = e => {
        setEmail(e.target.value);
    };
    return (
        <div>
            <h1>your email is: {email}</h1>
            <input type='text' value={email} onChange={handleChange} />
        </div>
    );
}

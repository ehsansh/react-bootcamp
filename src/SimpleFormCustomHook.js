import React from 'react';
import useFormState from './hooks/useFormState';
export default function SimpleFormHook() {
    const [email, updateEmail, resetEmail] = useFormState('');
    return (
        <div>
            <h1>your email is: {email} </h1>
            <input type='text' onChange={updateEmail} />
            <button onClick={resetEmail}>submit</button>
        </div>
    );
}

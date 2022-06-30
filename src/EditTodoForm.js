import React from 'react';
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState';
export default function EditTodoForm({ editTodo, id, task, toggle }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggle();
            }}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
            />
        </form>
    );
}

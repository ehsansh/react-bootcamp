import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState';

import { TodosContext } from './context/todos.context';

export default function EditTodoForm({ id, task, toggle }) {
    const { dispatch } = useContext(TodosContext);
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                dispatch({ type: 'edit', id: id, newTask: value });
                reset();
                toggle();
            }}
            style={{ marginLeft: '1rem', width: '50%' }}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    );
}

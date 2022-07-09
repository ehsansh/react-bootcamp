import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/todos.context';
export default function TodoForm() {
    const [value, handleChange, reset] = useInputState('');
    const dispatch = useContext(DispatchContext);
    return (
        <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    dispatch({ type: 'add', task: value });
                    reset();
                }}
            >
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin='normal'
                    label='Add new todo'
                    fullWidth
                />
            </form>
        </Paper>
    );
}

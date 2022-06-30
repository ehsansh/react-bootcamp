import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
export default function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'music', completed: false },
        { id: 2, task: 'sport', completed: true },
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
    };
    return (
        <Paper
            style={{
                backgroundColor: '#fafafa',
                height: '100vh',
                padding: 0,
                margin: 0,
            }}
            elevation={0}
        >
            <AppBar
                position='static'
                color='primary'
                style={{ height: '60px' }}
            >
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </Paper>
    );
}

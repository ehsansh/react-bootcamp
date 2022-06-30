import React from 'react';
import useTodoState from './hooks/useTodoState';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
export default function TodoApp() {
    const { todos, addTodo, removeTodo, toggledTodo, editTodo } = useTodoState(
        []
    );

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
            <Grid
                container
                justifyContent='center'
                style={{ marginTop: '1rem' }}
            >
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggledTodo={toggledTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

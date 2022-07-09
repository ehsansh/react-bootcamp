import React from 'react';

import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

import { TodosProvider } from './context/todos.context';

export default function TodoApp() {
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
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    );
}

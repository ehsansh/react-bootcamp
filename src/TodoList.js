import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import Todo from './Todo';
import { TodosContext } from './context/todos.context';
export default function TodoList() {
    const { todos } = useContext(TodosContext);
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <Todo
                                key={todo.id}
                                task={todo.task}
                                id={todo.id}
                                completed={todo.completed}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        );
    return null;
}

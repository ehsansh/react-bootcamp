import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import Todo from './Todo';

export default function TodoList(props) {
    if (props.todos.length)
        return (
            <Paper>
                <List>
                    {props.todos.map((todo, i) => (
                        <>
                            <Todo
                                task={todo.task}
                                key={todo.id}
                                id={todo.id}
                                completed={todo.completed}
                                removeTodo={props.removeTodo}
                                toggledTodo={props.toggledTodo}
                                editTodo={props.editTodo}
                            />
                            {i < props.todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        );
    return null;
}

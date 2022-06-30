import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <>
                        <Todo
                            task={todo.task}
                            key={todo.id}
                            id={todo.id}
                            completed={todo.completed}
                            removeTodo={props.removeTodo}
                            toggledTodo={props.toggledTodo}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
}

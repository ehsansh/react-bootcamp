import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
export default function Todo({ task, completed, removeTodo, toggledTodo, id }) {
    return (
        <ListItem>
            <Checkbox
                tabIndex='-1'
                checked={completed}
                onClick={() => toggledTodo(id)}
            />
            <ListItemText
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={() => removeTodo(id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

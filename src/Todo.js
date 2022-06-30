import React from 'react';
import useToggle from './hooks/useToggleState';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

import EditTodoForm from './EditTodoForm';
export default function Todo({
    task,
    completed,
    removeTodo,
    toggledTodo,
    editTodo,
    id,
}) {
    const [isEditing, toggle] = useToggle(false);
    return (
        <ListItem style={{ height: '64px' }}>
            {isEditing ? (
                <EditTodoForm
                    editTodo={editTodo}
                    id={id}
                    task={task}
                    toggle={toggle}
                />
            ) : (
                <>
                    <Checkbox
                        tabIndex='-1'
                        checked={completed}
                        onClick={() => toggledTodo(id)}
                    />
                    <ListItemText
                        style={{
                            textDecoration: completed ? 'line-through' : 'none',
                        }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

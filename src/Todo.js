import React, { useContext } from 'react';
import useToggle from './hooks/useToggleState';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

import EditTodoForm from './EditTodoForm';

import { TodosContext } from './context/todos.context';

export default function Todo({ id, task, completed }) {
    const { dispatch } = useContext(TodosContext);
    const [isEditing, toggle] = useToggle(false);
    return (
        <ListItem style={{ height: '64px' }}>
            {isEditing ? (
                <EditTodoForm id={id} task={task} toggle={toggle} />
            ) : (
                <>
                    <Checkbox
                        tabIndex='-1'
                        checked={completed}
                        onClick={() => dispatch({ type: 'toggle', id: id })}
                    />
                    <ListItemText
                        style={{
                            textDecoration: completed ? 'line-through' : 'none',
                        }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton
                            onClick={() => dispatch({ type: 'remove', id: id })}
                        >
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

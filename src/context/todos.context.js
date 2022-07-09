import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
    { id: 1, task: 'work', completed: false },
    { id: 2, task: 'art', completed: false },
    { id: 3, task: 'sport', completed: true },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </TodosContext.Provider>
    );
}

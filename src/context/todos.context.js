import React, { createContext } from 'react';

import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
    { id: 1, task: 'work', completed: false },
    { id: 2, task: 'art', completed: false },
    { id: 3, task: 'sport', completed: true },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
    const todosStuff = useTodoState(defaultTodos);

    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    );
}

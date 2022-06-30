import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const useTodoState = initialTodos => {
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = newTodoText => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: newTodoText, completed: false },
        ]);
    };
    const removeTodo = todoId => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    };
    const toggledTodo = todoId => {
        setTodos(
            todos.map(todo =>
                todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };
    const editTodo = (todoId, newTask) => {
        setTodos(
            todos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTask } : todo
            )
        );
    };
    return {
        todos,
        addTodo,
        removeTodo,
        toggledTodo,
        editTodo,
    };
};
export default useTodoState;

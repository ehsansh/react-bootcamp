import React, { Component } from 'react';

import NewToDoForm from './NewToDoForm';

import ToDo from './ToDo';

import { v4 as uuid } from 'uuid';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
        this.addToDo = this.addToDo.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
    }
    addToDo(todo) {
        const newTodo = { todo: todo, id: uuid() };
        this.setState({
            todos: [...this.state.todos, newTodo],
        });
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id),
        });
    }
    edit(obj) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === obj.id) todo.todo = obj.todo;
            return todo;
        });
        this.setState({
            todos: todos,
        });
    }
    render() {
        return (
            <div>
                <NewToDoForm addToDo={this.addToDo} />
                {this.state.todos.map(todo => (
                    <ToDo
                        remove={() => this.remove(todo.id)}
                        key={todo.id}
                        id={todo.id}
                        todo={todo.todo}
                        edit={this.edit}
                    />
                ))}
            </div>
        );
    }
}

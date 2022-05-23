import React, { Component } from 'react';

export default class NewToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        };
        this.addToDoHandler = this.addToDoHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }
    addToDoHandler(evt) {
        evt.preventDefault();
        this.props.addToDo(this.state.todo);
        this.setState({ todo: '' });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addToDoHandler}>
                    <label htmlFor='todo'></label>
                    <input
                        id='todo'
                        type='text'
                        name='todo'
                        value={this.state.todo}
                        onChange={this.changeHandler}
                    />
                    <button>add new todo</button>
                </form>
            </div>
        );
    }
}

import React, { Component } from 'react';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            editText: this.props.todo,
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.editToDoHandler = this.editToDoHandler.bind(this);
        this.activeEdit = this.activeEdit.bind(this);
    }
    changeHandler(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }
    editToDoHandler(evt) {
        evt.preventDefault();
        this.props.edit({ id: this.props.id, todo: this.state.editText });
        this.setState({ edit: false });
    }
    activeEdit() {
        this.setState({ edit: true });
    }
    render() {
        return (
            <div>
                {this.state.edit ? (
                    <form onSubmit={this.editToDoHandler}>
                        <label htmlFor='editText'></label>
                        <input
                            id='editText'
                            type='text'
                            name='editText'
                            value={this.state.editText}
                            onChange={this.changeHandler}
                        />
                        <button>submit</button>
                    </form>
                ) : (
                    <div>{this.props.todo}</div>
                )}
                <button onClick={this.activeEdit}>edit todo</button>
                <button onClick={this.props.remove}>X</button>
            </div>
        );
    }
}

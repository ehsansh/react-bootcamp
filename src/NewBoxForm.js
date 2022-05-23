import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null,
            height: null,
            backgroundColor: null,
        };
        this.addBoxHandler = this.addBoxHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }
    addBoxHandler(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addBoxHandler}>
                    <label htmlFor='width'>width</label>
                    <input
                        type='text'
                        name='width'
                        onChange={this.handleChange}
                    />
                    <label htmlFor='height'>height</label>
                    <input
                        type='text'
                        name='height'
                        onChange={this.handleChange}
                    />
                    <label htmlFor='backgroundColor'>backgroundColor</label>
                    <input
                        type='text'
                        name='backgroundColor'
                        onChange={this.handleChange}
                    />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default NewBoxForm;

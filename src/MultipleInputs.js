import React, { Component } from 'react';

class MultipleInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }
    formSubmit(evt) {
        evt.preventDefault();
        alert(this.state.username);
        this.setState({
            username: '',
            email: '',
        });
    }
    render() {
        return (
            <div>
                <h1>Multiple inputs</h1>
                username is {this.state.username} <br />
                email is {this.state.email}
                <form>
                    <label htmlFor='username'>username</label>
                    <input
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.formSubmit}>submit</button>
                </form>
            </div>
        );
    }
}

export default MultipleInputs;

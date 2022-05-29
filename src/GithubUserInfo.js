import React, { Component } from 'react';
import axios from 'axios';
export default class GithubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
            name: '',
        };
    }
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        const response = await axios.get(url);
        const data = response.data;

        this.setState({
            imgUrl: data.avatar_url,
            name: data.name,
        });
    }
    render() {
        return (
            <div>
                <h1>Github user info</h1>
                <p>{this.state.name}</p>
                <img src={this.state.imgUrl} alt='name' />
            </div>
        );
    }
}

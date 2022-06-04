import React, { Component } from 'react';
import DogList from './DogList';
import DogDeatils from './DogDetails';
import { Route, Routes } from 'react-router-dom';
import whiskey from './imgs/whiskey.jpg';
import hazel from './imgs/hazel.jpg';
import tubby from './imgs/tubby.jpg';

export default class App extends Component {
    static defaultProps = {
        dogs: [
            {
                name: 'Whiskey',
                age: 5,
                src: whiskey,
                facts: [
                    'Whiskey loves eating popcorn.',
                    'Whiskey is a terrible guard dog.',
                    'Whiskey wants to cuddle with you!',
                ],
            },
            {
                name: 'Hazel',
                age: 3,
                src: hazel,
                facts: [
                    'Hazel has soooo much energy!',
                    'Hazel is highly intelligent.',
                    'Hazel loves people more than dogs.',
                ],
            },
            {
                name: 'Tubby',
                age: 4,
                src: tubby,
                facts: [
                    'Tubby is not the brightest dog',
                    'Tubby does not like walks or exercise.',
                    'Tubby loves eating food.',
                ],
            },
        ],
    };
    render() {
        return (
            <div>
                <Routes>
                    <Route
                        exact
                        path='/dogs'
                        element={<DogList dogs={this.props.dogs} />}
                    />
                    <Route
                        exact
                        path='/dogs/:name'
                        element={<DogDeatils name dogs={this.props.dogs} />}
                    />
                </Routes>
            </div>
        );
    }
}

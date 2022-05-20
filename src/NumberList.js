import React, { Component } from 'react';
import NumItem from './NumItem';
class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [1, 2, 3, 4, 5, 6],
        };
        this.remove = this.remove.bind(this);
    }
    remove(val) {
        this.setState(st => {
            return {
                nums: st.nums.filter(n => n !== val),
            };
        });
    }
    render() {
        return (
            <div>
                {this.state.nums.map(n => {
                    return <NumItem value={n} remove={this.remove} />;
                })}
            </div>
        );
    }
}

export default NumberList;

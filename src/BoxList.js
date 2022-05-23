import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
        };
        this.addBox = this.addBox.bind(this);
        this.remove = this.remove.bind(this);
    }
    remove(id) {
        this.setState(state => {
            return {
                boxes: state.boxes.filter(box => box.id !== id),
            };
        });
    }
    addBox(box) {
        box.id = uuid();
        this.setState(state => {
            return {
                boxes: [...state.boxes, box],
            };
        });
    }
    render() {
        return (
            <div>
                <NewBoxForm addBox={this.addBox} />
                {this.state.boxes.map(el => {
                    return (
                        <Box
                            width={el.width}
                            height={el.height}
                            backgroundColor={el.backgroundColor}
                            key={el.id}
                            id={el.id}
                            remove={this.remove}
                        />
                    );
                })}
            </div>
        );
    }
}

export default BoxList;

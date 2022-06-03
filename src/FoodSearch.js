// import React, { Component } from 'react';
// import { Link} from 'react-router-dom';

// export default class FoodSearch extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             query: '',
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleChange(evt) {
//         this.setState({ query: evt.target.value });
//     }
//     handleClick() {
//         // this.props.history.push(`food/${this.state.query}`);
//     }
//     render() {
//         return (
//             <div>
//                 <input
//                     onChange={this.handleChange}
//                     type='text'
//                     name='query'
//                     value={this.state.query}
//                 />
//                 <Link to={`/food/${this.state.query}`}>Go to the ...</Link>
//                 <button onClick={this.handleClick}>save food</button>
//             </div>
//         );
//     }
// }

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function FoodSearch() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleClick = function () {
        navigate(`/food/${query}`);
    };
    return (
        <div>
            <input
                onChange={event => setQuery(event.target.value)}
                type='text'
                name='query'
                value={query}
            />
            <Link to={`/food/${query}`}>Go to the ...</Link>
            <button onClick={handleClick}>save food</button>
        </div>
    );
}

export default FoodSearch;

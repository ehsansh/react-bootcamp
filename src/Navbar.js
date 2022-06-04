import { Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <div>
            <h1>dog app</h1>
            <ul>
                {props.dogs.map(d => (
                    <li key={d.name}>
                        <Link to={`/dogs/${d.name}`}>{d.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;

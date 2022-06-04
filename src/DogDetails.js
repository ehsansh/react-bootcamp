import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
function DogDeatils(props) {
    const { name } = useParams();
    let dog = props.dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
    return (
        <div>
            <h1>{dog.name}</h1>
            <h2>{dog.age} years old</h2>
            <img src={dog.src} alt={dog.name} width='200' />
            <ul>
                {dog.facts.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>
            <Link to='/dogs'>Go back</Link>
        </div>
    );
}

export default DogDeatils;

import { useParams } from 'react-router-dom';

function Food() {
    const { name } = useParams();
    const url = `https://source.unsplash.com/600x600/?${name}`;
    return (
        <div>
            <h1>this is a {name}</h1>
            <img src={url} alt={name} />
        </div>
    );
}

export default Food;

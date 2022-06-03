import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function Food() {
    const { name } = useParams();
    const url = `https://source.unsplash.com/600x600/?${name}`;
    return (
        <div>
            {/\d/.test(name) ? (
                <Navigate replace to='/' />
            ) : (
                <div>
                    <h1>this is a {name}</h1>
                    <img src={url} alt={name} />
                </div>
            )}
        </div>
    );
}

export default Food;

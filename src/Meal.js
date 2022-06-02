import { useParams } from 'react-router-dom';

function Meal() {
    const { food, drink } = useParams();
    return (
        <div>
            My food is {food} and my drink is {drink}
        </div>
    );
}

export default Meal;

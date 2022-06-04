import DogList from './DogList';
import DogDeatils from './DogDetails';
import { Route, Routes, Navigate } from 'react-router-dom';

function AppRoutes(props) {
    return (
        <Routes>
            <Route exact path='/dogs' element={<DogList dogs={props.dogs} />} />
            <Route
                exact
                path='/dogs/:name'
                element={<DogDeatils name dogs={props.dogs} />}
            />
            <Route path='*' element={<Navigate to='/dogs' />} />
        </Routes>
    );
}

export default AppRoutes;

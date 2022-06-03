import './App.css';
import Food from './Food';
import Meal from './Meal';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import FoodSearch from './FoodSearch';
function App() {
    return (
        <div className='App'>
            <Routes>
                <Route exact path='/food/:name' element={<Food />} />
                <Route exact path='/:food/:drink' element={<Meal />} />
                <Route exact path='/' element={<FoodSearch />} />
                <Route exact path='/*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;

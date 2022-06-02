import './App.css';
import Food from './Food';
import Meal from './Meal';
import { Route, Routes } from 'react-router-dom';
function App() {
    return (
        <div className='App'>
            <Routes>
                <Route exact path='/food/:name' element={<Food />} />
                <Route exact path='/:food/:drink' element={<Meal />} />
            </Routes>
        </div>
    );
}

export default App;

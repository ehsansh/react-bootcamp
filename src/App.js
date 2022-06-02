import './App.css';
import Food from './Food';
import { Route, Routes } from 'react-router-dom';
function App() {
    return (
        <div className='App'>
            <Routes>
                <Route exact path='/food/:name' element={<Food />} />
            </Routes>
        </div>
    );
}

export default App;

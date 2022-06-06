// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
function App() {
    return (
        <Routes>
            <Route
                exact
                path='/palette/:id'
                element={<Palette palette={generatePalette(seedColors[0])} />}
            />
        </Routes>

        // <div className='App'>
        //     <Palette palette={generatePalette(seedColors[0])} />
        // </div>
    );
}

export default App;

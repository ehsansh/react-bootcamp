// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
function App() {
    return (
        <Routes>
            {seedColors.map((s, i) => {
                return (
                    <Route
                        key={i}
                        exact
                        path={`/palette/${s.id}`}
                        element={<Palette palette={generatePalette(s)} />}
                    />
                );
            })}
        </Routes>
    );
}

export default App;

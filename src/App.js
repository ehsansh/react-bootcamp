// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';
function App() {
    return (
        <Routes>
            <Route
                exact
                path='/'
                element={<PaletteList palettes={seedColors} />}
            />

            {seedColors.map((s, i) => {
                return (
                    <>
                        <Route
                            key={i}
                            exact
                            path={`palette/${s.id}`}
                            element={<Palette palette={generatePalette(s)} />}
                        />
                        <Route
                            path={`palette/${s.id}/:colorId`}
                            element={
                                <SingleColorPalette
                                    palette={generatePalette(s)}
                                />
                            }
                        />
                    </>
                );
            })}
        </Routes>
    );
}

export default App;

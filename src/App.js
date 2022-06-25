// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
function App() {
    const [palettes, setPalettes] = useState(seedColors);
    const savePalette = newPalette => {
        setPalettes([...palettes, newPalette]);
    };
    return (
        <Routes>
            <Route
                exact
                path='/'
                element={<PaletteList palettes={palettes} />}
            />
            <Route
                exact
                path='/palette/new'
                element={
                    <NewPaletteForm
                        savePalette={savePalette}
                        palettes={palettes}
                    />
                }
            />
            {palettes.map((s, i) => {
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

import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [light, setLigh] = useState({
        syntax: '#555',
        ui: '#ddd',
        bg: '#eee',
    });

    const [dark, setDark] = useState({
        syntax: '#ddd',
        ui: '#333',
        bg: '#555',
    });

    return (
        <ThemeContext.Provider value={{ isLightTheme, light, dark }}>
            {children}
        </ThemeContext.Provider>
    );
};

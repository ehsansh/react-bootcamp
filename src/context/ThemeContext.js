import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [light, setLigh] = useState({
        color: '#555',
        ui: '#ddd',
        bg: '#eee',
    });

    const [dark, setDark] = useState({
        color: '#ddd',
        ui: '#333',
        bg: '#555',
    });

    const toggleTheme = () => setIsLightTheme(!isLightTheme);

    return (
        <ThemeContext.Provider
            value={{ isLightTheme, light, dark, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

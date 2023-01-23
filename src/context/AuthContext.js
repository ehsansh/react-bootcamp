import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const toggleAuth = () => setIsAuthenticated(!isAuthenticated);
    return (
        <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

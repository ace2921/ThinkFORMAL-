// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// Provider component to wrap around your app
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track auth state

    // Mock login function (replace with actual login logic)
    const login = () => {
        setIsAuthenticated(true);
    };

    // Mock logout function
    const logout = () => {
        setIsAuthenticated(false);
    };

    // Values to provide to any components that need auth info
    const value = {
        isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// // src/context/AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// // Create the context
// const AuthContext = createContext();

// // Custom hook to use the AuthContext
// export const useAuth = () => {
//     return useContext(AuthContext);
// };

// // Provider component to wrap around your app
// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false); // Track auth state

//     // Mock login function (replace with actual login logic)
//     const login = (username, password) => {
//         // Simple mock validation (replace with your own logic)
//         if (username === 'test' && password === 'password') {
//             setIsAuthenticated(true);
//         } else {
//             throw new Error('Invalid username or password');
//         }
//     };

//     // Mock logout function
//     const logout = () => {
//         setIsAuthenticated(false);
//     };

//     // Values to provide to any components that need auth info
//     const value = {
//         isAuthenticated,
//         login,
//         logout,
//     };

//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     );
// };



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
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Initialize authentication state based on localStorage
        return localStorage.getItem('isAuthenticated') === 'true';
    });
    const [error, setError] = useState(null); // Track login error

    // Mock login function (replace with actual login logic)
    const login = (username, password) => {
        if (username === 'test' && password === 'password') {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
            setError(null); // Clear any existing error
        } else {
            setError('Invalid username or password');
        }
    };

    // Mock logout function
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    // Values to provide to any components that need auth info
    const value = {
        isAuthenticated,
        login,
        logout,
        error, // Make error available to consuming components
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

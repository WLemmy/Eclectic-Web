import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);

    // Example functions to manage authToken
    const login = (token) => setAuthToken(token);
    const logout = () => setAuthToken(null);

    return (
        <UserContext.Provider value={{ authToken, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;

import React, { createContext, useContext } from 'react';
import PocketBase from 'pocketbase';

// Initialize PocketBase instance
const pb = new PocketBase('http://127.0.0.1:8090');

// Create context
const PocketBaseContext = createContext();

// Custom hook to use PocketBase instance
export const usePocketBase = () => useContext(PocketBaseContext);

// PocketBase provider component
const PocketBaseProvider = ({ children }) => {
    return (
        <PocketBaseContext.Provider value={pb}>
            {children}
        </PocketBaseContext.Provider>
    );
};

export default PocketBaseProvider;

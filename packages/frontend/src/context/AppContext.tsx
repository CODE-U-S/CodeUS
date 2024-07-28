// src/context/AppContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
    user: string | null;
    setUser: (user: string | null) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

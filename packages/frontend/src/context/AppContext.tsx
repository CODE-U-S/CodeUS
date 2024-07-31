import { createContext, useState, ReactNode } from 'react';

interface AppContextType {
    user: string | null;
    setUser: (user: string | null) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
    const [user, setUser] = useState<string | null>(null);

    return (
      <AppContext.Provider value={{ user, setUser }}>
          {children}
      </AppContext.Provider>
    );
};

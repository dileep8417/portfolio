import React, { ReactNode, createContext, useContext, useState } from "react";


type AppContextProps = {
    children: ReactNode
};

type contextState = {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
};

const context = createContext<contextState | null>(null); 

const AppContext = ({ children }: AppContextProps) => {

    const [isLoading, setIsLoading] = useState(true);

    const initialState: contextState = {
        isLoading: isLoading,
        setIsLoading: setIsLoading,
    };

    return (
        <context.Provider value={initialState}>
            {children}
        </context.Provider>
    );
}

export const useAppContext = () => {
    return useContext(context);
}

export default AppContext;
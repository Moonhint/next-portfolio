import type { Dispatch, SetStateAction, PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext<{namine: string, setNamine: Dispatch<SetStateAction<string>>} | undefined>(undefined);

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
    const [ namine, setNamine ] = useState('Globale');
    return (
        <GlobalContext.Provider value={{ namine, setNamine }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context){
        throw new Error('no context available');
    }

    return context;
}
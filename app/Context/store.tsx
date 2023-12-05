"use client";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type GlobalContextProviderProps = {
    children: React.ReactNode;
}

type ContextProps = {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps | null>(null);

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    return (
        <GlobalContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error(
            "useGlobalContext must be used within a GlobalContextProvider"
        )
    }
    return context;
};
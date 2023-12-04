"use client";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    loggedIn: boolean;
    setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
    loggedIn: false,
    setLoggedIn: () => { },
})

export const GlobalContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    return (
        <GlobalContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => useContext(GlobalContext);
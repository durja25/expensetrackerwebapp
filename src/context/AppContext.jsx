import {createContext, useEffect, useState} from "react";

export const AppContext = createContext();
export const AppContextProvider = ({children}) => {

    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    });

    const [loading, setLoading] = useState(true);


    const clearUser = () => {
        setUser(null);
    }

    const contextValue = {
        user,
        setUser,
        clearUser
    }
    //
    // const parseJwt = (token) => {
    //     try {
    //         return JSON.parse(atob(token.split('.')[1]));
    //     } catch {
    //         return null;
    //     }
    // };
    //
    // useEffect(() => {
    //     const user = localStorage.getItem("user");
    //     if (user) {
    //         setUser(user);
    //     }
    //     setLoading(false);
    // }, []);

    return (<AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>)
}
import {createContext, useState} from "react";

export const AppContext = createContext();
export const AppContextProvider = ({children}) => {

    // const [user, setUser] = useState(() => {
    //     const stored = localStorage.getItem("user");
    //     return stored ? JSON.parse(stored) : null;
    // });

    const [loading, setLoading] = useState(true);


    const clearUser = () => {
        setUser(null);
    }

    const contextValue = {
        user,
        setUser,
        clearUser
    }


    return (<AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>)
}
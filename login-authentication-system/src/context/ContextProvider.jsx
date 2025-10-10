import React from 'react'
import { createContext, useContext, useState } from 'react'

const authProvider = createContext();
export const userAuth = () => useContext(authProvider);

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // add login functionlity
    const login = (username, password) => {
        if (username === 'swarup' && password === '12345') {
            setUser({ username });
            return;
        } else {
            alert('Invalid Credentials');
            return
        }
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <>
            <authProvider.Provider value={{ user, login, logout }}>
                {children}
            </authProvider.Provider>
        </>
    )
}

export default ContextProvider
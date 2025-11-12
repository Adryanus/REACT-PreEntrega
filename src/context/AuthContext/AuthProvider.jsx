
import { useState } from "react";

import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const saved = sessionStorage.getItem("session");
        if (saved){return JSON.parse(saved) }
        else{return null}
        
    });

   
    const login = (name, password) => {
        if (name === "admin" && password === "1234") {
            const session = { name };
            setUser(session)
            sessionStorage.setItem("session", JSON.stringify(session));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        alert("Sesión cerrada");
        sessionStorage.removeItem("session");
    };

    const values = { user, login, logout };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;


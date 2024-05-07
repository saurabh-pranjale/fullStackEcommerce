import { createContext, useState } from "react";



export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [state,setState] = useState(true);
return (
    <AuthContext.Provider value={{state,setState}} >
        {children}
    </AuthContext.Provider>
)
};
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}){

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);

    return(
        <AuthContext.Provider value={{width}}>
            {children}
        </AuthContext.Provider>
    )
}
import React, { createContext, useState } from 'react'
import AuthStatus from './AuthStatus';

const AuthContext = createContext() ; 


const AuthProvider = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false) ;
    const [user, setuser] = useState("Anshul")
    //can use api or random name to get different user 
       

    const login = () => {
        if( isAuthenticated ){
            alert(`${user} is Already Login`)
            return ;
        }
        console.log(isAuthenticated);
        setIsAuthenticated(true);
    }
    const logout = () => {
        if( !isAuthenticated ){
            alert(`${user} is Already Logout`)
            return ;
        }
        console.log(isAuthenticated);
        setIsAuthenticated(false);
    }
    
    return (
    <>
        <AuthContext.Provider value={  { isAuthenticated , login , logout , user} }>
            <AuthStatus />
        </AuthContext.Provider>
    </>

  )
}

export default AuthProvider
export { AuthContext }
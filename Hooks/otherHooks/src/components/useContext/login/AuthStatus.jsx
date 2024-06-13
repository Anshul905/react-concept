import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'


const AuthStatus = () => {

    const { isAuthenticated , login , logout , user } = useContext(AuthContext)

    console.log(isAuthenticated,login,logout,user);

    return (
        <>    
            {/* <div className=""> {isAuthenticated} </div>
            <div>User is </div> */}

        <div className="outerbox">
            <h1 className='text-white font-bold text-2xl'> 
                {user} is { isAuthenticated ? 'logged in' : 'logged out' }
            </h1>
            <div className="buttonbox flex gap-10" >
              <button className='btn1' onClick={ login } >Click to Login</button>
              <button className='btn1' onClick={ logout } >Click to Logout</button>
            </div>
        </div>

            

        </>
  )
}

export default AuthStatus
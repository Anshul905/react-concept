import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDetail from '../Component/UserDetail';
  
const Login = () => {
    
    const user = { name : "Anshul" }
    const [logged_in, setLogged_in] = useState(false)
    const loginUser = () => {
        if(!logged_in){
            setLogged_in(true)
            toast.success("Logged In" , {  position:"top-left"  , theme: "dark" , autoClose: 2000 } );      
        }else{
            toast.warning("Already Logged In" , { autoClose: 2000, } );      
        }
    }
    const logoutUser = () => {
        if(logged_in){
            setLogged_in(false)
            toast.success("Logged Out" , {  position:"top-left"  , theme: "dark" , autoClose: 2000 } );      
        }else{
            toast.warning("Already Logged Out" , { autoClose: 2000, } );      
        }
    }

  return (
    <>
    <section className='text-center mt-10'>
        <h1 className='font-bold text-4xl'>Login Page </h1>

        {
            logged_in 
            ? <UserDetail user={user} />
            : <h4 className='text-2xl mt-5'>Click on login to see details</h4>
        }



        <div className="flex justify-center gap-5 mt-10" >
              <button className='btn1' onClick={loginUser} >Login</button>
              <button className='btn1' onClick={logoutUser} >Logout</button>
        </div>


        <ToastContainer limit={1}/>
    </section>
    </>
)
}

export default Login
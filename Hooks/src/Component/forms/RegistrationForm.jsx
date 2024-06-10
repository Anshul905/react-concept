import React from 'react'
import { useState } from 'react'


const RegistrationForm = () => {
    const [user, setuser] = useState({
        name : "",
        email : "",
        phone : "",
        password : ""
    }) 
    const [allusers, setallusers] = useState([])


    const printuser = (e) =>{
        e.preventDefault()
        if( user.email && user.password && user.phone && user.password){
            console.log("Logged In");
            
            //adding new user 
            const newuser = { id : new Date().getTime().toString() , ...user }
            setallusers( [ ...allusers , newuser ] )
            
            setuser( { name:"" , email:"" , phone:"" , password:""} )
            
            // console.log(newuser);
            // console.log(allusers);
        }else{
            alert("please fill the data")
        }
    }

    const inputHandle = (e) => {
        const changeField = e.target.name ;
        const changeFieldValue = e.target.value ;
        console.log( changeField , changeFieldValue );
        
        //updating change field 
        setuser( { ...user , [changeField] : changeFieldValue } )
        // The brackets [changeField] are used to evaluate the property name dynamically
        // 1. When you use { ...user, changeField: changeFieldValue } -->  it creates a new property named "changeField" in the user object.
        // 2. To make it dynamic, we use square brackets around changeField like this: { ...user, [changeField]: changeFieldValue }. Now, the value of changeField is used as the actual property name in the updated user object.

    }

    return (
    <>
        <form action="" onSubmit={printuser}>

            <div className="box">
                <label htmlFor="name"> Name</label>
                <input type="text" name="name" id="name" autoComplete='off' 
                    value={user.name}
                    onChange={ inputHandle }    
                />
            </div>

            <div className="box">
                <label htmlFor="email"> Email</label>
                <input type="text" name="email" id="email" autoComplete='off' 
                    value={user.email}
                    onChange={ inputHandle }    
                />
            </div>

            <div className="box">
                <label htmlFor="phone"> Phone</label>
                <input type="text" name="phone" id="phone" autoComplete='off' 
                    value={user.phone}
                    onChange={ inputHandle }    
                />
            </div>

            <div className="box">
                <label htmlFor="password"> Password</label>
                <input type="password" name="password" id="password" autoComplete='off' 
                    value={user.password}
                    onChange={ inputHandle }
                />
            </div>

            <button className='btn_style_1' type="submit">Login</button>
            
        </form>


        <div className="bg-blue-300 rounded  px-1 ">
            {
                allusers.length > 0 &&
                allusers.map( (user ) => {
                    const { id , name ,email , phone , password } = user 
                    return <div className="flex  justify-between gap-5" key={id}> 
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{password}</p>
                     </div>
                } )
            }
        </div>


    </>
  )
}

export default RegistrationForm
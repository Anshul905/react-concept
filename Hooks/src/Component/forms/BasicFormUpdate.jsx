import React from 'react'
import { useState } from 'react'


const BasicFormUpdate = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [allusers, setallusers] = useState([])

    const printuser = (e) =>{
        e.preventDefault()
        if( email && password ){
            //can check - if user already exist 

            const newuser = { id : new Date().getTime().toString() , email , password }
            setallusers( [ ...allusers , newuser ] )
            setemail("")
            setpassword("") 
    
            // console.log(newuser);
            // console.log(allusers);
        }else{
            alert("please fill the data")
        }
    }

    return (
    <>
        <form action="" onSubmit={printuser}>
            <div className="box">
                <label htmlFor="email"> Email</label>
                <input type="text" name="email" id="email" autoComplete='off' 
                    value={email}
                    onChange={ (e) => setemail(e.target.value) }    
                />
            </div>
            <div className="box">
                <label htmlFor="password"> Password</label>
                <input type="password" name="password" id="password" autoComplete='off' 
                    value={password}
                    onChange={ (e) => setpassword(e.target.value) }
                />
            </div>
            <button className='btn_style_1' type="submit">Login</button>
            
        </form>


        <div className="bg-blue-300 rounded  px-1 ">
            {
                allusers.length > 0 &&
                allusers.map( (user ) => {
                    const { id , email , password } = user 
                    return <div className="w-96 flex justify-between gap-5" key={id}> 
                        <p>{email}</p>
                        <p>{password}</p>
                     </div>
                } )
            }
        </div>
    </>
  )
}

export default BasicFormUpdate
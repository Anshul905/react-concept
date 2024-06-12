import React from 'react'
import Card from './Card'

const UsersData = ({allusers}) => {

    // if(allusers.length==0){
    //     <h1 className='text-center font-bold text-4xl py-10'>List of Users</h1>
    // }

  return (
    <>
       
      <h1 className='text-center font-bold text-4xl py-10'>List of Users</h1>

      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5  ">
        {
        
          allusers.length > 0 &&  
          allusers.map( (user) => {
            // const key_id = new  Date().getTime().toString() ;
            // console.log(key_id);
            const name = user["name"]["first"] ;
            const city = user["location"]["city"] ;
            const country = user["location"]["country"] ;
            const age = user["dob"]["age"] ;
            const profilePic = user["picture"]["large"] ;
            
            // const { email , gender , phone ,  ...otherProps } = user        
            const { email , gender , phone  } = user        
            return  <Card key={user["login"]["sha256"]}  name={name} email={email} gender={gender} phone={phone} age={age} profilePic={profilePic} city={city} country={country}  />
            // return  <div className="" key={id}> <Card login={login}  avatar_url={avatar_url} /> </div>
          } )
        }
      </div>

    </>


)
}

export default UsersData
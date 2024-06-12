import React from 'react'
import Card from './randomUser/Card'
import { useState , useEffect } from 'react'

const GithubAPI = () => {

  const [allusers, setallusers] = useState([])

  const getUser = async () => {

    const response = await fetch('https://api.github.com/users')
    console.log(response);  
    const data = await response.json();
    console.log(data);
    setallusers(data)

    // fetch('https://api.github.com/users')
    // .then(  (response) => response.json() )
    // .then( data => {
    //     console.log(data)
    //     setallusers(data)
    // } )
  }

  useEffect(() => {
    getUser();
  } , [])

  return (
    <>

      <h1>{allusers.length}</h1>
      <h1 className='text-center font-bold text-4xl mb-5'>List of Users</h1>

      <div className="grid grid-cols-6 gap-10 ">
        {
          allusers.map( (user) => {
            const { login , id , avatar_url ,followers_url , following_url , node_id , ...otherProps } = user             
            return  <Card key={id} avatar_url={avatar_url} login={login}  node_id={node_id} />
            // return  <div className="" key={id}> <Card login={login}  avatar_url={avatar_url} /> </div>
          } )
        }
      </div>

    </>
  )
}

export default GithubAPI
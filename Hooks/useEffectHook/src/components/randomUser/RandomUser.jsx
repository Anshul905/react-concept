import React from 'react'
import { useState , useEffect } from 'react'
import Loading from './Loading'
import UsersData from './UsersData'


const RandomUser = () => {

  const [allusers, setallusers] = useState([])
  const [loading, setloading] = useState(true)

  const getUser = async () => {
        
      // //  fetch - promise does not need try-catch 
      // // fetch('https://randomuser.me/api/?results=50&gender=female')
      // fetch('https://randomuser.me/api/?results=50')
      //   .then(  (response) => response.json() )
      //   .then( data => {
      //       console.log(data["results"])
      //       setallusers(data["results"])
      //   } )
      //   .catch( (e) => {
      //     console.log("Error : " + e);
      //   })


    try {
      const response = await fetch('https://randomuser.me/api/?results=50')
      // console.log(response);  
      const data = await response.json();
      console.log(data["results"]);
      setallusers(data["results"])
      setloading(false)
    } catch (error) {
        setloading(false)
        console.log("Error --> " + error);
    }


  }

  useEffect(() => {
    getUser();
  } , [])


  if(loading){
    return <Loading />
  }

  return (
    <UsersData allusers={allusers} />
  )
}

export default RandomUser
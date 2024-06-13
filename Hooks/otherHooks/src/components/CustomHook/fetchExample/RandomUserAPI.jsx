import React from 'react'
import { useState , useEffect } from 'react';
import useFetch from './useFetch';

const RandomUserAPI = () => {

     const [data] =  useFetch("https://randomuser.me/api/?results=50")     
     return (
            <div>RandomUserAPI : 
                {" "} 
                { data && data["results"] ? data["results"].length : 0}
            </div>    
     )
 
}

export default RandomUserAPI
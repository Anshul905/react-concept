import React from 'react'
import { useState , useEffect } from 'react';
import useFetch from './useFetch';
import FetchCustomComponent from './FetchCustomComponent';

const GithubAPI = () => {

    // const [data, setData] = useState(null)
    // useEffect(() => {

    //     fetch("https://api.github.com/users")
    //       .then((res) => res.json())
    //       .then((data) => setData(data));
    //       console.log(data);
          
    // }, []);

    
    // custom hook 
    
    const url = "https://api.github.com/users" ;
    const [data] = useFetch("https://api.github.com/users")
        
    return (
        <>
            <div>GithubAPI : 
                {" "} 
                { data ? data.length : 0 }
            </div>    
            {/* can perform several tasks here  */}

            {/* custom component  */}
            <FetchCustomComponent url={url}  msg={"GithubAPI"} />
        </>


    )

}

export default GithubAPI
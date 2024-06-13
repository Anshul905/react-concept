import React from 'react'
import { useState , useEffect } from 'react';


const FetchCustomComponent = ({url,msg}) => {

    const [apidata, setApidata] = useState([])
    
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setApidata(data));
        console.log(apidata);
        // console.log(typeof(apidata));
    }, []);

    return ( 
        <>
            <div> {msg} 
                {" "} 
                { apidata ? apidata.length : 0 }
            </div>    
        </>
    )
}


//with try catch -> async function required - try-catch inside async function and function inside useEffect
// const FetchCustomComponent = ({url,msg}) => {

//     const [apidata, setApidata] = useState([])
    
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await fetch(url);
//             // console.log(response.ok);
//             // if (!response.ok) {
//             //   throw new Error('Network response was not ok');
//             // }
//             const data = await response.json();
//             setApidata(data);
//             console.log(apidata);
//           } catch (e) {
//             console.log("my error : " + e);
//           } finally {
//             console.log("Finally");
//           }
//         };

//         fetchData();
//     }, [url]);
                
//     return ( 
//         <>
//            <div> {msg} 
//                 {" "} 
//                 { apidata ? apidata.length : 0 }
//             </div>    
//         </>
//     )
// }




export default FetchCustomComponent
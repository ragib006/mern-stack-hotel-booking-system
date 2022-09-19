import React,{useEffect,useState} from 'react'

import axios from 'axios'


const useFetch = (url) =>{

const [data,setData] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)


useEffect(()=>{

    
    const fetchData = async () => {

      setLoading(true)

       try{

       	  const res = await axios.get(url)

       	  setData(res.data)

          }catch(err){

          setError(err)
       
          }

      }

     setLoading(false)



},[url])








const reFatch = async () => {  

      setLoading(true)

      try{

       const res = await axios.get(url)

       setData(res.data)

      }catch(err){

          setError(err)

      }
        
       setLoading(false)

}

return {data,loading,error,reFatch}

}


export default useFetch
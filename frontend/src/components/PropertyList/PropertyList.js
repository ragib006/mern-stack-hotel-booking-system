import React,{useState,useEffect} from 'react'
import axios from 'axios'

import Loader from '../Loader.js'



const PropertyList = () => {



const [mydata,setmyData] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)




  useEffect(()=>{  

   const CountByType = async () => {  

   	setLoading(true)

   	try{

    const res = await axios.get('/api/hotel/hotelcountbytype');
   
    setmyData(res.data)


   	}catch(error){

      setError(error)

   	}



   	setLoading(false)


  
   }
  
   
CountByType();
  
},[])


















return(


<>


   <div className="imo">


        <div className="container">

            <p style={{fontWeight:'bold',fontFamily:'tahoma'}}>Browse By Property Type</p>  






  {loading ? <Loader/> : (  




   

         
            <div className="row">



            
           
             



               


               <div className="col-md-2">

                 <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658143925/index2_jpbtnf.jpg"  style={{height:'150px',width:'200px'}} class="img-thumbnail" alt="..."/>
                 <span style={{display:'block',fontWeight:'bold'}}>{mydata[0] ? (<span>{mydata[0].type}</span>):''}</span>
                 <span>{mydata[0] ? (<span>{mydata[0].count}</span>):''}</span>

               </div>


                  <div className="col-md-2">

                 <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658396637/indexss_zfqxzf.jpg"  style={{height:'150px',width:'200px'}} class="img-thumbnail" alt="..."/>
                 <span style={{display:'block',fontWeight:'bold'}}>{mydata[1] ? (<span>{mydata[1].type}</span>):''}</span>
                 <span>{mydata[1] ? (<span>{mydata[1].count}</span>):''}</span>

                 </div>


                       <div className="col-md-2">

                 <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658396636/index45_b9di5g.jpg"  style={{height:'150px',width:'200px'}} class="img-thumbnail" alt="..."/>
                 <span style={{display:'block',fontWeight:'bold'}}>{mydata[2] ? (<span>{mydata[2].type}</span>):''}</span>
                 <span>{mydata[2] ? (<span>{mydata[2].count}</span>):''}</span>

                 </div>


                       <div className="col-md-2">

                 <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658396636/index44_uwr6dn.jpg"  style={{height:'150px',width:'200px'}} class="img-thumbnail" alt="..."/>
                 <span style={{display:'block',fontWeight:'bold'}}>{mydata[3] ? (<span>{mydata[3].type}</span>):''}</span>
                 <span>{mydata[3] ? (<span>{mydata[3].count}</span>):''}</span>

                 </div>



                       <div className="col-md-2">

                 <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658396635/index15_zylylk.jpg"  style={{height:'150px',width:'200px'}} class="img-thumbnail" alt="..."/>
                 <span style={{display:'block',fontWeight:'bold'}}>{mydata[4] ? (<span>{mydata[4].type}</span>):''}</span>
                 <span>{mydata[4] ? (<span>{mydata[4].count}</span>):''}</span>

                 </div>





                       <div className="col-md-2">

                 <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658396627/images19_xsohkx.jpg"  style={{height:'150px',width:'200px'}} class="img-thumbnail" alt="..."/>
                 <span style={{display:'block',fontWeight:'bold'}}>{mydata[5] ? (<span>{mydata[5].type}</span>):''}</span>
                 <span>{mydata[5] ? (<span>{mydata[5].count}</span>):''}</span>

                 </div>






          





      

              

            

            </div>


            













  	)


}



























        </div>

   </div>





</>


	)


}

export default PropertyList
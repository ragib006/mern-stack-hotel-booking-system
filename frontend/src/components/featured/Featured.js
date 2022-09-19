import React,{useState,useEffect} from 'react'

import useFetch from '../hooks/useFetch.js'

import axios from 'axios'

const Featured = () => {





const [data,setData] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)




  useEffect(()=>{  

   const CountByHotel = async () => {  



 const res = await axios.get('/api/hotel/hotelcountbycity?cities=Pokhra,Dhaka,Kathmandu');
   
    setData(res.data)
  
   }
  
   
    CountByHotel();
  
},[])


  //const {data,loading,error} = useFetch('/api/hotel/hotelcountbycity?cities=Pokhra,Dhaka')








   
   return(


         <>



<div className="shjfdvsd" style={{marginTop:'20px',marginBottom:'30px'}}>
   
   <div className="container">

        <div className="row">

            <div className="col-md-4">
        
              <div className="imgpos" style={{marginTop:'20px',marginBottom:'20px'}}>
              <img style={{width:'300px',height:'220px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658143925/index3_mdaum9.jpg" className="d-block w-100" alt="..."/>
              <p style={{color:'white',fontSize:'25px',fontWeight:'bold'}} className="mytext">Pokhra</p>
              <p style={{color:'white',fontSize:'20px',fontWeight:'bold'}} className="myhotel">{data[0]} Properties</p>
            
              </div>

             </div>


            <div className="col-md-4">
        
              <div className="imgpos" style={{marginTop:'20px',marginBottom:'20px'}}>
              <img style={{width:'300px',height:'220px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658143926/index5_fjqzye.jpg" className="d-block w-100" alt="..."/>
              <p style={{color:'white',fontSize:'25px',fontWeight:'bold'}} className="mytext">Dhaka</p>
              <p style={{color:'white',fontSize:'20px',fontWeight:'bold'}} className="myhotel">{data[1]} Properties</p>
            
            </div>

         </div>


            <div className="col-md-4">
        
              <div className="imgpos" style={{marginTop:'20px',marginBottom:'20px'}}>
              <img style={{width:'300px',height:'220px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658143925/images8_ysbtwr.jpg" className="d-block w-100" alt="..."/>
              <p style={{color:'white',fontSize:'25px',fontWeight:'bold'}} className="mytext">kathmandu</p>
              <p style={{color:'white',fontSize:'20px',fontWeight:'bold'}} className="myhotel">{data[2]} Properties</p>
            
            </div>

         </div>





     </div>

   </div>

</div>








{/* 



    <div className="feat">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658143926/images6_iulehc.jpg"  class="img-fluid" alt="..."/>
                         </div>


                           <div className="col-md-3">
                        <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658143926/images6_iulehc.jpg"  class="img-fluid" alt="..."/>
                         </div>
                         
                             <div className="col-md-3">
                        <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658143926/images6_iulehc.jpg"  class="img-fluid" alt="..."/>
                         </div>

                               <div className="col-md-3">
                        <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658143926/images6_iulehc.jpg"  class="img-fluid" alt="..."/>
                         </div>







                    </div>
                 </div>
            </div>










*/}

        


         </>

   	)



}


export default Featured
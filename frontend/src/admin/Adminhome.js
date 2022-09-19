
import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'



const Adminhome = () => { 


const [allcount,Setallcount] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)


useEffect(()=>{ 

     const Alluser = async () => {  

    setLoading(true)

    try{



   const res = await axios.get('/api/hotel/alluserallhotelallorder');

   //  const res = await axios.get(`/api/hotel/hotelsearch?city=${destination}`);

  // localhost:5000/api/hotel/viewhotel/:id
   
     Setallcount(res.data)


     console.log('...................................',res.data)


       //setLoading(false)


    // console.log(res.data)


     }catch(error){

      setError(error)

     }



    setLoading(false)


  
   }
  
   
  Alluser();




},[])









  return(

       <>

        

  <div className="container" style={{marginTop:'10px'}}>

                       <div className="row">

                  



                           <div className="col-md-4">
                            <div className="card bg-primary">
                             <div className="card-body">
                              <h5 className="card-title" style={{color:'white',fontWeight:'bold'}}>Total User</h5>
                                   <h6  style={{color:'white',fontSize:'25px'}}>{allcount.alluser}</h6>
                              
                             </div>
                             </div>
                           </div>



                           <div className="col-md-4">
                            <div className="card bg-primary">
                             <div className="card-body">
                              <h5 className="card-title" style={{color:'white',fontWeight:'bold'}}>Total Hotel</h5>
                                   <h6  style={{color:'white',fontSize:'25px'}}>{allcount.allhotel}</h6>
                              
                             </div>
                             </div>
                           </div>


                           
                           <div className="col-md-4">
                            <div className="card bg-primary">
                             <div className="card-body">
                              <h5 className="card-title" style={{color:'white',fontWeight:'bold'}}>Total Order</h5>
                              <h6  style={{color:'white',fontSize:'25px'}}>{allcount.allorder}</h6>
                             </div>
                             </div>
                           </div>

                        


                          </div>

                     </div>





       
       </>

  	)



}




export default Adminhome;
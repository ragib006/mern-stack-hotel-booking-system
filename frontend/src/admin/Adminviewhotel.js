

import React,{useState,useEffect,useContext} from 'react'

import Adminheader from './Adminheader'

import Adminfooter from './Adminfooter'

import Adminsidebar from './Adminsidebar'

import axios from 'axios'

import {Link} from 'react-router-dom'

import Swal from 'sweetalert2'

import Loader from '../components/Loader'


import {useNavigate} from 'react-router-dom'

import {useLocation} from "react-router-dom"

const Adminviewhotel = () => { 


  
const [hoteldetails,Sethoteldetails] = useState({})
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)

const navigate = useNavigate()
const location = useLocation();
const id = location.pathname.split("/")[2];

useEffect(()=>{

    const Hoteldetails = async () => {  

    setLoading(true)

    try{

   const res = await axios.get(`/api/hotel/viewhotel/${id}`);
   
     Sethoteldetails(res.data)


     }catch(error){

      setError(error)

     }

    setLoading(false)

  
   }
  
   
  Hoteldetails();


  
},[])


  return(

       <>

        

       <Adminheader/>

       <div className="sddfbvf" >
           <div className="row" style={{}}>






              <div className="col-md-3 bg-light">
                
                 <Adminsidebar/>


              </div>



       



      

               <div className="col-md-9" style={{paddingBottom:'500px'}}>


 


                     <div className="container">




          {loading ? <Loader/> : (   

             
             <>


                        <div className="mains" style={{marginTop:'20px'}}>
                           
                            <span style={{fontWeight:'bold',fontSize:'20px',display:'bloack'}}>{hoteldetails.name}</span>

                            <span style={{display:'block'}}>
                            <span style={{fontSize:'17px',marginRight:'5px',fontWeight:'bold'}}>Type : </span><span style={{fontSize:'17px'}}>{hoteldetails.type}</span>
                            </span>
                             
                            <span style={{display:'block'}}>
                            <span style={{fontSize:'17px',marginRight:'5px',fontWeight:'bold'}}>City : </span><span style={{fontSize:'17px'}}>{hoteldetails.city}</span>
                            </span>

                             <span style={{display:'block'}}>
                            <span style={{fontSize:'17px',marginRight:'5px',fontWeight:'bold'}}>Address : </span><span style={{fontSize:'17px'}}>{hoteldetails.address}</span>
                            </span>

                                <span style={{display:'block'}}>
                            <span style={{fontSize:'17px',marginRight:'5px',fontWeight:'bold'}}>Chepest Price : </span><span style={{fontSize:'17px'}}>{hoteldetails.chepestPrice}</span>
                            </span>                                          
                        
                        </div>

                        <div className="Photo" style={{marginTop:'30px'}}>

                               <div className="row">


                                    {hoteldetails && hoteldetails.photos ? (   
                                  
                                    <>

                                     <div class="col-md-3">
                                      <img  src={hoteldetails.photos[0]} style={{width:'400px',height:'200px',marginBottom:'20px'}} className="img-fluid" alt="..."/>
                                    </div>

                                      <div class="col-md-3">
                                      <img  src={hoteldetails.photos[1]} style={{width:'400px',height:'200px',marginBottom:'20px'}} className="img-fluid" alt="..."/>
                                    </div>

                                      <div class="col-md-3">
                                      <img  src={hoteldetails.photos[2]} style={{width:'400px',height:'200px',marginBottom:'20px'}} className="img-fluid" alt="..."/>
                                    </div>

                                      <div class="col-md-3">
                                      <img  src={hoteldetails.photos[3]} style={{width:'400px',height:'200px',marginBottom:'20px'}} className="img-fluid" alt="..."/>
                                    </div>

                                    </>

                                      ):(    

                                      <>

                                          <p>Not found</p>

                                      </>

                                      )}


                               </div>


                               <p style={{fontWeight:'bold',fontSize:'20px'}}>Hotel Description</p>


                               <p style={{textAlign:'justify',padding:'10px 30px 10px 0px'}}>{hoteldetails.desc}</p>


                        </div>



                        
      </>



            )}




                

                     </div>
                 </div>   


















    


                    
                   

  
          

            </div>
       </div>



     



<Adminfooter/>
       
       </>

    )


       
      

  



}




export default Adminviewhotel;
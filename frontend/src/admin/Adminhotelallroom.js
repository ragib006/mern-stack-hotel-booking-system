

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

const Adminhotelallroom = () => { 


  
const [hoteldetails,Sethoteldetails] = useState({})

const [hotelrooms,Sethotelrooms] = useState([])

const [currentdate,Setcurrentdate] = useState({})
   

const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)

const navigate = useNavigate()
const location = useLocation();
const hotelid = location.pathname.split("/")[2];

















useEffect(()=>{

    const Hoteldetails = async () => {  

    setLoading(true)

    try{

   const res = await axios.get(`/api/hotel/viewhotel/${hotelid}`);
   
     Sethoteldetails(res.data)


     }catch(error){

      setError(error)

     }

    setLoading(false)

  
   }
  
   
  Hoteldetails();


  
},[])




useEffect(()=>{

    const Hotelrooms = async () => {  

        setLoading(true)

        try{

          const res = await axios.get(`/api/hotel/getspecifichotelallroom/${hotelid}`);

          Sethotelrooms(res.data)


         }catch(error){

          setError(error)

         }

        setLoading(false)
 
      }


     Hotelrooms();


    },[])





//Deletehandler


const Deletehandler = async (id) => {


 // setLoading(true)

     try{



      const res = await axios.delete(`/api/hotel/deleteroom/${id}/${hotelid}`);


     const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
    timerProgressBar: true,
     didOpen: (toast) => {
     toast.addEventListener('mouseenter', Swal.stopTimer)
     toast.addEventListener('mouseleave', Swal.resumeTimer)
   }
 })

 Toast.fire({
   icon: 'success',
   title: 'Room Delete successfully'
 })





     }catch(error){

  //    setLoading(false)

      console.log(error)

     }

  //  localhost:5000/api/hotel/deleteuser/:id
  // console.log(id)







}






console.log(hotelid)




























  return(

       <>

        

       <Adminheader/>

       <div className="sddfbvf" >
           <div className="row" style={{}}>

              <div className="col-md-3 bg-light">
                
                 <Adminsidebar/>


              </div>



       


  



                

               <div className="col-md-9" style={{paddingBottom:'800px'}}>

                     <div className="container">


                            {loading ? <Loader/> : (   

                              <>

                       <div className="mains" style={{marginTop:'20px',paddingBottom:'20px'}}>                          
                           <span style={{fontWeight:'bold',fontSize:'20px',marginLeft:'5px'}}>{hoteldetails.name}</span>
                           <span > <Link to={`/admin_add_room/${hotelid}`} className="btn btn-success" style={{float:'right',marginRight:'20px'}}>Add New Room</Link></span>                      
                        </div>


                       <div className="main" style={{marginBottom:'20px'}}>
                        
                         <div className="row">

                             {hotelrooms && hotelrooms.map((item)=>( 

                             <div className="col-md-12" style={{marginBottom:'20px'}}>




                             <div className="card bg-light" style={{marginBottom:'40px'}}>

                            <button style={{float:'Right',width:'40px'}} className="btn btn-danger btn-sm" onClick={()=>Deletehandler(item._id)}  ><i class="fa fa-trash" aria-hidden="true"></i></button>
               

                                <div className="row" style={{padding:'10px 0px 0px 10px'}}>



                                  

                                   <div className="col-md-3">
                                       <p style={{fontWeight:'bold'}}>Room Title</p>
                                       <p style={{fontWeight:'bold'}}>Description</p>
                                       <p style={{fontWeight:'bold'}}>Max People</p>
                                       <p style={{fontWeight:'bold'}}>Price</p>
                                    </div>

                                    <div className="col-md-9">

                                       <p style={{fontWeight:'bold'}}>: {item?.title}</p>
                                       <p>: {item?.desc}</p>
                                       <p>: {item?.maxPeople}</p>
                                       <p style={{fontWeight:'bold',color:'gray'}}> : {item?.price} $ (per night)</p>                         
                                    </div>

                                 </div>  



                                 <div className="row">

                                  <p style={{marginLeft:'10px',fontWeight:'bold',fontSize:'18px',color:'green'}}>Select Room</p>


     {item.roomNumbers && item.roomNumbers?.map((roomNumber)=>(
                                    <div className="col-md-4">
                                  
                                       <div className="card" style={{marginBottom:'20px',padding:'10px 10px 10px 10px'}}>
                                           <div className="conroom"style={{float:'left',padding:'0px 0px 20px 20px'}}>
                                              

                            
                            <p>
                            <span style={{fontWeight:'bold',fontSize:'16px'}}>Room Number : </span> <span style={{fontWeight:'bold',fontSize:'18px',color:'gray'}}>{roomNumber?.number}</span>
                             </p>

                                <p>
                            <span style={{fontWeight:'bold',fontSize:'16px'}}>Room Id : </span> <span style={{fontWeight:'bold',fontSize:'16px',color:'gray'}}>{roomNumber?._id}</span>
                             </p>




                                              <input className="form-check-input" type="checkbox" style={{fontSize:'30px',color:'gray'}} />
                                           </div>
                                       </div>
                                   
                                    </div>

    ))}
                                  </div>


                               </div>

                           </div>

                         ))}  
                   
                    </div>

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




export default Adminhotelallroom;
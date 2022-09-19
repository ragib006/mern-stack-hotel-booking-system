

import React,{useState,useEffect,useContext} from 'react'

import Adminheader from './Adminheader'

import Adminfooter from './Adminfooter'

import Adminsidebar from './Adminsidebar'

import axios from 'axios'

import {Link} from 'react-router-dom'

import Swal from 'sweetalert2'

import Loader from '../components/Loader'


const Adminallhotel = () => { 


const [allhotel,Setallhotel] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)






useEffect(()=>{ 

     const Allhotel = async () => {  

    setLoading(true)

    try{



   const res = await axios.get('/api/hotel/getallhotel');

   //  const res = await axios.get(`/api/hotel/hotelsearch?city=${destination}`);

  // localhost:5000/api/hotel/viewhotel/:id
   
     Setallhotel(res.data)


       setLoading(false)


     console.log(res.data)


     }catch(error){

      setError(error)

     }



    setLoading(false)


  
   }
  
   
  Allhotel();




},[allhotel])



//Deletehandler


const Deletehandler = async (id) => {


  setLoading(true)

     try{


         const res = await axios.delete(`/api/hotel/deletehotel/${id}`);


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
   title: 'Hotel Delete successfully'
 })





     }catch(error){

      setLoading(false)

      console.log(error)

     }

  //  localhost:5000/api/hotel/deleteuser/:id
   console.log(id)



}





  return(


          <>

       <Adminheader/>

       <div className="sddfbvfd">
           <div className="row" style={{}}>

              <div className="col-md-3 bg-light">
                
                 <Adminsidebar/>


              </div>


               <div className="col-md-9"  style={{marginBottom:'800px'}}>


               <div className="container">
         


          



                        <div className="mains" style={{marginTop:'20px'}}>
                           
                            <span style={{fontWeight:'bold',fontSize:'20px'}}>All Hotel</span>

                           <span style={{float:'right',marginRight:'10%'}}> <Link to="/admin_add_hotel"  className="btn btn-success">Add Hotel</Link></span>
                        
                        </div>




                        <div className="ddd">

                          {loading ? <Loader/>: (   






                          <table className="table" style={{marginTop:'20px'}}>
                            <thead>
                              <tr>
                                 <th scope="col">Sl</th>
                               <th scope="col">Name</th>
                               <th scope="col">City</th>
                               <th scope="col">Type</th>
                               <th scope="col">Chepast Price</th>
                               <th scope="col">Image</th>
                               <th scope="col">Action</th>
                              </tr>
                            </thead>
                         
                          <tbody>

                                  {allhotel && allhotel.map((item,index)=>(  
                              
                            <tr>
                             <th scope="row" style={{paddingTop:'20px'}}>{index+1}</th>
                             <td style={{paddingTop:'20px'}}>{item.name}</td>
                             <td style={{paddingTop:'20px'}}>{item.city}</td>

                             <td style={{paddingTop:'20px'}}>{item.type}</td>
                             <td style={{paddingTop:'20px'}}>{item.chepestPrice} $</td>
                             <td>
                            
                            {item.photos ? 

                              <img style={{width:'80px',height:'50px'}} src={item.photos[0]} class="rounded-circle"/> :

                              <img style={{width:'80px',height:'50px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1662755165/upload/index2_dom9ns.png" class="rounded-circle"/>


                            }
                             </td>
                              
                             <td>



                                      <Link to={`/admin_view_hotel/${item._id}`} style={{marginTop:'10px',marginRight:'5px',marginLeft:'5px'}} className="btn btn-success btn-sm"><i class="fa fa-eye" aria-hidden="true"></i></Link>

                                      <Link to={`/admin_hotel_all_room/${item._id}`} style={{marginTop:'10px',marginRight:'5px',marginLeft:'5px'}} className="btn btn-primary btn-sm"><i class="fa fa-plus" aria-hidden="true"></i></Link>

                                     <button style={{marginTop:'10px',marginRight:'5px',marginLeft:'5px'}} className="btn btn-danger btn-sm" onClick={()=>Deletehandler(item._id)} ><i class="fa fa-trash" aria-hidden="true"></i></button>
               

                             </td>
                            </tr>





                            ))}
                        
                     
                     
                       </tbody>
                        </table>

















                            )}




                         </div>









                   </div>








                  
      

               </div>         
                 

            </div>
       </div>



       
<Adminfooter/>
       
       
       </>


  	)



}




export default Adminallhotel;
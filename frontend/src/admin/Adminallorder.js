
import React,{useState,useEffect,useContext} from 'react'

import Adminheader from './Adminheader'

import Adminfooter from './Adminfooter'

import Adminsidebar from './Adminsidebar'

import Adminhome from './Adminhome'

import axios from 'axios'

import {Link} from 'react-router-dom'

import Swal from 'sweetalert2'

import Loader from '../components/Loader'

const Adminallorder = () => { 




const [allorder,Setallorder] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)


useEffect(()=>{ 

     const Allorder = async () => {  

    setLoading(true)

    try{



   const res = await axios.get('/api/hotel/get_all_order_hotel');


   // console.log('.....all order',res.data)

   
     Setallorder(res.data)


     }catch(error){

      setError(error)

     }



    setLoading(false)


  
   }
  
   
  Allorder();




},[])




const Deletehandler = async (id) => {


  setLoading(true)

     try{




         const res = await axios.delete(`/api/hotel/deleteorder/${id}`);


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
              title: 'Order Delete successfully'
             
             })





     }catch(error){

  

      console.log(error)

     }


         setLoading(false)

  


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
                           
                            <span style={{fontWeight:'bold',fontSize:'20px'}}>All Order</span>

                        </div>




    {loading ? <Loader/>: ( 

                        <div className="ddd">

                        

                          <table className="table" style={{marginTop:'20px'}}>
                            <thead>
                              <tr>
                               <th scope="col">Sl</th>
                               <th scope="col">User Name</th>
                               <th scope="col">Email</th>
                               <th scope="col">Hotel Name</th>

                               <th scope="col">Total Room</th>
                               <th scope="col">Order Date</th>

                             {/*


                                <th scope="col">TnxId</th>
                                <th scope="col">Payment Status</th>



                             */}
                             

                                <th scope="col">Order Status</th>
                            

                               <th scope="col">Action</th>
                              </tr>
                            </thead>
                         
                          <tbody>

                          {allorder && allorder.map((item,index)=>(
                              
                            <tr>
                             <th scope="row" style={{paddingTop:'20px'}}>{index+1}</th>
                             <td style={{paddingTop:'20px'}}>{item.username}</td>
                             <td style={{paddingTop:'20px'}}>{item.email}</td>
                               <td style={{paddingTop:'20px'}}>{item.hotelname}</td>

                                   <td style={{paddingTop:'20px'}}>{item.totalroom}</td>

                             <td style={{paddingTop:'20px'}}>{new Date(item.createdAt).toLocaleDateString()}</td>






                 {/*



   <td style={{paddingTop:'20px'}}>{item.tnxId}</td>
                            



                            <td style={{paddingTop:'20px'}}>

                              {item.paymentstatus == false ? 

                                <span>pending</span> :  

                                <span>Success</span>}

                            </td>








                 */}


                         



                            <td style={{paddingTop:'20px'}}>

                              {item.orderstatus == false ? 

                                <span>pending</span> :  

                                <span>Success</span>}

                            </td>




                               
              
                          
                              
                            
                              
                             <td>

                               <button style={{marginTop:'10px'}} className="btn btn-success btn-sm" onClick={()=>Deletehandler(item._id)} ><i className="fa fa-trash" aria-hidden="true"></i></button>

                                <Link to={`/admin_order_view/${item._id}`} style={{marginTop:'10px',marginRight:'5px',marginLeft:'5px'}} className="btn btn-primary btn-sm"><i className="fa fa-eye" aria-hidden="true"></i></Link>



                             </td>
                            </tr>





                            ))}
                        
                     
                     
                       </tbody>
                        </table>



                        




                         </div>


    )}






                   </div>








                  
      

               </div>         
                 

            </div>
       </div>



       
<Adminfooter/>
       
       
       </>

  	)



}




export default Adminallorder;
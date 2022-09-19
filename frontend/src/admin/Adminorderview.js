

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






const Adminorderview = () => {





  
const [orderdetails,SetOrderdetails] = useState({})

const [hotelallroom,Sethotelallroom] = useState([])


const [myhotelid,Sethotelid] = useState("")

//const [bookingdate,Setbookingdate] = useState([])

const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)

const navigate = useNavigate()
const location = useLocation();
const id = location.pathname.split("/")[2];




useEffect(()=>{ 

     const Vieworder = async () => {  

     setLoading(true)

    try{

   const res = await axios.get(`/api/hotel/view_order/${id}`);

   
     SetOrderdetails(res.data)

     Sethotelid(res.data.hotelid)



    console.log(res.data)


     }catch(error){

      setError(error)

     }

    setLoading(false)

   }
  
   
  Vieworder();

},[])



//Setbookingdate








const hotelId = orderdetails.hotelid






//setTimeout(()=>{


//     const Hotelallroom = async () => {  

//    setLoading(true)

 //   try{

 //  const res = await axios.get(`/api/hotel/getspecifichotelallroom/${hotelId}`);

   
//     Sethotelallroom(res.data)

//     console.log('hotel all room',res.data)


 //    }catch(error){

 //     setError(error)

 //    }

  //  setLoading(false)

//   }
  
   
 // Hotelallroom();



  //},[2000])




//const Takeorderhandler = async (e) => {  

   //try{


   //	await Promise.all(orderdetails.rooms.map((roomId)=>{

  //  const res = await axios.get(`/api/hotel/getspecifichotelallroom/${id}`);


   //const res = axios.put(`/api/hotel/take_order/${roomId}`,{date:orderdetails.date})

         
    // console.log('order success-----',res.data)
       // Sethotelrooms(res.data)
       
  // console.log('orderroom is',roomId)


   	//	}))






    //console.log('order success-----',res.data)

  // }catch(error){


  //  console.log(error)


  // }
   






//}



//Confirmbook


const Confirmbook = async (id) => { 


    setLoading(true) 


	try{



   	await Promise.all(orderdetails.rooms.map((roomId)=>{
       
         //  console.log('orderroom is',roomId)

              const res = axios.put(`/api/hotel/take_order/${roomId}`,{date:orderdetails.date})


   		}))



	  const ordersuccess = axios.put(`/api/hotel/order_ststus_success/${id}`)



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
   title: 'Order Take successfully'
})











    navigate("/admin_all_order")





	}catch(error){





      console.log(error)






	}


	setLoading(false)




//console.log('order id is',id)





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


    {loading ? <Loader/> : (  


               <div className="container">
         


                      


                        <div className="card">

                            


                           <div className="conten" style={{padding:'5px 20px 20px 20px'}}>


                            <div className="mains" style={{marginTop:'10px',marginBottom:'10px'}}>
                           
                            <span style={{fontWeight:'bold',fontSize:'20px',color:'green',fontWeight:'bold',fontSize:'22px'}}>Order View</span>

                           </div>

                                  <div className="row">

                                     <div className="col-md-2">

                                         <span>
                                           <p style={{fontWeight:'bold',color:'black'}}>Booking Id</p>
                                         </span>

                                          <span>
                                           <p style={{fontWeight:'bold',color:'black'}}>Hotel Name</p>
                                         </span>

                                           <span>
                                           <p style={{fontWeight:'bold',color:'black'}}>Hotel Id</p>
                                         </span>

                                          <span>
                                           <p style={{fontWeight:'bold',color:'black'}}>User Name</p>
                                         </span>


                                          <span>
                                           <p style={{fontWeight:'bold',color:'black'}}>User Email</p>
                                         </span>

                                          






                                     </div>

                                     <div className="col-md-4">

                                          <span>
                                            <p style={{color:'black'}}> : {orderdetails._id}</p>
                                          </span>

                                           <span>
                                           <p style={{color:'black'}}> : {orderdetails.hotelname}</p>
                                           </span>


                                           <span>
                                           <p style={{color:'black'}}> : {orderdetails.hotelid}</p>
                                           </span>


                                          <span>
                                           <p style={{color:'black'}}> : {orderdetails.username}</p>
                                          </span>

                                           <span>
                                           <p style={{color:'black'}}> : {orderdetails.email}</p>
                                           </span>

                                         


                                     </div>



                                       <div className="col-md-2">



                                   {/*



                                   	 <span>
                                           <p style={{fontWeight:'bold',color:'black'}}>Payment Tnx Id</p>
                                         </span>

                                          <span>
                                           <p style={{fontWeight:'bold',color:'black'}}>Payment Status</p>
                                         </span>






                                   */}

                                        
                                           <span>
                                           <p style={{fontWeight:'bold',color:'black'}}>Booking Status</p>
                                         </span>

                                            <span>
                                           <p style={{fontWeight:'bold',color:'black'}}>Booking Date</p>
                                         </span>


                                        </div>











                                             <div className="col-md-4">


                              {/*


                                          <span>
                                            <p style={{color:'black'}}> : {orderdetails.tnxId}</p>
                                          </span>

                                      


                                           <span>

                                           {orderdetails.paymentstatus == false ?   <p style={{color:'black',color:'red',fontWeight:'bold'}}> : Pending</p>:   <p style={{color:'green',fontWeight:'bold'}}> : Success</p>}
                                         
                                           </span>


                                       */}


                                           <span>

                                           {orderdetails.orderstatus == false ?   <p style={{color:'black',color:'red',fontWeight:'bold'}}> : Pending</p>:   <p style={{color:'green',fontWeight:'bold'}}> : Success</p>}
                                         
                                           </span>



                                              <span>
                                            <p style={{color:'black'}}> : {( new Date(orderdetails.createdAt).toLocaleDateString())}</p>
                                          </span>


                                           

                                         


                                     </div>













                                  </div>




                                <div className="rooms">

                                     <p style={{fontWeight:'bold',fontSize:'20px'}}>Booking Room</p>

                                     {orderdetails && orderdetails.rooms?.map((roomNumber)=>(

                            <div className="conroom">
                              <p className="f">{roomNumber}</p>
                             
                            </div>

                             ))}


                                     </div>






                                <div className="rooms">

                                     <p style={{fontWeight:'bold',fontSize:'20px'}}>Reserve Date</p>

                                     {orderdetails && orderdetails.date?.map((bookdate)=>(

                            <div className="conroom">
                           

                                 <p className="f">{new Date(bookdate).toLocaleDateString()}</p>
                             
                            </div>

                             ))}


                                     </div>








                             {/*


                             	   <button onClick={Takeorderhandler} style={{float:'right'}} className="btn btn-success">Take Order</button>



                             */}



                 {orderdetails.orderstatus == false ?  <button onClick={()=>Confirmbook(orderdetails._id)} style={{float:'right'}} className="btn btn-success">Take Order</button>:<p style={{color:'green',fontWeight:'bold'}}>This Order Already Take Successfully</p>}
                                         
                           
               
                







                           


                            </div>


                        </div>













                   </div>



             	)}
               </div>   














               

































                 

            </div>
       </div>



       
<Adminfooter/>
       
       
       </>

	)


}


export default Adminorderview;

import React,{useState,useEffect,useContext} from 'react'

import Adminheader from './Adminheader'

import Adminfooter from './Adminfooter'

import Adminsidebar from './Adminsidebar'

import Adminhome from './Adminhome'

import axios from 'axios'

import {Link} from 'react-router-dom'

import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

import Loader from '../components/Loader.js'

import {useLocation} from "react-router-dom"

const Adminaddroom = () => { 


const navigate = useNavigate()

const location = useLocation();


const id = location.pathname.split("/")[2];



console.log('id is.................',id)

//const [alluser,Setalluser] = useState([])



const[info,setInfo] = useState({});


const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)

const [roomnumber,setRoomnumber] = useState([])












const handleChange = (e) => {



setInfo(prev=>({...prev,[e.target.id]:e.target.value}))


}







//console.log(files)


const handleClick = async (e) => {

      e.preventDefault();

      //room nymber gula string agula k array bnabo   

        const myroomNumber= roomnumber.split(",").map((room)=>({number:room}))

               setLoading(true)


     try{



           const newroom = {

               ...info,
               roomNumbers:myroomNumber


            };

         const res = await axios.post(`/api/hotel/createroom/${id}`,newroom);

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
              title: 'User Added successfully'
              })







                 navigate(`/admin_hotel_all_room/${id}`)

               // navigate(`/admin_add_room/${id}`)

               // {`/admin_add_room/${id}`}


                 setInfo("");
                 roomnumber("");





        }catch(error){

       setLoading(false)

        console.log(error)



        }

     

      }


     // console.log(info)







  return(

       <>

       <Adminheader/>

       <div className="sddfbvfd">
           <div className="row">

              <div className="col-md-3 bg-light">
                
                 <Adminsidebar/>


              </div>


               <div className="col-md-9" style={{marginBottom:'800px'}}>



              <p style={{fontWeight:'bold',padding:'20px 0px 0px 23px',color:'green',fontSize:'20px'}}>Add Hotel Room</p>

              


                 <div className="container">

                    <div className="mainlogin">




             {loading ? <Loader/> : (  

                <>



                       <div className="card bg-light" style={{width:'100%',marginTop:'20px',marginBottom:'550px'}}>   

                              <div className="myform" style={{padding:'15px 15px 20px 15px'}}>

                                     <div className="row">

                                           <div className="col-md-6">

                                             <div className="mb-3">
                                             <label for="exampleFormControlInput1" className="form-label">Room Title</label>
                                             <input type="name" id="title" className="form-control" onChange={handleChange} placeholder="Enter Room Title" style={{}}/>                                   
                                             </div>

                                           </div>


                                          <div className="col-md-6">

                                             <div className="mb-3">
                                             <label for="exampleFormControlInput1" className="form-label">Room Price</label>
                                             <input type="number" min={0} id="price" className="form-control" onChange={handleChange} placeholder="Enter Room Price" style={{}}/>                                   
                                             </div>

                                           </div>



                                          <div className="col-md-6">

                                             <div className="mb-3">
                                             <label for="exampleFormControlInput1" className="form-label">Max People</label>
                                             <input type="number" min={1} id="maxPeople" className="form-control" onChange={handleChange} placeholder="Enter Max People" style={{}}/>                                   
                                             </div>

                                           </div>



                                          <div className="col-md-6">

                                             <div className="mb-3">
                                             <label for="exampleFormControlInput1" className="form-label">Room Number</label>
                                             <input type="text"   className="form-control" onChange={(e)=>setRoomnumber(e.target.value)} placeholder="Example 102,202,302" style={{}}/>                                   
                                             </div>

                                           </div>






                                          <div className="col-md-6">

                                             <div className="mb-3">
                                             <label for="exampleFormControlInput1" className="form-label">Room Description</label>
                                             <textarea type="text"  id="desc" className="form-control" onChange={handleChange} placeholder="Enter Room Description" style={{}}></textarea>                             
                                             </div>

                                           </div>



                  





















                        
                      <span style={{marginTop:'20px'}}>                
                       <button style={{float:'right',marginRight:'20px'}} className="btn btn-success" type="button" onClick={handleClick} disabled={loading}>Submit</button>
                      </span>


                                     </div>


                              </div>
                        

                       </div>











               </>

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




export default Adminaddroom;
import React,{useState,useContext} from 'react'

import {Link} from 'react-router-dom'

import axios from 'axios'

import {useNavigate} from "react-router-dom"

import Swal from 'sweetalert2'

import Loader from '../components/Loader'

import {AdminContext} from "../context/AdminContext"

const Adminlogin = () => {

   const [credentials,setCredentials] = useState({


      email:undefined,
      password:undefined,


  })


   const {admin,loading,error,dispatch} = useContext(AdminContext)

   const navigate = useNavigate()


const handleChange = (e) => {
     
     setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))

}




const handleClick = async (e) => {

   e.preventDefault();
   
   dispatch({type:"LOGIN_START"})
   try{

   const res = await axios.post('/api/hotel/adminlogin',credentials);

   dispatch({type:"LOGIN_SUCCESS",payload:res.data})      



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
  title: 'Login successfully'
})


   
   navigate("/admin_dashboard")


   }catch(error){

    dispatch({type:"LOGIN_FAILURE",payload:error.response.data})


   }

}


   return (


    <>

       {loading ? <Loader/> : (  

        <div className="mainlogin">
              
            <div className="card bg-light" style={{width:'35%',margin:'10px auto',marginTop:'10%'}}>   
              
                     <center>
              <h3 style={{fontWeight:'bold',padding:'20px 0px 0px 0px',color:'green'}}>Admin Login</h3>

              </center>


                 <div className="myform" style={{padding:'15px 15px 20px 15px'}}>


                   {error && 
                       <center>
                      <p className="bg-danger" style={{padding:'0px 0px 0px 0px',color:'white'}}>{error}</p>
                       </center>


                    }



                      <div class="mb-3">
                       <label for="exampleFormControlInput1" className="form-label">Email address</label>
                       <input type="email" className="form-control" id="email" onChange={handleChange} placeholder="Enter Email" style={{width:'500px'}}/>
                      </div>
 

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="Password" className="form-control" id="password" onChange={handleChange} placeholder="Enter Password" style={{width:'500px'}}/>
                       </div>


  
  <span>                
  <button onClick={handleClick} className="btn btn-success" type="button">Login</button>
  </span>

  

                    


                 </div>


             </div>


        </div>


            )}

   </>



   	)


}


export default Adminlogin;
import React,{useState,useContext} from 'react'

import {Link} from 'react-router-dom'

import {AuthContext} from "../../context/AuthContext"

import axios from 'axios'

import {useNavigate} from "react-router-dom"

import Loader from "../../components/Loader.js"


import Swal from 'sweetalert2'


const Register = () => {


const [file,setFile] = useState("");

const[info,setInfo] = useState({});


const {user,loading,error,dispatch} = useContext(AuthContext)


const navigate = useNavigate()





const handleChange = (e) => {


setInfo(prev=>({...prev,[e.target.id]:e.target.value}))


}





const handleClick = async (e) => {

   e.preventDefault();


    const data = new FormData()

      data.append("file",file)
      data.append("upload_preset","upload");
      data.append("cloud_name","ragibhasan006");



   dispatch({type:"LOGIN_START"})


   try{



        const upload = await axios.post("https://api.cloudinary.com/v1_1/ragibhasan006/image/upload",data)

        console.log(upload)

       const {url} = upload.data


       console.log(url)

        //image er url ta nilam
           const newUser = {

               ...info,
               image:url


            };


    const res = await axios.post("/api/hotel/register",newUser);

  // const res = await axios.post('/api/hotel/login',credentials);

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
  title: 'Register successfully'
})






   navigate("/")


   }catch(error){

    dispatch({type:"LOGIN_FAILURE",payload:error.response.data})


   }

}


   return (


    <>




   {loading ? <Loader/> : (   





  


        <div className="mainlogin" style={{marginBottom:'200px'}}>
              
            <div className="card bg-light" style={{width:'35%',margin:'10px auto',marginTop:'5%'}}>   
              
              <center>
              <h3 style={{fontWeight:'bold',padding:'20px 0px 0px 0px',color:'green'}}>Register</h3>
              </center>
              <div className="myform" style={{padding:'15px 15px 20px 15px'}}>
               {error && 
                       <center>
                    	<p className="bg-danger" style={{padding:'0px 0px 0px 0px',color:'white'}}>{error}</p>
                       </center>


                    }


                      <div class="mb-3">
                       <label for="exampleFormControlInput1" className="form-label">User Name</label>
                       <input type="text" className="form-control" id="username" placeholder="Enter User Name" style={{width:'500px'}} onChange={handleChange} required/>
                      </div>
              
                      <div class="mb-3">
                       <label for="exampleFormControlInput1" className="form-label">Email address</label>
                       <input type="email" className="form-control" id="email" placeholder="Enter Email" style={{width:'500px'}} onChange={handleChange} required/>
                      </div>
 

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password" style={{width:'500px'}} onChange={handleChange} required/>
                       </div>



      


                      <div className="mb-3">
                        <label for="formFile" className="form-label">Select Image</label>
                        <input className="form-control" type="file" id="file" onChange={(e)=>setFile(e.target.files[0])} style={{width:'500px'}}/>
                      </div>

                          <img  style={{height:'100px',width:'100px'}} src={file ? URL.createObjectURL(file): '' } required/>


  
  <div className="sss" style={{marginTop:'40px'}}>
  <span>                
  <button onClick={handleClick} disabled={loading} className="btn btn-success" type="button">Register</button>



  </span>

  
  <span>                
     < Link to="/login" style={{textDecoration:'none',marginLeft:'250px'}}>Already have a account</Link>
  </span>

   </div>              


                 </div>


             </div>


        </div>











   	)}

  




   </>



   	)


}


export default Register;
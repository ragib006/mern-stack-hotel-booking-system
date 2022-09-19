
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

const Adminaddadmin = () => { 


const navigate = useNavigate()

//const [alluser,Setalluser] = useState([])



const [file,setFile] = useState("");

const[info,setInfo] = useState({});


const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)






const handleChange = (e) => {



setInfo(prev=>({...prev,[e.target.id]:e.target.value}))


}











const handleClick = async (e) => {

      e.preventDefault();

      const data = new FormData()

      data.append("file",file)
      data.append("upload_preset","upload");
      data.append("cloud_name","ragibhasan006");



       setLoading(true)

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


       // console.log(newUser)


           // const name = newUser.username;


           // console.log(name)


       //   setLoading(true)


       //   const config = {  
          
      //    headers:{

      //         "Content-type":"application/json"

    //      }
   //  }


      const user = await axios.post("/api/hotel/adminregister",newUser);

  //  console.log(user)




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
   title: 'Admin Added successfully'
 })







                navigate("/admin_all_admin")


                 setInfo("");
                 file("");


       //  console.log(user)



      }catch(error){


         setLoading(false)

         console.log(error)


      }


     // console.log(info)



}



  return(

       <>

       <Adminheader/>

       <div className="sddfbvfd">
           <div className="row">

              <div className="col-md-3 bg-light">
                
                 <Adminsidebar/>


              </div>


               <div className="col-md-9" style={{marginBottom:'800px'}}>



              <p style={{fontWeight:'bold',padding:'20px 0px 0px 23px',color:'green',fontSize:'20px'}}>Add Admin</p>

              


                 <div className="container">

                    <div className="mainlogin">




             {loading ? <Loader/> : (  

                <>



                       <div className="card bg-light" style={{width:'100%',marginTop:'20px',marginBottom:'550px'}}>   

                              <div className="myform" style={{padding:'15px 15px 20px 15px'}}>

                                     <div className="row">

                                           <div className="col-md-6">

                                             <div className="mb-3">
                                             <label for="exampleFormControlInput1" className="form-label">Name</label>
                                             <input type="name" id="username" className="form-control" onChange={handleChange} placeholder="Enter Name" style={{}}/>                                   
                                             </div>

                                           </div>


                                                 <div className="col-md-6">

                               <div className="mb-3">
                               <label for="exampleFormControlInput1" className="form-label">Email</label>
                               <input type="email" id="email" className="form-control" onChange={handleChange} placeholder="Enter Email" style={{}}/>
                               </div>

                               </div>



                                 <div className="col-md-6">

                               <div className="mb-3">
                               <label for="exampleFormControlInput1" className="form-label">Password</label>
                               <input type="password" id="password" onChange={handleChange} className="form-control" placeholder="Enter Password" style={{}}/>
                               </div>

                              </div>



                          <div className="col-md-6">
                        
                              <div className="mb-3">
                              <label for="formFile" className="form-label">Select Image</label>
                              <input className="form-control" type="file" id="file" onChange={(e)=>setFile(e.target.files[0])}/>
                              </div>


                            


                              </div>



                          <div className="col-md-6">
                        
                              <div className="mb-3">
                          

                              <img  style={{height:'100px',width:'100px'}} src={file ? URL.createObjectURL(file): '' }/>


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




export default Adminaddadmin;
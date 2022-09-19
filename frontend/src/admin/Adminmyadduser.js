
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

const Adminmyadduser = () => { 


const navigate = useNavigate()

//const [alluser,Setalluser] = useState([])


   const [username,setUsername] = useState('');
   const [email,setEmail] = useState('');
   const [image,setImage] = useState('');
   const [myurl,setUrl] = useState('');
   const [isAdmin,setIsAdmin] = useState('');

   const [password,setPassword] = useState('');

   const[info,setInfo] = useState({});


const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)





const submitHandler = async (e) => {


e.preventDefault();


  const data = new FormData();
  data.append("file",image)
  data.append("upload_preset","upload");
  data.append("cloud_name","ragibhasan006");

  

  try{


     const upload = await axios.post("https://api.cloudinary.com/v1_1/ragibhasan006/image/upload",data)

        console.log(upload)


     //   setUrl(upload.data.url)

     const {url} = upload.data


     const user = await axios.post("/api/hotel/register",{username,email,password,isAdmin,image:url});

     console.log(user)

  }catch(error){

    
    console.log(error)


  }

     

  // console.log(upload.data.url)


  //console.log(myurl)





      // console.log(url)


  









//try{


    // const config = {  
          
    //      headers:{

     //          "Content-type":"application/json"

    //      }
   //  }



   // const {data} = await axios.post("/api/hotel/register",{username,email,password,isAdmin,image:myurl},config)

   // const user = await axios.post("/api/hotel/register",{username,email,password,isAdmin,image:url,config});


 // console.log(data)


    // setUrl(url)

     //  console.log(user)


 // }catch(error){

     
  //   console.log(error)
  

 // }



//console.log(username,email,password,isAdmin)




}




























const handleChange = (e) => {



setInfo(prev=>({...prev,[e.target.id]:e.target.value}))


}











const handleClick = async (e) => {

      e.preventDefault();

      const data = new FormData()

      data.append("file",image)
      data.append("upload_preset","upload");
      data.append("cloud_name","ragibhasan006");

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


        console.log(newUser)


           // const name = newUser.username;


           // console.log(name)


       //   setLoading(true)


       //   const config = {  
          
      //    headers:{

      //         "Content-type":"application/json"

    //      }
   //  }


      const user = await axios.post("/api/hotel/register",newUser);

    console.log(user)

      //     setLoading(false)



   //   const Toast = Swal.mixin({
 // toast: true,
 // position: 'top-end',
 // showConfirmButton: false,
 // timer: 3000,
 // timerProgressBar: true,
 // didOpen: (toast) => {
 //   toast.addEventListener('mouseenter', Swal.stopTimer)
 //   toast.addEventListener('mouseleave', Swal.resumeTimer)
//  }
//})

//Toast.fire({
//  icon: 'success',
//  title: 'User Added successfully'
//})







           //    navigate("/admin_all_user")


           //    setInfo("");
          //     file("");


       //  console.log(user)



      }catch(error){

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


               <div className="col-md-9">



              <p style={{fontWeight:'bold',padding:'20px 0px 0px 23px',color:'green',fontSize:'20px'}}>Add User</p>

              


                 <div className="container">

                    <div className="mainlogin">




             {loading ? <Loader/> : (  

                <>



                       <div className="card bg-light" style={{width:'100%',marginTop:'20px',marginBottom:'170px'}}>   

                              <div className="myform" style={{padding:'15px 15px 20px 15px'}}>





                                     <div className="row">



                                     <form onSubmit={submitHandler} enctype="multipart/form-data">

                                           <div className="col-md-6">

                                             <div className="mb-3">
                                             <label for="exampleFormControlInput1" className="form-label">Name</label>
                                             <input type="name" id="username" className="form-control" value = {username}
                                             onChange = {(e) => setUsername(e.target.value)} placeholder="Enter Name" style={{}}/>                                   
                                             </div>

                                           </div>


                                                 <div className="col-md-6">

                               <div className="mb-3">
                               <label for="exampleFormControlInput1" className="form-label">Email</label>
                               <input type="email" id="email" className="form-control" value = {email}
                               onChange = {(e) => setEmail(e.target.value)} placeholder="Enter Email" style={{}}/>
                               </div>

                               </div>



                                 <div className="col-md-6">

                               <div className="mb-3">
                               <label for="exampleFormControlInput1" className="form-label">Password</label>
                               <input type="password" id="password"   value = {password}
                                onChange = {(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password" style={{}}/>
                               </div>

                              </div>



                                 <div className="col-md-6">

                               <div className="mb-3">
                               <label for="exampleFormControlInput1" className="form-label">Admin</label>
                               <select className="form-select"  value = {isAdmin}
                                onChange = {(e) => setIsAdmin(e.target.value)} aria-label="Default select example">
                                 <option disabled>Select</option>

                                 <option value="false">False</option>
                                 <option value="true">True</option>
                             
                              
                               </select>
                               </div>

                              </div>


                          <div className="col-md-6">
                        
                              <div className="mb-3">
                              <label for="formFile" className="form-label">Select Image</label>
                              <input className="form-control" type="file" accept="image/*"
                                onChange = {(e)=>setImage(e.target.files[0])}/>
                              </div>


                              </div>



                        
                      <span>                
                  


  <button type="submit"  className="btn btn-primary">Register</button>
                      </span>


                      </form>


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




export default Adminmyadduser;
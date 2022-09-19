
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

const Adminaddhotel = () => { 


const navigate = useNavigate()

//const [alluser,Setalluser] = useState([])



const [files,setFiles] = useState("");

const[info,setInfo] = useState({});


const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)

const [room,setRoom] = useState([])


const [allroom,Setallroom] = useState("")




useEffect(()=>{ 

     const Allhotel = async () => {  

    setLoading(true)

    try{



   const res = await axios.get('/api/hotel/getallroom');

   
     Setallroom(res.data)


       setLoading(false)


     console.log(res.data)


     }catch(error){

      setError(error)

     }



    setLoading(false)


  
   }
  
   
  Allhotel();




},[])










const handleSelect = (e) => {



//console.log(e.target.selectedOptions)

const value = Array.from(e.target.selectedOptions, option=>option.value)



setRoom(value)
//console.log(value)



}


console.log(room)









const handleChange = (e) => {



setInfo(prev=>({...prev,[e.target.id]:e.target.value}))


}







//console.log(files)


const handleClick = async (e) => {

      e.preventDefault();

     



    setLoading(true)

      try{


       const list = await Promise.all(  

       Object.values(files).map(async (file)=>{ 


                   const data = new FormData();  

                    data.append("file",file)
                    data.append("upload_preset","upload");
                    data.append("cloud_name","ragibhasan006");

                    const upload = await axios.post("https://api.cloudinary.com/v1_1/ragibhasan006/image/upload",data)

                    const {url} = upload.data


                    return url;


                    //console.log(url)

        })



        )





        //image er url ta nilam


             const newhotel = {

              ...info,
                // rooms:room,
                 photos:list


             };


           console.log(newhotel)


           // const name = newUser.username;


           // console.log(name)


         //   setLoading(true)


       //   const config = {  
          
      //    headers:{

      //         "Content-type":"application/json"

    //      }
   //  }


     const user = await axios.post("/api/hotel/createhotel",newhotel);



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
   title: 'Hotel Added successfully'
 })







                navigate("/admin_all_hotel")


                 setInfo("");
                 files("");

  // console.log(user)





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



              <p style={{fontWeight:'bold',padding:'20px 0px 0px 23px',color:'green',fontSize:'20px'}}>Add Hotel</p>

              


                 <div className="container">

                    <div className="mainlogin">




             {loading ? <Loader/> : (  

                <>



                       <div className="card bg-light" style={{width:'100%',marginTop:'20px',marginBottom:'550px'}}>   

                              <div className="myform" style={{padding:'15px 15px 20px 15px'}}>

                                     <div className="row">

                                           <div className="col-md-6">

                                             <div className="mb-3">
                                             <label for="exampleFormControlInput1" className="form-label">Hotel Name</label>
                                             <input type="name" id="name" className="form-control" onChange={handleChange} placeholder="Enter Hotel Name" style={{}}/>                                   
                                             </div>

                                           </div>


                                              <div className="col-md-6">

                                             <div className="mb-3">
                                             <label for="exampleFormControlInput1" className="form-label">Hotel Title</label>
                                             <input type="name" id="title" className="form-control" onChange={handleChange} placeholder="Enter Hotel Title" style={{}}/>                                   
                                             </div>

                                           </div>



                                           


                                            <div className="col-md-6">

                                                <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Hotel Type</label>
                                                <select className="form-select" id="type" aria-label="Default select example" onChange={handleChange}>
                                               <option>Select</option>

                                                 <option value="Hotel">Hotel</option>
                                                 <option value="Villa">Villa</option>
                                                 <option value="Apartment">Apartment</option>
                                                 <option value="Resort">Resort</option>
                                                 <option value="Cabin">Cabin</option>
                                                  <option value="Lounge">Lounge</option>
                      
                             
                              
                                             </select>
                                                </div>

                                              </div>


                                           


                                                 <div className="col-md-6">

                               <div className="mb-3">
                               <label for="exampleFormControlInput1" className="form-label">City</label>
                               <input type="text" id="city" className="form-control" onChange={handleChange} placeholder="Enter City" style={{}}/>
                               </div>

                               </div>



                                 <div className="col-md-6">

                               <div className="mb-3">
                               <label for="exampleFormControlInput1" className="form-label">Address</label>
                               <input type="text" id="address" onChange={handleChange} className="form-control" placeholder="Enter Address" style={{}}/>
                               </div>

                              </div>


                                <div className="col-md-6">

                               <div className="mb-3">
                               <label for="exampleFormControlInput1" className="form-label">Distance</label>
                               <input type="text" id="distance" onChange={handleChange} className="form-control" placeholder="Enter Distance" style={{}}/>
                               </div>

                              </div>


                               <div className="col-md-6">

                               <div className="mb-3">
                               <label for="exampleFormControlInput1" className="form-label">Chepest Price</label>
                               <input type="number" id="chepestPrice" onChange={handleChange} className="form-control" placeholder="Enter Chepest Price" style={{}}/>
                               </div>

                              </div>




                               <div className="col-md-6">

                               <div className="mb-3">
                               <label for="exampleFormControlInput1" className="form-label">Description</label>
                               <textarea type="text" id="desc" min={0} onChange={handleChange} className="form-control" placeholder="Enter Description" style={{}}></textarea>

                               </div>

                              </div>



                              


                              



                                 <div className="col-md-6">

                               <div className="mb-3">
                               <label for="exampleFormControlInput1" className="form-label">Taxi Services</label>
                               <select className="form-select" id="featured" aria-label="Default select example" onChange={handleChange}>
                                 <option disabled>Select</option>

                                 <option value={false}>False</option>
                                 <option value={true}>True</option>
                             
                              
                               </select>
                               </div>

                              </div>


                          <div className="col-md-6">
                        
                              <div className="mb-3">
                              <label for="formFile" className="form-label">Select Image</label>
                              <input className="form-control" type="file" id="file" multiple onChange={(e)=>setFiles(e.target.files)}/>
                              </div>


                                <img  style={{height:'100px',width:'100px'}} src={files ? URL.createObjectURL(files[0]): 'null' }/>


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




export default Adminaddhotel;
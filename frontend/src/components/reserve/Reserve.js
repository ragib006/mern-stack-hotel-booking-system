import React,{useState,useEffect,useContext} from 'react'

import { useParams } from "react-router-dom";

import Navbar from '../../components/navbar/Navbar.js'

import Header from '../../components/header/Header.js'

import Footer from '../../components/footer/Footer.js'

import axios from 'axios'

import {SearchContext} from '../../context/SearchContext.js'
import {AuthContext} from '../../context/AuthContext.js'

import Loader from '../Loader.js'

import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

const Reserve = () => {


	const navigate = useNavigate()


  	 const { id } = useParams();

const {date,options}  =useContext(SearchContext);

const {user,dispatch} = useContext(AuthContext)



const{username,email} = user



//console.log('user is my user',email)


  	// console.log('myreserve id is',id)


const [hotelrooms,Sethotelrooms] = useState([])


const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)

//ssssss

const [transationid,setTransationid] = useState("")


const [selectedRooms,SetSelectedrooms] = useState([])




const [hoteldetails,Sethoteldetails] = useState({})




useEffect(()=>{

    const Hoteldetails = async () => {  

   // setLoading(true)

    try{

   const res = await axios.get(`/api/hotel/viewhotel/${id}`);

    


   
     Sethoteldetails(res.data)


     }catch(error){

     // setError(error)

     console.log('error')

     }



   // setLoading(false)


  
   }
  
   
  Hoteldetails();


    


},[])





//console.log('this is hotel name',hoteldetails.name)











useEffect(()=>{

    const Hotelrooms = async () => {  

        setLoading(true)

        try{

          const res = await axios.get(`/api/hotel/getspecifichotelallroom/${id}`);



            console.log('hotel all rooms.................................',res.data)


          Sethotelrooms(res.data)


         }catch(error){

          setError(error)

         }

        setLoading(false)
 
      }


     Hotelrooms();


    },[])




const handleSelect = (e) => {


  const checked = e.target.checked
  
  const value = e.target.value

  SetSelectedrooms(checked ? [...selectedRooms,value] : selectedRooms.filter((item) => item !== value))


}



//get date range  

const getDatesInRange = (startDate,endDate) => { 


const start = new Date(startDate);
const end = new Date(endDate);


const mydate = new Date(start.getTime());


const datel = [];

while (mydate <= end){

     datel.push(new Date(mydate).getTime());

     mydate.setDate(mydate.getDate() + 1);

}


return datel;


}



//console.log('rrrrrrrrrrrrr',getDatesInRange(date[0].startDate,date[0].endDate))



//room available or not  

   const alldate = getDatesInRange(date[0].startDate,date[0].endDate)
 
   const isAvailable = (roomNumber) =>{

   const isFound = roomNumber.unavailableDates.some((date)=>alldate.includes(new Date(date).getTime()));

   return !isFound;


   }




//console.log('dateis.........................................................',date)


//console.log('all date is...................',alldate)




console.log('Selected room is',hotelrooms)



const arraylength  = selectedRooms.length


console.log('array length is........................',arraylength)


const handleClick = async () => {  


	 // setLoading(true)

try{



//await Promise.all(selectedRooms.map((roomId)=>{



 //const res = axios.put(`/api/hotel/reserveroom/${roomId}`,{date:alldate})


//const res = axios.post('/api/hotel/orderhotel',{username:username,email:email,hotelid:id,hotelname:hoteldetails.name,tnxId:transationid,rooms:roomId,date:alldate})


//const res = axios.post(`/api/hotel/orderhotel/${roomId}`,{username:username,email:email,hotelid:id,hotelname:hoteldetails.name,tnxId:transationid,date:alldate})




 //return res.data

 //console.log('........................',roomId)



//}))


const res = axios.post('/api/hotel/orderhotel',{username:username,email:email,hotelid:id,hotelname:hoteldetails.name,totalroom:arraylength,rooms:selectedRooms,date:alldate})






//console.log(res.data)


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
   title: 'Room Booking Successfully'
 })











    navigate("/")


}catch(error){


   console.log(error)

       //  setError(error)


}


 // setLoading(false)


}



//console.log('select room',selectedRooms)


//console.log('room is',hotelrooms)


//console.log('date is',date)


  return(



      <>



     <Navbar/>
     <Header type="list"/>


<div className="container">






      <div className="mainreserve" style={{marginBottom:'400px'}}>





{loading ? <Loader/> : (  


 <>



       
         <span style={{fontSize:'20px',fontWeight:'bold',paddingTop:'10px',display:'block',marginBottom:'10px'}}>{hoteldetails.name}</span>

         <p>Reserve Room</p>
         
         <div className="row">

          

                {hotelrooms && hotelrooms.length > 0 ? hotelrooms.map((item)=>( 

               <div className="col-md-12" style={{marginBottom:'40px'}}>
                 <div className="card  bg-light">

                     <div className="row" style={{padding:'10px 0px 0px 10px'}}>
                         <div className="col-md-3">
                              <p style={{fontWeight:'bold'}}>Room Title</p>
                              <p style={{fontWeight:'bold'}}>Description</p>
                              <p style={{fontWeight:'bold'}}>Max People</p>
                              <p style={{fontWeight:'bold'}}>Price:</p>
                          </div>

                         <div className="col-md-9">

                              <p style={{fontWeight:'bold'}}>:  {item?.title}</p>
                              <p>: {item?.desc}</p>
                              <p>: {item?.maxPeople}</p>
                              <p style={{fontWeight:'bold',color:'gray'}}>: {item?.price} $ (per night)</p>                         
                         </div>
                      </div>


                      <div className="row">
                         <p style={{marginLeft:'10px',fontWeight:'bold',fontSize:'18px',color:'green'}}>Select Room</p>
     {item.roomNumbers && item.roomNumbers?.map((roomNumber)=>(
                         <div className="col-md-4">
                       
                         <div className="card" style={{marginBottom:'20px',padding:'10px 10px 10px 10px'}}>
                            <div className="conroom"style={{float:'left',padding:'0px 0px 10px 10px'}}>



                            
                            <p>
                            <span style={{fontWeight:'bold',fontSize:'16px'}}>Room Number : </span> <span style={{fontWeight:'bold',fontSize:'18px',color:'gray'}}>{roomNumber?.number}</span>
                             </p>

                                <p>
                            <span style={{fontWeight:'bold',fontSize:'16px'}}>Room Id : </span> <span style={{fontWeight:'bold',fontSize:'16px',color:'gray'}}>{roomNumber?._id}</span>
                             </p>


                              <input className="form-check-input" type="checkbox" style={{fontSize:'30px',color:'gray'}} value={roomNumber?._id} onChange={handleSelect}  disabled={!isAvailable(roomNumber)}/>
                            </div>
                                  </div>
              

                          
                        
                          </div>

                             ))}

                      </div>




{/*

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h1>{arraylength * item.price}</h1>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

*/}




                
                 <button onClick={handleClick} disabled={loading} class="btn btn-success">Reserve Now</button>



                 </div>
               </div>

                  )) : <p>No Available Room</p>}

         </div>











</>


  )}


















     </div>



   </div>


























             
          




<Footer/>

      </>

  



  	)



}


export default Reserve;
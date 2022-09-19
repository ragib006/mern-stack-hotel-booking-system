import React,{useState,useEffect,useContext} from 'react'

import Navbar from '../../components/navbar/Navbar.js'

import Header from '../../components/header/Header.js'

import Featured from '../../components/featured/Featured.js'

import Footer from '../../components/footer/Footer.js'
import {useLocation} from "react-router-dom"


import {SearchContext} from "../../context/SearchContext"
import {AuthContext} from "../../context/AuthContext"

import axios from 'axios'

import {Link} from 'react-router-dom'

import Loader from '../../components/Loader.js'


import {useNavigate} from 'react-router-dom'

const Hotel = ({match}) => {


const [hoteldetails,Sethoteldetails] = useState({})
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)

const location = useLocation();

const navigate = useNavigate()

const id = location.pathname.split("/")[2];



//console.log('location is........',id)


const {date,options}  =useContext(SearchContext);

const {user,dispatch} = useContext(AuthContext)
//date difference  


const MILLISECOND_PER_DAY = 1000 * 60 * 60 * 24;

function daydifference(date1,date2){



const start = new Date(date1);
const end = new Date(date2);

const timeDiff = Math.abs(end.getTime() - start.getTime());

const diffDays = Math.ceil(timeDiff / MILLISECOND_PER_DAY);

  //const timeDiff = Math.abs(date2.getTime() - date1.getTime());

 // const diffDays = Math.ceil(timeDiff / MILLISECOND_PER_DAY);

  return diffDays;

 //if(diffDays == 0){



  //return diffDays=0;

 //}else{

 //return diffDays;


 //}





}



//console.log(daydifference(date[0].endDate, date[0].startDate));


const day = (daydifference(date[0].endDate,date[0].startDate))



//console.log('oooooooooooooooooooooooooooooooooooodate',date);


useEffect(()=>{

    const Hoteldetails = async () => {  

    setLoading(true)

    try{

   const res = await axios.get(`/api/hotel/viewhotel/${id}`);

   //  const res = await axios.get(`/api/hotel/hotelsearch?city=${destination}`);

  // localhost:5000/api/hotel/viewhotel/:id
   
     Sethoteldetails(res.data)


     }catch(error){

      setError(error)

     }



    setLoading(false)


  
   }
  
   
  Hoteldetails();


    


},[])


console.log('hotel details is..........',hoteldetails)




const handleClick = () => {

  if(user){

      navigate("/reserve")

  }else{

    navigate("/login")
 

  }


}



const myclick = (id) => {

  if(user){

      navigate(`/reserve/${id}`)

  }else{

    navigate("/login")
 

  }


}




  
  return(
    
    <>

    <div className="sdgsdg" style={{marginBottom:'150px'}}>

     <Navbar/>
     <Header type="list"/>















{loading ? (<Loader/>):(<>






     <div className="nnn" >

         <div className="container">
            <div className="row">
               <div className="col-md-8">

               <span style={{display:'block',fontWeight:'bold',color:'black',fontSize:'22px',marginTop:'10px'}}>{hoteldetails.name}</span>
                
                <span style={{display:'block'}}>
                <span style={{fontWeight:'bold'}}>Type : </span><span style={{marginLeft:'10px'}}>{hoteldetails.type}</span>
                </span>


              <span style={{display:'block'}}>
             <span style={{fontWeight:'bold'}} >City : </span><span style={{marginLeft:'10px'}}>{hoteldetails.city}</span>
              </span>

             
             <span style={{display:'block'}}>
               <span><i className="fas fa-map-marker-alt"></i></span><span style={{marginLeft:'10px'}}>{hoteldetails.address}</span>
             </span>

           
               <span style={{display:'block',marginBottom:'20px'}}>
             <span style={{fontWeight:'bold'}} >Chepest Price : </span><span style={{marginLeft:'10px',fontWeight:'bold'}}>${hoteldetails.chepestPrice}</span>
              </span>
           
               </div>

                  <div className="col-md-4">
                   
                   {/*
                  <button className="btn btn-info btn-large" style={{marginTop:'20px'}}>Reserve or Book Now !</button>

                   */}
                  
               </div>

            </div>
         </div>

     </div>



     <div className="jjjk">

         <div className="container">



             
             <div className="row">

               
                  {hoteldetails && hoteldetails.photos ? (   
                                  
                                    <>

                                     <div class="col-md-3">
                                      <img  src={hoteldetails.photos[0]} style={{width:'400px',height:'200px',marginBottom:'20px'}} className="img-fluid" alt="..."/>
                                    </div>

                                      <div class="col-md-3">
                                      <img  src={hoteldetails.photos[1]} style={{width:'400px',height:'200px',marginBottom:'20px'}} className="img-fluid" alt="..."/>
                                    </div>

                                      <div class="col-md-3">
                                      <img  src={hoteldetails.photos[2]} style={{width:'400px',height:'200px',marginBottom:'20px'}} className="img-fluid" alt="..."/>
                                    </div>

                                      <div class="col-md-3">
                                      <img  src={hoteldetails.photos[3]} style={{width:'400px',height:'200px',marginBottom:'20px'}} className="img-fluid" alt="..."/>
                                    </div>

                                    </>

                                      ):(    

                                      <>

                                          <p>Not found</p>

                                      </>

                                      )}


             </div>







         </div>

     </div>









<div className="dshff">

  <div className="container">

     <div className="row">

        <div className="col-md-9">

            <div className="ddddd"style={{marginTop:'20px'}}>

            <span style={{fontWeight:'bold',color:'black',fontSize:'22px'}}>Stay in the {hoteldetails.name}</span>



            <p style={{textAlign:'justify',marginTop:'10px',fontFamily:'tahoma'}}>{hoteldetails.desc}</p>

            </div>

         </div>

         <div className="col-md-3">
              
              <div className="hfjer bg-light" style={{marginTop:'20px'}}>
                 <div className="sww" style={{padding:'10px 10px 10px 10px'}}>
                 

                {day === 0 ? (
                   
                    <>


                       <p style={{fontWeight:'bold',fontSize:'20px',color:'green'}}>Perfect for a 1 night stay !</p>

                 <p style={{fontWeight:'bold',fontSize:'17px'}}>{options.room} room and 1 night</p>
                 <p style={{fontWeight:'bold',fontSize:'17px'}}>{1 * hoteldetails.chepestPrice * options.room}$ (1 night) and ({options.room} room)</p>

                  




                    </>


                  ):(   

                  <>


                     <p style={{fontWeight:'bold',fontSize:'20px',color:'green'}}>Perfect for a {day} night stay !</p>

                 <p style={{fontWeight:'bold',fontSize:'17px'}}>{options.room} room and {day} night</p>
                 <p style={{fontWeight:'bold',fontSize:'17px'}}>{day * hoteldetails.chepestPrice * options.room}$ ({day} night) and ({options.room} room)</p>

                  



                 </>

                  )}

              



               
             {/* 


  <center>
                 <button style={{marginTop:'10px',marginBottom:'10px'}} className="btn btn-success btn-sm" onClick={handleClick}>Reserve or Book Now !</button>
                 </center>






             */}




               




                 <center>
                 <button style={{marginTop:'10px',marginBottom:'10px'}} className="btn btn-success btn-sm" onClick={()=>myclick(id)}>Reserve or Book Now !</button>
                 </center>
        
             


                 </div>

              </div>

         </div>




     </div>

   </div>

</div>



























  </>)}






</div>

<Footer/>
     
    
    </>

  	)



}

export default Hotel;
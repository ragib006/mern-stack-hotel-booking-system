import React,{useState,useEffect} from 'react'

import Navbar from '../../components/navbar/Navbar.js'

import Header from '../../components/header/Header.js'
import Footer from '../../components/footer/Footer.js'

import SearchItem from '../../components/searchItem/searchItem.js'

import {useLocation} from "react-router-dom"
import {format} from 'date-fns'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import axios from 'axios'

import Loader from '../../components/Loader.js'

const List = () => {


const location = useLocation()

const [destination,setDestination] = useState(location.state.destination)
const [date,setDate] = useState(location.state.date)
const [options,setOptions] = useState(location.state.options)

const [openDate,setOpenDate] = useState(false)





const [min,Setminprice] = useState("")

const [max,Setmaxprice] = useState("")





console.log(location)


console.log('date is......................',date);


const [mysearchdata,setmysearchData] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)




  useEffect(()=>{  

   const SearchHotel = async () => {  

    setLoading(true)

    try{



 //    const res = await axios.get(`/api/hotel/hotelsearch?city=${destination}`);
   
 //   setmysearchData(res.data.len)


    const res = await axios.get(`/api/hotel/regexhotelsearch?search=${destination}`);
   
    setmysearchData(res.data.search)




    }catch(error){

      setError(error)

    }



    setLoading(false)


  
   }
  
   
SearchHotel();
  
},[])


 //console.log("mdatais-------------------------",mysearchdata)


  // console.log("destination..............",destination)








  const handleSearch = () => { 

    
       const SearchHotel = async () => {  

    setLoading(true)

    try{

   // const res = await axios.get(`/api/hotel/hotelcountbytype`);

     const res = await axios.get(`/api/hotel/hotelsearchmaxandminprice?city=${destination}&min=${min || 0}&max=${max || 999}`);
   
    setmysearchData(res.data.len)

    console.log('finter value is........',res.data.len)


    }catch(error){

      setError(error)

    }



    setLoading(false)


  
   }
  
   
SearchHotel();




  


  }


return(

  <>

     <Navbar/>
     <Header type="list"/>

      <div className="llist" style={{fontFamily:'tahoma'}}>
         <div className="container">
           <div className="row">
               <div className="col-md-4">
                   <div className="card bg-info" style={{marginTop:'20px'}}>
                          <div className="ca" style={{padding:'10px 10px 10px 10px'}}>



                       <p style={{fontWeight:'bold',color:'black',fontSize:'20px'}}>Search</p>

                       <p>Destination</p>
                       <input type="text" placeholder={destination} className="form-control bg-light"/>
                       <p style={{marginTop:'10px'}}>Check-in Date</p>
                       <p className="bg-light" style={{padding:'10px 10px 10px 10px'}} onClick={()=>setOpenDate(!openDate)} >{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</p>

                         { openDate &&
                        <DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()}  ranges={date}/>
                         }


                       <p style={{fontWeight:'bold'}} >Options</p>



                         <p>
                            <span style={{marginRight:'152px'}}>Min Price Per Night</span><span>

                            <input type="number" min={0} className="bg-light" onChange={(e)=>Setminprice(e.target.value)}   style={{border:'1px solid pink',width:'70px'}}/></span>
                             </p>



                                       <p>
                            <span style={{marginRight:'150px'}}>Max Price Per Night</span><span>

                            <input type="number" min={0} className="bg-light" onChange={(e)=>Setmaxprice(e.target.value)}    style={{border:'1px solid pink',width:'70px'}}/></span>
                             </p>
                            
                          

            


                            <p>
                            <span style={{marginRight:'251px'}}>Adult</span><span><input type="number" placeholder={options.adult} min={1} className="bg-light" style={{border:'1px solid pink',width:'70px'}}/></span>
                             </p>

                              <p>
                            <span style={{marginRight:'230px'}}>Children</span><span><input type="number" placeholder={options.children} min={0} className="bg-light" style={{border:'1px solid pink',width:'70px'}}/></span>
                             </p>

                                <p>
                            <span style={{marginRight:'248px'}}>Room</span><span><input type="number" placeholder={options.room} min={1}  className="bg-light" style={{border:'1px solid pink',width:'70px'}}/></span>
                             </p>

                               <center>

                               <div class="d-grid gap-2" style={{marginTop:'40px'}}>
                                  <button onClick={handleSearch} class="btn btn-primary" type="button">Search</button>
  
                                </div>

                                

                               </center>

                          
                            </div>

                    </div>
               </div>






                <div className="col-md-8" style={{marginTop:'20px'}}>









                   <div className="contentscroll" style={{}}>








                


                      
        <>
          
          
       


{loading ? <Loader/>:(   

  <>




    <div className="card" style={{marginBottom:'15px'}}>

       
                        
                         <div className="row" style={{padding:'10px 10px 10px 10px'}}>


                        


                            {mysearchdata && mysearchdata.map((item)=>(

                              
                                <SearchItem item={item} key={item._id}/>


                            
                             ))}

                            


                 </div>

                       </div>




</>


  )}



             



           
      












                  
  
      
      {/*         

     {mysearchdata.map(item=>{



                  <div className="card" style={{marginBottom:'15px'}}>
                        
                         <div className="row" style={{padding:'10px 10px 10px 10px'}}>

                            <div className="col-md-4" >

                             <img style={{width:'240px',height:'240px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1658143925/index2_jpbtnf.jpg"   class="img-thumbnail" alt="..."/>

                           </div>

                            <div className="col-md-8">

                              <p style={{fontWeight:'bold',fontSize:'18px',color:'blue'}}>Tower Street Apartments</p>
                              <p className="bg-success" style={{fontWeight:'bold',fontSize:'11px',width:'115px',padding:'2px 2px 2px 12px',color:'white',borderRadius:'5px'}}>Free airport taxi</p>


                               <p style={{fontWeight:'bold',fontSize:'16px'}}>Studio Apartment with Air Conditioning</p>

                               <p>
                               <span style={{fontSize:'14px'}}>Entire studio : </span><span style={{fontSize:'14px'}}>1 bed room , 1 bathroom , 1 belcony</span><span style={{fontWeight:'bold',color:'black',marginLeft:'150px',fontSize:'18px'}}>$112</span>
                               </p>


                                <p>
                               <span style={{fontSize:'14px',fontWeight:'bold',color:'green'}}>Free Cancellation</span>       <span style={{marginLeft:'250px',fontSize:'12px',fontWeight:'bold',color:'gray'}}>includes taxes and fees</span>
                                </p>


                                 <p>
                                 <span style={{fontSize:'14px',color:'green'}}>You can cancel later , so lock in the greate price today</span>       <span style={{marginLeft:'62px',fontSize:'12px',fontWeight:'bold',color:'gray'}}><button className="btn btn-info btn-sm" style={{color:'white'}}>See avalliability</button></span>
                                </p>

                             </div>

                           </div>

                       </div>





     })}
                         
                            
  

*/}
                            
                           
                

                            
                               

                  



              

                        
                
                   



    </>


                            
                              

                  

                  


                          





          

                   



























{/*


              {loading ? <p>Loading</p> :  


                  <>
                {mydata.map((item) => {



                          <SearchItem item={item} key={item._id}/>


                })}
                  </>
                



                }


*/}














                   </div>












        





                 







               </div>
           </div>
         </div>
      </div>



      <Footer/>

  </>

	)


}

export default List
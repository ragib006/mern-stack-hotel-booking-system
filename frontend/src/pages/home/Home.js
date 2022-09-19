import React from 'react'
import Navbar from '../../components/navbar/Navbar.js'

import Header from '../../components/header/Header.js'

import Featured from '../../components/featured/Featured.js'

import Footer from '../../components/footer/Footer.js'

import PropertyList from '../../components/PropertyList/PropertyList.js'


const Home = () => {

  
  return(
    
    <>
   
   <Navbar/>

   <Header/>




<Featured/>


<PropertyList/>





<div className="fivestar" style={{marginTop:'20px',marginBottom:'40px'}}>

 <div className="container">

   <p style={{fontWeight:'bold'}}>Five Star Hotel</p>
  
  <div className="row">
     
     <div className="col-md-3">
        
         <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1663328755/upload/imasfdsfdsges_helzm1.jpg" style={{width:'500px',height:'210px'}} class="img-thumbnail" alt="..."/>
          
    


     </div>

        <div className="col-md-3">
        
         <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1663264866/upload/fwb48zogw79qkgnu7uub.jpg" style={{width:'500px',height:'210px'}} class="img-thumbnail" alt="..."/>

     </div>



         <div className="col-md-3">
        
         <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1663328767/upload/indgfdghfdhdex_d1lgx8.jpg" style={{width:'500px',height:'210px'}} class="img-thumbnail" alt="..."/>

     </div>


           <div className="col-md-3">
        
         <img src="https://res.cloudinary.com/ragibhasan006/image/upload/v1663328898/upload/idfsgfdndex_q22qtw.jpg" style={{width:'500px',height:'210px'}} class="img-thumbnail" alt="..."/>

     </div>
   
  </div>

   </div>

</div>


   

   <Footer/>

    
    
    </>

  	)



}

export default Home;
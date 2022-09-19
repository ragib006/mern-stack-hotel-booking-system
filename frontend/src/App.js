import React from 'react'
//import {BrowserRouter,Routes,Route} from "react-router-dom"

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './pages/home/Home.js'
import List from './pages/list/List.js'
import Hotel from './pages/hotel/Hotel.js'

import Login from './pages/login/Login.js'

import Register from './pages/login/Register.js'


import Reserve from './components/reserve/Reserve.js'

import Admindashboard from './admin/Admindashboard.js'

import Adminalluser from './admin/Adminalluser.js'


import Adminadduser from './admin/Adminadduser.js'

import Adminmyadduser from './admin/Adminmyadduser.js'



import Adminallhotel from './admin/Adminallhotel.js'

import Adminaddhotel from './admin/Adminaddhotel.js'

import Adminaddroom from './admin/Adminaddroom.js'

//Adminviewhotel

import Adminviewhotel from './admin/Adminviewhotel.js'

//Adminhotelallroom

import Adminhotelallroom from './admin/Adminhotelallroom.js'

//Adminallorder

import Adminallorder from './admin/Adminallorder.js'




import Adminorderview from './admin/Adminorderview.js'
//Adminlogin


import Adminlogin from './admin/Adminlogin.js'


//Adminalladmin

import Adminalladmin from './admin/Adminalladmin.js'

//Adminaddadmin

import Adminaddadmin from './admin/Adminaddadmin.js'

//import 'sweetalert2/src/sweetalert2.scss'

//import Swal from 'sweetalert2/dist/sweetalert2.js'

import './App.css';

function App() {
  return (
        <>

            

   <BrowserRouter>

    <Routes>

      <Route path="/" element={<Home/>} exact/>

      <Route path="/hotels" element={<List/>} exact/>

      <Route path="/hotels/:id" element={<Hotel/>} exact/>     

      <Route path="/login" element={<Login/>} exact/>  

//Register

     <Route path="/register" element={<Register/>} exact/>

      <Route path="/reserve/:id" element={<Reserve/>} exact/> 





      <Route path="/admin_dashboard" element={<Admindashboard/>} exact/> 
      
      <Route path="/admin_all_user" element={<Adminalluser/>} exact/> 
 
      <Route path="/admin_add_user" element={<Adminadduser/>} exact/>

      <Route path="/admin_myadd_user" element={<Adminmyadduser/>} exact/>

       <Route path="/admin_all_hotel" element={<Adminallhotel/>} exact/>


       <Route path="/admin_add_hotel" element={<Adminaddhotel/>} exact/>



      <Route path="/admin_add_room/:id" element={<Adminaddroom/>} exact/> 


       //Adminviewhotel

        <Route path="/admin_view_hotel/:id" element={<Adminviewhotel/>} exact/> 


    //Adminhotelallroom

      <Route path="/admin_hotel_all_room/:id" element={<Adminhotelallroom/>} exact/> 


//Adminallorder

       <Route path="/admin_all_order" element={<Adminallorder/>} exact/>

       <Route path="/admin_order_view/:id" element={<Adminorderview/>} exact/>

       <Route path="/admin" element={<Adminlogin/>} exact/>




       <Route path="/admin_all_admin" element={<Adminalladmin/>} exact/>

       //Adminaddadmin

          <Route path="/admin_add_admin" element={<Adminaddadmin/>} exact/>

    
    </Routes>
    
  </BrowserRouter>
        
       
      

       </>
  );
}

export default App;

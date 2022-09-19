import React,{useState,useContext} from 'react'

import {Link} from 'react-router-dom'

import {AuthContext} from "../../context/AuthContext"

import Swal from 'sweetalert2'
const Navbar = () => { 






const {user,loading,error,dispatch} = useContext(AuthContext)



const logoutHandler = () => {


  localStorage.removeItem('user')

  dispatch({type:"LOGOUT"})







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
  title: 'Logout successfully'
})




}


   return(


      <>
    




          <nav className="navbar navbar-expand-lg bg-info">


  <div className="container">


    <Link className="navbar-brand" to="/" style={{fontWeight:'bold',color:'white',width:'900px'}}>Hotel Booking</Link>



       {user ?  

        <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
        <li className="nav-item float-right" >
          <a className="nav-link" style={{color:'white',color:'black'}}>{user.username}</a>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={logoutHandler} style={{color:'black',fontWeight:'bold'}}>Logout</span>
        </li>
      </ul>
       </div> : (



    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
        <li className="nav-item float-right" >
          <a className="nav-link" href="#" style={{color:'white'}}>Register</a>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link" style={{color:'white'}}>Login</Link>
        </li>
      </ul>
       </div>







        )}


  </div>
</nav>








      

      </>

   	)

}



export default Navbar;
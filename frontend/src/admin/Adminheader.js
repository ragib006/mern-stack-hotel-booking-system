
import React,{useState,useEffect,useContext} from 'react'

import {Link} from 'react-router-dom'


import {AdminContext} from "../context/AdminContext"

import Swal from 'sweetalert2'

import {useNavigate} from 'react-router-dom'


const Adminheader = () => {


const navigate = useNavigate()

const logoutHandler = () => {


  localStorage.removeItem('admin')

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


     navigate("/admin")

}














const {admin,dispatch} = useContext(AdminContext)



console.log('admin is',admin)




    return(


        <>




<nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/admin_dashboard" style={{fontWeight:'bold'}}>Admin Dashboard</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">

        </li>
      
      </ul>
      <span className="navbar-text">


 
          
        

     {admin && admin.image ? <img style={{width:'50px',height:'50px',float:'left'}} src={admin.image} class="rounded-circle"/>

: <img style={{width:'50px',height:'50px',float:'left'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1662755165/upload/index2_dom9ns.png" class="rounded-circle"/>

}

   


            <a className="nav-link" style={{width:'150px',float:'left'}} href="#">{admin.username}</a>

    

   <a className="nav-link" style={{width:'30px',float:'left'}} onClick={logoutHandler}>Logout</a>      
             
          


      </span>
    </div>
  </div>
</nav>







        </>
    	)


}


export default Adminheader;
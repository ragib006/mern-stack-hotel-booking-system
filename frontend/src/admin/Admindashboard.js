
import React,{useSate,useEffect,useContext} from 'react'

import Adminheader from './Adminheader'

import Adminfooter from './Adminfooter'

import Adminsidebar from './Adminsidebar'

import Adminhome from './Adminhome'


const Admindashboard = () => { 


  return(

       <>

       <Adminheader/>

       <div className="sddfbvfd">
           <div className="row" style={{height:'600px'}}>

              <div className="col-md-3 bg-light">
                
                 <Adminsidebar/>


              </div>


               <div className="col-md-9">
                  
                <Adminhome/>

               </div>         
                 

            </div>
       </div>



       <Adminfooter/>

       
       
       </>

  	)



}




export default Admindashboard;
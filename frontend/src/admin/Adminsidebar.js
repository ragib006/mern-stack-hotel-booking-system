import React from 'react'

import {Link} from 'react-router-dom'

const Adminsidebar = () => {

return(


<>

       <div className="dzfsd ">

                 <ul className="list-group">
                  <Link to="/admin_all_user" style={{textDecoration:'none'}}><li className="list-group-item bg-light" style={{fontWeight:'bold'}}>All User</li></Link>

                  <Link to="/admin_all_hotel" style={{textDecoration:'none'}}><li className="list-group-item bg-light" style={{fontWeight:'bold'}}>All Hotel</li></Link>
        
                   <Link to="/admin_all_order" style={{textDecoration:'none'}}><li className="list-group-item bg-light" style={{fontWeight:'bold'}}>All Booking</li></Link>
                  
                  <Link to="/admin_all_admin" style={{textDecoration:'none'}}><li className="list-group-item bg-light" style={{fontWeight:'bold'}}>All Admin</li></Link>



  
                 </ul>


                 </div>



</>


	)




}


export default Adminsidebar;
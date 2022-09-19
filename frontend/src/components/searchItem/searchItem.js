import React from 'react'
import {Link} from 'react-router-dom'




const SearchItem = ({item}) => {






   
   return(


      <>



                            <div className="col-md-4" style={{marginBottom:'100px'}}>

                             <img style={{width:'240px',height:'240px'}} src={item.photos[0]}   class="img-thumbnail" alt="..."/>

                           </div>


                            <div className="col-md-8">

                                <div className="row">

                                   <div className="col-md-8">

                                      <p style={{fontWeight:'bold',fontSize:'18px',color:'blue'}}>{item.name}</p>

                                   </div>

                                      <div className="col-md-4">

                                      <span style={{fontWeight:'bold',fontSize:'18px',color:'green',display:'block'}}> Price : $ {item.chepestPrice}</span>


                                      <span style={{fontSize:'12px',fontWeight:'bold',color:'gray'}}>includes taxes and fees</span>
                                

                                   </div>

                                </div>






                               <p style={{fontWeight:'bold',fontSize:'16px'}}>Studio Apartment with Air Conditioning</p>

                               <span>Distance : </span>  <span>{item.distance}</span>

                               <p>
                               <span style={{fontSize:'16px'}}>Address : </span><span style={{fontSize:'16px'}}>{item.address}</span>

                              </p>


                          
                          
                             <p className="bg-success" style={{fontWeight:'bold',fontSize:'11px',width:'115px',padding:'2px 2px 2px 12px',color:'white',borderRadius:'5px'}}>Free airport taxi</p> 


                                <p>
                               <span style={{fontSize:'14px',fontWeight:'bold',color:'green'}}>Free Cancellation</span>      

                            
  

                                </p>


                                 <p>
                                 <span style={{fontSize:'14px',color:'green'}}>You can cancel later , so lock in the greate price today</span>     



                                  <span style={{marginLeft:'62px',fontSize:'12px',fontWeight:'bold',color:'gray'}}>

                                  
                                  <Link to={`/hotels/${item._id}`}>
                                  <button className="btn btn-info btn-sm" style={{color:'white'}}>See avalliability</button>
                                  </Link>


                                  </span>


                                </p>

                             </div>


                            

              

                    








{/*





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









*/}


             




















    





















      


     




     </>


   	)










}


export default SearchItem
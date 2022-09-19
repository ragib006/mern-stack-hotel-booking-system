import React,{useState,useEffect,useRef,useContext} from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import {useNavigate} from 'react-router-dom'

import {Link} from 'react-router-dom'
import {SearchContext} from "../../context/SearchContext"

import {AuthContext} from "../../context/AuthContext"

const Header = ({type}) => {




const {user,loading,error} = useContext(AuthContext)






const [openDate,setOpenDate] = useState(false)

const [openOptions,setOpenOptions] = useState(false)

const [destination,setDestination] = useState("")

const navigate = useNavigate()

const [options,setOptions] = useState({

        adult:1,
        children:0,
        room:1

})


const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  


//increase decrease   

const handleOption = (name,operation) => {


setOptions(prev => {

        return{

          ...prev,
          [name]:operation === "i" ? options[name]+1 : options[name]-1


        }



})




}





const {dispatch} = useContext(SearchContext);

//handleSearch

const handleSearch = () => {

dispatch({type:"NEW_SEARCH",payload:{destination,date,options}})

navigate("/hotels",{state:{destination,date,options}})


}



return(

   <>
        


       

<div className="main bg-info" style={{paddingBottom:'10px'}}>
  <div className="container">

     







<div className="title" style={{width:'100%'}}>
      <h3 style={{fontWeight:'bold',color:'blue'}}>A Lifetime of discount? It's Genius</h3>
      <p style={{fontSize:'20px',paddingBottom:'20px'}}>Get reward for your-unlock instant saving 10%</p>


      {user ? '' : (   
          
             <div className="but" style={{paddingBottom:'20px'}}>
        <Link to="/login" className="btn btn-outline-primary">Sign In</Link>


      </div>

        )}

   
   </div>




















{type !=="list" &&   












   <div className="ss" style={{width:'75%',margin:'10px auto',paddingBottom:'10px',borderRadius:'5px',border:'3px solid white'}}>

       <div className="ediv">
      
      <span style={{marginLeft:'20px'}}>
        <i className="fas fa-map-signs" style={{color:'black',paddingRight:'10px'}}></i>

      <input onChange={(e)=>setDestination(e.target.value)} style={{marginTop:'10px',borderRadius:'5px',border:'2px solid white',paddingLeft:'10px'}} type="text" className="form=control" placeholder="Where are you going ?"/>
      </span>

       <span style={{marginLeft:'65px'}} onClick={()=>setOpenDate(!openDate)}>
         <i className="far fa-calendar" style={{color:'black',paddingRight:'10px'}}></i>
       

           <span>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
      </span>

      { openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="data"
                    minDate={new Date()}
/>




      }


        
        <span style={{marginLeft:'65px'}} onClick={()=>setOpenOptions(!openOptions)}>
        <i className="fas fa-child" style={{color:'black',paddingRight:'10px'}}></i>

        <span>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
       
      </span>

      {

       openOptions && 
 
        <div className="op bg-light" style={{padding:'10px 10px 10px 10px'}}>
       
       <div className="fhf">
        <span style={{marginRight:'31px'}}>Adult :</span> 
        <button className="btn btn-success btn-sm" style={{marginRight:'10px'}} onClick={()=>handleOption("adult","d")} disabled={options.adult <= 1} > - </button>
        <span>{options.adult}</span>
        <button className="btn btn-success btn-sm" style={{marginLeft:'10px'}}  onClick={()=>handleOption("adult","i")} > + </button>
       </div>

        <div className="fhf" style={{marginTop:'5px'}}>
        <span style={{marginRight:'10px'}}>Children :</span> 
        <button className="btn btn-success btn-sm" style={{marginRight:'10px'}} onClick={()=>handleOption("children","d")} disabled={options.children <= 0}> - </button>
        <span>{options.children}</span>
        <button className="btn btn-success btn-sm" style={{marginLeft:'10px'}} onClick={()=>handleOption("children","i")} > + </button>
        </div>


          <div className="fhf" style={{marginTop:'5px'}} >
        <span style={{marginRight:'27px'}}>Room :</span> 
        <button className="btn btn-success btn-sm" style={{marginRight:'10px'}} onClick={()=>handleOption("room","d")} disabled={options.room <= 1}> - </button>
        <span>{options.room}</span>
        <button className="btn btn-success btn-sm" style={{marginLeft:'10px'}} onClick={()=>handleOption("room","i")} > + </button>
       </div>


        </div>

      }

          <span>
             <button  onClick={handleSearch} style={{marginTop:'-5px',marginLeft:'10px',marginLeft:'40px',color:'white'}} type="button" className="btn btn-outline-primary btn-sm">Search</button>
         </span>
      
        </div>

   </div>






































}






















  </div>



  </div>



   </>

	)







}

export default Header
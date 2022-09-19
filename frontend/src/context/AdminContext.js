import {createContext,useReducer,useEffect } from "react"





const INITIAL_STATE = {

 admin:JSON.parse(localStorage.getItem("admin")) || null,
 loading:false,
 error:null,

};





export const AdminContext = createContext(INITIAL_STATE)



const AdminReducer = (state,action) =>{

   switch(action.type){

      case "LOGIN_START":
      return{

           admin:null,
           loading:true,
           error:null,
      };
      
      case "LOGIN_SUCCESS":
      return{

           admin:action.payload,
           loading:false,
           error:null,
      };

      case "LOGIN_FAILURE":
      return{

           admin:null,
           loading:false,
           error:action.payload,
      };

       case "LOGOUT":
      return{

           admin:null,
           loading:false,
           error:null,
      };

      default:
      return state;


   }


};



export const AdminContextProvider = ({children}) =>{


    
    const [state,dispatch] = useReducer(AdminReducer,INITIAL_STATE);

useEffect(()=>{

localStorage.setItem("admin",JSON.stringify(state.admin))



},[state.admin])

    return(


      <AdminContext.Provider value={{admin:state.admin,loading:state.loading,error:state.error,dispatch}}>

           {children}

      </AdminContext.Provider>





      )







}
import {createContext,useReducer,useEffect } from "react"





//const INITIAL_STATE = {

 //   city:undefined,
 //   date:[],
 //   options:{
        
  //      adult:undefined,
  //      children:undefined,
  //      room:undefined,

  //  },

//};



const INITIAL_STATE = {

    city:undefined,
    date:JSON.parse(localStorage.getItem("date")) || [],
    options:JSON.parse(localStorage.getItem("options")) || {
        
        adult:undefined,
        children:undefined,
        room:undefined,

    },

};









export const SearchContext = createContext(INITIAL_STATE)



const SeachReducer = (state,action) =>{

   switch(action.type){

      case "NEW_SEARCH":
      return action.payload;


      case "RESET_SEARCH":
      return INITIAL_STATE;

      default:

      return state;


   }


};



export const SearchContextProvider = ({children}) =>{


    
    const [state,dispatch] = useReducer(SeachReducer,INITIAL_STATE);


useEffect(()=>{

localStorage.setItem("date",JSON.stringify(state.date))



},[state.date])





useEffect(()=>{

localStorage.setItem("options",JSON.stringify(state.options))



},[state.options])








    return(


      <SearchContext.Provider value={{city:state.city,date:state.date,options:state.options,dispatch}}>

           {children}

      </SearchContext.Provider>





    	)







}
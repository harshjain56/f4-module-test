import { FETCH_DATA,FETCH_SUCCESS,FETCH_FAILURE } from "./actionTypes";
import axios from "axios"



export const fecthData=()=>{
   return{
    type:FETCH_DATA
   }

}


export const fetchSuccess=(data)=>{
    return{
     type:FETCH_SUCCESS,
     payload:data
    }
 
 }

 export const fecthFailure=(err)=>{
    return{
     type:FETCH_FAILURE,
     payload:err
    }
 
 }


 export function fetchingData(){

   return async function(dispatch){
      dispatch(fecthData)
      try{
         let response= await axios.get("https://jsonplaceholder.typicode.com/posts")
         dispatch(fetchSuccess(response.data))
        }
        catch(error){
         dispatch(fecthFailure(error))
        }
      }
   
 }
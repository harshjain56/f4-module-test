import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { fetchingData } from "../redux/actions/fetchActions";
import {AiOutlineArrowRight} from "react-icons/ai"
import {useNavigate} from "react-router-dom"


function Home({setPost}){
    let {loading,data,error}=useSelector((state)=>state)
     let dispatch=useDispatch()
     let navigate=useNavigate()
    useEffect(()=>{
      dispatch(fetchingData())
    },[])




   

    return(
      <div className="gallery">
        <h2>Social Media For Travellers</h2>
       <input type="text"  placeholder="Search here"/>
       <div className="gallery-display">
           {
            data.map((item ,index) =>(
              <div key={index}> 
                 <img src={`https://picsum.photos/200?random=${item.id}`}/>
                 <div>
                 <h3>{item.title.slice(0,10)}</h3>
                 <button onClick={()=>{setPost(item) ; navigate(`/item/:${item.id}`)}} ><AiOutlineArrowRight/></button>
                 </div>
                
                 <p>{item.body.slice(0)}</p>
                 
              </div>
             
            ))
           }
       </div>
      
         
      </div>
    

    )
}

export default Home
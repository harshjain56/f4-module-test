import React from "react";
import { AiFillHome } from "react-icons/ai";
import {IoNotifications} from "react-icons/io5"
import {BsFillBookmarkFill} from "react-icons/bs"
import {BiMale} from "react-icons/bi"
import {useNavigate} from "react-router-dom"
function Navbar(){
   let navigate=useNavigate()


    return(
        <div className="navbar">
           <h2>TravelMedia.in</h2>
           <div className="navigation-display">
            <AiFillHome onClick={()=>navigate("/")}/>
            <IoNotifications onClick={()=>navigate("/")} />
            <BsFillBookmarkFill onClick={()=>navigate("/")}/>
            <BiMale onClick={()=>navigate("/")}/>
           </div>

        </div>
    )
}

export default Navbar
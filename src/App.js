import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Gallery";
import Postdisplay from "./Components/Postdisplay";
import {Route,Routes} from "react-router-dom"
function App() {
   let [post,setPost]=useState("")
   

  return (
    <div className="App">
      <Navbar post={post} />
      <Routes>
         <Route path="/" element={<Home setPost={setPost} />}/>
         <Route path={`/item/:${post.id}`} element={<Postdisplay post={post} setPost={setPost}/>}/>
         

      </Routes>

    </div>
  );
}

export default App;

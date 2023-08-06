import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import {  useSelector } from "react-redux"

function Postdisplay({ post, setPost }) {
    let navigate = useNavigate()
    let { data } = useSelector((state) => state)
    let [toggle,setToggle]=useState(true)

    return (
        <div >
            {
                post && (
                    <div className="postdisplay">
                        <div className="upperdiv">
                            <button onClick={()=>navigate("/")}><AiOutlineArrowLeft/></button>
                            <h2>Post Number {post.id}</h2>
                        </div>

                        <div class="middlediv">
                            <img src={`https://picsum.photos/200?random=${post.id}`} />
                            <div>
                                 
                                 <div>
                                 <button onClick={()=>setToggle(true)}>Details</button>
                                <button onClick={()=>setToggle(false)}>User Details</button>

                                 </div>
                                 <h3>Image Title: {post.title}</h3>
                                 <h3>{toggle?("Image Details: "):("User Details: ")}{toggle?(post.body):(post.userId)}</h3>

                            </div>

                        </div>

                        <div className="lowerdiv">
                            <h2> More Posts</h2>
                            <div className="gallery-display">
                                {
                                    data.map((item, index) => (
                                        <div key={index}>
                                            <img src={`https://picsum.photos/200?random=${item.id}`} />
                                            <div>
                                                <h3>{item.title.slice(0, 10)}</h3>
                                                <button onClick={() => { setPost(item); navigate(`/item/:${item.id}`) }} ><AiOutlineArrowRight /></button>
                                            </div>

                                            <p>{item.body.slice(0)}</p>

                                        </div>

                                    ))
                                }
                            </div>
                        </div>

                    </div>
                )
            }

        </div>

    )

}

export default Postdisplay
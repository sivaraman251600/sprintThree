import axios from "axios";
import React,{ useState , useEffect } from "react";


export default function Axios() {

    const[posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]) 
    return (
        <div>
           <ul>
              {posts.map(post =>(<li key={post.id}>{post.body}</li>))}
               </ul> 
        </div>
    )
}
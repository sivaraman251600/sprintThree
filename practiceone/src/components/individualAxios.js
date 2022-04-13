import axios from "axios"
import React,{ useState , useEffect } from "react";


export default function IndividualAxios() {

    const[post,setPost] = useState({})
    const[id,setId] = useState(5)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id]) 
    return (
        <div>
            <input type='text' value={id} onChange={e=>setId(e.target.value)} />
            <p> <b>Body:</b> {`${post.body}`} </p>
           <p><b>Title:</b> {`${post.title}`}</p>
          {/* <ul>
              {posts.map(post =>(<li key={post.id}>{post.body}</li>))}
          </ul> */}
        </div>
    )
}

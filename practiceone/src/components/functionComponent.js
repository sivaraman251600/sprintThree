import React from 'react'
import { useState } from 'react'


function DemoOne(){

    const [name , setName] = useState('praveen')

    const ChangeHandler =()=>{
          setName('prashant')
    }

    return(
        <div>
            <p>This is an Function Component</p>
            <p>{name}</p>
            <button onClick={()=>ChangeHandler()}>Change Name</button>
            </div>
    )
}

export default DemoOne
import React from 'react';
import { useState } from 'react';
import './home.css'
import { ReactDialogBox } from 'react-dialogbox'


export function HomePage (){

    const [email , setEmail ] = useState({email:''})
    const [password , setPassword] = useState({pass : ''})

    const [open , setOpen] = useState({windowOpen:false});

   const LogIn = () =>{

      if(email.email === 'sivaraman@nttdata.com' && password.pass === 'siva123'){
          setOpen({
              ...open,windowOpen : true
          })
      }

      else{
          setOpen({
              ...open , windowOpen : open
          })
      }
   }

    return(
        <div>
            <label htmlFor={'email'}>EMAIL ID</label>
            <input type={'email'} id='email' value={email.email} onChange={(e)=>setEmail({...email , email : e.target.value})}/><br/><br/>
            <label htmlFor={'password'}>PASSWORD</label>
            <input type={'password'} id='password' value={password.pass} onChange={(e)=>setPassword({...password , pass : e.target.value})}/><br/><br/>
            <button onClick={()=>LogIn()}>LOG-IN</button>
        </div>
    )
}


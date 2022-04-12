import React from 'react';
import { useState } from 'react';
import './home.css'
import { LogInFailed } from '../pages/loginfailed';
import { LogInSuccess } from '../pages/loginsuccess';


export function HomePage (){

    const [email , setEmail ] = useState({email:''})
    const [password , setPassword] = useState({pass : ''})

    var login = () =>{
          if(email.email === 'sivaraman@nttdata.com' && password.pass === 'siva123'){
              return <LogInSuccess />
          }

          else{
              return <LogInFailed />
          }
    }

    return(
        <div>
            <label htmlFor={'email'}>EMAIL ID</label>
            <input type={'email'} id='email' value={email.email} onChange={(e)=>setEmail({...email , email : e.target.value})}/><br/><br/>
            <label htmlFor={'password'}>PASSWORD</label>
            <input type={'password'} id='password' value={password.pass} onChange={(e)=>setPassword({...password , pass : e.target.value})}/><br/><br/>
            <button onClick={()=>login()}>LOG-IN</button>
        </div>
    )
}


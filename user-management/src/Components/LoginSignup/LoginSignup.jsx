import React, { useState } from 'react'
import './LoginSignup.css'
import user from '../assets/person.png'
import email from '../assets/email.png'
import password from '../assets/password.png'

function LoginSignup() {

  const [action,setAction] =useState("Sign Up");
  return (
  <>
  <div className="container">
  <div className="header">
  <div className="text">{action}</div>
  <div className="underline"></div>

      <div className="inputs">
        {action ==="Login" ? <div></div>:<div className="input">
        <img src ={user} alt =""/>
        <input placeholder ="Name" type="text"/></div>}
        </div>
        
      <div className="inputs">
      <div className="input">
        <img src ={email} alt =""/>
        <input placeholder ="Email id"type ="email"/>
      </div>
      </div>
      <div className="inputs">
      <div className="input">
        <img src ={password} alt =""/>
        <input  placeholder ="Password" type ="password"/>
      </div>
      </div>
      <div className="forgot-password">Forgot Password ? <span>Click here</span></div>
      <div className="sunbmit-container">
         <div className={action==="Login" ?"Submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div> 
         <div className={action==="Sign Up" ?"Submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div> 
      </div>
  </div>
  </div>
 
</>
  )
}

export default LoginSignup





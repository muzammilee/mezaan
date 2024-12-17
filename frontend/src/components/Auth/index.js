import React, { useEffect, useState } from 'react';
import { Route, Routes,Link } from 'react-router-dom';
import { authHandler } from './Handling';
// import axios from 'axios';

// Imported components
import AuthForm from './AuthForm';
// import {signUpHandler} from "./Handling"

function Auth() {
  const [isMoved, setIsMoved] = useState(false);

  useEffect(()=>{
    setIsMoved(true)
    
    return ()=> setIsMoved(false)
  },[])
const signUpHandler = (data,path) =>{
  
}
let [Fname, Uname, mail, pass, verPass, otps, isBio, isQualified, isImage] = [true, true,true,true,true,true,true,true,true]

  return (
    <div>
      <div className="flex justify-center gap-5 ">
        <Link className='hover:text-red-500 visited:text-blue-500' to="/auth/SignUp">Sign Up</Link>
        <Link className='hover:text-red-500 visited:text-blue-500' to="/auth/SignIn">Sign In</Link>
        <Link className='hover:text-red-500 visited:text-blue-500' to="/auth/RecoverPassWord">Recover PassWord</Link>
        <Link className='hover:text-red-500 visited:text-blue-500' to="/auth/OTPverification">OTP Verification</Link>
        <Link className='hover:text-red-500 visited:text-blue-500' to="/auth/NewPassword">New Password</Link>
        </div>
        
        <output />
        <button onClick={() => setIsMoved(!isMoved)}>Toggle</button> 
      <Routes>
                                                                                  {/* [Fname, Uname, mail, pass, verPass, otps, isBio, isQualified, isImage] */}
        <Route path="SignUp" element={<AuthForm formName="Sign Up" needs={{route:"/auth/SignUp",nextRoute:"/auth/OTPverification"}} isMoved={isMoved} forms={[Fname, Uname, mail, pass, false, false, isBio, isQualified, isImage]} submitfunction={"signUpHandler"}/>} />
        <Route path="SignIn" element={<AuthForm formName="Sign In" needs={{route:"/clientLogin",nextRoute:"/"}} forms={[!Fname, Uname, mail, pass, !verPass, !otps]} submitClick={()=>alert()}/>} />
        <Route path="RecoverPassWord" element={<AuthForm formName="Submit" needs={{route:"/auth/recoverPassword",nextRoute:"/auth/OTPverification"}} head="Recover Password" forms={[!Fname, !Uname, mail, !pass]} submitClick={()=>alert("hi")}/>} />
        <Route path="OTPverification" element={<AuthForm formName="Submit" needs={{route:"/auth/otpVerification",nextRoute:"/NewPassword"}} head={"OTP Verification"} forms={[!Fname, !Uname, !mail, !pass, !verPass, otps]} submitClick={()=>alert("hi")}/>} />
        <Route path="NewPassword" element={<AuthForm formName="Submit" needs={{route:"/auth/newPassword",nextRoute:"/SignIn"}} head="New Password"  forms={[!Fname, !Uname, !mail, pass, verPass, !otps]} submitClick={()=>alert("hi")}/>} />
      </Routes>
    </div>
  );
}


export default Auth;

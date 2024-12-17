import React, { useState } from 'react';
import { useForm, useFormNew } from '../utility';
import { Link, useNavigate } from 'react-router-dom';
import { showSuccess, showToast } from '../utility';
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


const AuthForm = ({ forms , formName, head, className , needs }) => {


  let [Fname, Uname, mail, pass, verPass, otps, isBio, isQualified, isImage] = forms
  const isSignUp = formName !== "Sign Up";
  const isSignIn = formName !== "Sign In";
  let isMoved = false

  const [isDisabled, setIsDisabled] = useState(false);

  const navigate = useNavigate();

  const [value, handleChange] = useForm({
    name: "",
    email: "",
    username: "",
    password: "",
    verifyPassword: "",
    otp: "",
    qualification:"",
    bio:"",
    profileimage:null,
  });

  const { name, email, username, password, verifyPassword, otp  ,bio,qualification,profileimage } = value;

  
  const authHandler = (formData, route, nextPagePath, navigate) => {

    API.post(route, formData)
      .then((response) => {
        setIsDisabled(false)
        if(formName == "Sign In"){
          localStorage.setItem("user",formData.username)
          console.log(formData.username);
          
        }
        // showSuccess(response.data.message)
        navigate(nextPagePath);
      })
      .catch((error) => {
        setIsDisabled(false)
        if (error.response) {
          showToast(`${error.response.data.message || 'Something went wrong'}`);
          console.error('Response error:', error.response.data);
        } else if (error.request) {
          showToast('No response from server');
          console.error('Request error:', error.request);
        } else {
          showToast(`${error.message || 'An error occurred'}`);
          console.error('General error:', error.message);
        }

      });
};

 let submitClick = (e)=>{
  setIsDisabled(true)
  console.log("hi")
  e.preventDefault()
  // authHandler(value, needs.route, needs.nextPagePath, navigate)
  authHandler(value, needs.route, needs.nextRoute, navigate)
  }
  
  return (
    <div className={`h-svh w-[100%] md:w-[37%] max-w-screen-md box-border flexo pb-14 ${isMoved ? "transform active" : "transform"} ${className}`}>
      <div className="h-svh max-w-screen-md w-[400px] flex flex-col justify-center">
        <h1 className="text-3xl mb-10 font-semibold">{formName || head || "Welcome"}</h1>
        <form method="post" disabled className="gap-3 flex flex-col box-border" onSubmit={(e)=>submitClick(e)}>
          {Fname && (
            <div>
              <label htmlFor="name">Name</label><br />
              <input disabled={isDisabled}  type="text" name="name" onChange={handleChange} value={name} placeholder="Enter your name" />
            </div>
          )}
          {Uname && (
            <div>
              <label htmlFor="username">Username</label><br />
              <input disabled={isDisabled}  type="text" name="username" onChange={handleChange} value={username} placeholder="Enter your username" />
            </div>
          )}
          {mail && (
            <div>
              <label htmlFor="email">Email</label><br />
              <input disabled={isDisabled}  type="email" name="email" onChange={handleChange} value={email} placeholder="Enter your email" />
            </div>
          )}
          {pass && (
            <div>
              <label htmlFor="password">Password</label><br />
              <input disabled={isDisabled}  type="password" name="password" onChange={handleChange} value={password } placeholder="Enter your password" />
              {isSignIn && <Link to="/auth/RecoverPassWord" className="float-end text-xs underline">Forgot Password</Link>}
            </div>
          )}
          {verPass && (
            <div>
              <label htmlFor="verifyPassword">Verify Password</label><br />
              <input disabled={isDisabled}  type="password" name="verifyPassword" onChange={handleChange} value={verifyPassword} placeholder="Verify your password" />
            </div>
          )}
          {otps && (
            <div>
              <label htmlFor="otp">OTP</label><br />
              <input disabled={isDisabled}  type="text" name="otp" onChange={handleChange} value={otp} placeholder="Enter your OTP" />
            </div>
          )}
          {isBio && (
            <div>
              <label htmlFor="otp">bio</label><br />
              <input disabled={isDisabled}  type="text" name="bio" onChange={handleChange} value={bio} placeholder="Enter your profileimage" />
            </div>
          )}
          {isQualified && (
            <div>
              <label htmlFor="qualification">qualification</label><br />
              <input disabled={isDisabled}  type="text" name="qualification" onChange={handleChange} value={qualification} placeholder="Enter your profileimage" />
            </div>
          )}
          {isImage && (
            <div>
              <label htmlFor="otp">profileimage</label><br />
              <input disabled={isDisabled}  type="file" name="profileimage" onChange={handleChange} value={profileimage} placeholder="Enter your profileimage" />
            </div>
          )}

          <button type="submit" disabled={isDisabled} className="button p-2 bg-cyan-700 border-none mt-8 rounded-xl">{formName}</button>
        </form>
        <h1 className="mt-20 w-full text-xs inline-flex justify-center gap-1">
          {isSignIn ? "Have an account?" : isSignUp ? "Don't have an account?" : ""}
          <Link className="font-semibold" to={isSignIn ? "/auth/signIn" : isSignUp ? "/auth/SignUp" : ""}>
            {isSignIn ? "Sign In" : isSignUp ? "Sign Up" : ""}
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default AuthForm;

//This is a Amazon's Create Account Page 

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import messhoLogo from '../assets/meeshoLogo.svg'
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateAccount() {

  const navigate = useNavigate(); //Use useNavigate instead of useHistory to navigate between pages
  const auth = getAuth();
  const [clientName, setClientName] = useState("");
  //Email and password state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setrPassword] = useState("");

//Error Message state
const [errClientName, setErrClientName] = useState("");
const [errEmail, setErrEmail] = useState("");
const [errPassword, setErrPassword] = useState("");
const [errRPassword, setErrRPassword] = useState("");
const [firebaseErr, setFirebaseErr] = useState("");
//Loading State
const [loading, setLoading] = useState(false);

//Handle function start
  const handleName = (e) => {
    setClientName(e.target.value)
    setErrClientName("")
  }

  const handleEmail = (e) =>{
    setEmail(e.target.value)
    setErrEmail("")
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value)
    setErrPassword("")
  }
  const handleRePassword = (e) =>{
    setrPassword(e.target.value)
    setErrRPassword("")
  }

  //Email Validation
  const emailValidation = (email)=>{
  return String(email).match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  }

  const handleRegistration = (e)=>{
    e.preventDefault()
 //Firebase Error message
    if(!clientName){
      setErrClientName("Enter your name")
    }
    if(!email){
      setErrEmail("Enter your email")
      setFirebaseErr("")
    }else{
      if(!emailValidation(email)){  //Email Validation check
        setErrEmail("Enter a valid email")
      }
    }
    if(!password){
      setErrPassword("Enter password")
    }else{
      if(password.length < 6){    //Check if password aleast 6 characters long
        setErrPassword("Password must be at least 6 characters");
      }
    }
    if(!rPassword){
      setErrRPassword("Confirm your password")
    }else{
      if(rPassword !== password){  //Check if re-enterd password match the password
        setErrRPassword("Password does not matched")
      }
    }

    if(clientName && email && emailValidation(email) && password && password.length>=6 && rPassword && rPassword === password){
    setLoading(true)  
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    updateProfile(auth.currentUser,{
      displayName:clientName
  
    })
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    
    setLoading(false)
    toast.success("Account Created Succesfully"); //Toast Message for successful Resgistration
    setTimeout(()=>{
      navigate("/Login")  //Navigate to Login page after succesful registration
    },3000)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode.includes("auth/email-already-in-use")){  //Firebase Authentication Error 
      setFirebaseErr("Email already in use, Try another email.")
    }
     });
       setClientName("");
       setEmail("");
       setPassword("");
       setrPassword("");
       setErrRPassword("");
       setFirebaseErr("")
      } 
  }

  return (
    <div>
       <div className='w-full'>
      {/* -------------Amazon Logo ----------*/}
      <div className='w-full  '>
        <form className="w-[350px] mx-auto  flex flex-col items-center">
          <img className='w-48 py-6 '
        src={messhoLogo}
        alt="meeshoLogo" />
        <div className='w-full border bg-gray-100 rounded-md border-zinc-400 p-6'>
          {/*------ Sign In Form -------*/}
        <h1 className='text-3xl font-semibold mb-4 '>Create Account</h1>
        
        {/*-------Your Name-------- */}
        <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Your Name</p>
                <input onChange={handleName} 
                value={clientName}
                className='w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-[#E47911] ' type="text" />
                {
                  errClientName && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errClientName}</p>
                  )
                }
            </div>

                       {/*--------Email-------*/}
        <div className='flex flex-col gap-2'>
          <p className='text-sm font-medium'>Email or Mobile Number</p>
          <input 
          onChange={handleEmail}
          value={email}
          className='w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-[#E47911] '
          type="email"  />
           {
            errEmail && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errEmail}</p>
                  )
                }
                {
                  firebaseErr && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{firebaseErr}</p>
                  )
                }
        </div>
        {/* --------Password-------- */}
        <div className='flex flex-col gap-2'>
          <p className='text-sm font-medium'>Password</p>
          <input 
          onChange={handlePassword}
          value={password}
          className='w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-[#E47911] '
          type="password"  />
          {
                  errPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errPassword}</p>
                  )
                }
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm font-medium'>Re-enter Password</p>
          <input 
          onChange={handleRePassword}
          value={rPassword}
          className='w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-[#E47911] '
          type="password"  />
          {
                  errRPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errRPassword}</p>
                  )
                }
        </div>
        {/*----------Sign In button--------*/}

        <button onClick={handleRegistration}
        className='w-full py-2 text-sm xl:text-lg text-white rounded-md bg-gradient-to-t from-[#b727ab] to-[#98208e] hover:bg-gradient-to-b border border-zinc-400 active:border-[#98208e] font-semibold'>Continue</button>
         {
          loading && (
            <div className='flex justify-center'>
              <RotatingLines
                      visible={true}
                      height="96"
                      width="50"
                      strokeColor="#f3a847"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      />
            </div>
          )}
         
          </div>
          <p className='text-sm text-black leading-4 mt-2'>By Continuing, you agree to Meesho's{' '}</p>
          <span className='text-sm text-blue-600'>Condition of use</span> and{' '}
           <span className='text-sm text-blue-600'>Privace Notice</span>
           <p className='text-sm '>Already have an account?{'  '}
           <Link to={"/Login"}>
           <span className='text-sm text-blue-600 hover:text-orange-600 hover:underline
           underline-offset-1 cursor-pointer'>Sign In</span>
           </Link>
           </p>
           </div>
           <ToastContainer/>
      </form>
      </div>
      </div>
    </div>
  )
}
export default CreateAccount

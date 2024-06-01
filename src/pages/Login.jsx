//Amazon Login Page

import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
// import messhoLogo from '../assets/meeshoLogo.svg'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/meeshoSlice'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginimg from '../assets/carousalImages/loginimg.webp'

function Register() {
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Error State for email and password
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPassErr, setUserPassErr] = useState("");


  const handleEmail = (e) =>{
    setEmail(e.target.value)
    setErrEmail("")
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value)
    setErrPassword("")
  }
//Required Submit button Error message to enter the email and password
  const handleSignIn=(e)=>{
    e.preventDefault()
     if(!email){
      setErrEmail("Enter your email")
    }
    if(!password){
      setErrPassword("Enter password")
    }

    if(email && password){
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          dispatch(setUserInfo({
            _id:user.uid,
            userName:user.displayName,
            email:user.email
          }))

        // toast success message when login succesfully
          toast.success("Login Succesfully")
          //If login successful navigate to home page
          setTimeout(()=>{
            navigate("/")
          },2000)
        })
        .catch((error) => {
          const errorCode = error.code;
         // Firebase Error message for envalid email and password
          if(errorCode.includes("auth/invalid-credential")){
            setUserEmailErr("Invalid Email")
          }
          if(errorCode.includes("auth/invalid-credential")){
            setUserPassErr("Wrong Password! Try Again")
          }
        });
      
      setEmail("");
      setPassword("");

    }
  }
  return (
    <div className='w-full '>
      {/* Amazon Logo */}
      <div className='w-full  '>
        <form className="w-[350px] mx-auto  my-3 py-3  flex flex-col items-center">
          <Link to={"/"}>
          
          <img className='w-full h-auto py-0 rounded-t-xl'
        src={loginimg}
        alt="messhoLogo" />
          </Link>
        <div className='w-full bg-gray-100 border  border-zinc-400 p-6'>
          {/* Sign In Form */}
        <h1 className='text-4xl font-semibold mb-4 ml-24'>Sign In</h1>
        
        {/* Email or mobile number */}

        <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <p className='text-base font-medium'>Email or Mobile Number</p>
          <input
          onChange={handleEmail}
          value={email}
          className='w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#98208e] focus-within:shadow-[#994f93] '
          type="email"  />
           {
                  errEmail && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errEmail}</p>
                  )
                }
                 {
                  userEmailErr && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{userEmailErr}</p>
                  )
                }
        </div>
        {/* Password */}
        <div className='flex flex-col gap-2'>
          <p className='text-base font-medium'>Password</p>
          <input
          onChange={handlePassword}
          value={password}
          className='w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#98208e] focus-within:shadow-[#994f93] '
          type="password"  />
           {
                  errPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errPassword}</p>
                  )
                }
                 {
                  userPassErr && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{userPassErr}</p>
                  )
                }
        </div>
                {/* Sign In Button */}
        <button 
        onClick={handleSignIn}
        className='w-full py-1 mt-2 text-lg text-white rounded-md bg-black hover:bg-[#98208e]  active:border-[#98208e] font-semibold'>Sign In</button>
        
          <ToastContainer/>

      <p className='w-full text-sm text-gray-700 font-semibold mt-1 flex items-center'>
        <span className='w-full text-center'>Don't have account?</span>
       
      </p>

         {/* Create your amazon account button */}
      <Link className="w-full" to="/Register">
      <button 
      className='w-full mt-2 text-lg py-1.5 font-semibold rounded-md  border bg-white hover:text-white hover:bg-black border-black'>Register</button>
      </Link>
          </div>
      </div>
      </form>
      </div>
       </div>
  )
}

export default Register

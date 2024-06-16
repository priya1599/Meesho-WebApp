import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { darkLogo } from "../assets/index";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  // Firebase Error

  // Loading State start here


  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
 
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
    
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    }
    if (email && password) {
      console.log(email,password)
      setEmail("")
      setPassword("")
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">     
          <form className="w-[350px] mx-auto flex flex-col items-center">
            <Link to="/">
              <img className="w-32" src={darkLogo} alt="darkLogo" />
            </Link>
            <div className="w-full border border-zinc-200 p-6">
              <h2 className="font-titleFont text-3xl font-medium mb-4">
                Sign in
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">
                    Email or mobile phone number
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    type="email"
                  />
                  {errEmail && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errEmail}
                    </p>
                  )}
                 
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Password</p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    type="password"
                  />
                  {errPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errPassword}
                    </p>
                  )}
                 
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                >
                  Continue
                </button>
               
              </div>
              <p className="text-xs text-black leading-4 mt-4">
                By Continuing, you agree to Meesho's{" "}
                <span className="text-blue-600">Conditions of Use </span>and{" "}
                <span className="text-blue-600">Privace Notice.</span>
              </p>
              <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
               {" "}
                <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                  Need help?
                </span>
              </p>
            </div>
            <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
              <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
              <span className="w-1/3 text-center">New to Messho?</span>
              <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            </p>
            <Link className="w-full" to="/registration">
              <button className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
                Create your Meesho account
              </button>
            </Link>
          </form>
      
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
        </div>
        <p className="text-xs text-gray-600">
          © 1996-2023, ReactBd.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Signin;


// //Amazon Login Page

// import React, { useState } from 'react';
// import { Link,  useNavigate } from 'react-router-dom';
// import messhoLogo from '../assets/meeshoLogo.svg'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from 'react-redux';
// import { setUserInfo } from '../redux/meeshoSlice'
// import { toast } from "react-toastify";

// import loginimg from '../assets/carousalImages/loginimg.webp'

// function Register() {
// // const { register, handleSubmit, formState: { errors } } = useForm();
// //   const [error, setError] = useState(null); // State to manage errors
// //   const [loading, setLoading] = useState(false); // State to manage loading state
// //   const navigate = useNavigate(); // React Router's hook for navigation

// //   const handleSignIn = async (data) => {
// //     setLoading(true); // Set loading to true while making the request
// //     try {
// //       const response = await axios.post('https://messho-backend.onrender.com/api/user/login', {
// //         email: data.email,
// //         password: data.password
// //       });

// //       if (response.status === 200) {
// //         const { token } = response.data; // Extract token from the response
// //         Cookies.set('authToken', token, { expires: 7, secure: true }); // Set token as cookie, expires in 7 days

// //         navigate('/'); // Navigate to the home page
// //         toast.success('User logged in successfully',toastConfig); // Show success toast
// //       } else {
// //         throw new Error('Login failed'); // Throw error if response status is not 200
// //       }
// //     } catch (error) {
// //       setError(error.message); // Set error state
// //       toast.error(error.message,toastConfig); // Show error toast
// //     } finally {
// //       setLoading(false); // Set loading to false after request completes
// //     }
// //   };
  
//   const navigate = useNavigate();
//   const auth = getAuth();
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   //Error State for email and password
//   const [errEmail, setErrEmail] = useState("");
//   const [errPassword, setErrPassword] = useState("");
//   const [userEmailErr, setUserEmailErr] = useState("");
//   const [userPassErr, setUserPassErr] = useState("");


//   const handleEmail = (e) =>{
//     setEmail(e.target.value)
//     setErrEmail("")
//   }
//   const handlePassword = (e) =>{
//     setPassword(e.target.value)
//     setErrPassword("")
//   }
// //Required Submit button Error message to enter the email and password
//   const handleSignIn=(e)=>{
//     e.preventDefault()
//      if(!email){
//       setErrEmail("Enter your email")
//     }
//     if(!password){
//       setErrPassword("Enter password")
//     }

//     if(email && password){
//       signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           // Signed in 
//           const user = userCredential.user;
//           dispatch(setUserInfo({
//             _id:user.uid,
//             userName:user.displayName,
//             email:user.email
//           }))

//         // toast success message when login succesfully
//           toast.success("Login Succesfully")
//           //If login successful navigate to home page
//           setTimeout(()=>{
//             navigate("/")
//           },2000)
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//          // Firebase Error message for envalid email and password
//           if(errorCode.includes("auth/invalid-credential")){
//             setUserEmailErr("Invalid Email")
//           }
//           if(errorCode.includes("auth/invalid-credential")){
//             setUserPassErr("Wrong Password! Try Again")
//           }
//         });
      
//       setEmail("");
//       setPassword("");

//     }
//   }
//   return (
//     <div className='w-full '>
//       {/* Amazon Logo */}
//       <div className='w-full  '>
//         <form 
          
//           className="w-[350px] mx-auto  my-3 py-3  flex flex-col items-center">
//           <Link to={"/"}>
          
//           <img className='w-full h-auto py-0 rounded-t-xl'
//         src={loginimg}
//         alt="messhoLogo" />
//           </Link>
//         <div className='w-full bg-gray-100 border  border-zinc-400 p-6'>
//           {/* Sign In Form */}
//         <h1 className='text-4xl font-semibold mb-4 ml-24'>Sign In</h1>
        
//         {/* Email or mobile number */}

//         <div className='flex flex-col gap-3'>
//         <div className='flex flex-col gap-2'>
//           <p className='text-base font-medium'>Email or Mobile Number</p>
//           <input
//          onChange={handleEmail}
//                     value={email}
// {/*           {...register('email', { required: true })} */}
//           className='w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#98208e] focus-within:shadow-[#994f93] '
//           type="email"  />
          
//            {
//                   errEmail && (
//                     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errEmail}</p>
//                   )
//                 }
//                  {
//                   userEmailErr && (
//                     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{userEmailErr}</p>
//                   )
//                 }
//         </div>
//         {/* Password */}
//         <div className='flex flex-col gap-2'>
//           <p className='text-base font-medium'>Password</p>
//           <input
//          onChange={handlePassword}
//                     value={password}
//           className='w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#98208e] focus-within:shadow-[#994f93] '
//           type="password"
// {/*               {...register('password', { required: true })}/> */}
// {/*                     {errors.password && <p className="text-red-500">Password is required</p>}  */}

//            {
//                   errPassword && (
//                     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errPassword}</p>
//                   )
//                 }
//                  {
//                   userPassErr && (
//                     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{userPassErr}</p>
//                   )
//                 }
//         </div>
//                 {/* Sign In Button */}
//         <button 
//           type = "submit"
//       onClick={handleLogin}
//         className='w-full py-1 mt-2 text-lg text-white rounded-md bg-black hover:bg-[#98208e]  active:border-[#98208e] font-semibold'>{loading ? 'Logging in...' : 'Login'}</button>
        
          

//       <p className='w-full text-sm text-gray-700 font-semibold mt-1 flex items-center'>
//         <span className='w-full text-center'>Don't have account?</span>
       
//       </p>

//          {/* Create your amazon account button */}
//       <Link className="w-full" to="/Register">
//       <button 
//       className='w-full mt-2 text-lg py-1.5 font-semibold rounded-md  border bg-white hover:text-white hover:bg-black border-black'>Register</button>
//       </Link>
//           </div>
//       </div>
//       </form>
//       </div>
//        </div>
//   )
// }

// export default Register

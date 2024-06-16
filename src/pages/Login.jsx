//Amazon Login Page

import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
// import messhoLogo from '../assets/meeshoLogo.svg'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from 'react-redux';
// import { setUserInfo } from '../redux/meeshoSlice'
import { toast } from "react-toastify";

import loginimg from '../assets/carousalImages/loginimg.webp'
const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark"
};
function Register() {
const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState(null); // State to manage errors
  const [loading, setLoading] = useState(false); // State to manage loading state
  const navigate = useNavigate(); // React Router's hook for navigation

  const handleSignIn = async (data) => {
    setLoading(true); // Set loading to true while making the request
    try {
      const response = await axios.post('https://messho-backend.onrender.com/api/user/login', {
        email: data.email,
        password: data.password
      });

      if (response.status === 200) {
        const { token } = response.data; // Extract token from the response
        Cookies.set('authToken', token, { expires: 7, secure: true }); // Set token as cookie, expires in 7 days

        navigate('/'); // Navigate to the home page
        toast.success('User logged in successfully',toastConfig); // Show success toast
      } else {
        throw new Error('Login failed'); // Throw error if response status is not 200
      }
    } catch (error) {
      setError(error.message); // Set error state
      toast.error(error.message,toastConfig); // Show error toast
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };
  
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
  return (
    <div className='w-full '>
      {/* Amazon Logo */}
      <div className='w-full  '>
        <form 
          onSubmit={handleSubmit(handleSignIn)}
          className="w-[350px] mx-auto  my-3 py-3  flex flex-col items-center">
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
         
          {...register('email', { required: true })}
          className='w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#98208e] focus-within:shadow-[#994f93] '
          type="email"  />
          {errors.email && <p className="text-red-500">Email is required</p>}
{/*            {
                  errEmail && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errEmail}</p>
                  )
                }
                 {
                  userEmailErr && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{userEmailErr}</p>
                  )
                } */}
        </div>
        {/* Password */}
        <div className='flex flex-col gap-2'>
          <p className='text-base font-medium'>Password</p>
          <input
         
          className='w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#98208e] focus-within:shadow-[#994f93] '
          type="password"
              {...register('password', { required: true })}/>
                    {errors.password && <p className="text-red-500">Password is required</p>} 

{/*            {
                  errPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errPassword}</p>
                  )
                }
                 {
                  userPassErr && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{userPassErr}</p>
                  )
                } */}
        </div>
                {/* Sign In Button */}
        <button 
          type = "submit"
       disabled={loading}
        className='w-full py-1 mt-2 text-lg text-white rounded-md bg-black hover:bg-[#98208e]  active:border-[#98208e] font-semibold'>{loading ? 'Logging in...' : 'Login'}</button>
        
          

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

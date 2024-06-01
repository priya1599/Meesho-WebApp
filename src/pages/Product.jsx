//This product page shows all Products Details with Image, Title, Description, price and AddToCart button.

import React from 'react'
import { useLoaderData } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import { BsCart2 } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/meeshoSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Product() {
  //Fetching Data
    const data = useLoaderData()
    const productsData = data.data
    const dispatch = useDispatch();

  return (
    <>
    <Navbar/>
    <div 
    className='mx-auto m-auto  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4 py-14'>
    {
        productsData.map((item)=>(
            <div key={item.id} 
     className='bg-white h-auto border-[1.5px] rounded-md hover:border-transparent  hover:shadow-testShadow  border-gray-400 py-6 z-30  shadow-none   transition-all duration-200 relative flex flex-col gap-4'>
       {/* ------Product Image------- */}
      <div className="w-full h-auto flex items-center justify-center relative group ">
      <img className='w-52 h-64 object-contain '
      src={item.image} alt="Product " />
      {/*-------- product Category------- */}
       <p className='text-sm capitalize italic -top-2 right-2 absolute text-gray-600'>{item.category}</p>
      </div>
      
      {/* --------Product Title-------- */}
      <div className='px-4 bg-white flex flex-col gap-1 z-10'>
      <h2 className='font-titleFont tracking-wide text-xl text-[#131921] font-extrabold'>
       {item.title.substring(0, 20)}</h2>
           {/* ---------Product Price ---------- */}
     <p className='text-lg text-gray-800 font-bold'>
       ₹{item.price}</p>
         {/* ---------Product Description ---------- */}
         <div>
         <p className=" font-bodyFont text-lg">{item.description.substring(0, 100)}</p>
         <div className="text-black  flex">
           <StarIcon />
           <StarIcon />
           <StarIcon />
           <StarIcon />
           <StarIcon />
         </div>
         <div className='items-center justify-center my-3 flex text-lg '>
            <button 
             onClick={() =>
              dispatch(
                addToCart({
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  price: item.price,
                  category: item.category,
                  image: item.image,
                  quantity: 1,
                })
            )
        }
        className=' bg-black text-white hover:bg-[#98208e] px-6 py-2 font-bold rounded-md flex items-center gap-2'>
                <BsCart2 className='inline-flex '/>
                AddToCart</button>
         </div>
       </div>
        </div>
        </div>
   ))
} 
</div>
<Footer/>
</>
  )
}

export default Product

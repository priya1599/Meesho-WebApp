
import React from 'react';
import img1 from '../assets/img1.jpg';
import { FaShoppingBag } from "react-icons/fa";
import image1 from '../assets/productCategory/womenCategory.jpg';
import image2 from '../assets/productCategory/womenfashio.jpg';
import image3 from '../assets/productCategory/menfashion.jpg';
import image4 from '../assets/productCategory/jewellery.jpg';
import image5 from '../assets/productCategory/electronics.jpg';
import { Link } from 'react-router-dom';

function Banner() {
  
  return (
    <>
    <div className='bg-gray-200 py-14 xl:px-28 px-4  mt-6 xl:mx-40  rounded-xl '>
        <div className='md:py-2  flex flex-col-reverse md:flex-row justify-between  items-center gap-20 '>
            <div className='xl:w-1/2 '>
               <h2 className='xl:text-5xl text-2xl font-normal  mb-5'> Collection</h2> 
               <p className='xl:text-xl text-lg mb-7'>You can explore and shop many different collection from various brands here.</p>
              <Link to={"/Product"}> <button className='bg-black text-white hover:bg-[#98208e] px-6 py-2 font-semibold rounded-sm flex items-center gap-2'>
               <FaShoppingBag className='inline-flex'/>
               Shop Now</button></Link>
            </div>
            <div className='xl:w-1/2 '>
                <img className='rounded-tl-3xl rounded-br-3xl'
                src={img1} alt="" />
            </div>
        </div>
      
    </div>
    {/* Category Grid */}

    <div>
    <p className='font-bold uppercase xl:text-lg text-center items-center justify-center flex rounded-lg bg-black text-white md:p-3 py-1 mx-6 md:mx-28 my-4'>Explore New and Popular Styles</p>
    <div className='mt-8 flex flex-col xl:flex-row items-center justify-center gap-4'>
    <div className=''>
       <Link to={"/Product"}> <img className='xl:h-96 h-60 hover:scale-105 transition-all duration-200' src={image1} alt="" /></Link> 
    </div>
    <div className='xl:w-1/2'>
    <div className='grid grid-cols-2 xl:gap-3 gap-3 '>
        <Link to={"/Product"}><img className='xl:h-72 xl:w-72 h-40 w-40 hover:scale-105 transition-all duration-200' src={image2} alt="Womens Category" /> </Link>
       <Link to={"/Product"}> <img className='xl:h-72 xl:w-72  h-40 w-40 xl:-ml-16 hover:scale-105 transition-all duration-200' src={image3} alt="Mens Category" /> </Link> 
        <Link to={"/Product"}> <img className='xl:h-72 xl:w-72  h-40 w-40 hover:scale-105 transition-all duration-200' src={image4} alt="Jewellery" /></Link>
       <Link to={"/Product"}><img className='xl:h-72 xl:w-72  h-40 w-40 xl:-ml-16 ml-2 hover:scale-105 transition-all duration-200' src={image5} alt="Electronics" /> </Link> 

    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Banner

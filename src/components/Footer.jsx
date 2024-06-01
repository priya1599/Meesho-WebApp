//This a footer page of Meesho Webapp

import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between xl:px-4 py-1">
        <div className="xl:text-center xl:ml-14 ml-0 md:text-left mb-4 md:mb-0">
          <h2 className="text-lg xl:text-3xl mb-4 font-bold">Shop Non-Stop on Meesho</h2>
          <p className="text-sm xl:text-lg">Trusted by more than 1 Crore Indians</p>
          <p className='text-sm xl:text-lg'>Cash on Delivery | Free Delivery</p>
        </div>
        <div className='text-base hidden sm:ml-6 sm:block'>
          <p className='hover:underline cursor-pointer '>Careers</p>
          <p className='hover:underline cursor-pointer mt-1'>Beacome a Supplyer</p>
          <p className='hover:underline cursor-pointer mt-1'>Hall of Frame</p>
          <p className='hover:underline cursor-pointer mt-1'>Sitemap</p>
        </div>
        <div className=' hidden sm:ml-6 sm:block'>
          <p className='hover:underline cursor-pointer'>Legal and Policies</p>
          <p className='hover:underline cursor-pointer mt-1'>Meesho Tech Blog</p>
          <p className='hover:underline cursor-pointer mt-1'>Notices and Return</p>
        </div>
       
          <div className=" mr-14 ">
            <span><Link to={'/'}> <p className="hover:text-white hover:underline">Home</p></Link></span>
            <p className="hover:text-white hover:underline mt-1">Shop</p>
            <p className="hover:text-white hover:underline mt-1">About Us</p>
            <p className="hover:text-white hover:underline mt-1">Contact Us</p>
          </div>
        </div>
          <div className='flex items-center justify-center mt-8 '>
          <p className="font-semibold text-sm xl:text-lg text-[#DDD] leading-3">
            © 2015-2024, Meesho.com, Inc. or its affiliates
          </p>
        </div>
      
    </footer>
  )
}

export default Footer

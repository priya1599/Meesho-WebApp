//Header of the Meesho app which contains different product categories

import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  
  return (
    <div className='w-full bg-white'>
      {/* Different Product by Categories */}
      <div className='border-t-2 h-14 border-[#cecede] rounded-sm'>
            <div className='flex item-center cursor-pointer justify-center gap-2 xl:gap-14 mt-3 '>
            <div className='w-0.5 h-8 font bg-[#cecede] rounded-sm'></div>

              <Link to={"/Product"}><span className='font-base text-base xl:text-lg  hover:text-[#98208e] hover:border-b-2 hover:border-[#98208e]'> Women</span></Link>
              <div className='w-0.5 h-8 bg-[#cecede] rounded-sm'></div>

              <Link to={"/Product"}><span className='font-base text-base xl:text-lg hover:text-[#98208e] hover:border-b-2 hover:border-[#98208e]'>Men</span></Link>
            <div className='w-0.5 h-8 bg-[#cecede] rounded-sm'></div>

            <Link to={"/Product"}><span className='font-base text-base xl:text-lg hover:text-[#98208e] hover:border-b-2 hover:border-[#98208e]'>Electronics</span></Link>
            <div className='w-0.5 h-8 bg-[#cecede] rounded-sm'></div>

            <Link to={"/Product"}><span className='font-base text-base xl:text-lg hover:text-[#98208e] hover:border-b-2 hover:border-[#98208e]'>Jewellery</span></Link>
            
            <div className='w-0.5 h-8 bg-[#cecede] rounded-sm hover:text-[#98208e] hover:border-b-2 hover:border-[#98208e]'></div>
            
            <Link to={"/Product"}><span className='font-base text-base xl:text-lg hover:text-[#98208e] hover:border-b-2 hover:border-[#98208e]'>Furniture</span></Link>
            <div className='w-0.5 h-8 bg-[#cecede] rounded-sm'></div>
             </div>
        </div>
        <div className='border-t-2 border-[#cecede] rounded-sm'></div>
    </div>
  )
}

export default Header

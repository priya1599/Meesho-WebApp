//This is a Navigation bar of meesho webapp which has meesho logo, Search Bar , Download app, Profile, and AddTOCart  

import React, { useState } from 'react'
import messhoLogo from '../assets/meeshoLogo.svg'
import { CiSearch } from "react-icons/ci";
import { TfiMobile } from "react-icons/tfi";
import { BsCart2 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Header from './Header';
import playstore from '../assets/playstore-icon-big.png'
import appstore from '../assets/appstore-icon-big.png'
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Navbar() {
  const products = useSelector((state) => state.meeshoReducer.products);
  const [isOpen, setIsOpen] = useState(false);
  const data = useLoaderData();
  const productsData = data.data
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [toggle, setToggle] = useState(false)
const toggleButtton = () =>{
  setToggle(!toggle);
}

const handleSearch = (e) => {  //Search Handle
  const query = e.target.value.toLowerCase();
  setSearchQuery(query);

  if (query) {
    const filtered = productsData.filter(item =>
      item.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  } else {
    setFilteredProducts([]);
  }
};

  return (
    <>
    <nav className="bg-white h-20 sticky top-0 z-50">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex item-center justify-between h-16">
        <div className="flex">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center ">
            <Link to={"/"}><img className="hidden lg:block h-10 w-40 ml-12 " src={messhoLogo} alt="Meesho" />
            </Link>
          </div>

          {/* Search Bar */}

          <div className='relative shrink h-10 flex items-center justify-center mt-3 xl:ml-12 ml-3 border border-gray-500 rounded-md '>
            <CiSearch className='absoute  ml-3 w-10 h-7 text-left text-gray-500 '/>
            <input className='xl:w-96 lg:w-10 h-6  text-base items-center justify-center flex mt border-none outline-none'
             type="text"
             placeholder='Try Saree, Kurti or Search by Product Code' 
             value={searchQuery}
            onChange={handleSearch}
             />
              {filteredProducts.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white border border-amazon_blue text-black z-50">
              <ul>
                {filteredProducts.map((item) => (
                  <li key={item.id} className="p-2 hover:bg-gray-200">
                    <Link to={`/product/${item.id}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
           </div>
        </div>

        {/* Right side of the navigation bar */}
        <div className='relative   flex items-center justify-between mx-8'>
            <div className='hidden sm:ml-6 sm:block  '>
            <div className=' flex space-x-4 items-center justify-center mt-3 '>

              {/* Download App */}
            <div className='flex hover:text-[#98208e] cursor-pointer item-center justify-center  hover:border-b-2 hover:border-[#98208e]'>

            <TfiMobile className='mr-1 text-lg mt-1  '/>
            <button className='text-lg ' onClick={toggleDropdown}>Download App</button>

           {isOpen &&(
            <div>

            <div className="absolute item-center justify-center top-12 flex flex-col z-10 left-0 mt-1 w-52 bg-white border border-gray-400 rounded-md shadow-lg">
              <div className='item-center justify-center py-3 px-2 '>
                <p className='text-black font-semibold text-lg items-center justify-center py-2 ml-10'>DownLoad from</p>
                {/* PlayStore Link to Meesho App Download */}

               <Link to={"https://app.meesho.com/2yoV?pid=pow_website&c=pow&af_dp=supply%3A%2F%2Fopen&af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.meesho.supply"} target='_blank'>
               <img 
              className='w-40 ml-4 py-3'
              src={playstore} alt="PlayStore"  />
               </Link>

               {/* PlayStore Link to Meesho App Download */}

              <Link to={"https://apps.apple.com/us/app/meesho/id1457958492"} target='_blank'>
              <img  className='w-40 ml-4 py-3 '
              src={appstore} alt="AppStore"  />
              </Link>
              </div>
            </div>
            </div>
           )}
            </div>
            <div className='w-0.5 h-10 bg-[#cecede] rounded-sm'></div>
            <span className='text-lg '>Become a Supplier </span>
            <div className='w-0.5 h-10 bg-[#cecede] rounded-sm'></div>
            <span className='text-lg'>Newsroom</span>
            <div className='w-0.5 h-10 bg-[#cecede] rounded-sm'></div>
            </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='flex mt-3 xl:ml-2 ml-0 xl:gap-7 gap-2 '>
                    {/* Profile */}
                <div className='items-center xl:ml-8 ml-0 cursor-pointer hover:text-[#98208e] hover:border-b-2  hover:border-[#98208e]'>
                  <IoPersonOutline className='ml-3 text-lg' />
                  <button className='text-lg ' onClick={toggleButtton}>Profile</button>
                  {/* DropDown List for Profile which has signin button */}
                  {
                    toggle && (
                      <div>
                         <div className="absolute bg-white border border-gray-400 lg:w-56 z-10 w-44  right-0  items-center justify-center  flex flex-col rounded-md shadow-lg">
              <div className='items-center justify-center py-3 px-2 '>
                <p className='lg:text-xl text-sm text-black font-semibold'>Hello User</p>
                <p className='lg:text-sm text-xs text-black mt-1'>To access your meesho account</p>
                <div className='items-center justify-center  py-3 '>
                  <Link to={"/Login"}>
                  <button className='bg-[#98208e] text-white w-full h-full py-2 border rounded-md xl:text-xl xl:font-semibold font-medium text-base'>Sign Up</button>
                  </Link>
                  <div className='border-t-2 border-gray-400  mt-3'></div>
                  <div className='relative flex flex-col mt-2'>

                  <HiOutlineShoppingBag className='mt-1.5 flex flex-col text-black'/>
                  <span className='absolute ml-7 flex justify-center xl:text-xl text-lg font-bold text-black '>My Orders</span>
                  </div>
                  </div>
                </div>
                </div>
                </div>
                       )
                  }
                </div>
                {/* Add TO Cart */}

               <Link to={"/AddToCart"}>
               <div className='cursor-pointer hover:text-[#98208e]  hover:border-b-2  hover:border-[#98208e]'>
                   <BsCart2 className='xl:ml-2 ml-0 text-lg' />
              <p className='text-lg '>Cart</p>
             <span className='absolute top-1 bg-black text-sm text-white rounded-full xl:ml-3   flex items-center justify-center font-semibold p-1 h-4'>
                  {products.length > 0 ? products.length : 0}</span>
                </div>
               </Link>
              </div>
              </div>
           </div>
           </div>
    </div>
        <Header/>
  </nav>
        </>
  )
}

export default Navbar

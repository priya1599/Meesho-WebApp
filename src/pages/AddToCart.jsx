//This is a Add To Cart page where it display the product details and total price of the products that are added to the cart.

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {deleteItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity} from '../redux/meeshoSlice'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { motion } from 'framer-motion';
import emptyCart from '../assets/emptyCart.png'

function AddToCart() {
    const products = useSelector((state) => state.meeshoReducer.products);
    const auth = getAuth();
    const dispatch = useDispatch();
    const [totalAmt, setTotalAmt] = useState(""); //Total Amount State
  
    //Total Amount
    useEffect(() => {
      let price = 0;
      products.map((item) => {
        price += item.price * item.quantity;
        return price;
      });
      setTotalAmt(price.toFixed(2));
    }, [products]);

    const navigate  = useNavigate(); //useNavigate for navigate between pages

   const handleClick = () => {
    if (auth) {
      navigate('/payment');
    } else {
      navigate('/Register');
    }
  };

  return (
    <div className=' bg-gray-200  py-4 xl:px-2 px-0'>
      {products.length > 0 ? (
      <div className='container mx-auto h-96 grid xl:grid-cols-5 grid-cols-2 gap-8'>
       
        <div className='w-full bg-white px-1 xl:px-4 col-span-4 '>
          {/* Heading */}
        <div className=" hidden xl:flex items-center justify-center border-b-[1px] border-b-gray-400 py-3">
            <h1 className="text-3xl font-semibold ">Shopping Cart</h1>
          </div>
           {/* ----Item Details that are added to cart----- */}

          <div>
            {
              products.map((item)=>(
                <div key={item.id}
                className='w-full border-b-[1px] border-b-gray-400 p-0 md:py-4 flex items-center gap-6'>
                   <div className="w-full md:w-2/5 xl:w-1/5">
                  <img className='w-full h-44 object-contain'
                  src={item.image} alt="ProductImg" />
                </div>
                <div className="w-full flex flex-col gap-1 xl:gap-1">
                <h2 className="font-bold xl:text-lg text-sm">{item.title}</h2>
                  <p className=" hidden sm:block xl:pr-10 font-base text-sm">{item.description.substring(0,100)}</p>
                  <p  className="text-base">Unit Price:{" "}
                  
                  <span  className="font-semibold">₹{item.price}</span>
                  </p>
                  
                  {/* -----Item increaseQuantity and decreaseQuantity button------ */}
                  <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md">
                    <p className="text-base font-normal">Qty:</p>
                    <p
                     onClick={() => {
                      dispatch(decreaseQuantity(item.id));
                    }}  
                    className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300">-</p>
                    <p className="font-titleFont text-base font-semibold text-black">{item.quantity}</p>
                    <p  
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300">+</p>
                    
                  </div>
                  {/*------- Delete Item Button------- */}
                  
                  <button  
                  onClick={() => dispatch(deleteItem(item.id))}
                  className=" w-36 py-1  rounded-lg text-white mt-2 bg-[#98208e] hover:bg-black  duration-300"
                      >Remove Item
                  </button>
                  
                </div>
               {/* ---- total amount --- */}
                
                 </div>
              ))
            }
            </div>
          {/* Clear Cart Button */}
          <div 
          className=" py-4 flex items-center justify-center">
              <button onClick={() => dispatch(resetCart())} className="px-10 py-2 bg-[#98208e] hover:bg-black  text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide">Clear Cart</button>
            </div>

        </div>
        <div className="col-span-5 md:col-span-3 lg:col-span-2 xl:col-span-1 bg-white h-52 flex items-center" >
        <div className=''>
            <p className="flex gap-2 items-start text-sm xl:text-lg">
              <span ><CheckCircleIcon className="bg-white text-green-500 rounded-full  "/></span> 
               Your order qualifies for FREE Shipping.  See details....</p>
                <div>
                <p className="font-semibold text-sm xl:text-lg px-16 py-3 flex items-center justify-between">
                  Total:<span className="text-lg font-bold">₹{totalAmt}</span>
                </p>
              </div>
              <div className='px-6 mr-1 items-center'>
                {/*----------Proceed to buy button-----------*/}
                
                  <button 
                  onClick={handleClick}
                  className="w-full  text-white font-medium text-lg bg-[#98208e] hover:bg-black duration-200 py-1.5 rounded-md mt-3">
                Proceed to Buy
              </button>
              </div>
          </div>
        </div>
      </div>
      ):(
        // When the cart is empty 
        <div>
          <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center items-center flex-col xl:flex-row gap-4 py-10"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="w-96 p-4 bg-white flex  flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="mt-6 bg-[#98208e] text-white rounded-md cursor-pointer hover:bg-black px-8 py-2  font-semibold text-lg">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
        </div>
      )}
    </div>
  )
}

export default AddToCart

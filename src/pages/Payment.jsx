//This is a Payment Page

import React from 'react';
import { Link } from 'react-router-dom';
import messhoLogo from '../assets/meeshoLogo.svg';


const Payment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       {/* Meesho Logo */}
       <Link to={"/"}>
          <img className=' w-40 py-1 flex my-2 '
        src={messhoLogo}
        alt="amazonLogo" />
          </Link>
      <div className="bg-white p-8 rounded-lg  shadow-md w-96">

        <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
        {/* Payment Form Details  */}
        <form>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">Card Number</label>
            <input type="text" id="cardNumber" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="expiry" className="block text-gray-700 font-medium mb-2">Expiry Date</label>
              <input type="text" id="expiry" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">CVV</label>
              <input type="text" id="cvv" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Cardholder Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <button onClick={(e)=>e.preventDefault()}
           className='w-full py-1.5 text-lg text-white rounded-md bg-[#98208e] hover:bg-black font-semibold'>
            Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;

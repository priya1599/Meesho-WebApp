//This is a Home Page file this file contains Navbar, Carousal, Product Banner, Products by category, offerCarousal and Footer.

import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousal'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Footer from '../components/Footer'
import OfferCarousal from '../components/OfferCarousal'


function Home() {

  return (
    <>
  <div>
    {/* Navbar Component Link */}
      <Navbar/>
      {/* Carousal Component Link */}
      <Carousel/>
      <p className=' text-lg xl:text-4xl font-bold mt-4 flex  justify-center items-center'>
        <span className='xl:w-1/4 w-1/3 xl:h-[4px] h-[2px] bg-zinc-400 inline-flex'></span>
        <span className=' xl:w-1/5 w-1/3 text-center uppercase'>Top Products</span>
        <span className='xl:w-1/4 w-1/3 xl:h-[4px] h-[2px] bg-zinc-400 inline-flex'></span>
      </p>
      <Banner/>
      <Products/>
      <OfferCarousal/>
      <Footer/>
    </div>
    
    </>
  )
}

export default Home

import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cards from './Cards';
import { FaFilter } from "react-icons/fa";

function Products() {
    // fetching product data
  const data = useLoaderData();
  const productsData = data.data
  const [filteredItems, setFilterdItems] = useState([]) //Filtered Item State
  const [selectedCategory, setSelectedCategory] = useState("all") //Select Category State
  const [sortOption, setSortOption] = useState("default") //Sort Option State
  
// Filtering Products
  const filterItems = (category) =>{
    const filtered = category === "all" ? (productsData) : productsData.filter((item) => item.category === category)
    setFilterdItems(filtered);
    setSelectedCategory(category);
    }
 

  //Sorting functionality
  const handleSortChange = (option)=>{
    setSortOption(option)

    //logic for sorting
    let sortedItems = [...filteredItems];
    switch(option){
      case "low-to-high" :
        sortedItems.sort((a,b) => a.price - b.price)
        break;
        case "high-to-low" :
        sortedItems.sort((a,b) => b.price - a.price)
        break;
        default:
          break

    }
    setFilterdItems(sortedItems)
  }

  return (
    <div>
        <div className='max-w-screen-2xl container mx-auto xl:px-28  mb-8 mt-20'>
      <h2 className='font-bold uppercase xl:text-lg text-center items-center justify-center flex rounded-lg bg-black text-white md:p-3 py-1 mx-6 md:mx-28 my-4'>Shop by Category</h2>
    </div>
    {/*-------- All Category Buttons--------- */}
   
   <div className='flex items-center justify-center gap-6 mb-8'>
  
        <button onClick={()=> filterItems("Women's Clothing")}
         className='text-lg xl:text-2xl font-normal hover:underline xl:font-semibold hover:text-[#98208e] hover:active:text-[#98208e]'>Women</button>
        <button onClick={()=> filterItems("Men's Clothing")} className='text-lg hover:underline xl:text-2xl font-normal  xl:font-semibold hover:text-[#98208e] hover:active:text-[#98208e]'>Men</button>
        <button onClick={()=> filterItems("Jewelry")} className='text-lg xl:text-2xl hover:underline font-normal  xl:font-semibold hover:text-[#98208e] hover:active:text-[#98208e]'>Jewellery</button>
        <button onClick={()=> filterItems("Electronics")} className='text-lg xl:text-2xl hover:underline font-normal  xl:font-semibold hover:text-[#98208e] hover:active:text-[#98208e]'>Electronics</button>
    </div>

    {/* filter button to sort the price from */}

    <div className='flex justify-end mb-4 rounded-sm mr-10 '>
      <div className='bg-black p-2 mr-1'>
      <FaFilter className='text-white h-4 w-4' />
      </div>
      <select
      id='sort'
      onChange={(e) =>handleSortChange(e.target.value) }
      value={sortOption}
      className='bg-black text-white px-2 py-1 rounded-sm'>
        <option value="default">Default</option>
        <option value="low-to-high">Price: Low To High</option>
        <option value="high-to-low">Price: High To Low</option>
      </select>
    </div>
   
   <Cards filterdItems={filteredItems}/>

    </div>
  )
}

export default Products

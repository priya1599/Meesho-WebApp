//This is a Search Product Page Shows the Search Product Details 

import React from 'react'
import { useDispatch } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToCart } from '../redux/meeshoSlice';

function SearchProducts() {
  const { id } = useParams();
  const data = useLoaderData(); //Fetching Product Data
  const productsData = data.data
  const dispatch = useDispatch();
  
  const product = productsData.find(product => product.id==id )
  if (!product) {  //Meesage if product not found
    return <div>Product not found{id}</div>;
  }

  return (
    <div>
      <div className='mx-auto m-auto bg-gray-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-4 px-4 mt-3 item-center justify-center'>
 <div 
className='bg-white h-auto item-center justify-center border-[1px] rounded-md border-gray-300 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'>
<div className="w-full h-auto flex items-center justify-center relative group">
  <img className='w-52 h-64 object-contain '
  src={product.image} 
 alt="ProductImage" />
  </div>
   <div className='px-4 bg-white flex flex-col gap-1 z-10 items-center justify-center"'>
   <h2 className='font-titleFont tracking-wide text-xl text-[#131921] font-extrabold items-center justify-center'>
    {product.title.substring(0, 20)}</h2>
       {/* ---------Product Price ---------- */}
  <p className='text-xl text-gray-700 font-bold items-center justify-center'>
    ₹{product.price}</p>
   </div>
    <p className="  text-lg items-center justify-center px-6">{product.description.substring(0, 100)}</p>
   <div className="text-black flex items-center justify-center">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      {/* ----- Add-To-Cart Button ---- */}
      <button
      onClick={() =>
        dispatch(
          addToCart({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            category: product.category,
            image: product.image,
            quantity: 1,
          })
        )
        }

      className=" py-2 mx-4 text-sm xl:text-lg text-white rounded-md bg-gradient-to-t from-[#b727ab] to-[#98208e] hover:bg-gradient-to-b ">
      Add to Cart
    </button>
    </div>
</div>

</div>
 )
}
export default SearchProducts

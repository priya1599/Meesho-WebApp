//This file contains the api link of products
import axios from "axios";

export async function productsData(){
    const products = await axios.get(
        // "https://fakestoreapiserver.vercel.app/amazonproducts"
        "https://messho-backend.onrender.com/api/product/details"
        );
        
    return products
}

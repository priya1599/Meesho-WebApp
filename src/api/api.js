//This file contains the api link of products
import axios from "axios";

export async function productsData(){
    const products = await axios.get(
        "https://fakestoreapi.com/products"
        );
        
    return products
}
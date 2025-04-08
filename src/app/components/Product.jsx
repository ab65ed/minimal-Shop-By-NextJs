"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Product({product}){
    const { addToCart } = useCart();
    
    const handleAddToCart = () => {
        addToCart(product);
    };
    
    return(
        <div className="flex flex-col gap-3 p-4 border hover:border-blue-500 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
            <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>
            <p className="text-green-600 font-bold mb-2">${product.price}</p>
            <div className="flex gap-4 items-center w-full">
                <button 
                    onClick={handleAddToCart}
                    className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 text-xs"
                >
                    Add to cart
                </button>
                <Link href={`/${product.id}`} className="text-blue-500 hover:underline text-xs">View Details</Link>
            </div>
        </div>
    )
}
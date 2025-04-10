"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";
import { FaChevronUp, FaChevronDown, FaTrash, FaArrowLeft } from "react-icons/fa";




export default function ClientSideCart() {
    const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container mx-auto p-4 max-w-4xl">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
                <div className="bg-white p-8 rounded-lg shadow-md text-center h-[300px] flex flex-col items-center justify-center">
                    <p className="text-gray-600 mb-4 ">Your cart is empty</p>
                    <Link href="/" className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        <FaArrowLeft />
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                {cart.map((item) => (
                    <div key={item.id} className="flex border-b last:border-b-0 p-4">
                        <div className="w-24 h-24 flex-shrink-0">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-contain"
                            />
                        </div>
                        
                        <div className="ml-4 flex-grow">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-green-600 font-bold mt-1">${item.price}</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center w-24">
                            <div className="flex items-center border rounded">
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="p-1 text-gray-600 hover:text-blue-500"
                                >
                                    <FaChevronDown />
                                </button>
                                <span className="px-2">{item.quantity}</span>
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="p-1 text-gray-600 hover:text-blue-500"
                                >
                                    <FaChevronUp />
                                </button>
                            </div>
                            <button 
                                onClick={() => removeFromCart(item.id)}
                                className="mt-2 text-red-500 hover:text-red-700 flex items-center text-sm"
                            >
                                <FaTrash className="mr-1" /> Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <span className="font-semibold">Subtotal</span>
                    <span className="font-bold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <button 
                        onClick={clearCart}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Clear Cart
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Checkout
                    </button>
                </div>
            </div>
            
            <Link href="/" className="inline-flex items-center gap-2 text-blue-500 hover:underline">
                <FaArrowLeft />
                Continue Shopping
            </Link>
        </div>
    );
}
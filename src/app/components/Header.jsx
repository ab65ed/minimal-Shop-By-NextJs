"use client";

import React from 'react';
import Link from 'next/link';
import { FaHome, FaShoppingCart, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { itemCount } = useCart();
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Home Link */}
          <Link href="/" className="flex items-center space-x-2">
            <FaHome className="text-2xl text-gray-800 hover:text-blue-600 transition-colors" />
            <span className="text-xl font-semibold text-gray-800">MinimalShop</span>
          </Link>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
              <FaInstagram className="text-xl" />
            </a>
          </div>

          {/* Shopping Cart */}
          <Link href="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-gray-800 hover:text-blue-600 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
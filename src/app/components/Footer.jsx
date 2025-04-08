"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-semibold text-gray-800">
              MinimalShop
            </Link>
            <p className="text-gray-500 text-sm mt-1">
              © {currentYear} Milanom.ir. All rights reserved.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-blue-500 transition-colors">
              Cart
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
        
        {/* Bottom Text */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> by Abedin Esmaeilipour
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
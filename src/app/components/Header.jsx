"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaShoppingCart, FaFacebook, FaTwitter, FaInstagram, FaUser, FaSignInAlt, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session, status } = useSession();
  const { itemCount } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(true);
  
  // Handle sign out with confirmation
  const handleSignOut = () => {
    if (window.confirm('آیا مطمئن هستید که می‌خواهید خارج شوید؟')) {
      signOut({ callbackUrl: '/' });
    }
  };
  
  // Handle sign in
  const handleSignIn = () => {
    signIn('google', { callbackUrl: window.location.pathname });
  };
  
  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Home Link */}
          <Link href="/" className="flex items-center space-x-2">
            <FaHome className="text-2xl text-gray-800 hover:text-blue-600 transition-colors" />
            <span className="text-xl font-semibold text-gray-800">MinimalShop</span>
          </Link>

          {/* Center Nav and Social Media Icons */}
          <div className="hidden md:flex items-center space-x-6">
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
          </div>

          {/* User Authentication and Cart */}
          <div className="flex items-center space-x-4">
            {/* User Section - Show different UI based on auth state */}
            {status === 'loading' ? (
              // Loading state - simple placeholder with text
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse mr-2"></div>
                <span className="text-sm text-gray-500">در حال بارگذاری...</span>
              </div>
            ) : session ? (
              // Logged in state with active dropdown menu
              <div className="relative">
                <button 
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors border border-transparent hover:border-gray-200 rounded-md px-2 py-1"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                    {session.user?.image ? (
                      // eslint-disable-next-line
                      <img 
                        src={session.user.image} 
                        alt={session.user.name || 'کاربر'} 
                        width={32} 
                        height={32}
                        className="rounded-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://www.gravatar.com/avatar/?d=mp';
                        }}
                      />
                    ) : (
                      <FaUser className="text-blue-500" />
                    )}
                  </div>
                  <span className="hidden md:inline text-sm font-medium truncate max-w-[120px]">
                    {session.user?.name?.split(' ')[0] || 'کاربر'}
                  </span>
                  <FaChevronDown className={`text-xs transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* User dropdown menu - visible based on state */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
                    <div className="py-1">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                        <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                      </div>
                      <Link 
                        href="/profile" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        پروفایل
                      </Link>
                      <Link 
                        href="/orders" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        سفارش‌ها
                      </Link>
                      <button 
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        <span className="flex items-center">
                          <FaSignOutAlt className="mr-2" /> خروج از حساب
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Logged out state with clear login button
              <button 
                onClick={handleSignIn}
                className="flex items-center space-x-1 text-white bg-blue-500 hover:bg-blue-600 transition-colors px-3 py-1 rounded-md"
              >
                <FaSignInAlt className="text-sm" />
                <span className="text-sm font-medium">ورود</span>
              </button>
            )}
            
            {/* Shopping Cart */}
            <Link href="/cart" className="relative">
              <FaShoppingCart className="text-2xl text-gray-800 hover:text-blue-600 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
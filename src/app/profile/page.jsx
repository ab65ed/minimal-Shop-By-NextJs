"use client";

import { useSession } from "next-auth/react";
import AuthGuard from "../components/AuthGuard";
import { FaUser, FaEnvelope } from "react-icons/fa";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <AuthGuard>
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">پروفایل کاربری</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* User Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center">
                {session?.user?.image ? (
                  // eslint-disable-next-line
                  <img 
                    src={session.user.image} 
                    alt={session.user.name || 'کاربر'} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://www.gravatar.com/avatar/?d=mp';
                    }}
                  />
                ) : (
                  <FaUser className="text-4xl text-gray-400" />
                )}
              </div>
              
              {/* User Info */}
              <div className="flex-grow text-center md:text-right">
                <h2 className="text-xl font-semibold">{session?.user?.name || 'کاربر'}</h2>
                <div className="flex items-center justify-center md:justify-start mt-2 text-gray-600">
                  <FaEnvelope className="mr-2" />
                  <span>{session?.user?.email || 'ایمیل موجود نیست'}</span>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="border rounded-md p-4 bg-gray-50">
                    <h3 className="font-medium mb-2">اطلاعات حساب</h3>
                    <p className="text-sm text-gray-600">
                      شما با اکانت گوگل وارد سیستم شده‌اید. برای تغییر اطلاعات پروفایل خود، لطفاً به حساب گوگل خود مراجعه کنید.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
} 
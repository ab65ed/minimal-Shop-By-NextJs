"use client";

import { useSession } from "next-auth/react";
import AuthGuard from "../components/AuthGuard";
import { FaShoppingBag, FaBox, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

export default function OrdersPage() {
  const { data: session } = useSession();

  // Sample orders - in a real app, these would come from an API
  const orders = [];

  return (
    <AuthGuard>
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">سفارش‌های من</h1>
        
        {orders.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              {/* Orders would be listed here */}
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaBox className="text-5xl text-gray-300" />
            </div>
            <h2 className="text-xl font-semibold mb-2">هیچ سفارشی وجود ندارد</h2>
            <p className="text-gray-600 mb-6">
              شما هنوز هیچ سفارشی ثبت نکرده‌اید. 
              برای ثبت اولین سفارش خود، به فروشگاه مراجعه کنید.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <FaShoppingBag />
              مشاهده محصولات
            </Link>
          </div>
        )}
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <div className="flex items-start">
            <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-sm text-blue-800">
              تمامی سفارش‌های شما و وضعیت آن‌ها در این صفحه قابل مشاهده است. 
              برای پیگیری سفارش‌های خود، می‌توانید از این بخش استفاده کنید.
            </p>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
} 
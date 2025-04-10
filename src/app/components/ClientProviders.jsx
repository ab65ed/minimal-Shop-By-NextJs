"use client";

import Header from "./Header";
import Footer from "./Footer";
import { CartProvider } from "../context/CartContext";
import { SessionProvider } from "next-auth/react";

export default function ClientProviders({ children }) {
  return (
    <SessionProvider>
      <CartProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </SessionProvider>
  );
}

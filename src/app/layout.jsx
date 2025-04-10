
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "./components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL('https://minimalshop.com'),
  title: {
    default: "MinimalShop - فروشگاه آنلاین مینیمال",
    template: "%s | MinimalShop"
  },
  description: "فروشگاه آنلاین مینیمال، جایی برای خرید بهترین محصولات با طراحی مینیمال",
  keywords: ["فروشگاه آنلاین", "مینیمال", "خرید آنلاین", "محصولات باکیفیت"],
  authors: [{ name: "MinimalShop Team" }],
  creator: "MinimalShop Team",
  publisher: "MinimalShop",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://minimalshop.com",
    siteName: "MinimalShop",
    title: "MinimalShop - فروشگاه آنلاین مینیمال",
    description: "فروشگاه آنلاین مینیمال، جایی برای خرید بهترین محصولات با طراحی مینیمال",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MinimalShop - فروشگاه آنلاین مینیمال",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MinimalShop - فروشگاه آنلاین مینیمال",
    description: "فروشگاه آنلاین مینیمال، جایی برای خرید بهترین محصولات با طراحی مینیمال",
    images: ["/images/twitter-image.jpg"],
    creator: "@minimalshop",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
};

export default function RootLayout({ children }) {
  return (
    <html >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
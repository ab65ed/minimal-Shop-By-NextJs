import ProductList from "./components/ProductList";

export const metadata = {
  title: "صفحه اصلی | MinimalShop",
  description: "فروشگاه آنلاین مینیمال، جایی برای خرید بهترین محصولات با طراحی مینیمال",
  openGraph: {
    title: "صفحه اصلی | MinimalShop",
    description: "فروشگاه آنلاین مینیمال، جایی برای خرید بهترین محصولات با طراحی مینیمال",
    images: [
      {
        url: "/images/home-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "صفحه اصلی فروشگاه مینیمال",
      }
    ],
  },
};

export default async function Home() {
  let products = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    products = await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <main className="w-full max-w-7xl">
        <ProductList products={products} />
      </main>
    </div>
  );
}

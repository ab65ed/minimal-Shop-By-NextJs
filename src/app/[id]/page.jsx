import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = params;
  let product;
  
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    product = await res.json();
    
    return {
      title: `${product.title} | MinimalShop`,
      description: product.description.substring(0, 160),
      openGraph: {
        title: `${product.title} | MinimalShop`,
        description: product.description.substring(0, 160),
        images: [
          {
            url: product.image,
            width: 800,
            height: 600,
            alt: product.title,
          }
        ],
        type: 'article',
        tags: [product.category, 'محصولات', 'خرید آنلاین'],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${product.title} | MinimalShop`,
        description: product.description.substring(0, 160),
        images: [product.image],
      },
    };
  } catch (error) {
    return {
      title: 'محصول | MinimalShop',
      description: 'جزئیات محصول در فروشگاه مینیمال',
    };
  }
}

export default async function ProductDetails({ params }) {
  let { id } = params;
  let res = await fetch(`https://fakestoreapi.com/products/${id}`);
  let product = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image Section */}
            <div className="flex items-center justify-center bg-white p-8 rounded-xl">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-[400px] object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.title}
              </h1>

              <div className="flex items-center space-x-4">
                <span className="text-2xl font-semibold text-indigo-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                  {product.category}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < Math.floor(product.rating.rate)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.rating.count} reviews)
                </span>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="pt-6 flex flex-col gap-3">
                <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Add to Cart
                </button>
                <Link className="border-none outline-none" href="/">
                  <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    ‌Back To Shop
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductView = ({ products, isLoading }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const selectedProducts = products.find((item) => item.id === Number(id));
      setSingleProduct(selectedProducts);
    }
  }, [id, products]);

  if (isLoading) {
    return (
      <div>
        <div class="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!singleProduct) {
    return <h1>No Data Found</h1>;
  }

  return (
    <>
      <div className="font-poppins container mx-auto px-8 py-8 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4 bg-[#FFFFFFFF] border flex justify-center items-center">
            {/* Left Side Image  */}
            <div className="relative max-w-md mx-auto overflow-hidden">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="w-full h-auto rounded object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 hidden md:flex justify-center items-center bg-black bg-opacity-10 rounded-md cursor-zoom-in">
                <img src={singleProduct.image} alt={singleProduct.title} />
              </div>
            </div>
          </div>
          <div className="px-4">
            <div>
              {/* right side content  */}
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                {singleProduct.title}
              </h2>
              <div className="mb-4">
                {/* price  */}
                <span className="text-3xl text-orange-500 font-semibold">
                  Rs. {singleProduct.price}
                </span>
                <hr className="border-b border-dotted w-3/5 border-gray-400 mt-2" />
              </div>

              {/* Quality Control  */}
              <div className="flex items-center mt-3 text-gray-700 my-2">
                <span className="mr-2">Qty:</span>
                <div className="flex">
                  <button className="px-2 py-1 bg-gray-200 rounded-l">-</button>
                  <input
                    type="text"
                    className="w-12 px-2 py-1 text-center focus:outline-none bg-gray-100"
                    min={1}
                    defaultValue={1}
                  />
                  <button className="px-2 py-1 bg-gray-200 rounded-4">+</button>
                </div>
              </div>

              <div className="mb-4 mt-9">
                {/* desc  */}
                <span className="text-base text-gray-700">
                  {singleProduct.description}
                </span>
                <hr className="border-b border-dotted w-3/5" />
              </div>

              <div className="mb-4 flex space-x-2">
                {/* Buttons  */}
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-64">
                  Add to Cart
                </button>
                <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-64">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
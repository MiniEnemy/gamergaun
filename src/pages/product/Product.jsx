import React, { useEffect, useState } from "react";
import ProductCard from "./Productcard";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // using promise. three stage.
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchedData();
  }, []);
  return (
    <>
      <div className="font-poppins p-4">
        <h1 className="px-24 text-2xl font-semibold mb-4">Trending Products</h1>
      </div>

      {isLoading ? (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <div className="px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products &&
            products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
          ;
        </div>
      )}
    </>
  );
}

export default Products;
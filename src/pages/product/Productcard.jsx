import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="border p-4 rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover mb-4 transform transition-transform duration-500 hover:translate-y-[-10px] hover:scale"
        />
        <h2 className="text-lg font-medium">{product.title}</h2>
        <p className="text-gray-500 pb-4">${product.price}</p>
        <Link to={`/productview/${product.id}`} className="mt-4 p-2 text-white rounded bg-purple-500 hover:bg-purple-600">
          View Details
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
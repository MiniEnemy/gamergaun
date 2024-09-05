import React from "react";
import { Link } from "react-router-dom";

const Productcard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={`Image of ${product.title}`}
        className="w-full h-48 object-cover mb-4 transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105"
      />
      <h2 className="text-lg font-medium mb-2">{product.title}</h2>
      <p className="text-gray-500 mb-4">$ {product.price}</p>
      <Link
        to={`/product-view/${product.id}`}
        className="block text-center px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default Productcard;

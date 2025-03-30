import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

 
function ProductList({ allProducts, onAddToCart }) {

   

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-4 sm:p-6 lg:p-8">
      {allProducts.map((product) => (
        <div key={product.id} className="group relative flex flex-col">
          {/* Image */}
          <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* product details */}
          <div className="mt-4 flex flex-col flex-grow">
            <div className="flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700 line-clamp-2">
                  {product.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {product.category}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
            </div>

            {/* Spacer */}
            <div className="flex-grow"></div>

            {/* Ratings */}
            <div className="mt-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesomeIcon
                  key={star}
                  icon={product.rating.rate >= star ? solidStar : regularStar}
                  className={`h-4 w-4 ${
                    product.rating.rate >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
                ))}
                <span className="ml-1 text-xs text-gray-500">
                  ({product.rating.count})
                </span>
              </div>
              <button 
              onClick ={() => onAddToCart(product)}
              className="mt-3 w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
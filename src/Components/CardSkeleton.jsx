import React from "react";

const ProductSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-4 sm:p-6 lg:p-8">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="group relative flex flex-col animate-pulse">
          {/* Image Skeleton */}
          <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-300"></div>
          
          {/* Product Details Skeleton */}
          <div className="mt-4 flex flex-col flex-grow">
            <div className="flex justify-between">
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
            
            <div className="flex-grow"></div>
            
            {/* Ratings Skeleton */}
            <div className="mt-4 space-y-2">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="h-4 w-4 bg-gray-200 rounded-full"></div>
                ))}
              </div>
              <div className="h-8 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
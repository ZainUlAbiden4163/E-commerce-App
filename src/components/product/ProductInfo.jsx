import React from "react";

function ProductInfo({ image, title, brand, category, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

        <p className="text-sm text-gray-500">Brand: {brand}</p>

        <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {category}
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;

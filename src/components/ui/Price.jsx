import React from "react";

function Price({
  price,
  originalPrice,
  currency = "$",
  showDiscount = true,
  className = "",
}) {
  const hasDiscount = originalPrice && Number(originalPrice) > Number(price);

  const discountPercentage = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900">
        {currency}
        {Number(price).toFixed(2)}
      </h3>

      {hasDiscount && (
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-sm">
            {currency}
            {Number(originalPrice).toFixed(2)}
          </span>

          {showDiscount && (
            <span className="rounded-md bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
              -{discountPercentage}%
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default Price;

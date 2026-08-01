import React from "react";

function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = Infinity,
}) {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        className="w-10 h-10 flex items-center justify-center text-lg font-semibold border-r border-gray-300 transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
      >
        −
      </button>

      <span className="w-12 text-center font-medium">{quantity}</span>

      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        className="w-10 h-10 flex items-center justify-center text-lg font-semibold border-l border-gray-300 transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;

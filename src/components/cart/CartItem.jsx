import React from "react";
import { Trash2 } from "lucide-react";

import QuantitySelector from "./QuantitySelector";
import Price from "../ui/Price";

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex items-center justify-between gap-6 rounded-2xl border border-gray-200 p-5 transition hover:shadow-sm">
      {/* Product */}
      <div className="flex items-center gap-4 flex-1">
        <div className="h-24 w-24 overflow-hidden rounded-xl bg-gray-100">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-semibold">{item.title}</h2>

          <p className="text-sm text-gray-500">Brand: {item.brand}</p>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            {item.category}
          </span>
        </div>
      </div>

      {/* Price */}
      <Price price={item.price} originalPrice={item.originalPrice} />

      {/* Quantity */}
      <QuantitySelector
        quantity={item.quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />

      {/* Total */}
      <div className="w-28 text-right">
        <p className="text-lg font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Delete */}
      <button
        type="button"
        onClick={onRemove}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-200 text-red-500 transition hover:bg-red-50"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default CartItem;

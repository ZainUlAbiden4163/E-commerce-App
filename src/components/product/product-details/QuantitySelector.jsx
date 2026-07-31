import { useState } from "react";
import { MinusIcon, PlusIcon } from "../../ui/icons";

export default function QuantitySelector({ minimumOrderQuantity = 1 }) {
  const [qty, setQty] = useState(minimumOrderQuantity);

  return (
    <div>
      <div className="inline-flex items-center border border-black/15 rounded-full">
        <button
          onClick={() => setQty((q) => Math.max(minimumOrderQuantity, q - 1))}
          className="h-10 w-10 flex items-center justify-center text-[#141414] hover:text-[#C9A227] transition-colors"
          aria-label="Decrease quantity"
        >
          <MinusIcon className="h-3.5 w-3.5" />
        </button>
        <span className="w-8 text-center text-sm text-[#141414]">{qty}</span>
        <button
          onClick={() => setQty((q) => q + 1)}
          className="h-10 w-10 flex items-center justify-center text-[#141414] hover:text-[#C9A227] transition-colors"
          aria-label="Increase quantity"
        >
          <PlusIcon className="h-3.5 w-3.5" />
        </button>
      </div>
      {minimumOrderQuantity > 1 && (
        <p className="text-xs text-[#8C8577] mt-1.5">
          Minimum order: {minimumOrderQuantity} units
        </p>
      )}
    </div>
  );
}

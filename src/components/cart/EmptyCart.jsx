import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white px-8 py-16 text-center">
      <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gray-100">
        <ShoppingCart size={50} className="text-gray-500" />
      </div>

      <h2 className="text-3xl font-semibold text-gray-900">
        Your cart is empty
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        Looks like you haven't added anything to your cart yet. Start shopping
        and discover amazing products.
      </p>

      <Link to="/products" className="mt-8">
        <Button variant="accent" className="rounded-xl px-8 py-3">
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}

export default EmptyCart;

import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import Button from "../../ui/Button";
import { HeartIcon } from "../../ui/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";

export default function ProductActions({
  availabilityStatus,
  minimumOrderQuantity,
  product,
}) {
  const dispath = useDispatch();

  const [wishlisted, setWishlisted] = useState(false);
  const inStock = availabilityStatus === "In Stock";
  function handleAddToCart() {
    dispath(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.thumbnail,
        price: product.price,
        quantity: 1,
      }),
    );
  }
  return (
    <div className="border border-black/10 rounded-lg p-4">
      <span className="text-sm text-[#6B6558]">Quantity</span>
      <div className="mt-2">
        <QuantitySelector minimumOrderQuantity={minimumOrderQuantity} />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <Button
          variant="primary"
          fullWidth
          disabled={!inStock}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>

        <button
          onClick={() => setWishlisted((w) => !w)}
          className="flex items-center justify-center gap-2 text-sm text-[#141414] border border-black/15 rounded-full py-3 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors"
        >
          <HeartIcon filled={wishlisted} className="h-4 w-4" />
          {wishlisted ? "Added to Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HeartIcon, CartAddIcon, StarIcon } from "../ui/Icons";
import ProductPrice from "./ProductPrice";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const {
    id,
    title,
    category,
    thumbnail,
    price,
    discountPercentage,
    rating,
    availabilityStatus,
  } = product;

  const inStock = availabilityStatus === "In Stock";

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-3/4 overflow-hidden bg-[#F0EEE7]">
        <NavLink to={`/products/${id}`}>
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </NavLink>

        {!inStock && (
          <span className="absolute top-3 left-3 bg-[#141414] text-white text-[10px] uppercase tracking-widest px-2 py-1">
            {availabilityStatus === "Low Stock" ? "Low stock" : "Sold out"}
          </span>
        )}

        <button
          onClick={() => setWishlisted((w) => !w)}
          aria-label="Toggle wishlist"
          className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center rounded-full bg-[#FAFAF7]/90 text-[#141414] hover:text-[#C9A227] transition-colors"
        >
          <HeartIcon filled={wishlisted} className="h-4 w-4" />
        </button>

        {inStock && (
          <button
            className={`hidden md:flex absolute bottom-0 left-0 right-0 items-center justify-center gap-2 bg-[#141414] text-[#FAFAF7] text-xs uppercase tracking-widest py-3 transition-transform duration-300 ${
              hovered ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <CartAddIcon className="h-4 w-4" />
            Quick add
          </button>
        )}
      </div>

      {/* Info */}
      <div className="pt-3">
        <p className="text-[11px] uppercase tracking-widest text-[#8C8577]">
          {category}
        </p>
        <NavLink to={`/products/${id}`}>
          <h3 className="text-sm text-[#141414] mt-1 hover:text-[#C9A227] transition-colors line-clamp-2">
            {title}
          </h3>
        </NavLink>

        {rating > 0 && (
          <div className="flex items-center gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <StarIcon
                key={n}
                filled={n <= Math.round(rating)}
                className="h-3 w-3 text-[#C9A227]"
              />
            ))}
          </div>
        )}

        <div className="mt-1.5">
          <ProductPrice price={price} discountPercentage={discountPercentage} />
        </div>

        {inStock && (
          <button className="md:hidden mt-2 w-full flex items-center justify-center gap-2 border border-[#141414] text-xs uppercase tracking-widest py-2">
            <CartAddIcon className="h-4 w-4" />
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

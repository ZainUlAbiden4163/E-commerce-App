import Rating from "../../ui/Rating";

export default function ProductInfo({
  title,
  brand,
  category,
  rating,
  reviewCount,
  description,
  price,
  discountPercentage,
}) {
  const hasDiscount = discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? price - (price * discountPercentage) / 100
    : price;

  return (
    <div>
      <h1
        className="text-2xl md:text-[26px] leading-snug text-[#141414]"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        {title}
      </h1>

      <div className="mt-2 flex items-center gap-2">
        <Rating value={rating} count={reviewCount} />
      </div>

      <div className="mt-2 text-sm text-[#6B6558]">
        Brand: <span className="text-[#141414] capitalize">{brand}</span>
        <span className="mx-2 text-[#C9C5B8]">|</span>
        Category: <span className="text-[#141414] capitalize">{category}</span>
      </div>

      <p className="mt-4 text-sm text-[#6B6558] leading-relaxed">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-3">
        <span className="text-2xl font-medium text-[#141414]">
          ${discountedPrice.toFixed(2)}
        </span>
        {hasDiscount && (
          <>
            <span className="text-sm text-[#8C8577] line-through">
              ${price.toFixed(2)}
            </span>
            <span className="text-xs font-medium text-white bg-[#C9A227] px-2 py-0.5 rounded">
              -{Math.round(discountPercentage)}%
            </span>
          </>
        )}
      </div>
    </div>
  );
}

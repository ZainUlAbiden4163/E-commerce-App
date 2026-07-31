export default function ProductPrice({ price, discountPercentage }) {
  const hasDiscount = discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? price - (price * discountPercentage) / 100
    : price;

  return (
    <div className="flex items-center gap-2">
      <span className="text-[15px] font-medium text-[#141414]">
        ${discountedPrice.toFixed(2)}
      </span>
      {hasDiscount && (
        <>
          <span className="text-xs text-[#8C8577] line-through">
            ${price.toFixed(2)}
          </span>
          <span className="text-[11px] font-medium text-[#C9A227]">
            -{Math.round(discountPercentage)}%
          </span>
        </>
      )}
    </div>
  );
}

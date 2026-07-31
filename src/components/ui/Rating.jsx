import { StarIcon } from "./Icons";

export default function Rating({ value = 0, count, size = "sm" }) {
  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <StarIcon
            key={n}
            filled={n <= Math.round(value)}
            className={`${starSize} text-[#C9A227]`}
          />
        ))}
      </div>
      {value > 0 ? (
        <span className="text-xs text-[#8C8577]">
          {value.toFixed(1)} {count != null && `(${count} reviews)`}
        </span>
      ) : (
        <span className="text-xs text-[#8C8577]">Be the first to review</span>
      )}
    </div>
  );
}

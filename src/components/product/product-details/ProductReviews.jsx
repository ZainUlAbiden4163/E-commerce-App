import { StarIcon } from "../../ui/icons";
import Rating from "../../ui/Rating";

function ReviewItem({ reviewerName, rating, comment, date }) {
  const initial = reviewerName?.charAt(0).toUpperCase();
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="py-4 border-b border-black/5 last:border-0">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-[#141414] text-white text-xs flex items-center justify-center shrink-0">
          {initial}
        </div>
        <div>
          <p className="text-sm text-[#141414] font-medium">{reviewerName}</p>
          <p className="text-xs text-[#8C8577]">{formattedDate}</p>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <StarIcon
            key={n}
            filled={n <= rating}
            className="h-3.5 w-3.5 text-[#C9A227]"
          />
        ))}
      </div>

      <p className="mt-2 text-sm text-[#6B6558] leading-relaxed">{comment}</p>
    </div>
  );
}

export default function ProductReviews({ rating, reviews = [] }) {
  return (
    <div>
      <h2
        className="text-lg text-[#141414] mb-4"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Customer Reviews ({reviews.length})
      </h2>

      <div className="border border-black/10 rounded-lg p-4 mb-4 flex items-center gap-3">
        <span className="text-3xl font-medium text-[#141414]">
          {rating.toFixed(1)}
        </span>
        <Rating value={rating} size="md" />
      </div>

      {reviews.length === 0 ? (
        <p className="text-sm text-[#8C8577]">No reviews yet.</p>
      ) : (
        <div>
          {reviews.map((r, i) => (
            <ReviewItem key={i} {...r} />
          ))}
        </div>
      )}
    </div>
  );
}

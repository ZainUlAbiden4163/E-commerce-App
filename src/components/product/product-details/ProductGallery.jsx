import { useState } from "react";

export default function ProductGallery({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Main image */}
      <div className="aspect-square w-full overflow-hidden bg-[#F0EEE7] rounded-lg">
        <img
          src={images[activeIndex]}
          alt="Product"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Thumbnails — only shown if there's more than one image */}
      {images.length > 1 && (
        <div className="flex gap-3 mt-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-16 w-16 shrink-0 overflow-hidden rounded-md border transition-colors ${
                i === activeIndex
                  ? "border-[#C9A227]"
                  : "border-black/10 hover:border-black/25"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

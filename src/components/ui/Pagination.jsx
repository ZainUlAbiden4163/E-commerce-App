import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

export default function Pagination({ page, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-14">
      <button
        className="h-9 w-9 flex items-center justify-center text-[#141414] disabled:text-[#C9C5B8] disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          className={`h-9 w-9 text-sm rounded-full transition-colors ${
            p === page
              ? "bg-[#141414] text-white"
              : "text-[#141414] hover:bg-[#EFEBE1]"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        className="h-9 w-9 flex items-center justify-center text-[#141414] disabled:text-[#C9C5B8] disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

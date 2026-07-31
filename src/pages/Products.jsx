import ProductGrid from "../components/product/ProductGrid";
import Pagination from "../components/ui/Pagination";
import { SearchIcon, ChevronDownIcon } from "../components/ui/Icons";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";

export default function Products() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-10">
      <h1
        className="text-3xl mb-8 text-[#141414]"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Shop all
      </h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10 pb-6 border-b border-black/10">
        <div className="flex items-center border border-black/15 rounded-full px-4 py-2 w-full md:max-w-xs focus-within:border-[#C9A227] transition-colors">
          <SearchIcon className="h-4 w-4 text-[#8C8577] shrink-0" />
          <input
            type="text"
            placeholder="Search this collection…"
            className="w-full bg-transparent px-2 text-sm text-[#141414] placeholder:text-[#8C8577] outline-none"
          />
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <select className="appearance-none border border-black/15 rounded-full pl-4 pr-9 py-2 text-sm text-[#141414] bg-transparent outline-none focus:border-[#C9A227] transition-colors">
              <option>All categories</option>
              <option>Shirts</option>
              <option>Outerwear</option>
              <option>Bottoms</option>
              <option>Knitwear</option>
            </select>
            <ChevronDownIcon className="h-3.5 w-3.5 text-[#8C8577] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative">
            <select className="appearance-none border border-black/15 rounded-full pl-4 pr-9 py-2 text-sm text-[#141414] bg-transparent outline-none focus:border-[#C9A227] transition-colors">
              <option>Featured</option>
              <option>Price: Low to high</option>
              <option>Price: High to low</option>
              <option>Top rated</option>
            </select>
            <ChevronDownIcon className="h-3.5 w-3.5 text-[#8C8577] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <ProductGrid products={products} loading={isLoading} />
      <Pagination page={1} totalPages={3} />
    </div>
  );
}

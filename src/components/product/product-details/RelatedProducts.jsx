import ProductCard from "../ProductCard";

export default function RelatedProducts({ products = [] }) {
  if (products.length === 0) return null;

  return (
    <div className="mt-16 border-t border-black/10 pt-10">
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-xl text-[#141414]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Related Products
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

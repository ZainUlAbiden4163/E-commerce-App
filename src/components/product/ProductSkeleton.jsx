export default function ProductSkeleton() {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="aspect-3/4 bg-[#EAE7DE]" />
      <div className="pt-3 space-y-2">
        <div className="h-2.5 w-16 bg-[#EAE7DE] rounded" />
        <div className="h-3.5 w-3/4 bg-[#EAE7DE] rounded" />
        <div className="h-3.5 w-1/3 bg-[#EAE7DE] rounded" />
      </div>
    </div>
  );
}

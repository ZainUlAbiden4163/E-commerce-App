export default function Spinner({ size = "md" }) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-10 w-10 border-[3px]",
  };

  return (
    <div className="flex items-center justify-center py-10">
      <div
        className={`${sizes[size]} rounded-full border-[#EAE7DE] border-t-[#C9A227] animate-spin`}
      />
    </div>
  );
}

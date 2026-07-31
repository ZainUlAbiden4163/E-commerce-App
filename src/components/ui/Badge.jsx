import { CheckCircleIcon, AlertCircleIcon } from "./Icons";

export default function Badge({ variant = "neutral", children }) {
  const variants = {
    inStock: "text-[#3F7A4E]",
    outOfStock: "text-[#B23B3B]",
    discount:
      "bg-[#C9A227] text-white px-2 py-1 rounded text-[10px] uppercase tracking-widest",
    neutral: "bg-[#F0EEE7] text-[#6B6558] px-2.5 py-1 rounded-full text-[11px]",
  };

  if (variant === "inStock" || variant === "outOfStock") {
    const Icon = variant === "inStock" ? CheckCircleIcon : AlertCircleIcon;
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-sm font-medium ${variants[variant]}`}
      >
        <Icon className="h-4 w-4" />
        {children}
      </span>
    );
  }

  return <span className={variants[variant]}>{children}</span>;
}

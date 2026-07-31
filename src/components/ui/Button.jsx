export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors disabled:opacity-40 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#141414] text-white hover:bg-[#2A2A2A]",
    accent: "bg-[#C9A227] text-white hover:bg-[#B4901F]",
    outline:
      "border border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-white",
    ghost: "text-[#141414] hover:text-[#C9A227]",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-sm px-8 py-4",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

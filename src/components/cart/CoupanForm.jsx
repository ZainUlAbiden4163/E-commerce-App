import React, { useState } from "react";
import Button from "../ui/Button";

function CouponForm({ onApply, loading = false }) {
  const [coupon, setCoupon] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const code = coupon.trim();

    if (!code) return;

    onApply?.(code);
    setCoupon("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex gap-3">
      <input
        type="text"
        placeholder="Enter coupon code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="h-12 flex-1 rounded-xl border border-gray-300 px-4 outline-none transition focus:border-black"
      />

      <Button
        type="submit"
        variant="accent"
        disabled={loading}
        className="rounded-xl px-6"
      >
        {loading ? "Applying..." : "Apply"}
      </Button>
    </form>
  );
}

export default CouponForm;

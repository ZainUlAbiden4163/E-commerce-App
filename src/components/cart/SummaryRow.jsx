import React from "react";

function SummaryRow({ label, value, bold = false, className = "" }) {
  return (
    <div
      className={`flex items-center justify-between ${
        bold ? "text-lg font-semibold text-gray-900" : "text-sm text-gray-500"
      } ${className}`}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export default SummaryRow;

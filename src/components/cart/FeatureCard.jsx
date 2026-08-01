import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
        {icon}
      </div>

      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>

        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;

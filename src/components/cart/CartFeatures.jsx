import React from "react";
import { Truck, ShieldCheck, RotateCcw } from "lucide-react";
import FeatureCard from "./FeatureCard";

function CartFeatures() {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 p-5 md:grid-cols-3">
      <FeatureCard
        icon={<Truck size={22} />}
        title="Free Shipping"
        description="On orders over $50"
      />

      <FeatureCard
        icon={<ShieldCheck size={22} />}
        title="Secure Payment"
        description="100% protected checkout"
      />

      <FeatureCard
        icon={<RotateCcw size={22} />}
        title="Easy Returns"
        description="30-day return policy"
      />
    </div>
  );
}

export default CartFeatures;

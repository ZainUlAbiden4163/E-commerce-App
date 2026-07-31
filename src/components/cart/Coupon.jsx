import React from "react";
import Button from "../ui/Button";

function Coupon() {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="outline-0 border border-gray-300 rounded-md grow text-xl"
      />
      <Button
        variant="accent"
        className=" border border-gray-500 px-4 rounded-md "
      >
        Apply
      </Button>
    </div>
  );
}

export default Coupon;

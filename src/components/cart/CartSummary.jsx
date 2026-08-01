import React from "react";
// import Coupon from "./Coupon";
import CouponForm from "./CoupanForm";

function CartSummary() {
  return (
    <div className="border border-gray-300 rounded-2xl flex flex-col gap-5 px-4 py-5">
      <h1 className="text-2xl font-medium tracking-wide ">Order Summary</h1>
      <div>
        <div className="border border-gray-200 rounded-2xl gap-4 flex flex-col text-light text-gray-400">
          <div className="flex justify-between items-center px-5 ">
            <p>Subtotal (4 items ) </p>
            <p>$88.47</p>
          </div>
          <div className="flex justify-between items-center px-5">
            <p>Subtotal (4 items ) </p>
            <p>$88.47</p>
          </div>
          <div className="flex justify-between items-center px-5">
            <p>Subtotal (4 items ) </p>
            <p>$88.47</p>
          </div>
          <div className="flex justify-between items-center px-5">
            <p>Subtotal (4 items ) </p>
            <p>$88.47</p>
          </div>
        </div>
        <br />
        <div className="px-4 justify-between flex">
          <h1 className="font-bold tracking-wide text-2xl">Total</h1>
          <h1 className="font-bold tracking-wide text-2xl">$90.00</h1>
        </div>
        <CouponForm />
      </div>
    </div>
  );
}

export default CartSummary;

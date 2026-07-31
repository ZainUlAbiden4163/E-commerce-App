import React, { useState } from "react";

function CartItem() {
  const [count, setCount] = useState(1);
  function handleIncrease() {
    setCount((prev) => prev + 1);
  }
  function handleDecrease() {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  }
  return (
    <div className="flex px-5 py-2 border border-gray-100 items-center justify-evenly">
      <div className="flex items-center gap-2   px-2">
        <h1 className="bg-gray-300 rounded-xl w-20 h-20 flex items-center justify-center">
          IMG
        </h1>
        <div className="px-1 py-3">
          <h2 className="text-xl font-normal tracking-wide">
            Green Tea Face Wash
          </h2>
          <p className="font-light text-gray-400">Brand: Nature Republic</p>
          <p className="font-light text-gray-400">Beauty</p>
        </div>
      </div>
      <div className="  px-2">
        <h2 className="text-xl font-normal tracking-wide">$12.99</h2>
        <p className="font-light text-gray-300">
          {" "}
          <span className="line-through">$16.99</span>{" "}
          <span className="bg-red-200 text-red-800 px-2 py-1 rounded-md">
            -24%
          </span>
        </p>
      </div>
      <div className="flex items-center gap-5">
        <div className="">
          <div className="border-2 border-gray-300 rounded-md text-xl flex px-3 py-1 gap-2">
            <button
              onClick={handleDecrease}
              type="button"
              className="cursor-pointer"
            >
              -
            </button>
            <p className="px-1">{count}</p>
            <button
              onClick={handleIncrease}
              type="button"
              className="cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
        <div className="">
          <div className="border-2 border-gray-300 rounded-md text-xl  px-2 py-2 items-center justify-center flex ">
            <h1>DLT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

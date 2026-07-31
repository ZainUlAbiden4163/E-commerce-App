import React from "react";
import CartItem from "./CartItem";

function CartList() {
  return (
    <div className="flex flex-col gap-4">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

export default CartList;

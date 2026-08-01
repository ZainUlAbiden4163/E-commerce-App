import React from "react";
import CartItem from "./CartItem";

function CartList({ items = [], onIncrease, onDecrease, onRemove }) {
  if (items.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={() => onIncrease(item.id)}
          onDecrease={() => onDecrease(item.id)}
          onRemove={() => onRemove(item.id)}
        />
      ))}
    </div>
  );
}

export default CartList;

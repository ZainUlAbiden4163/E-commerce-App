import React from "react";
import Breadcrumb from "../components/product/product-details/Breadcrumb";
import PageTitle from "../components/ui/PageTitle";
import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/ui/Button";

function Cart() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/products" },
          { label: "Cart", to: "/cart" },
        ]}
      />
      <main className="flex flex-col gap-15">
        <PageTitle
          title={"Shopping Cart"}
          subHeading={"4 items in your cart"}
        />
        <div className="grid lg:grid-cols-[60%_40%] grid-cols-1 gap-5 items-center">
          <div className=" flex flex-col gap-5 border px-4 py-2 border-gray-300 rounded-2xl">
            <h1 className="font-medium text-2xl underline text-gray-700">
              Cart List
            </h1>
            <CartList />
          </div>
          <div className="flex flex-col">
            <CartSummary />
            <div className="border border-gray-200 flex p-3 gap-2 items-center justify-center rounded-2xl">
              <div className="flex items-center gap-2 ">
                <div className="border-2 px-2 py-2">ICON</div>
                <div>
                  <h3 className="font-medium">Free Shipping</h3>
                  <p className="text-[0.8rem] font-light">On Order over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="border-2 px-2 py-2">ICON</div>
                <div>
                  <h3 className="font-medium">Free Shipping</h3>
                  <p className="text-[0.8rem] font-light">On Order over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="border-2 px-2 py-2">ICON</div>
                <div>
                  <h3 className="font-medium">Free Shipping</h3>
                  <p className="text-[0.8rem] font-light">On Order over $50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border border-gray-300 flex justify-center items-center p-5 rounded-2xl gap-8">
          <div className="rounded-full flex items-center justify-center w-30 h-30 border bg-gray-300">
            CART
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium tracking-wide">
              Your cart is empty
            </h2>
            <p className="text-[0.8rem] text-gray-500 font-light ">
              Looks like you haven't added anything to your cart yet
            </p>
            <Button className="rounded-xl cursor-pointer">Shop Now</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;

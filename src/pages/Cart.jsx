import Breadcrumb from "../components/product/product-details/Breadcrumb";
import PageTitle from "../components/ui/PageTitle";

import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import CartFeatures from "../components/cart/CartFeatures";
import EmptyCart from "../components/cart/EmptyCart";

function Cart() {
  const hasItems = true; // later this will come from Redux

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/products" },
          { label: "Cart", to: "/cart" },
        ]}
      />

      <main className="flex flex-col gap-12">
        <PageTitle title="Shopping Cart" subHeading="4 items in your cart" />

        {hasItems ? (
          <>
            <div className="grid gap-6 lg:grid-cols-[60%_40%]">
              <div className="rounded-2xl border border-gray-200 p-5">
                <CartList />
              </div>

              <div className="flex flex-col gap-6">
                <CartSummary />
                <CartFeatures />
              </div>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </main>
    </div>
  );
}

export default Cart;

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    await axios.post("https://mproj-65wc.onrender.com/api/orders", {
      userId: "demoUser",
      items: cart,
      totalPrice: total
    });
    alert("Order placed!");
  };

  return (
    <main className="min-h-screen bg-transparent">
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-8 sm:px-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Shopping Cart</h1>
          <p className="mt-1 text-sm text-slate-500">Review items, update quantity, and place your order.</p>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-indigo-300 bg-white/85 p-10 text-center shadow-sm backdrop-blur">
            <p className="text-lg font-semibold text-slate-700">Your cart is empty</p>
            <p className="mt-2 text-sm text-slate-500">Go to the products page and add items to continue.</p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {cart.map((item) => (
                <article
                  key={item._id}
                  className="flex flex-col gap-4 rounded-2xl border border-indigo-100 bg-white/90 p-4 shadow-sm ring-1 ring-white/80 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <img src={item.image} alt={item.name} className="h-14 w-14 rounded-lg object-cover" />
                    )}
                    <div>
                      <h2 className="text-base font-semibold text-slate-900">{item.name}</h2>
                      <p className="mt-1 text-sm font-medium text-slate-600">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQty(item._id, item.quantity - 1)}
                      className="rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100"
                    >
                      -
                    </button>
                    <span className="min-w-8 text-center text-sm font-semibold text-slate-800">{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item._id, item.quantity + 1)}
                      className="rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="self-start rounded-md bg-rose-50 px-2 py-1 text-sm font-semibold text-rose-600 transition hover:bg-rose-100 sm:self-auto"
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-2xl border border-indigo-100 bg-gradient-to-b from-white to-indigo-50/60 p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Order Summary</h3>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Items</span>
                  <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery</span>
                  <span className="font-medium text-emerald-600">Free</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Discount</span>
                  <span className="font-medium text-indigo-600">- ₹0</span>
                </div>
              </div>
              <div className="my-4 border-t border-slate-200" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600">Total</span>
                <span className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-xl font-extrabold text-transparent">
                  ₹{total}
                </span>
              </div>
              <p className="mt-3 rounded-lg bg-indigo-100/70 px-3 py-2 text-xs font-medium text-indigo-700">
                Secure checkout and free shipping included.
              </p>
              <button
                onClick={placeOrder}
                className="mt-5 w-full rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:from-fuchsia-600 hover:to-indigo-700"
              >
                Place Order
              </button>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
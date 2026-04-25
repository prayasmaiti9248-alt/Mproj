import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("https://mproj-65wc.onrender.com/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <main className="min-h-screen bg-transparent">
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-8 sm:px-6">
        <div className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-fuchsia-900 p-7 text-white shadow-2xl sm:p-10">
          <div className="absolute -left-10 -top-14 h-52 w-52 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute -right-16 top-4 h-56 w-56 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-indigo-400/30 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">New Season Collection</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              Discover Products You'll Love, Delivered Fast
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
              Explore curated essentials, add to cart in seconds, and enjoy a smooth checkout experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
              <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-cyan-100">Fast Delivery</span>
              <span className="rounded-full border border-fuchsia-300/40 bg-fuchsia-400/10 px-3 py-1 text-fuchsia-100">Premium Picks</span>
              <span className="rounded-full border border-indigo-300/40 bg-indigo-400/10 px-3 py-1 text-indigo-100">Secure Checkout</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                Shop Now
              </button>
              <button className="rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
                View Deals
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900">Product Catalog</h2>
            <p className="mt-1 text-sm text-slate-500">Pick items and add them directly to your cart</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200">Trending</span>
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200">Best Sellers</span>
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200">New Arrivals</span>
            <p className="rounded-md bg-white/80 px-3 py-1.5 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-100">
              {products.length} products
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <article
              key={p._id}
              className="group overflow-hidden rounded-2xl border border-indigo-100/70 bg-white/90 shadow-sm ring-1 ring-white/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-md bg-gradient-to-r from-emerald-400 to-cyan-400 px-2 py-1 text-xs font-semibold text-slate-900 shadow">
                  In Stock
                </span>
              </div>

              <div className="space-y-3 p-4">
                <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-lg font-extrabold text-transparent">
                    ₹{p.price}
                  </p>
                  <span className="text-xs font-semibold text-emerald-600">Free delivery</span>
                </div>

                <button
                  onClick={() => addToCart(p)}
                  className="w-full rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-600 py-2.5 text-sm font-semibold text-white transition hover:from-fuchsia-600 hover:to-indigo-700"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-20 border-b border-white/20 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3 text-lg font-bold text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 text-sm text-white shadow-lg shadow-indigo-600/30">
            SN
          </span>
          <div className="leading-tight">
            <p>ShopNest</p>
            <p className="text-[10px] font-medium uppercase tracking-widest text-slate-300">Smart Storefront</p>
          </div>
        </Link>

        <div className="hidden flex-1 md:block">
          <div className="mx-auto max-w-sm">
            <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-slate-200">
              Search products...
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 rounded-lg border border-fuchsia-300/40 bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 px-3 py-1.5 text-sm font-semibold text-fuchsia-100 transition hover:from-fuchsia-500/30 hover:to-indigo-500/30"
          >
            <span>Cart</span>
            <span className="inline-flex min-w-6 items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-1.5 py-0.5 text-xs font-bold text-white shadow-sm">
              {totalItems}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
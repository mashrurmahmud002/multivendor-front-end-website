
import { useState } from "react";
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
} from "lucide-react";

const initialCart = [
  {
    id: 1,
    name: "Minimal Leather Bag",
    vendor: "Atelier Nord",
    price: 89.0,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200",
    color: "Black",
  },
  {
    id: 2,
    name: "Everyday Sneakers",
    vendor: "Peak Supply Co.",
    price: 65.0,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
    color: "Red",
  },
];

export default function CartDropdown({open, setOpen}) {

  const [cartItems, setCartItems] = useState(initialCart);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const updateQuantity = (id, amount) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + amount,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="relative">
      {/* Cart Button */}
     

      {/* Dropdown */}
      {open && (
        <>
          {/* Mobile overlay */}
          <button
            className="fixed inset-0 z-40 cursor-default bg-black/30 sm:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
          />

          <div className="fixed inset-x-3 top-20 z-50 max-h-[80vh] overflow-y-auto border border-gray-200 bg-white shadow-xl sm:absolute sm:left-auto sm:right-0 sm:top-10 sm:w-[410px] sm:max-h-[75vh]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <div>
                <h2 className="text-sm font-bold tracking-wide">
                  YOUR CART
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  {cartCount} {cartCount === 1 ? "item" : "items"}
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="p-1 text-gray-600 hover:text-black"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Products */}
            <div className="px-5">
              {cartItems.length === 0 ? (
                <div className="py-12 text-center">
                  <ShoppingCart
                    size={32}
                    className="mx-auto mb-4 text-gray-400"
                  />
                  <p className="text-sm font-semibold">
                    Your cart is empty
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    Discover something you love.
                  </p>

                  <button
                    onClick={() => setOpen(false)}
                    className="mt-5 bg-black px-6 py-3 text-xs font-semibold tracking-wider text-white hover:bg-red-600"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b border-gray-100 py-5"
                  >
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-20 shrink-0 bg-gray-100 object-cover"
                    />

                    {/* Product Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-gray-500">
                            {item.vendor}
                          </p>

                          <h3 className="mt-1 text-sm font-semibold text-black">
                            {item.name}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            Color: {item.color}
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-600"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-200">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, -1)
                            }
                            className="p-2 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>

                          <span className="min-w-7 text-center text-xs">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, 1)
                            }
                            className="p-2 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <p className="text-sm font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Subtotal and Checkout */}
            {cartItems.length > 0 && (
              <div className="bg-gray-50 px-5 py-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gray-600">
                    Subtotal
                  </span>

                  <span className="text-lg font-bold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <p className="mb-5 text-xs leading-5 text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>

                <button
                  onClick={() =>
                    alert("Connect this button to your checkout page.")
                  }
                  className="flex w-full items-center justify-center gap-2 bg-black px-5 py-4 text-xs font-bold tracking-[0.15em] text-white transition hover:bg-red-600"
                >
                  PROCEED TO CHECKOUT
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-4 w-full text-center text-xs font-semibold tracking-wider text-black underline underline-offset-4 hover:text-red-600"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}


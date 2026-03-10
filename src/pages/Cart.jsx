import { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const updateQuantity = (id, type) => {
    let updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        if (type === "increase") {
          return { ...item, quantity: item.quantity + 1 };
        }

        if (type === "decrease" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }

      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeProduct = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <div className="flex">
        <div className="p-6 flex-1">
          <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

          {cartItems.length === 0 && <p>Your cart is empty 🛒</p>}

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 mb-4 rounded bg-white shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    className="h-16 w-16 object-contain"
                    alt={item.title}
                  />

                  <div>
                    <p className="font-semibold text-sm md:text-base line-clamp-2">
                      {item.title}
                    </p>

                    <p className="text-blue-600 font-medium">${item.price}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, "decrease")}
                      className="bg-gray-300 px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span className="font-medium">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, "increase")}
                      className="bg-gray-300 px-3 py-1 rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="font-bold text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeProduct(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {cartItems.length > 0 && (
            <div className="mt-6 text-xl font-bold">
              Cart Total: ${cartTotal.toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;

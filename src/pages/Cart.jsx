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
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {cartItems.length === 0 && <p>Your cart is empty 🛒</p>}

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg bg-white shadow-sm p-4"
          >
            {/* Mobile-friendly card layout */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              {/* Product image & title */}
              <div className="flex gap-4 flex-1 min-w-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base line-clamp-2 break-words">
                    {item.title}
                  </p>
                  <p className="text-blue-600 font-medium mt-1">
                    ${item.price}
                  </p>
                </div>
              </div>

              {/* Quantity controls, subtotal, and remove button */}
              <div className="flex flex-wrap items-center gap-3 sm:justify-end sm:flex-nowrap">
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, "increase")}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>

                <p className="font-bold text-gray-700 min-w-[70px] text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() => removeProduct(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 text-xl font-bold border-t pt-4">
          Cart Total: ${cartTotal.toFixed(2)}
        </div>
      )}
    </div>
  );
}

export default Cart;

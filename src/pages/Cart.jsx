import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="p-6 flex-1">
          <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

          {cartItems.length === 0 && <p>Your cart is empty 🛒</p>}

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 mb-4 rounded"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} className="h-16" />

                <div>
                  <p className="font-semibold">{item.title}</p>

                  <p className="text-blue-600">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, "decrease")}
                  className="bg-gray-300 px-2 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, "increase")}
                  className="bg-gray-300 px-2 rounded"
                >
                  +
                </button>
              </div>

              <div>
                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => removeProduct(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
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

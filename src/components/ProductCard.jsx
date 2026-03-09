function ProductCard({ product }) {
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      cart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart");
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col">
      {/* Product Image */}
      <div className="h-48 flex items-center justify-center p-4 bg-gray-50 rounded-t-xl">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs bg-gray-200 px-2 py-1 rounded w-fit mb-2">
          {product.category}
        </span>

        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-lg font-bold text-blue-600 mt-2">${product.price}</p>

        {/* Add to Cart */}
        <button
          onClick={addToCart}
          className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

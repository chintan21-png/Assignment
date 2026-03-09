import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="p-6 flex-1">
          <h2 className="text-2xl font-bold mb-6">Products</h2>

          {loading && (
            <div className="animate-pulse text-gray-500 text-lg">
              Loading products...
            </div>
          )}

          {error && <p className="text-red-500">{error}</p>}

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

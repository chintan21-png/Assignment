import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import useDebounce from "../hooks/useDebounce";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const debouncedSearch = useDebounce(search, 500);

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
  const filteredProducts = products.filter((product) => {
    const searchText = debouncedSearch.toLowerCase();

    const matchesSearch =
      product.title.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    const matchesCategory = category === "" || product.category === category;

    return matchesSearch && matchesCategory;
  });
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
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded mb-6"
          >
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

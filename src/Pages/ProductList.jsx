import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics", description: "A powerful laptop for work and gaming." },
  { id: 2, name: "Mobile", price: 800, category: "Electronics", description: "A smartphone with the latest features." },
  { id: 3, name: "Desktop", price: 1500, category: "Electronics", description: "A desktop PC for professional use." },
  { id: 4, name: "Shoes", price: 120, category: "Fashion", description: "Comfortable running shoes." },
  { id: 5, name: "Watch", price: 300, category: "Fashion", description: "Stylish wristwatch with modern design." },
  { id: 6, name: "T-Shirt", price: 25, category: "Fashion", description: "Cotton t-shirt with a cool print." },
  { id: 7, name: "Headphones", price: 150, category: "Electronics", description: "Noise-cancelling over-ear headphones." },
  { id: 8, name: "Backpack", price: 60, category: "Fashion", description: "Durable backpack for daily use." },
  { id: 9, name: "Camera", price: 900, category: "Electronics", description: "High-resolution camera for photography." },
  { id: 10, name: "Sunglasses", price: 80, category: "Fashion", description: "Stylish sunglasses for sunny days." },
];

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");
 
  
  let filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );


  if (category !== "All") {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (sort === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

 

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">🛍️ Product List</h2>

      
      <div className="flex flex-wrap gap-4 mb-6">


        <input
          type="text"
          placeholder="🔎 Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-64 focus:ring-2 focus:ring-blue-400"
        />

    
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">Sort by Price</option>
          <option value="low-high">⬇ Low → High</option>
          <option value="high-low">⬆ High → Low</option>
        </select>

      
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 : gap-6">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition relative"
            >
              <h3 className="text-xl font-semibold text-gray-700">{p.name}</h3>
              <p className="text-gray-600">${p.price}</p>
              <p className="text-sm text-gray-500">{p.category}</p>
              <p className="mt-2 text-gray-700">{p.description}</p>

              <div className="flex gap-2 mt-4">
                <Link
                  to={`/products/product/${p.id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  View Details
                </Link>
               
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 font-semibold">❌ No products found.</p>
        )}
      </div>
    </div>
  );
}



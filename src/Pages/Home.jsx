import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // 🌄 Slider images
  const images = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80",
  ];

  const [current, setCurrent] = useState(0);

  // ⏱ Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ===== HERO SLIDER ===== */}
      <section className="relative h-[80vh] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

        {/* Text content on top */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Welcome to{" "}
            <span className="text-yellow-400">Ali Digital Frontier Store</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Explore top-quality gadgets & accessories at unbeatable prices.
          </p>
          <div className="space-x-4">
            <Link
              to="/products"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition"
            >
              Shop Now
            </Link>
            <Link
              to="/categories"
              className="inline-block border-2 border-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Explore Categories
            </Link>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-yellow-400" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ===== Featured Categories ===== */}
      <section className="py-16 px-5 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {["Laptops", "Mobiles", "Accessories", "Smart Watches", "Gaming"].map(
            (cat) => (
              <Link
                key={cat}
                to={`/category/${cat.toLowerCase()}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center p-6"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition"></div>
                <h3 className="font-semibold text-lg group-hover:text-blue-600">
                  {cat}
                </h3>
              </Link>
            )
          )}
        </div>
      </section>

      {/* ===== Trending Products ===== */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trending Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
              <div
                key={id}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition transform hover:-translate-y-1"
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=Product+${id}`}
                  alt={`Product ${id}`}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">Product {id}</h3>
                  <p className="text-blue-600 font-bold mb-3">
                    ${" "}
                    {(id * 999).toLocaleString()}
                  </p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 shadow-lg transition"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Promotional Banner ===== */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 py-14 px-5 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <h2 className="text-4xl font-extrabold mb-3 text-gray-900 relative z-10">
          Mega Sale - Up to 50% OFF!
        </h2>
        <p className="text-lg mb-6 relative z-10 text-gray-800">
          Hurry up! Limited time offer on your favorite gadgets.
        </p>
        <Link
          to="/products"
          className="inline-block bg-gray-900 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition relative z-10"
        >
          Grab the Deals
        </Link>
      </section>

      {/* ===== Brand / Trust Section ===== */}
      <section className="py-16 px-5 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Trusted by Top Brands</h2>
        <div className="flex flex-wrap justify-center gap-6 opacity-80">
          {[1, 2, 3, 4, 5, 6].map((b) => (
            <img
              key={b}
              src={`https://via.placeholder.com/120x60?text=Brand+${b}`}
              alt={`Brand ${b}`}
              className="grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* ===== Newsletter CTA ===== */}
      <section className="bg-blue-600 text-white text-center py-16 px-5">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with Our Offers
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Sign up for our newsletter and get exclusive deals & discounts.
        </p>
        <form className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full text-gray-800 outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3 text-white">
              Ali Digital Frontier
            </h3>
            <p>Your trusted destination for top tech products & IT excellence.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-yellow-400">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-yellow-400">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-white">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <Link to="#" className="hover:text-yellow-400">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="#" className="hover:text-yellow-400">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="hover:text-yellow-400">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Ali Digital Frontier. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;

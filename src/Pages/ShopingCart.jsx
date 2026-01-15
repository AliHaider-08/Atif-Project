import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addtoCart,
  RemoveCart,
  clearCart,
  increaseQuntity,
  decreaseQuntity,
} from "../redux/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 1200 , image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
 },
  { id: 2, name: "Headphones", price: 200  , image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
},
  { id: 3, name: "Phone", price: 800 , image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
},
  { id: 4, name: "Monitor", price: 300 , image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
 },
  { id: 5, name: "Keyboard", price: 100 },
  { id: 6, name: "Mouse", price: 50 },
  { id: 7, name: "Speaker", price: 150 },
  { id: 8, name: "Webcam", price: 80 },
  { id: 9, name: "Charger", price: 40 },
  { id: 10, name: "USB Drive", price:25},
];

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-10 font-sans bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-blue-400 p-5 shadow-lg ">🛒 Shopping Cart</h1>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 ">
      {/* <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Featured Products
      </h2> */}
     
        {products.map((product) => (
          <div
            key={product.id}
          className="bg-white border rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1" 
          >

            <img src={product.image} alt={product.name} className="w-full h-52 object-cover rounded-t-2xl"/>
            <h3 className="text-xl font-bold text-gray-800 mb-2 relative left-5">{product.name}</h3>
            <p className="text-lg text-gray-600 mb-4 relative left-5"> ${product.price}</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full"
              onClick={() => dispatch(addtoCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p cltext-gray-500 italic text-center>No items in cart</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
               className="flex items-center justify-between bg-gray-50 border rounded-xl p-4 mb-3 shadow-sm"
              >
                <span>
                  {item.name} - ${item.price} x {item.quantity}
                </span>
                <div>
                  <button onClick={() => dispatch(increaseQuntity(item.id))}>
                    ➕
                  </button>
                  <button onClick={() => dispatch(decreaseQuntity(item.id))}>
                    ➖
                  </button>
                  <button onClick={() => dispatch(RemoveCart(item.id))}>
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ${total}</h3>
          <button
            style={{
              padding: "10px 15px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

"use client";

import React, { useEffect, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category?: string;
  calories?: string;
  prepTime?: string;
}

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-10">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full table-auto border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Calories</th>
              <th className="px-4 py-2">Prep Time</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded"/>
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">${item.price}</td>
                <td className="px-4 py-2">{item.category || "-"}</td>
                <td className="px-4 py-2">{item.calories || "-"}</td>
                <td className="px-4 py-2">{item.prepTime || "-"}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-md flex flex-col gap-2">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded"/>
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-red-600 font-semibold">${item.price}</p>
            <div className="flex justify-between mt-2">
              <span>Category: {item.category || "-"}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;

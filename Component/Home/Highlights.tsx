import React from "react";
import Link from "next/link";
import products from "../../public/data/products.json";

const Highlights = () => {
  // Take the first 3 products as highlights
  const highlightProducts = products.slice(0, 3);

  return (
    <section className="px-6 py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Top Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {highlightProducts.map((food) => (
          <div
            key={food.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{food.name}</h3>
              <p className="text-red-600 font-bold mt-1">${food.price}</p>
              <div className="mt-4">
                <Link
                  href={`/food/${food.id}`} // Link to dynamic food details page
                  className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;

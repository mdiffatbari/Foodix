import React from "react";
import products from "../../public/data/products.json";
import Link from "next/link";

const FoodsPage = () => {
  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Delicious Foods</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((food) => (
          <div
            key={food.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-semibold">{food.name}</h2>
              <h2 className="">{food.description}</h2>
              <p className="text-red-600 font-bold mt-1">${food.price}</p>

              <div className="mt-4">
                {/* 👇 Link to /food/[id] */}
                <Link
                  href={`/food/${food.id}`}
                  className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FoodsPage;

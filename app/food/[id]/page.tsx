import React from "react";
import products from "../../../public/data/products.json"; // ✅ better to keep in /data, not /public
import Image from "next/image";

interface FoodProps {
  params: Promise<{ id: string }>; // 👈 params is async
}

const FoodDetails = async ({ params }: FoodProps) => {
  const { id } = await params; // 👈 await params
  const foodId = parseInt(id);
  const food = products.find((item) => item.id === foodId);

  if (!food) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        ❌ Food not found
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="px-6 py-10 flex flex-col lg:flex-row items-center gap-8">
      {/* Food Image */}
      <div className="w-full lg:w-1/2">
        <img
        src={food.image}
        alt={food.name}
        className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Food Details */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{food.name}</h1>
        <p className="text-gray-600 text-lg mb-4">{food.description}</p>
        <p className="text-gray-600 text-lg mb-4 font-semibold">Category: {food.category}</p>
        <p className="text-gray-600 text-lg mb-4 font-semibold">Calories: {food.calories}</p>
        <p className="text-lg mb-4 text-red-600">prepTime: {food.prepTime}</p>
        <p className="text-2xl font-semibold text-red-600 mb-6">
          ${food.price}
        </p>
        <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition">
          Order Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default FoodDetails;

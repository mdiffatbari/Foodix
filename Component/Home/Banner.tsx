"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import hero_image from "../../public/Images/hero.png";

const Banner: React.FC = () => {
  const router = useRouter();

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Fast, Fresh & <span className="text-red-600">Right To Your Door</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Order dishes from your favorite restaurants near you.
          </p>
          <button
            onClick={() => router.push("/foods")}
            className="mt-4 inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-white text-base font-medium shadow-md hover:bg-red-700 transition cursor-pointer"
          >
            Explore Foods
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <Image
            src={hero_image}
            alt="Delicious food delivery"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

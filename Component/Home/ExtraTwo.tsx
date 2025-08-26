import React from "react";

const ExtraTwo = () => {
  return (
    <section className="space-y-16 px-6 py-10 md:py-20">

      {/* Section 1: Why Choose Us */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mb-6">
            We deliver fresh, delicious meals straight from your favorite
            restaurants. Our chefs use only the finest ingredients to ensure
            every bite is perfect. Fast delivery, friendly service, and quality
            you can trust.
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-600">
            <li>Fresh ingredients, every day</li>
            <li>Quick delivery to your doorstep</li>
            <li>Variety of cuisines to choose from</li>
            <li>Trusted by thousands of happy customers</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/pvGqrMjd/pexels-ash-craig-122861-376464.jpg"
            alt="Why choose us"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Section 2: Our Special Offers */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/Xrj7m0pM/pexels-jess-vide-5507640.jpg"
            alt="Special offers"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Special Offers
          </h2>
          <p className="text-gray-600 mb-6">
            Enjoy exclusive discounts and seasonal offers from your favorite
            restaurants. Sign up for our newsletter and get the best deals
            delivered straight to your inbox.
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-600">
            <li>Weekly meal deals</li>
            <li>Discounts on selected restaurants</li>
            <li>Special festive menus</li>
            <li>Free delivery on first order</li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default ExtraTwo;

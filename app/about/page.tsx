import React from "react";

const AboutPage = () => {
  return (
    <section className="px-6 py-10 md:py-20 space-y-16 max-w-7xl mx-auto">

      {/* Section 1: Our Story */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/pvGqrMjd/pexels-ash-craig-122861-376464.jpg"
            alt="Our Story"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Our Story</h1>
          <p className="text-gray-600 mb-4">
            Founded with a passion for great food, our restaurant brings
            together the finest ingredients, skilled chefs, and a love for
            culinary excellence. We aim to provide an unforgettable dining
            experience for every customer.
          </p>
          <p className="text-gray-600">
            Over the years, we have grown into a community-loved restaurant
            that values quality, freshness, and the joy of sharing a good meal.
          </p>
        </div>
      </div>

      {/* Section 2: Our Mission & Vision */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/Xrj7m0pM/pexels-jess-vide-5507640.jpg"
            alt="Mission & Vision"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Our Mission & Vision
          </h1>
          <p className="text-gray-600 mb-4">
            Our mission is to bring delicious, high-quality meals to every
            table. We believe that food is not just nourishment but an
            experience that brings people together.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Deliver fresh and healthy meals consistently.</li>
            <li>Create memorable dining experiences.</li>
            <li>Promote sustainability in our sourcing and operations.</li>
            <li>Innovate with flavors and presentation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

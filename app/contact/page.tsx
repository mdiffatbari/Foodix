import React from "react";

const ContactPage = () => {
  return (
    <div className="py-20 w-11/12 mx-auto">
        <section className="px-6 py-10 md:py-20 max-w-7xl mx-auto space-y-16">

      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Have questions or want to make a reservation? Reach out to us using the form below or through our contact information.
        </p>
      </div>

     
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Contact Form */}
        <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-600">📍 123 Main Street, Joypurhat</p>
          <p className="text-gray-600">📞 +880 123 456 789</p>
          <p className="text-gray-600">✉️ foodix@gmail.com</p>
          <p className="text-gray-600">⏰ Mon-Sun: 10:00 AM - 10:00 PM</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactPage;

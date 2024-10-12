import React from 'react'
import Title from '../components/Title';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Title Component */}
        <div className="text-center text-3xl font-semibold mb-12">
          <Title text1="CONTACT" text2="US" />
          <p className="text-gray-600 mt-4">
            We'd love to hear from you! Whether you have a question about products, shipping, or anything else, our team is ready to answer all your inquiries.
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-4">
              Have a question or need assistance? Reach out to us via the following contact details:
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Email:</strong> support@clothingstore.com
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Address:</strong> 123 Fashion Avenue, New York, NY
            </p>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


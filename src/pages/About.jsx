import React from 'react'
import LatestCollection from '../components/LatestCollection'
import ProductItem from '../components/ProductItem'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';

const About = () => {
  return (<div>
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Image on the left */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src={assets.about_img} // Replace this with your image link
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Text on the right */}
        <div className="lg:w-1/2 w-full lg:pl-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Our Store</h2>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to our e-commerce store! We offer a wide range of high-quality products that
            meet your needs. Our mission is to provide exceptional service, fast delivery, and
            a seamless shopping experience.
          </p>
          <p className="text-lg text-gray-600">
            Browse our collections and discover top brands, latest trends, and the best deals. 
            Thank you for choosing us as your trusted online shopping destination.
          </p>
        </div>
      </div>
    </section>

<section className="bg-gray-100 py-12">
<div className="container mx-auto">
  {/* Title Component */}
  <div className="text-center mb-8">
    <Title text1="Why Choose" text2="Us" />
  </div>

  {/* Why Choose Us Content */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Reason 1 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">High-Quality Clothing</h3>
      <p className="text-gray-600">
        We offer premium clothing for men, women, and kids, crafted from high-quality materials to ensure comfort, durability, and style.
      </p>
    </div>

    {/* Reason 2 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Affordable Prices</h3>
      <p className="text-gray-600">
        We believe fashion should be accessible to everyone. That’s why we provide the latest trends at prices that won’t break the bank.
      </p>
    </div>

    {/* Reason 3 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Exceptional Customer Service</h3>
      <p className="text-gray-600">
        Our team is here to help you every step of the way, from browsing to checkout, and beyond. Your satisfaction is our priority.
      </p>
    </div>
  </div>
</div>
</section>

</div>
  );
};

export default About;


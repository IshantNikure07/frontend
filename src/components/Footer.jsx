import React from 'react'
import Title from './Title';

const Footer = () => {
    return (
      <footer className=" text-gray-400 py-10 mt-64">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Store Info on the Left */}
          <div>
            <Title text1="About" text2="Store" />
            <p className="text-gray-500 mt-4">
              Forever is your destination for quality apparel for men, women, and kids. We aim to provide the latest fashion trends and comfortable clothing at affordable prices.
            </p>
          </div>
  
          {/* Links in the Middle */}
          <div className="text-center">
            <Title text1="Quick" text2="Links" />
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="/collection" className="hover:text-white">Shop</a>
              </li>
              <li>
                <a href="about" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="contact" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
  
          {/* Get in Touch on the Right */}
          <div>
            <Title text1="Get in" text2="Touch" />
            <p className="text-gray-500 mt-4">
              Email: support@clothingstore.com<br />
              Phone: +123 456 7890<br />
              Address: 123 Fashion Ave, NY
            </p>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="text-center mt-8 text-gray-500">
          &copy; 2024 ClothingStore. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-8 sm:px-8 sm:py-12">
      <div className="lg:flex lg:justify-between lg:items-start lg:gap-12">
        {/* Logo and Intro */}
        <div className="flex flex-col sm:items-start lg:w-1/3">
          <img
            src="/assets/logo.png"
            alt="Eteernal Beautyy Logo"
            className="mb-4 w-20 h-20 rounded-full object-cover"
          />
          <h1 className="text-xl font-semibold mb-2 sm:text-left">
            Rinky Vishwakarma
          </h1>
          <p className="text-sm sm:text-left">
            Eteernal Beautyy makeup studio is your one-stop destination for all
            your beauty needs. Our skilled artists specialize in creating
            stunning and long-lasting makeup looks for every occasion. From
            weddings to parties, we’ll help you look and feel your best.
          </p>
        </div>

        {/* Subscribe Section */}
        <div className="mt-8 sm:mt-12 lg:mt-0 lg:w-1/3">
          <h1 className="text-lg font-semibold mb-2 sm:text-left">
            Subscribe For Offers
          </h1>
          <form className="flex flex-col sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 rounded-md w-full sm:w-auto sm:mr-4 mb-4 sm:mb-0"
            />
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="mt-8 lg:mt-0 lg:w-1/3">
          <h1 className="text-lg font-semibold mb-4">Quick Links</h1>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section (Follow Us, Contact Info) */}
      <div className="mt-8 lg:mt-12 lg:flex lg:justify-between lg:items-start lg:gap-12">
        {/* Follow Us */}
        <div className="lg:w-1/3">
          <h1 className="text-lg font-semibold mb-2">Follow Us</h1>
          <div className="flex gap-4">
            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              F
            </span>
            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              I
            </span>
            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              T
            </span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 lg:mt-0 lg:w-1/3">
          <h1 className="text-lg font-semibold mb-2">Say Hi!</h1>
          <p className="text-sm">eteernalbeautyy@gmail.com</p>

          <h1 className="text-lg font-semibold mt-6 mb-2">Call Us</h1>
          <p className="text-sm">Phone: +91 7379230137</p>
        </div>

        {/* Address */}
        <div className="mt-8 lg:mt-0 lg:w-1/3">
          <h1 className="text-lg font-semibold mt-6 mb-2">Find Us</h1>
          <p className="text-sm">
            Shop No. 5 S.L Complex (V-BAZAAR) Bangla Bazaar opp. Indian Oil
            petrol pump Lucknow Uttar Pradesh
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        <p>Copyright © 2024 ETEERNAL BEAUTYY</p>
        <p>Powered by ETEERNAL BEAUTYY</p>
      </div>
    </footer>
  );
};

export default Footer;

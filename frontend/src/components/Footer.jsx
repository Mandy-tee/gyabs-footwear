import React from 'react';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-[#F5DEB3] py-12 flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-6 max-w-lg">
        
        {/* Brand Name */}
        <h3 className="text-2xl font-bold pb-4">Gyabs Footwear</h3>
        <p className="text-base pb-4">Happy Feet and More...</p>

        {/* Social Media Icons */}
        <div className="w-full flex justify-center gap-8 pb-4">
          {/* WhatsApp Icon */}
          <a 
            href="https://wa.me/233591453789" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-400 hover:text-green-500 transition duration-300 text-3xl"
          >
            <FaWhatsapp />
          </a>

          {/* TikTok Icon */}
          <a 
            href="https://www.tiktok.com/@gyabsfootwear" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#F5DEB3] hover:text-gray-400 transition duration-300 text-3xl"
          >
            <FaTiktok />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[#F5DEB3] text-sm">© 2025 Gyabs Footwear. All rights reserved.</p>
      
      </div>
    </footer>
  );
}

export default Footer;

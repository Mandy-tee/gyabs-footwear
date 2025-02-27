import React from 'react';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-[#F5DEB3] py-8">
      <div className="container mx-auto px-6 text-center">
        
        <h3 className="text-2xl font-bold mb-2">Gyabs Footwear</h3>
        <p className="text-base mb-4">Happy Feet and More...</p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-6">
          {/* WhatsApp Icon */}
          <a 
            href="https://wa.me/233591453789" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-400 hover:text-green-500 transition duration-300 text-2xl"
          >
            <FaWhatsapp />
          </a>

          {/* TikTok Icon */}
          <a 
            href="https://www.tiktok.com/@gyadsfootwear" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-400 transition duration-300 text-2xl"
          >
            <FaTiktok />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">© 2025 Gyabs Footwear. All rights reserved.</p>
      
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Gyabs Footwear</h3>
          <p className="mb-4">Happy Feet and More...</p>
          
          {/* WhatsApp Link */}
          <div className="flex justify-center space-x-4">
            <a 
              href="https://wa.me/233591453789" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-green-400 hover:text-green-500 transition-colors text-lg font-semibold"
            >
              <FaWhatsapp className="text-2xl" /> WhatsApp
            </a>
          </div>

          {/* Updated Copyright */}
          <p className="mt-8 text-gray-400">© 2025 Gyabs Footwear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

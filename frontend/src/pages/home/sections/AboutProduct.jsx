import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../assets/image1.JPG";
import image2 from "../../../assets/image2.JPG";
import image3 from "../../../assets/image3.JPG";

const AboutProduct = () => {
  return (
    <section id="products" className="py-16 bg-gray-900 text-[#F5DEB3] flex justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        
        <h2 className="text-6xl md:text-6xl font-bold mb-16 pb-20">
          Footwear
        </h2>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
          
          {/* Product 1 */}
          <div className="flex flex-col items-center text-center max-w-sm">
            <motion.img 
              src={image1} 
              alt="Eco-Friendly Materials" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-6 pt-4">
              Eco-Friendly Materials
            </h3>
            <p className="text-sm sm:text-base mt-3">
              Crafted from waste materials that would otherwise go to waste, each pair tells a story of sustainability.
            </p>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center pb-6 text-center max-w-sm">
            <motion.img 
              src={image2} 
              alt="Sustainable Design" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-6 pt-4">
              Sustainable Design
            </h3>
            <p className="text-sm sm:text-base mt-3">
              Thoughtfully designed for both comfort and durability, reducing our environmental footprint.
            </p>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center text-center max-w-sm">
            <motion.img 
              src={image3} 
              alt="Local Craftsmanship" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-6 pt-4">
              Local Craftsmanship
            </h3>
            <p className="text-sm sm:text-base mt-3">
              Each pair is handcrafted locally, supporting our community while delivering quality footwear for school children, PWDS, etc.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
